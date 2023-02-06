import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { LockedStoryService } from 'src/locked-story/locked-story.service';
import { StoryService } from 'src/story/story.service';

@WebSocketGateway(3030, { cors: 'http://localhost:4200' })
export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private storyService: StoryService,
    private lockedStoryService: LockedStoryService,
  ) {}

  @SubscribeMessage('receivedStory')
  handleEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody('storyId') storyId: number,
  ): void {
    console.log('received story', storyId, client.id);
    this.lockedStoryService.add({
      clientId: client.id,
      story: { id: storyId },
    });
  }

  handleConnection(client: Socket) {
    console.log('client connected ', client.id);
    client.emit('connected', client.id);
  }

  async handleDisconnect(client: Socket) {
    console.log('client disconnected ', client.id);
    const hasId = await this.lockedStoryService.has(client.id);

    if (hasId) {
      const lockedStory = await this.lockedStoryService.get(client.id);
      this.storyService.update(lockedStory.story.id, { isLocked: false });
      this.lockedStoryService.remove(client.id);
    }
  }
}

import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { APP_CONFIG } from 'src/config/app.config';
import { LockedStoryService } from 'src/locked-story/locked-story.service';
import { SentenceService } from 'src/sentence/sentence.service';
import { StoryService } from 'src/story/story.service';

@WebSocketGateway(APP_CONFIG.SOCKET_PORT, { cors: process.env.FRONTEND_URL })
export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private storyService: StoryService,
    private sentenceService: SentenceService,
    private lockedStoryService: LockedStoryService,
  ) {}

  @SubscribeMessage('receivedStory')
  async handleEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody('storyId') storyId: number,
  ): Promise<number> {
    this.lockedStoryService.add({
      clientId: client.id,
      story: { id: storyId },
    });
    return await this.sentenceService.countSentences(storyId);
  }

  handleConnection(client: Socket) {
    console.log('client connected ', client.id);
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

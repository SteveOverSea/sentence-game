import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private clientId: string = '';

  constructor(private socket: Socket) {
    socket.once('connected', (clientId: string) => (this.clientId = clientId));
  }

  public verifyReceivedStoryId(storyId: number): void {
    this.socket.emit('receivedStory', { storyId });
  }

  public getClientId(): string {
    return this.clientId;
  }
}

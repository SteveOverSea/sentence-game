import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private userId: string = '';

  constructor(private socket: Socket, private cookieService: CookieService) {
    socket.once('connected', () => {
      this.userId = cookieService.get('userId');
    });
  }

  public verifyReceivedStoryId(storyId: number): void {
    this.socket.emit('receivedStory', { storyId }, (count: any) =>
      console.log('count', count)
    );
  }

  public getUserId(): string {
    if (!this.userId || (this.userId && this.userId.length === 0)) {
      this.userId = this.cookieService.get('userId');
    }
    return this.userId;
  }
}

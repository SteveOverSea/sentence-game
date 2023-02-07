import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService implements OnInit {
  constructor(
    private socket: Socket,
    private cookieService: CookieService,
    private stateService: StateService
  ) {}
  public ngOnInit(): void {
    this.socket.once('connected', () => {
      const userId = this.cookieService.get('userId');
      this.stateService.userId$.next(userId);
    });
  }

  public verifyReceivedStoryId(storyId: number): void {
    this.socket.emit('receivedStory', { storyId }, (count: any) => {
      this.stateService.sentenceCount$.next(count);
      console.log('count', count);
    });
  }
}

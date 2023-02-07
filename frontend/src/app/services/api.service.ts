import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable, Subject, take } from 'rxjs';
import { Sentence } from '@backend/sentence.interface';
import { Story } from '@backend/story.interface';
import { SocketService } from './socket.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private socketService: SocketService,
    private stateService: StateService
  ) {}

  public async requestNextSentence(): Promise<void> {
    let nextStoryId: number = await lastValueFrom(
      this.http
        .get<Story>('http://localhost:3000/api/story/unlocked', {
          withCredentials: true,
        })
        .pipe(map((story) => story.id))
    );

    this.stateService.storyId$.next(nextStoryId);
    this.socketService.verifyReceivedStoryId(nextStoryId);

    this.http
      .get<Sentence>(
        'http://localhost:3000/api/sentence/last/' +
          nextStoryId +
          '/' +
          this.stateService.getUserId()
      )
      .pipe(take(1))
      .subscribe((sentence) => {
        this.stateService.sentence$.next(sentence);
      });
  }

  public addNewSentence(text: string): Observable<any> {
    const res = this.http.post('http://localhost:3000/api/sentence', {
      content: text,
      language: 'en',
      userId: this.stateService.getUserId(),
      authorMail: null,
      story: this.stateService.storyId$.getValue(),
    });
    return res;
  }
}

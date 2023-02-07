import { Injectable } from '@angular/core';
import { Sentence } from '@backend/sentence.interface';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public userId$: BehaviorSubject<string> = new BehaviorSubject('');
  public sentenceCount$: BehaviorSubject<number> = new BehaviorSubject(-1);
  public storyId$: BehaviorSubject<number | null> = new BehaviorSubject<
    number | null
  >(null);

  constructor(private cookieService: CookieService) {}

  public sentence$: BehaviorSubject<Sentence | null> =
    new BehaviorSubject<Sentence | null>(null);

  public hasUserId(): boolean {
    const currentValue: string = this.userId$.getValue();
    return currentValue.length !== 0;
  }

  public getUserId(): string {
    if (!this.hasUserId()) {
      const userId = this.cookieService.get('userId');
      this.userId$.next(userId);
    }
    return this.userId$.getValue();
  }
}

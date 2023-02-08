import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from '@backend/story.interface';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { StoryContainerType } from './story-container-type';

@Component({
  selector: 'story-container',
  templateUrl: 'story-container.component.html',
})
export class StoryContainerComponent {
  public type: StoryContainerType;
  public stories$: Observable<Story[]>;

  constructor(public router: Router, private apiService: ApiService) {
    this.type = router.url.endsWith('random-stories')
      ? StoryContainerType.random
      : StoryContainerType.popular;

    if (this.type === StoryContainerType.popular) {
      this.stories$ = this.apiService.getPopularStories();
    } else {
      this.stories$ = this.apiService.getRandomStories();
    }
  }
}

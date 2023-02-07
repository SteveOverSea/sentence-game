import { Component, OnInit } from '@angular/core';
import { Sentence } from '@backend/sentence.interface';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'sentence-view',
  templateUrl: './sentence-view.component.html',
})
export class SentenceViewComponent implements OnInit {
  public sentence: string = '';

  constructor(
    private apiService: ApiService,
    public stateService: StateService
  ) {}

  public ngOnInit(): void {
    this.stateService.sentence$.subscribe((sentence: Sentence | null) => {
      if (sentence !== null) {
        this.sentence = sentence.content;
      } else {
        this.sentence = 'Begin a new story!';
      }
    });
    this.apiService.requestNextSentence();
  }
}

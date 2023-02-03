import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'sentence-view',
    templateUrl: './sentence-view.component.html'
})
export class SentenceViewComponent implements OnInit {
    public sentence: string = "";

    constructor(private apiService: ApiService) {}

    public ngOnInit(): void {
        this.apiService.getNextSentence().then((sentence) => {
            if (sentence !== null) {            
                this.sentence = sentence.content
            } else {
                this.sentence = "Begin a new story!";
            } 
       });
    }
}
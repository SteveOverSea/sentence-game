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
        this.apiService.getAllSentences().subscribe(res => {
            this.sentence = res[0].content;
        });
    }
}
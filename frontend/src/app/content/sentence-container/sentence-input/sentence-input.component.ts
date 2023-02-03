import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'sentence-input',
    templateUrl: './sentence-input.component.html'
})
export class SentenceInputComponent {

    public sentenceControl: FormControl = new FormControl();

    constructor(private apiService: ApiService) {}

    public onSubmit(event: any): void {
        event.preventDefault();
        this.apiService.addNewSentence(this.sentenceControl.value)
        .subscribe((res) => {
            if (res) {   
                this.sentenceControl.setValue("");
                this.apiService.requestNextSentence();
            }
        });
    }
}
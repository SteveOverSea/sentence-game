import { NgModule } from "@angular/core";
import { SentenceContainerComponent } from "./sentence-container.component";
import { SentenceInputComponent } from "./sentence-input/sentence-input.component";
import { SentenceViewComponent } from "./sentence-view/sentence-view.component";

@NgModule({
    declarations: [
        SentenceContainerComponent, 
        SentenceViewComponent,
        SentenceInputComponent
    ]
})
export class SentenceContainerModule {}
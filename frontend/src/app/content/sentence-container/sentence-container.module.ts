import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SentenceContainerComponent } from "./sentence-container.component";
import { SentenceInputComponent } from "./sentence-input/sentence-input.component";
import { SentenceViewComponent } from "./sentence-view/sentence-view.component";

@NgModule({
    imports: [ReactiveFormsModule],
    declarations: [
        SentenceContainerComponent, 
        SentenceViewComponent,
        SentenceInputComponent
    ]
})
export class SentenceContainerModule {}
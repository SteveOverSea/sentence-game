import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'story-container',
    templateUrl: 'story-container.component.html'
})
export class StoryContainerComponent {
    constructor(public router: Router) {}
}
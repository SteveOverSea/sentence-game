import { Component, Inject } from "@angular/core";
import { InjectionToken } from "../injection-token";
import { NavBarItem } from "./nav-bar-item.interface";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
    constructor(
        @Inject(InjectionToken.NAV_BAR_ITEMS) 
        public navBarItems: NavBarItem[]
    ) {}
}
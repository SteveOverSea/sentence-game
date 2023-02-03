import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { InjectionToken } from "./injection-token";
import { LayoutComponent } from "./layout.component";
import { LAYOUT_CONFIG } from "./layout.config";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [LayoutComponent, NavBarComponent],
    imports: [RouterModule, BrowserModule],
    exports: [LayoutComponent],
    providers: [
        {
        provide: InjectionToken.NAV_BAR_ITEMS,
        useValue: LAYOUT_CONFIG.navBarItems,
        },
    ]
})
export class LayoutModule {}
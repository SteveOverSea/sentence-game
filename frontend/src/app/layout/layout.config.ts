import { NavBarItem } from "./nav-bar/nav-bar-item.interface";

type LayoutConfig = {
    navBarItems: NavBarItem[];
}

const navBarItems: NavBarItem[] = [
    { routerLink: '', label : 'HOME'},
    { routerLink: 'popular-stories', label : 'popular stories'},
    { routerLink: 'random-stories', label : 'random stories'},
];

const LAYOUT_CONFIG: LayoutConfig = { navBarItems };

export { LAYOUT_CONFIG };
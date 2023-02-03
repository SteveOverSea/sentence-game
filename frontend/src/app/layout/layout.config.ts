import { NavBarItem } from "./nav-bar/nav-bar-item.interface";

type LayoutConfig = {
    navBarItems: NavBarItem[];
}

const navBarItems: NavBarItem[] = [
    { routerLink: '', label : 'HOME'},
    { routerLink: 'test', label : 'NAV 2'},
    { routerLink: 'test', label : 'NAV 3'},
];

const LAYOUT_CONFIG: LayoutConfig = { navBarItems };

export { LAYOUT_CONFIG };
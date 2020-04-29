export interface NavItem {
    name: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    children?: NavItem[];
    selected?: boolean;
}
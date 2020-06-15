export interface NavMenuItem {
    name: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    children?: NavMenuItem[];
    selected?: boolean;
}
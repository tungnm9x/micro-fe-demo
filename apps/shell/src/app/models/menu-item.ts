export interface MenuItem
{
  label: string;
  url: string;
  icon?: string;
  iconActive?: string;
  subMenu?: {
    label: string;
    url: string;
  }[];
}

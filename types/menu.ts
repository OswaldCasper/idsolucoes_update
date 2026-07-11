export interface MenuItem {
  id: number;
  title: string;
  href?: string;
  newTab?: boolean;
  children?: MenuItem[];
}
export interface Dish {
  name: string;
  description: string;
  image?: string;
  variants?: string[];
}

export interface MenuSection {
  title: string;
  dishes: Dish[];
}

export type MenuCategoryId =
  | "mexicano"
  | "internacional"
  | "platillos"
  | "especial"
  | "desayunos"
  | "postres";

export type MenuIconKey =
  | "flag"
  | "earth"
  | "hand-platter"
  | "sparkles"
  | "sun"
  | "cake-slice";

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  iconKey: MenuIconKey;
  dishes?: Dish[];
  sections?: MenuSection[];
}

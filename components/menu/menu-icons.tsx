import {
  CakeSlice,
  Earth,
  Flag,
  HandPlatter,
  Sparkles,
  Sun,
  Sandwich,
} from "lucide-react";
import type { MenuIconKey } from "@/lib/constants/menu";

interface MenuCategoryIconProps {
  iconKey: MenuIconKey;
  className?: string;
  size?: number;
}

const iconMap = {
  earth: Earth,
  flag: Flag,
  "hand-platter": HandPlatter,
  sparkles: Sparkles,
  sun: Sun,
  "cake-slice": CakeSlice,
  sandwich: Sandwich,
} as const;

export function MenuCategoryIcon({
  iconKey,
  className,
  size = 20,
}: MenuCategoryIconProps) {
  const Icon = iconMap[iconKey];

  return <Icon className={className} size={size} />;
}

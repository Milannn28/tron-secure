import clsx from "clsx";
import { twMerge } from "tailwind-merge"; // ✅ Correct

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ClassValue = string | number | boolean | undefined | null | Record<string, boolean> | ClassValue[]

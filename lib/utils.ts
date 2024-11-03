import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatTime = (time: number) => {
  const hour = Math.floor(time/3600)
  const minutes = Math.floor((time%3600)/ 60);
  const seconds = time % 60;
  return `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

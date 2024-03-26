import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRelativeTime(dateString: string = "") {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
}
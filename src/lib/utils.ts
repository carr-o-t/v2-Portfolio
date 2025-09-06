import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const imagePaths = [
  { key: "moment1", name: "Moment 1", path: "/assets/moment-1.webp" },
  { key: "moment2", name: "Moment 2", path: "/assets/moment-2.webp" },
  { key: "moment3", name: "Moment 3", path: "/assets/moment-3.webp" },
  { key: "moment4", name: "Moment 4", path: "/assets/moment-4.webp" },
  { key: "moment5", name: "Moment 5", path: "/assets/moment-5.webp" },
  { key: "projectBox", name: "Moment 5", path: "/assets/project-box.webp" },
  { key: "logo", name: "Logo", path: "/assets/logo.webp" },
];

export { imagePaths };

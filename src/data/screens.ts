import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/screens/*.png', { eager: true });

export type ScreenName =
  | 'audit' | 'categories' | 'dashboard' | 'dashboard-dark' | 'expense' | 'expense-new' | 'feed'
  | 'invoices-in' | 'invoices-out' | 'leave-calendar' | 'matter' | 'matter-dark' | 'matters'
  | 'm-dashboard' | 'm-dashboard-dark' | 'm-expense' | 'm-expense-new' | 'm-matters' | 'parties' | 'staff';

export function screen(name: ScreenName): ImageMetadata {
  const file = files[`../assets/screens/${name}.png`];
  if (!file) throw new Error(`Missing screenshot ${name}`);
  return file.default;
}

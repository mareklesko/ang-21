import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDarkTheme = signal(false);

  init(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.applyDark(true);
    }
  }

  toggle(): void {
    this.applyDark(!this.isDarkTheme());
  }

  private applyDark(dark: boolean): void {
    this.isDarkTheme.set(dark);
    if (dark) {
      document.body.classList.add('dark-theme');
      document.body.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }
}

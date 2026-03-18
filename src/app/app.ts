import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  title = 'ang-21';
  isDarkTheme = signal(false);

  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.isDarkTheme.set(true);
      document.body.classList.add('dark-theme');
      document.body.style.colorScheme = 'dark';
    }
  }

  toggleTheme(): void {
    this.isDarkTheme.update(v => !v);
    if (this.isDarkTheme()) {
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

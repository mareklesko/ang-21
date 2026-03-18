import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  features = [
    { icon: 'speed', title: 'Fast', description: 'Built with performance in mind using the latest Angular optimizations.' },
    { icon: 'palette', title: 'Beautiful', description: 'Material Design components for a polished, consistent user experience.' },
    { icon: 'devices', title: 'Responsive', description: 'Fully responsive layout that works on all screen sizes and devices.' },
    { icon: 'dark_mode', title: 'Dark Mode', description: 'Built-in dark/light theme toggle with localStorage persistence.' },
  ];
}

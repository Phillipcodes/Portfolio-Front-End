import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-team-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-player.component.html',
  styleUrl: './team-player.component.scss',
})
export class TeamPlayerComponent {

  carousel = ['../../assets/img/carousel-1.png','../../assets/img/carousel-2.png','../../assets/img/carousel-3.png']
  currentCarousel = this.carousel[0]
  references = [
    {
      name: 'placeholder',
      proj: 'ell pollo',
      ref: 'nice mate lovely to work with even in hard crunch times a absolut monster',
    },
    {
      name: 'placeholder2',
      proj: 'ell pollo2',
      ref: 'nice mate lovely to work with even in hard crunch times a absolut monster2',
    },
    {
      name: 'placeholder3',
      proj: 'ell pollo3',
      ref: 'nice mate lovely to work with even in hard crunch times a absolut monster3',
    },
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // Beispiel für das Arbeiten mit festen Scroll-Werten
    if (scrollLeft > 200) {
      this.currentCarousel = this.carousel[1];
    } else if (scrollLeft > 400) {
      this.currentCarousel = this.carousel[2];
    } else {
      this.currentCarousel = this.carousel[0];
    }

    // Ausgabe zum Debuggen
    console.log(`Scroll position: ${scrollLeft}px`);
  }



}



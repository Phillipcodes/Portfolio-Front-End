import { CommonModule } from '@angular/common';
import { Component,ElementRef, AfterViewInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-team-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-player.component.html',
  styleUrl: './team-player.component.scss',
})
export class TeamPlayerComponent implements AfterViewInit {
  @ViewChild('refContainer') refContainer!: ElementRef;
  carousel = ['./assets/img/carousel-1.png','./assets/img/carousel-2.png','./assets/img/carousel-3.png']
  currentCarousel = this.carousel[0]
  referencesTxt = [
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

  ngAfterViewInit() {
    
    const container = this.refContainer.nativeElement;
    container.addEventListener('scroll', this.onScroll.bind(this));
  }


  onScroll(event: Event): void {
    const container = this.refContainer.nativeElement;
    const scrollLeft = container.scrollLeft; 

    
    if (scrollLeft > 650) { 
      this.currentCarousel = this.carousel[2];
    } else if (scrollLeft > 300) {
      this.currentCarousel = this.carousel[1];
    } else {
      this.currentCarousel = this.carousel[0];
    }

    console.log(`Scroll position: ${scrollLeft}px`);
  }
}

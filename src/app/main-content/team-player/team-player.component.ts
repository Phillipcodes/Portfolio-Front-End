import { CommonModule } from '@angular/common';
import { Component,ElementRef, AfterViewInit, ViewChild, Input,inject } from '@angular/core';
import { TranslationImgService } from '../interfaces/translation-img-service';
import { ScrollService } from '../interfaces/scroll-service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-team-player',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './team-player.component.html',
  styleUrl: './team-player.component.scss',
})
export class TeamPlayerComponent implements AfterViewInit {
  public translationImgService = inject(TranslationImgService);
  @Input() isDesktop!:boolean
  @ViewChild('refContainer') refContainer!: ElementRef;
  carousel = ['./assets/img/carousel-1.png','./assets/img/carousel-2.png','./assets/img/carousel-3.png']
  currentCarousel = this.carousel[0]

constructor( private scrollService:ScrollService) {

}

scrollToPosition(position: number) {
  let width = window.innerWidth;

  let calcPosition = position + width - 100;

  setTimeout(() => {
    this.scrollService.setScrollPosition(calcPosition);
  }, 0);
}



  referencesTxt = [
    {
      name: 'Andre Veltens',
      proj: 'REFERENCES.colleagueDA',
      txt: 'REFERENCES.Andre'

    },
    {
      name: 'Ricardo Pinto',
      proj: 'REFERENCES.colleagueDA',
      txt: 'REFERENCES.Ricardo',
    },
    {
      name: 'Juliette Lindecke  ',
      proj: 'REFERENCES.colleague',
      txt: 'REFERENCES.Juliette',
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

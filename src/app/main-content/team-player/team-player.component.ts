import { CommonModule } from '@angular/common';
import { Component,ElementRef, AfterViewInit, ViewChild, Input,inject } from '@angular/core';
import { TranslationImgService } from '../interfaces/translation-img-service';
import { ScrollService } from '../interfaces/scroll-service';


@Component({
  selector: 'app-team-player',
  standalone: true,
  imports: [CommonModule],
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

scrollToPosition(position:number) {
   
   
    
  setTimeout(() => {
    this.scrollService.setScrollPosition(position);
  }, 0);

}



  referencesTxt = [
    {
      name: 'Andre Veltens',
      proj: 'Project Join',
      txt: 'Phillip proved to be a reliable and motivated partner during the project work. Thanks to our determined and efficient collaboration, we were able to achieve our project goals in a brief period of time.'

    },
    {
      name: 'placeholder2',
      proj: 'ell pollo2',
      txt: 'nice mate lovely to work with even in hard crunch times a absolut monster2',
    },
    {
      name: 'placeholder3',
      proj: 'ell pollo3',
      txt: 'nice mate lovely to work with even in hard crunch times a absolut monster3',
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

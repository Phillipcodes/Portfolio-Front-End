import { Component,inject } from '@angular/core';
import { IconService } from '../interfaces/icon-service';
import { CommonModule } from '@angular/common';
import { TranslationImgService } from '../interfaces/translation-img-service';
import { ScrollService } from '../interfaces/scroll-service';

@Component({
  selector: 'app-skills-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-desktop.component.html',
  styleUrl: './skills-desktop.component.scss'
})

export class SkillsDesktopComponent {
  public translationImgService = inject(TranslationImgService);
  icons:any[]=[]
  iconsStartFive:any[]=[]
  constructor(private iconService:IconService, private scrollService:ScrollService) {

  }
  ngOnInit(): void {
    this.icons = this.iconService.getJson() ;
  }

  scrollToPosition(position: number) {
    let width = window.innerWidth;

    let calcPosition = position + width - 100;

    setTimeout(() => {
      this.scrollService.setScrollPosition(calcPosition);
    }, 0);
  }
}



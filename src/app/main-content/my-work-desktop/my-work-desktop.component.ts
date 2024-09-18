import { Component, Input, inject } from '@angular/core';
import { WorkItem, WorkService } from './../interfaces/work-service';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';
import { ScrollService } from '../interfaces/scroll-service';
@Component({
  selector: 'app-my-work-desktop',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work-desktop.component.html',
  styleUrl: './my-work-desktop.component.scss',
})
export class MyWorkDesktopComponent {
  myWork: WorkItem[] = [];
  @Input() animationOne!: boolean;

  public translationImgService = inject(TranslationImgService);
  constructor(private workService: WorkService, private scrollService:ScrollService) {
    
  }

  getClass(index: number) {
    return this.animationOne ? `animate${index}` : 'animateBack';
  }

  ngOnInit(): void {
    this.myWork = this.workService.getJson();
  
  }

  scrollToPosition(position: number) {
    let width = window.innerWidth;

    let calcPosition = position + width - 100;

    setTimeout(() => {
      this.scrollService.setScrollPosition(calcPosition);
    }, 0);
  }
}

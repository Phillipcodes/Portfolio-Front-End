import { Component, Input, inject } from '@angular/core';
import { WorkItem, WorkService } from './../interfaces/work-service';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';
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
  public deImg!: string[];
  private translationImgService = inject(TranslationImgService);
  constructor(private workService: WorkService) {
    this.deImg = this.translationImgService.deImg
  }

  getClass(index: number) {
    return this.animationOne ? `animate${index}` : 'animateBack';
  }

  ngOnInit(): void {
    this.myWork = this.workService.getJson();
    console.log(this.myWork);
  }
}

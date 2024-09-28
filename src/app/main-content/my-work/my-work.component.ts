import { CommonModule } from '@angular/common';
import { Component,inject,Input } from '@angular/core';
import { WorkItem, WorkService } from './../interfaces/work-service';
import { TranslateService ,TranslateModule} from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  @Input() animationMobile!: boolean;
  isListOpen: boolean[] = [false, false];
  public translationImgService = inject(TranslationImgService);
  myWork: WorkItem[] = [];

  constructor(
    private workService: WorkService,

  ) {}

  toggleList(index: number) {
    this.isListOpen[index] = !this.isListOpen[index];
  }

  ngOnInit(): void {
    this.myWork = this.workService.getJson();
    
  }
  
  getClass(index: number) {
    return this.animationMobile ? `animate${index}` : 'animateBack';
  }

}

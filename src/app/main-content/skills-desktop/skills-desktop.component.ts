import { Component,inject } from '@angular/core';
import { IconService } from '../interfaces/icon-service';
import { CommonModule } from '@angular/common';
import { TranslationImgService } from '../interfaces/translation-img-service';

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
  constructor(private iconService:IconService) {

  }
  ngOnInit(): void {
    this.icons = this.iconService.getJson() ;
  }
}

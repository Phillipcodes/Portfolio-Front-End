<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component,inject,Input } from '@angular/core';
>>>>>>> Stashed changes
import { IconService } from '../interfaces/icon-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-desktop.component.html',
  styleUrl: './skills-desktop.component.scss'
})
export class SkillsDesktopComponent {
<<<<<<< Updated upstream
=======

  @Input() scrollToSection!: (x:number,y:number) => void
  public translationImgService = inject(TranslationImgService);
>>>>>>> Stashed changes
  icons:any[]=[]
  iconsStartFive:any[]=[]
  constructor(private iconService:IconService) {

  }
  ngOnInit(): void {
    this.icons = this.iconService.getJson() ;
  }
}

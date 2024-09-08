import { Component } from '@angular/core';
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
  icons:any[]=[]
  iconsStartFive:any[]=[]
  constructor(private iconService:IconService) {

  }
  ngOnInit(): void {
    this.icons = this.iconService.getJson() ;
  }
}

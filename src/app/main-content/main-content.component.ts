import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { TeamPlayerComponent } from './team-player/team-player.component';
import { ContactComponent } from './contact/contact.component';
import { PreFooterComponent } from './pre-footer/pre-footer.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { debounceTime, fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SkillsDesktopComponent } from './skills-desktop/skills-desktop.component';
import { MyWorkDesktopComponent } from './my-work-desktop/my-work-desktop.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, AboveTheFoldComponent, WhyMeComponent, SkillsComponent, MyWorkComponent, TeamPlayerComponent, ContactComponent, PreFooterComponent, FooterComponent, ImprintComponent, NavbarComponent,SkillsDesktopComponent,MyWorkDesktopComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
public isMobile:boolean = false;
public isDesktop:boolean = false;


constructor() {
  this.updateViewportSize();
  fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(() => this.updateViewportSize())
}

updateViewportSize() {
  const width = window.innerWidth;
  this.isMobile = width <= 999
  this.isDesktop = width >= 1000
}

}

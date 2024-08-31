import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser'
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { WhyMeComponent } from "./why-me/why-me.component";
import { SkillsComponent } from './skills/skills.component';
import { SkillIconsComponent } from './skill-icons/skill-icons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, AboveTheFoldComponent, WhyMeComponent,SkillsComponent,SkillIconsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfoliopms';

  constructor(private titleService: Title) {
 this.titleService.setTitle('Phillip-Marcel Sauer')
  }
}

import { Component,ViewChild,AfterViewInit,ElementRef,inject} from '@angular/core';
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

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { PreFooterDesktopComponent } from '../pre-footer-desktop/pre-footer-desktop.component';
import { BurgerMenuService } from './interfaces/burger-menu-service';
import { MessageResponseComponent } from './message-response/message-response.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, AboveTheFoldComponent, WhyMeComponent, SkillsComponent, MyWorkComponent, TeamPlayerComponent, ContactComponent, PreFooterComponent, FooterComponent, ImprintComponent, NavbarComponent,SkillsDesktopComponent,MyWorkDesktopComponent,PreFooterDesktopComponent,MessageResponseComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})

export class MainContentComponent implements AfterViewInit  {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
public isMobile:boolean = false;
public isDesktop:boolean = false;
public isExternSite:boolean =false;
public animiationOne:boolean =false;
public burgerMenu = inject(BurgerMenuService);
constructor(private router: Router,  ) {

 
  this.updateViewportSize();
  fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(() => this.updateViewportSize())

}
private translate = inject(TranslateService);
ngAfterViewInit() {
    
  const container = this.scrollContainer.nativeElement;
  container.addEventListener('scroll', this.onScroll.bind(this));
}

onScroll(event: Event): void {
  const container = this.scrollContainer.nativeElement;
  const scrollLeft = container.scrollLeft; 

if(scrollLeft >= 3100) {
  this.animiationOne = true
} else if (scrollLeft <= 2900) {
  this.animiationOne = false
}



 
}


updateViewportSize() {
  const width = window.innerWidth;
  this.isMobile = width <=899
  this.isDesktop = width >= 900
}



}


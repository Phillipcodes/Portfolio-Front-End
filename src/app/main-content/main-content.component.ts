import { Component,ViewChild,AfterViewInit,ElementRef,inject, HostListener, Renderer2} from '@angular/core';
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
import { ScrollService } from './interfaces/scroll-service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, AboveTheFoldComponent, WhyMeComponent, SkillsComponent, MyWorkComponent, TeamPlayerComponent, ContactComponent, PreFooterComponent, FooterComponent, ImprintComponent, NavbarComponent,SkillsDesktopComponent,MyWorkDesktopComponent,PreFooterDesktopComponent,MessageResponseComponent,],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})

export class MainContentComponent implements AfterViewInit  {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  
 
public isMobile:boolean = false;
public isDesktop:boolean = false;
public isExternSite:boolean =false;
public animiationOne:boolean =false;
public animiationMobile:boolean =false;
scrollyToX:boolean = false
public burgerMenu = inject(BurgerMenuService);
constructor(private router: Router, private scrollService: ScrollService ) {

 
  this.updateViewportSize();
  fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(() => this.updateViewportSize())


}
private translate = inject(TranslateService);
ngAfterViewInit() {
    
  
  this.scrollService.getScrollPosition().subscribe(position => {
    this.scrollContainer.nativeElement.scrollTo({
      left: position,
      behavior: 'smooth'
    });
  });



  console.log('ngAfterViewInit - scrollContainer:', this.scrollContainer);
  const container = this.scrollContainer.nativeElement;
  container.addEventListener('scroll', this.onScroll.bind(this));
  window.addEventListener('scroll', this.onScrollMobile.bind(this));
  container.addEventListener('wheel',this.onScrollY.bind(this))

}

onScroll(event: Event): void {
  const container = this.scrollContainer.nativeElement;
  const scrollLeft = container.scrollLeft; 
  console.log( this.scrollContainer);
  

  console.log(scrollLeft);
 
  
if(scrollLeft >= 3100) {
  this.animiationOne = true
} else if (scrollLeft <= 2900) {
  this.animiationOne = false
}

}

@HostListener('window:scroll', ['$event'])
onScrollMobile(event: Event): void {
  const scrollTop = window.scrollY;  // Scrollposition auf der Y-Achse

  if(scrollTop )


  if (scrollTop >= 1900) {
    this.animiationMobile = true;
  } else if (scrollTop <= 1700) {
    this.animiationMobile = false;
  }

}

onScrollY(event: WheelEvent) {
  if(this.scrollyToX) {
    event.preventDefault();
  
  
    
    const scrollSpeed = 3;
  
  
    const deltaX = event.deltaY * scrollSpeed;
  
    this.scrollContainer.nativeElement.scrollBy(deltaX, 1);
  }
  } 
updateViewportSize() {
  const width = window.innerWidth;
  this.isMobile = width <=899
  this.isDesktop = width >= 900
  this.scrollyToX = width >899
 
}

scrollToSection() {

console.log(this.scrollContainer);

  this.scrollContainer.nativeElement.scrollTo({
    top: 0,
    left: 835,
    behavior: 'smooth' // optional, für sanftes Scrollen
  });
}
}



import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BurgerMenuComponent } from '../../main-content/burger-menu/burger-menu.component';
import { BurgerMenuService } from '../../main-content/interfaces/burger-menu-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuClosedAtStart: boolean = true;
  isAnimation: boolean = false;
  currentImg: string[] = [
    './assets/img/whyMe-Nav.png',
    './assets/img/skills-nav.png',
    './assets/img/myWork-nav.png',
    './assets/img/contactsMe-nav.png',
  ];
  isActiveImg: string[] = [
    './assets/img/whyMe-Nav-0.png',
    './assets/img/Skills-nav-0.png',
    './assets/img/myWork-nav-0.png',
    './assets/img/contactsMe-nav-0.png',
  ];
  defaultImgState:string[]= [ './assets/img/whyMe-Nav.png',
    './assets/img/skills-nav.png',
    './assets/img/myWork-nav.png',
    './assets/img/contactsMe-nav.png',]
  active:number | null = null;
  @Input() isDesktop!: boolean;
  constructor(public BurgerMenuService: BurgerMenuService) {}

  toggleMenu() {
    this.isAnimation = !this.isAnimation;

    setTimeout(() => {
      this.menuClosedAtStart = false;
      this.BurgerMenuService.toggleMenu();
    }, 100);
  }

  activeNav(imgRef:number) {
   this.currentImg = [...this.defaultImgState]
    this.currentImg[imgRef] = this.isActiveImg[imgRef];
  }
}

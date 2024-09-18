import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { BurgerMenuComponent } from '../../main-content/burger-menu/burger-menu.component';
import { BurgerMenuService } from '../../main-content/interfaces/burger-menu-service';
import { TranslationImgService } from '../../main-content/interfaces/translation-img-service';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollService } from '../../main-content/interfaces/scroll-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  fullStyle:boolean = true;
  showHeader: boolean = false;
  isMainPage:boolean = true;
  active: number | null = null;
  @Input() isDesktop!: boolean;
  public translationImgService = inject(TranslationImgService);
  constructor(
    public BurgerMenuService: BurgerMenuService,
    private router: Router,
    private scrollService: ScrollService
  ) {
    this.checkUrl();
  }

  scrollToPosition(position: number) {
    let width = window.innerWidth;

    let calcPosition = position + width - 100;

    setTimeout(() => {
      this.scrollService.setScrollPosition(calcPosition);
    }, 0);
  }

  activeNav(imgRef: number) {
    if (this.translationImgService.isDe) {
      this.translationImgService.currentImg = [
        ...this.translationImgService.currentImgDeCopy,
      ];
      this.translationImgService.currentImg[imgRef] =
        this.translationImgService.isActiveImgDe[imgRef];
    } else {
      this.translationImgService.currentImg = [
        ...this.translationImgService.defaultImgState,
      ];
      this.translationImgService.currentImg[imgRef] =
        this.translationImgService.isActiveImg[imgRef];
    }
  }

  checkUrl() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.showHeader =
          this.router.url === '/imprint' || this.router.url === '/privacy';
         if(this.showHeader) {
          this.isMainPage = false
         }
          
          
      });
  }

  getDynamicStyle() {
    return this.isDesktop && this.fullStyle && !this.isMainPage ? {'height': '100%'} : {};
  }
}

import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BurgerMenuService } from '../interfaces/burger-menu-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TranslateModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  public translate = inject(TranslateService);
  public translationImgService = inject(TranslationImgService);
  isSelected:boolean = false;
  constructor(
    public BurgerMenuService: BurgerMenuService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.checkIfClickedOut();
  }

  toggleMenu() {
    this.BurgerMenuService.toggleMenu();
  }

  checkIfClickedOut() {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.BurgerMenuService.menuIsOpen) {
        if (!this.elementRef.nativeElement.contains(e.target)) {
          this.BurgerMenuService.close();
        }
      }
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    
    this.changeLanguageImg(language);
    this.isSelected = !this.isSelected
  }

  changeLanguageImg(language: string) {
    if (language === 'de') {
      this.translationImgService.currentImgMobile = [
        ...this.translationImgService.mobielImgDe,
      ];
    }
    if (language === 'en') {
      this.translationImgService.currentImgMobile = [...this.translationImgService.mobileImgEn];
    }
    this.BurgerMenuService.close(); 
  }
 
}

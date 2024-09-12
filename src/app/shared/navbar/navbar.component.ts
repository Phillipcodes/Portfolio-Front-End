import { CommonModule } from '@angular/common';
import { Component, Input,inject } from '@angular/core';
import { BurgerMenuComponent } from '../../main-content/burger-menu/burger-menu.component';
import { BurgerMenuService } from '../../main-content/interfaces/burger-menu-service';
import { TranslationImgService } from '../../main-content/interfaces/translation-img-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
 
  
  active:number | null = null;
  @Input() isDesktop!: boolean;
  public translationImgService = inject(TranslationImgService);
  constructor(public BurgerMenuService: BurgerMenuService) {}

  
   
  activeNav(imgRef:number) {
    debugger
    if(this.translationImgService.isDe)  {
      this.translationImgService.currentImg = [...this.translationImgService.currentImgDeCopy]
      this.translationImgService.currentImg[imgRef] = this.translationImgService.isActiveImgDe[imgRef];
    }else {
      this.translationImgService.currentImg = [...this.translationImgService.defaultImgState]
      this.translationImgService.currentImg[imgRef] = this.translationImgService.isActiveImg[imgRef];
    }


  }
}

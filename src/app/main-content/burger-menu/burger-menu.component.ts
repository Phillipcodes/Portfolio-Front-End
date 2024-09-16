import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BurgerMenuService } from '../interfaces/burger-menu-service';
=======
import {
  Component,
  inject,
  HostListener,
  ElementRef,
  Renderer2,
  Input
} from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BurgerMenuService } from '../interfaces/burger-menu-service';
import { TranslateModule, TranslateService ,} from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
<<<<<<< Updated upstream
constructor(public BurgerMenuService:BurgerMenuService) {

}
=======
  @Input() scrollToSection!: (x:number,y:number) => void
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
>>>>>>> Stashed changes

  toggleMenu() {
    this.BurgerMenuService.toggleMenu()
  }

}

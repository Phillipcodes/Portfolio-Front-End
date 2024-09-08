import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BurgerMenuService } from '../interfaces/burger-menu-service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
constructor(public BurgerMenuService:BurgerMenuService) {

}

  toggleMenu() {
    this.BurgerMenuService.toggleMenu()
  }

}

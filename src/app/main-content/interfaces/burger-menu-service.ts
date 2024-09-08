import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BurgerMenuService {
    menuIsOpen:Boolean = false;


  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
   
  }
}
import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './main-content/imprint/imprint.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { BurgerMenuService } from './main-content/interfaces/burger-menu-service';
import { FormsModule } from '@angular/forms';

import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    ImprintComponent,
    FooterComponent,
    TranslateModule,
  
    
 
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  public isMobile:boolean = false;
public isDesktop:boolean = false;
public isExternSite:boolean =false;
public animiationOne:boolean =false;
public burgerMenu = inject(BurgerMenuService);
  public translate = inject(TranslateService);
  title = 'portfoliopms';

  constructor(private titleService: Title, ) {
    this.titleService.setTitle('Phillip-Marcel Sauer');
    this.updateViewportSize();
    fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(() => this.updateViewportSize())


  }

  updateViewportSize() {
    const width = window.innerWidth;
    this.isMobile = width <=899
    this.isDesktop = width >= 900
  }
  

  scrollToSection(x: number, y: number): void {
    window.scrollTo({
      left: x, // Scrollt um x Pixel horizontal
      top: y,  // Scrollt um y Pixel vertikal
      behavior: 'smooth' // Optional, für sanftes Scrollen
    });
  }

  
}

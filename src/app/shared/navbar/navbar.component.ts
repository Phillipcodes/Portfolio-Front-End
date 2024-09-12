import { CommonModule } from '@angular/common';
import { Component, Input,OnInit,inject } from '@angular/core';
import { BurgerMenuComponent } from '../../main-content/burger-menu/burger-menu.component';
import { BurgerMenuService } from '../../main-content/interfaces/burger-menu-service';
import { TranslationImgService } from '../../main-content/interfaces/translation-img-service';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent,RouterModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
 
  showHeader:boolean = false;
  active:number | null = null;
  @Input() isDesktop!: boolean;
  public translationImgService = inject(TranslationImgService);
  constructor(public BurgerMenuService: BurgerMenuService, private router:Router) {}

  
   
  activeNav(imgRef:number) {
   
    if(this.translationImgService.isDe)  {
      this.translationImgService.currentImg = [...this.translationImgService.currentImgDeCopy]
      this.translationImgService.currentImg[imgRef] = this.translationImgService.isActiveImgDe[imgRef];
    }else {
      this.translationImgService.currentImg = [...this.translationImgService.defaultImgState]
      this.translationImgService.currentImg[imgRef] = this.translationImgService.isActiveImg[imgRef];
    }


  }

  ngOnInit(): void {
    
  }

  checkUrl() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
     
      this.showHeader = this.router.url === '/imprint' || this.router.url === '/privacy';
    });
  
  }

}

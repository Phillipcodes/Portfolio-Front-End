import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './main-content/imprint/imprint.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    ImprintComponent,
    FooterComponent,
 
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  public translate = inject(TranslateService);
  title = 'portfoliopms';

  constructor(private titleService: Title, ) {
    this.titleService.setTitle('Phillip-Marcel Sauer');
    this.translate.setDefaultLang('de'); 
    this.translate.use('de'); 


  }

}

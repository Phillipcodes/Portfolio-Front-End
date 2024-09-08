import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser'
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './main-content/imprint/imprint.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,ImprintComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfoliopms';

  constructor(private titleService: Title) {
 this.titleService.setTitle('Phillip-Marcel Sauer')
  }

  
}

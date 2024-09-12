import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent implements OnInit {
  
ShowFooter:boolean = false;
showPrivacyFooter:boolean =false;

  constructor(private router:Router) {

  }
  
  ngOnInit(): void {
    this.checkUrl();
  }

  checkUrl() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.ShowFooter = this.router.url === '/imprint' ;
      this.showPrivacyFooter = this.router.url === '/privacy';
  
    });
  
  }
}


import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pre-footer-desktop',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './pre-footer-desktop.component.html',
  styleUrl: './pre-footer-desktop.component.scss'
})
export class PreFooterDesktopComponent {

}

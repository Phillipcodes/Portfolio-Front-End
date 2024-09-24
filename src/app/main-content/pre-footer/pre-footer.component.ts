import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pre-footer',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './pre-footer.component.html',
  styleUrl: './pre-footer.component.scss'
})
export class PreFooterComponent {
  isHovered = false;

  @HostListener('mouseover')
  onMouseOver() {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }
}

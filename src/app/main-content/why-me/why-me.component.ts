import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
<<<<<<< Updated upstream
=======
  
  public translationImgService = inject(TranslationImgService);
>>>>>>> Stashed changes
@Input() isDesktop!:boolean;
}

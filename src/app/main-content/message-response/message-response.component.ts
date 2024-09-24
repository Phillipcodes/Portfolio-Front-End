import { Component,inject } from '@angular/core';
import { TranslationImgService } from '../interfaces/translation-img-service';

@Component({
  selector: 'app-message-response',
  standalone: true,
  imports: [],
  templateUrl: './message-response.component.html',
  styleUrl: './message-response.component.scss'
})

export class MessageResponseComponent {
  public translationImgService = inject(TranslationImgService);
}

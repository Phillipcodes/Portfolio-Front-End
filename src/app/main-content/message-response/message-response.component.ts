import { Component,inject } from '@angular/core';
import { TranslationImgService } from '../interfaces/translation-img-service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-message-response',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './message-response.component.html',
  styleUrl: './message-response.component.scss'
})

export class MessageResponseComponent {
  public translationImgService = inject(TranslationImgService);
}

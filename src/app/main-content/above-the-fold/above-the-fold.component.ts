import { CommonModule } from '@angular/common';
import { Component, Input ,inject,ChangeDetectorRef} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  private translate = inject(TranslateService);
  private translationImgService = inject(TranslationImgService);
  private cdr = inject(ChangeDetectorRef);
@Input() isDesktop!:boolean
constructor() {
 
  
}

switchLanguage(language: string) {
  this.translate.use(language);
  console.log(language);
  this.changeLanguageImg(language)
}

changeLanguageImg(language:string) {
if(language === 'de') {
 this.translationImgService.deImg = [...this.translationImgService.deImgCopy];
} else if (language === 'en') {
  this.translationImgService.deImg = [...this.translationImgService.enImg];
}
this.cdr.detectChanges()
 }

}

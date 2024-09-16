import { CommonModule } from '@angular/common';
import { Component, Input ,OnInit,inject, } from '@angular/core';
import { TranslateModule,  TranslateService } from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule,],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent  {
  public translate = inject(TranslateService);
  public translationImgService = inject(TranslationImgService);
  isSelected = false;

@Input() isDesktop!:boolean
constructor() {

  
}

switchLanguage(language: string) {
  this.translate.use(language);
  this.changeLanguageImg(language)
  this.isSelected = !this.isSelected
 
}



changeLanguageImg(language:string) {
if(language === 'de') {
 this.translationImgService.deImg = [...this.translationImgService.deImgCopy];
 this.translationImgService.currentImg = [...this.translationImgService.currentImgEn]
this.translationImgService.isDe =true;
}  if (language === 'en') {
  this.translationImgService.deImg = [...this.translationImgService.enImg];
  this.translationImgService.currentImg = [...this.translationImgService.defaultImgState]
  this.translationImgService.isDe =false;
}

 }

}

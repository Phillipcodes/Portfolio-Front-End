import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input ,OnInit,inject, } from '@angular/core';
import { TranslateModule,  TranslateService } from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';
import { ScrollService } from '../interfaces/scroll-service';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule,],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent  {
  @Input() scrollToSection!: () => void;
  @Input() scrollContainer!: string;
  public translate = inject(TranslateService);
  public translationImgService = inject(TranslationImgService);
  isSelected = false;

@Input() isDesktop!:boolean
constructor(private scrollService: ScrollService ) {
  
  
}

scrollToPosition(position: number) {
  let width = window.innerWidth;

  let calcPosition = position + width - 100;

  setTimeout(() => {
    this.scrollService.setScrollPosition(calcPosition);
  }, 0);
}

switchLanguage(language: string) {
  debugger
  this.translate.use(language);
  this.changeLanguageImg(language)
 
 
}



changeLanguageImg(language:string) {
  debugger
if(language === 'de' && !this.translationImgService.isDe) {
 this.translationImgService.deImg = [...this.translationImgService.deImgCopy];
 this.translationImgService.currentImg = [...this.translationImgService.deImg]
this.translationImgService.isDe =true;
this.isSelected = !this.isSelected
}  if (language === 'en' && this.translationImgService.isDe ) {
  this.translationImgService.currentImg = [...this.translationImgService.defaultImgState]
  this.translationImgService.isDe = false;
  this.isSelected = !this.isSelected
}

 }

}

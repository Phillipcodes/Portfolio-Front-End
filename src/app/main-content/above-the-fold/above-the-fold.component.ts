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
export class AboveTheFoldComponent  implements AfterViewInit{
  @Input() scrollToSection!: () => void;
  @Input() scrollContainer!: string;
  public translate = inject(TranslateService);
  public translationImgService = inject(TranslationImgService);
  isSelected = false;

@Input() isDesktop!:boolean
constructor(private scrollService: ScrollService ) {
  
  
}
scrollToPosition() {
  const position = 835; // Zum Beispiel 500 Pixel
  this.scrollService.setScrollPosition(position);
}

ngAfterViewInit(): void {

  
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

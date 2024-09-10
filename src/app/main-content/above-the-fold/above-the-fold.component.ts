import { CommonModule } from '@angular/common';
import { Component, Input ,OnInit,inject,} from '@angular/core';
import { TranslateModule,  TranslateService } from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule,],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements OnInit {
  public translate = inject(TranslateService);
  public translationImgService = inject(TranslationImgService);

@Input() isDesktop!:boolean
constructor() {

  
}

switchLanguage(language: string) {
  this.translate.use(language);
  console.log(language);
  this.changeLanguageImg(language)
 
}

ngOnInit(): void {
  this.translate.get('WELCOME', {value: 'world'}).subscribe((res: string) => {
    console.log(res);
    //=> 'hello world'
});
}

changeLanguageImg(language:string) {
  debugger
if(language === 'de') {
 this.translationImgService.deImg = [...this.translationImgService.deImgCopy];
}  if (language === 'en') {
  this.translationImgService.deImg = [...this.translationImgService.enImg];
}

 }

}

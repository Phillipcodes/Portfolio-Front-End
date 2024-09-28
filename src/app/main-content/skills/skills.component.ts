import { Component,OnInit,inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { IconService } from './../interfaces/icon-service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationImgService } from '../interfaces/translation-img-service';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ AppComponent,TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  public translationImgService = inject(TranslationImgService);
  icons:any[]=[]

constructor(private iconService:IconService) {

}
ngOnInit(): void {
  this.icons = this.iconService.getJson() ;
}
}

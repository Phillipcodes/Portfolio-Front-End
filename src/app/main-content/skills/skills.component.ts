import { Component,OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { IconService } from './../interfaces/icon-service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ AppComponent,TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  icons:any[]=[]

constructor(private iconService:IconService) {

}
ngOnInit(): void {
  this.icons = this.iconService.getJson() ;
}
}

import { Component,OnInit } from '@angular/core';
import { IconService } from '../interfaces/icon-service'
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
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

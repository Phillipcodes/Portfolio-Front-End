import { Component ,Input} from '@angular/core';
import { WorkItem, WorkService } from './../interfaces/work-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-work-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work-desktop.component.html',
  styleUrl: './my-work-desktop.component.scss'
})
export class MyWorkDesktopComponent {
  myWork:WorkItem[]=[]
  @Input ()animationOne!:boolean;

  constructor(private workService:WorkService) {

  }

 getClass(index:number) {
  return    this.animationOne ? `animate${index}` : 'animateBack';
 }

  ngOnInit(): void {
    this.myWork = this.workService.getJson();
    console.log(this.myWork);
     ;
  }

}

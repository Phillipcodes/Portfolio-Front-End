import { Component } from '@angular/core';
import { WorkItem, WorkService } from './../interfaces/work-service';
@Component({
  selector: 'app-my-work-desktop',
  standalone: true,
  imports: [],
  templateUrl: './my-work-desktop.component.html',
  styleUrl: './my-work-desktop.component.scss'
})
export class MyWorkDesktopComponent {
  myWork:WorkItem[]=[]


  constructor(private workService:WorkService) {

  }

 

  ngOnInit(): void {
    this.myWork = this.workService.getJson();
    console.log(this.myWork);
     ;
  }

}

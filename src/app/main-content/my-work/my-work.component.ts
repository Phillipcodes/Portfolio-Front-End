import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkItem, WorkService } from './../interfaces/work-service';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  isListOpen: boolean[] = [false,false];

  myWork:WorkItem[]=[]


  constructor(private workService:WorkService) {

  }

  toggleList(index:number) {
    this.isListOpen[index] = !this.isListOpen[index];
  }

  ngOnInit(): void {
    this.myWork = this.workService.getJson();
    console.log(this.myWork);
     ;
  }
}

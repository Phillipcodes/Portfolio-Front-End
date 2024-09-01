import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkService } from '../interfaces/work-service';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  isListOpen: boolean = false;

  myWork:any[]=[]


  constructor(private workService:WorkService) {

  }

  toggleList() {
    this.isListOpen = !this.isListOpen;
  }

  ngOnInit(): void {
    this.myWork = this.workService.getJson();
    console.log(this.myWork);
     ;
  }
}

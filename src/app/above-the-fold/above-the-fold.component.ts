import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WhyMeComponent } from '../why-me/why-me.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule,WhyMeComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}

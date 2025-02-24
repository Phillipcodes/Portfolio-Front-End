import { Injectable } from '@angular/core';
export interface WorkItem {
    about: string;
    tec: string;
    learned: string;
    path: string;
    number: string;
    numberDesktop:string;
    project: string;
    git: string;
    liveTest: string;
  }
@Injectable({
  providedIn: 'root'
})


export class WorkService {
    myWork:WorkItem[] = [
        {
          about:
            'MYWORK.about',
          tec: 'JavaScript, Firebase, HTML, CSS, Git',
          learned:
            'MYWORK.learned',
          path: './assets/img/join.png',
          number: './assets/img/1.png',
          numberDesktop: './assets/img/1-desktop.png',
          project: 'Project Join',
          git: 'https://github.com/Phillipcodes/Join.git',
          liveTest: 'https://join.phillip-marcel-sauer.com/'
          
        },
        {
          about:
            'MYWORK.aboutSecond',
          tec: 'JavaScript, CSS, HTML',
          learned:
            'MYWORK.learnedSecond',
          path: './assets/img/elpollo.png',
          number: './assets/img/2.png',
          numberDesktop: './assets/img/2-desktop.png',
          project: 'Project El Pollo Loco' ,
          git: 'https://github.com/Phillipcodes/El_pollo_loco.git',
          liveTest: 'https://elpollo.phillip-marcel-sauer.com/'
        },
        {
          about:
            'MYWORK.aboutThird',
          tec: 'Angular,SCSS,Git,Firebase',
          learned:
            'MYWORK.learnedThird',
          path: './assets/img/dabubble.JPG',
          number: './assets/img/3.png',
          numberDesktop: './assets/img/3-desktop.png',
          project: 'DABubble' ,
          git: 'https://github.com/Kaplan-Sauer-Veltens-GbR/DABubble',
          liveTest: ''
        },
      ];

      getJson():WorkItem[] {
        return this.myWork;
      }

      
}
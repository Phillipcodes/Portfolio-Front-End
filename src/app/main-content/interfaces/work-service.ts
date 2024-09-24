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
          project: 'Project Ell Pollo Loco' ,
          git: 'https://github.com/Phillipcodes/El_pollo_loco.git',
          liveTest: 'https://elpollo.phillip-marcel-sauer.com/'
        },
      ];

      getJson():WorkItem[] {
        return this.myWork;
      }

      
}
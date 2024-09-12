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
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
          tec: 'JavaScript, Firebase, HTML, CSS, Git',
          learned:
            'I learned a variety of skills. My JavaScript knowledge was tested in combination with Firebase, which gave me a whole new understanding of how programming works. Additionally, I learned to organize myself within a team and take responsibility for deadlines.',
          path: './assets/img/join.png',
          number: './assets/img/1.png',
          numberDesktop: './assets/img/1-desktop.png',
          project: 'Project Join',
          git: 'https://github.com/Phillipcodes/Join.git',
          liveTest: 'https://join.phillip-marcel-sauer.com/'
          
        },
        {
          about:
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
          tec: 'JavaScript, Angular, CSS, HTML, Node.js',
          learned:
            'Verwendung von Angular für die Entwicklung von Single-Page-Anwendungen, Erstellen von RESTful APIs mit Node.js, Erweiterte Kenntnisse in CSS für die Gestaltung responsiver Layouts, Arbeiten mit Datenbanken und ORM-Tools',
          path: './assets/img/elpollo.png',
          number: './assets/img/2.png',
          numberDesktop: './assets/img/2-desktop.png',
          project: 'Project Join' ,
          git: 'https://github.com/Phillipcodes/El_pollo_loco.git',
          liveTest: 'https://elpollo.phillip-marcel-sauer.com/'
        },
      ];

      getJson():WorkItem[] {
        return this.myWork;
      }
}
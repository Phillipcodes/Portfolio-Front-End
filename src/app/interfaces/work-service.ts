import { Injectable } from '@angular/core';
export interface WorkItem {
    about: string;
    tec: string;
    learned: string;
    path: string;
    number: string;
    project: string;
  }
@Injectable({
  providedIn: 'root'
})


export class WorkService {
    myWork:WorkItem[] = [
        {
          about:
            'Dies ist eine Beschreibung des Projekts oder der Arbeit. Hier wird erklärt, worum es bei diesem Arbeitsteil geht und welche Ziele erreicht wurden.',
          tec: 'JavaScript,Firebase,HTML,CSS,Git',
          learned:
            'I learned a variety of skills. My JavaScript knowledge was tested in combination with Firebase, which gave me a whole new understanding of how programming works. Additionally, I learned to organize myself within a team and take responsibility for deadlines.',
          path: '../../assets/img/join.png',
          number: '../../assets/img/1.png',
          project: 'Project Join'
        },
        {
          about:
            'Dies ist eine Beschreibung des Projekts oder der Arbeit. Hier wird erklärt, worum es bei diesem Arbeitsteil geht und welche Ziele erreicht wurden.',
          tec: 'JavaScript, Angular, CSS, HTML, Node.js',
          learned:
            'Verwendung von Angular für die Entwicklung von Single-Page-Anwendungen, Erstellen von RESTful APIs mit Node.js, Erweiterte Kenntnisse in CSS für die Gestaltung responsiver Layouts, Arbeiten mit Datenbanken und ORM-Tools',
          path: '../../assets/img/elpollo.png',
          number: '../../assets/img/2.png',
          project: 'Project Join'
        },
      ];

      getJson():WorkItem[] {
        return this.myWork;
      }
}
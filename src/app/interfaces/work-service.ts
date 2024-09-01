import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
    myWork = [
        {
          about:
            'Dies ist eine Beschreibung des Projekts oder der Arbeit. Hier wird erklärt, worum es bei diesem Arbeitsteil geht und welche Ziele erreicht wurden.',
          tec: 'JavaScript, Angular, CSS, HTML, Node.js',
          learned:
            'Verwendung von Angular für die Entwicklung von Single-Page-Anwendungen, Erstellen von RESTful APIs mit Node.js, Erweiterte Kenntnisse in CSS für die Gestaltung responsiver Layouts, Arbeiten mit Datenbanken und ORM-Tools',
          path: '../../assets/img/join.JPG',
          number: '../../assets/img/Headline +number.png',
          project: 'Project Join'
        },
        {
          about:
            'Dies ist eine Beschreibung des Projekts oder der Arbeit. Hier wird erklärt, worum es bei diesem Arbeitsteil geht und welche Ziele erreicht wurden.',
          tec: 'JavaScript, Angular, CSS, HTML, Node.js',
          learned:
            'Verwendung von Angular für die Entwicklung von Single-Page-Anwendungen, Erstellen von RESTful APIs mit Node.js, Erweiterte Kenntnisse in CSS für die Gestaltung responsiver Layouts, Arbeiten mit Datenbanken und ORM-Tools',
          path: '../../assets/img/elpollo.JPG',
          number: '../../assets/img/Headline +number.png',
          project: 'Project Join'
        },
      ];

      getJson() {
        return this.myWork;
      }
}
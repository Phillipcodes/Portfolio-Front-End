import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  public icons = [
    { "path": "./assets/icons/angular.png", "name": "Angular" },
    { "path": "./assets/icons/ts.png", "name": "TypeScript" },
    { "path": "./assets/icons/Javascript.png", "name": "JavaScript" },
    { "path": "./assets/icons/html.png", "name": "HTML" },
    { "path": "./assets/icons/css.png", "name": "CSS" },
    { "path": "./assets/icons/Api.png", "name": "API" },
    { "path": "./assets/icons/Firebase.png", "name": "Firebase" },
    { "path": "./assets/icons/git.png", "name": "Git" },
    { "path": "./assets/icons/scrum.png", "name": "Scrum" },
    { "path": "./assets/icons/material.png", "name": "Material" },
    { "path": "./assets/icons/challangeme.png", "name": "Challange me" }
  ];

  getJson() {
    return this.icons;
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TranslationImgService {
    isDe:boolean = true;
    isEn:boolean = false;

    deImg = ['./assets/img/warum_ich.svg', './assets/img/mein_skill_set.svg','./assets/img/meine_arbeiten.svg','./assets/img/referenzen-headline.svg','./assets/img/Kontaktiere_mich.svg']
    deImgCopy = ['./assets/img/warum_ich.svg', './assets/img/mein_skill_set.svg','./assets/img/meine_arbeiten.svg','./assets/img/referenzen-headline.svg','./assets/img/Kontaktiere_mich.svg']
    enImg = ['./assets/img/whyMe.svg','./assets/img/myskillsetdesktop.svg','./assets/img/My-work-rotate.svg','./assets/img/desktop-references-headline.png','./assets/img/contactme-rotate.svg']
    enImgCopy = ['./assets/img/whyMe.svg','./assets/img/myskillsetdesktop.svg','./assets/img/My-work-rotate.svg','./assets/img/desktop-references-headline.png','./assets/img/contactme-rotate.svg']


    currentImg: string[] = [
      './assets/img/Wiesoich-nav.svg','./assets/img/skills-nav.png','./assets/img/Meine_Arbeiten-nav.svg','./assets/img/kontak-nav.svg'
    ];
    isActiveImg: string[] = [
      './assets/img/whyMe-Nav-0.png',
      './assets/img/Skills-nav-0.png',
      './assets/img/myWork-nav-0.png',
      './assets/img/contactsMe-nav-0.png',
    ];
    defaultImgState:string[]= [ './assets/img/whyMe-Nav.png',
      './assets/img/skills-nav.png',
      './assets/img/myWork-nav.png',
      './assets/img/contactsMe-nav.png',]
   
    currentImgEn:string[] = ['./assets/img/whyMe-Nav.png',
      './assets/img/skills-nav.png',
      './assets/img/myWork-nav.png',
      './assets/img/contactsMe-nav.png',]
    currentImgDeCopy:string[] = ['./assets/img/Wiesoich-nav.svg','./assets/img/skills-nav.png','./assets/img/Meine_Arbeiten-nav.svg','./assets/img/kontak-nav.svg']
    isActiveImgDe:string [] = ['./assets/img/warum_ich-0.png','./assets/img/Skills-nav-0.png','./assets/img/meineArbeiten-nav-0.svg','./assets/img/kontak-nav-0.svg']
}
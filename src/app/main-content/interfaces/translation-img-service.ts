import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TranslationImgService {
    isDe:boolean = false;
    isEe:boolean = false;

    deImg = ['./assets/img/warum_ich.svg','./assets/img/mein_skill_set.svg','./assets/img/meine_arbeiten.svg','./assets/img/referenzen-headline.svg','./assets/img/Kontaktiere_mich.svg']
    deImgCopy = ['./assets/img/warum_ich.svg','./assets/img/mein_skill_set.svg','./assets/img/meine_arbeiten.svg','./assets/img/referenzen-headline.svg','./assets/img/Kontaktiere_mich.svg']
    enImg = ['./assets/img/whyMe.svg','./assets/img/myskillsetdesktop.svg','./assets/img/My-work-rotate.svg','./assets/img/desktop-references-headline.png','./assets/img/contactme-rotate.svg']
    enImgCopy = ['./assets/img/whyMe.svg','./assets/img/myskillsetdesktop.svg','./assets/img/My-work-rotate.svg','./assets/img/desktop-references-headline.png','./assets/img/contactme-rotate.svg']


    
}
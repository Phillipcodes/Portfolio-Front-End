import { Routes } from '@angular/router';
import { ImprintComponent } from './main-content/imprint/imprint.component';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';


export const routes: Routes = [{path: '', component: MainContentComponent},
    {path: 'imprint', component: ImprintComponent}
];
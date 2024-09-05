import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { AppComponent } from './app.component';


export const routes: Routes = [{path: '', component: AppComponent},
    {path: 'imprint', component: ImprintComponent}
];
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient, } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/resources/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(TranslateModule.forRoot())]
};  
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient, provideHttpClient, } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const provideTranslation = () => ({
  defaultLanguage: 'de',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  },
})

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Router konfigurieren
    provideHttpClient(), // HTTP Client bereitstellen
    importProvidersFrom(
      HttpClientModule, // HttpClientModule importieren
      TranslateModule.forRoot(provideTranslation()) // Übersetzungsmodul konfigurieren
    )
  ]
};

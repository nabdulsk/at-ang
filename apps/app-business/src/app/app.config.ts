import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ACCOUNTS_JOURNEY_CONFIG_TOKEN } from '@accounts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    {
      provide: ACCOUNTS_JOURNEY_CONFIG_TOKEN,
      useValue: {
        paginationSize: 20,
        showFavourites: false,
      },
    },
  ],
};

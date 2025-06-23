import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ACCOUNTS_JOURNEY_CONFIG_TOKEN } from '@accounts';
import { ACCOUNTS_SEGMENT_CONFIGS } from '@accounts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    { provide: ACCOUNTS_JOURNEY_CONFIG_TOKEN, useValue: ACCOUNTS_SEGMENT_CONFIGS['commercial'].journey },
  ],
};

import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const TRIPPIN_BASE_URL = new InjectionToken<string>('TRIPPIN_BASE_URL');

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),
    {
      provide: TRIPPIN_BASE_URL,
      useValue: 'https://services.odata.org/TripPinRESTierService/(S(m5bfpztyapemay4raovtk1wi))',
    },
    provideHttpClient(),]
};

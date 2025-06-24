import { Route } from '@angular/router';
import { commercialAccountsRoute } from '@accounts';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts',
  },
  commercialAccountsRoute,
];

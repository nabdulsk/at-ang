import { Route } from '@angular/router';
import { retailAccountsRoute } from '@accounts';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts',
  },
  retailAccountsRoute,
];

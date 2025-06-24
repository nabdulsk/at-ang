import { businessAccountsRoute } from '@accounts';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts',
  },
  businessAccountsRoute,
];

import { Route } from '@angular/router';
import { accountsRoutes } from '@accounts';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts',
  },
  {
    path: 'accounts',
    children: accountsRoutes,
    data: { segment: 'commercial' },
  },
];

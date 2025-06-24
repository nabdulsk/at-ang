import { Route } from '@angular/router';
import { accountsRoutes } from './accounts.routes';

export type AccountsSegment = 'commercial' | 'business' | 'retail';

export interface AccountsRoute extends Route {
  data: {
    segment: AccountsSegment;
  };
}

export const commercialAccountsRoute: AccountsRoute = {
  path: 'accounts',
  children: accountsRoutes,
  data: {
    segment: 'commercial',
  },
};

export const businessAccountsRoute: AccountsRoute = {
  path: 'accounts',
  children: accountsRoutes,
  data: {
    segment: 'business',
  },
};

export const retailAccountsRoute: AccountsRoute = {
  path: 'accounts',
  children: accountsRoutes,
  data: {
    segment: 'retail',
  },
};

import { Route } from '@angular/router';
import {
    ACCOUNTS_CONFIG_BUSINESS,
    accountsRoutes
} from '@accounts';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accounts'
    },
    {
        path: 'accounts',
        children: accountsRoutes,
        data: { config: ACCOUNTS_CONFIG_BUSINESS }
    }
];

import { Route } from '@angular/router';
import {
    ACCOUNTS_CONFIG_RETAIL
} from '@accounts';

export const appRoutes: Route[] = [
    {
        path: 'accounts',
        loadComponent: () => import('@accounts').then(m => m.AccountsComponent),
        data: { config: ACCOUNTS_CONFIG_RETAIL }
    }
];

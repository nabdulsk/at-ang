import { Route } from '@angular/router';
import {
    ACCOUNTS_CONFIG_BUSINESS,
} from '@accounts';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'accounts'
            },
            {
                path: 'accounts',
                loadComponent: () =>
                    import('@accounts').then(m => m.AccountsComponent),
                data: { config: ACCOUNTS_CONFIG_BUSINESS }
            }
        ]
    }
];

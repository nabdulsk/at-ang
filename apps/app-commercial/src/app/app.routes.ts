import { Route } from '@angular/router';
import {
    ACCOUNTS_SEGMENT_CONFIGS,
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
        data: { segment: 'commercial', config: ACCOUNTS_SEGMENT_CONFIGS['commercial'].accounts }
    }
];

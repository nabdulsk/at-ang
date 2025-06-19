import { Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { ACCOUNTS_CONFIG_COMMERCIAL } from './configs';

export const accountsRoutes: Routes = [
    {
        path: '',
        component: AccountsComponent,
        data: { config: ACCOUNTS_CONFIG_COMMERCIAL }, // Default config, can be overridden at app level
    },
]; 
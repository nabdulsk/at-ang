import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'business-accounts'
            },
            {
                path: 'business-accounts',
                loadComponent: () =>
                    import('@accounts').then(m => m.AccountsComponent)
            }
        ]
    }

];

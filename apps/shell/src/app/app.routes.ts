import { Route } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ShellLayoutComponent } from './layouts/shell-layout/shell-layout.component';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: 'onboarding',
        loadChildren: () =>
          import('onboarding/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: '',
        redirectTo: 'onboarding',
        pathMatch: 'full'
      }
    ],
    canActivate: [AuthGuard]
  },
];

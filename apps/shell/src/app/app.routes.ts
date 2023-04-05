import { Route } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { PublicGuard } from '../guards/public.guard';
import { ShellLayoutComponent } from './layouts/shell-layout/shell-layout.component';

export const appRoutes: Route[] = [
  {
    path: 'onboarding',
    loadChildren: () =>
      import('onboarding/Module').then((m) => m.RemoteEntryModule),
    canActivate: [PublicGuard],
  },
  {
    path: 'main',
    component: ShellLayoutComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'callback',
    loadChildren: () =>
      import('./modules/callback/callback.module').then((m) => m.CallbackModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'onboarding',
  },
];

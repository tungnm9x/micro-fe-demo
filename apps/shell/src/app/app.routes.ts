import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('onboarding/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'recommender',
    loadChildren: () =>
      import('recommender/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'shipping',
    loadChildren: () =>
      import('shipping/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('payment/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('shopping-cart/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

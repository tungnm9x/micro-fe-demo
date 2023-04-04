import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'select-type',
        loadChildren: () =>
          import('../modules/select-type/select-type.module').then(
            (m) => m.SelectTypeModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'select-type'
      }
    ],
  },
];

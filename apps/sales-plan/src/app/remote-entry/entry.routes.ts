import { Route } from '@angular/router';
import { SalesPlanCockpitComponent } from './component/sales-plan-cockpit/sales-plan-cockpit.component';

export const remoteRoutes: Route[] = [
  {
    path: 'cockpit',
    component: SalesPlanCockpitComponent,
  },
  { 
    path: '', 
    redirectTo: 'cockpit',
    pathMatch: 'full'
  },
];

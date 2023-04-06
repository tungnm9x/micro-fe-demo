import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { SalesPlanCockpitComponent } from './component/sales-plan-cockpit/sales-plan-cockpit.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SalesPlanCockpitItemComponent } from './component/sales-plan-cockpit-item/sales-plan-cockpit-item.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GetDerivedSalesPlanPipe } from './pipes/get-derived-sales-plan.pipe';
import { GetRfcCountByTypePipe } from './pipes/get-rfc-count-by-type.pipe';
import { GetSalesPlanSellablePipe } from './pipes/get-sales-plan-sellable.pipe';
import { ParseRatePlanTypePipe } from './pipes/parse-rate-plan-type.pipe';
import { AdjustmentValuePipe } from './pipes/adjustment-value.pipe';

@NgModule({
  declarations: [
    RemoteEntryComponent, 
    SalesPlanCockpitComponent, 
    SalesPlanCockpitItemComponent,
    GetDerivedSalesPlanPipe,
    GetRfcCountByTypePipe,
    GetSalesPlanSellablePipe,
    ParseRatePlanTypePipe,
    AdjustmentValuePipe
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(remoteRoutes),
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [],
})
export class RemoteEntryModule {}

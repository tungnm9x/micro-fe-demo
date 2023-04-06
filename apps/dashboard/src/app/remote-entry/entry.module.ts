import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { WeeklyOverviewTableComponent } from './components/weekly-overview-table/weekly-overview-table.component';
import { StoreSharingModule } from '@micro-fe-test/store-sharing';

@NgModule({
  declarations: [RemoteEntryComponent, WeeklyOverviewTableComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(remoteRoutes),
    StoreSharingModule
  ],
  providers: [],
})
export class RemoteEntryModule {}

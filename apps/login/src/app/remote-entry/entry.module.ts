import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RemoteEntryComponent ],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), ReactiveFormsModule],
  providers: [],
})
export class RemoteEntryModule {}

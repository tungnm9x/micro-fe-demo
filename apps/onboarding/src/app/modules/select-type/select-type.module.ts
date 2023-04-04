import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectTypeRoutingModule } from './select-type-routing.module';
import { SelectTypeComponent } from './select-type.component';

@NgModule({
  declarations: [SelectTypeComponent],
  imports: [CommonModule, SelectTypeRoutingModule],
})
export class SelectTypeModule {}

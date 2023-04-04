import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectTypeComponent } from './select-type.component';

const routes: Routes = [{
  path: "",
  component: SelectTypeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectTypeRoutingModule { }

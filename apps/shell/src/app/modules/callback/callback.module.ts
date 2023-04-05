import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CallbackComponent } from './callback.component';
import { LoadingComponent } from "../../components/loading/loading.component";

@NgModule({
    declarations: [CallbackComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CallbackComponent,
            },
        ]),
        LoadingComponent
    ]
})
export class CallbackModule {}

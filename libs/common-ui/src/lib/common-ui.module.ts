import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, InputTextComponent],
  exports: [HeaderComponent, InputTextComponent],
})
export class CommonUiModule {}

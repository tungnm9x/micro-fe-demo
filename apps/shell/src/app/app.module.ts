import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedDataAccessUserModule } from '@micro-fe-test/shared/data-access-user';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ShellLayoutComponent } from './layouts/shell-layout/shell-layout.component';

@NgModule({
  declarations: [AppComponent, ShellLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SharedDataAccessUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

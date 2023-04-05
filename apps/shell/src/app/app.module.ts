import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ShellLayoutComponent } from './layouts/shell-layout/shell-layout.component';

@NgModule({
  declarations: [AppComponent, ShellLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AuthModule.forRoot({...environment.auth}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

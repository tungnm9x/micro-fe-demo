import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedDataAccessUserModule } from '@micro-fe-test/shared/data-access-user';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ShellLayoutComponent } from './layouts/shell-layout/shell-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreSharingModule } from '@micro-fe-test/store-sharing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ShellLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SharedDataAccessUserModule,
    StoreSharingModule,
    HeaderComponent,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

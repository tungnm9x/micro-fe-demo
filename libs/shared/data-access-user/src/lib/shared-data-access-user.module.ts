import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    CommonModule, // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'gauvendi-dev.eu.auth0.com',
      clientId: 'YW9z15wg0DcDnWMMtZCm1Gdht1kX8EfB',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
})
export class SharedDataAccessUserModule {}

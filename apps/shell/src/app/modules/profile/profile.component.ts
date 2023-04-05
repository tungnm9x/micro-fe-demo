import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'micro-fe-test-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(public auth: AuthService) {}
}

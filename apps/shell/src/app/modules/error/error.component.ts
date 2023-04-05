import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'micro-fe-test-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  constructor(public auth: AuthService) {}
}

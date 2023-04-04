import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth0Service } from '@micro-fe-test/shared/data-access-user';

@Component({
  selector: 'micro-fe-test-login-entry',
  template: `
    <pre>
    Is User LoggedIn:      {{ isUserLoggedIn$ |async| json }}
    </pre
    >
    <div [formGroup]="form">
      <input formControlName="username" />
      <input formControlName="password" />
      <button (click)="login()">Submit</button>
    </div>
  `,
})
export class RemoteEntryComponent {
  form: FormGroup = this.fb.group({
    username: '',
    password: '',
  });
  constructor(private fb: FormBuilder, private auth0: Auth0Service) {}

  isUserLoggedIn$ = this.auth0.isUserLoggedIn$;
  login(): void {
    const { username, password } = this.form.value;
    this.auth0.checkCredentials(username, password);
  }
}

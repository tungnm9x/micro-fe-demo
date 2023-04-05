import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'micro-fe-test-login-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {
  form: FormGroup = this.fb.group({
    username: '',
    password: '',
  });
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private fb: FormBuilder) {}
  // isUserLoggedIn$ = this.auth0.isUserLoggedIn$;
  login(): void {
    // const { username, password } = this.form.value;
    // this.auth0.checkCredentials(username, password);
    this.auth.handleRedirectCallback()
  }
}

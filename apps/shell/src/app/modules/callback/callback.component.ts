import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'micro-fe-test-callback',
  templateUrl: './callback.component.html',
})
export class CallbackComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/main']);
    }, 1000);
  }
}

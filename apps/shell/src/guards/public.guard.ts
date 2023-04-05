import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard {  
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.isAuthenticated$.pipe(
      map((i) => {
        if(i) {
          this.router.navigate(['/main'])
        }
        return !i;
      })
    );
  }
}

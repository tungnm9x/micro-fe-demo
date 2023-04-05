import {
  HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map, switchMap, take } from 'rxjs';

const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiR1ZEX1JGQyIsIkdWRF9CT09LSU5HIiwiR1ZEX0hPVEVMIiwiR1ZEX0NPUkUiLCJHVkRfRVhUUkFORVQiXSwiZnVsbF9uYW1lIjoiMThBcnRzIEhvdGVsIEFkbWluIiwiZW1haWxfYWRkcmVzcyI6ImFkbWluLjE4YXJ0c0BnYXV2ZW5kaS5jb20iLCJyb2xlIjpbIkdWQ0dOQVJUOjpITSJdLCJvcmdhbmlzYXRpb25fY29kZSI6IkdWQ0dOQVJUIiwidXNlcl9pZCI6ImQyOGU5MTA3LTZiOGEtNDcxYS04M2ZkLTdlNjlhMjk1ZTcwYSIsInVzZXJfbmFtZSI6ImFkbWluLjE4YXJ0c0BnYXV2ZW5kaS5jb20iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNjg0Nzc0NzEwLCJqdGkiOiI0MTM0YTNjYS1mMDRjLTRhZmQtYTk2Ni1jNDU3ZTNlNjg2YWUiLCJjbGllbnRfaWQiOiJnYXV2ZW5kaS1leHRyYW5ldCJ9.eDsy0lZZl-k8d6L1uWqZUUkhMdYs2zIgVKTsRjO9aWwYHx7k2Pamdr4kCSGk99alnMh5BcfeP1POr15KenyBwL8fHns_37uLejgCC0br-FR0Wtbhji97gXIM-qjZ99J3CUbU0DZZbUu973Ybs2_1iGqnOSyF09QZDQY5C-ymfEUTPUbfIWBDu8dARIasnlAayTwZG9zts8xsZUaLHgQSNqicfq5yLKMJwZlPH933VA9Ly_DKPlSNLQENFe-_5vcE8wJe3lw-HtaHU4TvD9PMMu2YQzFQu8x5S3cp3ip1DkgvfkSFJZghHkTbwCD8ElfuOUTJ3T5noXg3c9m1_ISFbw';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.auth.getAccessTokenSilently().pipe(
      take(1),
      map((auth0Token) =>
        req.clone({
          // headers: req.headers.set('Authorization', auth0Token),
          headers: req.headers.set('Authorization', accessToken),
        })
      ),
      switchMap((authReq) => next.handle(authReq)),
    );
  }
}

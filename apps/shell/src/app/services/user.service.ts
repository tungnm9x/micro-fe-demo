import { Observable, map } from 'rxjs';
import {
  ResponseData,
  QueryCurrentUserDocs, 
  ExecuteGraphqlService
} from '@micro-fe-test/graphql';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    constructor(private executeGraphqlService: ExecuteGraphqlService) {}

  currentUser(): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryCurrentUserDocs
    }).pipe(map(({response}) => response));
  }
}

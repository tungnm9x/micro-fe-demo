import { Injectable } from '@angular/core';
import {
  QueryHotelListArgs,
  ResponseData,
  QueryHotelListDocs, 
  ExecuteGraphqlService
} from '@micro-fe-test/graphql';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private executeGraphqlService: ExecuteGraphqlService) {}

  hotelList(variables: QueryHotelListArgs): Observable<ResponseData> {
    return this.executeGraphqlService
      .runQuery({
        query: QueryHotelListDocs,
        variables,
      })
      .pipe(map(({ response }) => response));
  }
}

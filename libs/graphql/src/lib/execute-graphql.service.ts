import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DocumentNode } from 'graphql';

interface FetchQueryOptions
{
  query: DocumentNode;
  variables?: any;
}

interface MutationOptions
{
  mutation: DocumentNode;
  variables?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ExecuteGraphqlService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    })
  };

  private api = `${environment.apiURL}/graphql`;

  constructor(private http: HttpClient)
  {
  }

  runQuery({query, variables}: FetchQueryOptions)
  {
    return this.http.post(this.api, {
      query: query?.loc?.source?.body,
      variables
    }, this.httpOptions)
      .pipe(map(({data}: any) => data));
  }

  runMutation({mutation, variables}: MutationOptions)
  {
    return this.http.post(this.api, {
      query: mutation?.loc?.source?.body,
      variables
    }, this.httpOptions)
      .pipe(map(({data}: any) => data));
  }
}

import { HotelService } from './hotel.service';
import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as HotelActions from './hotel.actions';
import { Hotel } from '@micro-fe-test/graphql';

@Injectable()
export class HotelEffects {
  private actions$ = inject(Actions);

  constructor(
    private hotelService: HotelService
  ) {

  }

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HotelActions.initHotel),
      switchMap(() => {
        return this.hotelService.hotelList({
          filter: null
        }).pipe(
          map(res => HotelActions.loadHotelSuccess({hotel: res?.data as Hotel[]}))
        )
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(HotelActions.loadHotelFailure({ error }));
      })
    )
  );
}

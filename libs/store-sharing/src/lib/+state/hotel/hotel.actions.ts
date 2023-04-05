import { createAction, props } from '@ngrx/store';
import { Hotel } from '@micro-fe-test/graphql';

export const initHotel = createAction('[Hotel Page] Init');

export const loadHotelSuccess = createAction(
  '[Hotel/API] Load Hotel Success',
  props<{ hotel: Hotel[] }>()
);

export const loadHotelFailure = createAction(
  '[Hotel/API] Load Hotel Failure',
  props<{ error: any }>()
);

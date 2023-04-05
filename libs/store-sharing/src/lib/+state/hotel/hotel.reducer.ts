import { createReducer, on, Action } from '@ngrx/store';

import * as HotelActions from './hotel.actions';
import { HotelState } from './hotel.models';


export const HOTEL_FEATURE_KEY = 'hotel';


export interface HotelPartialState {
  readonly [HOTEL_FEATURE_KEY]: HotelState;
}

const initialHotelState: HotelState = {
  data: {
    hotelList: null,
    hotelSelected: null,
  },
  isLoading: false,
  error: null
};


const reducer = createReducer(
  initialHotelState,
  on(HotelActions.initHotel, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(HotelActions.loadHotelSuccess, (state, { hotel }) =>
  ({
    ...state,
    isLoading: false,
    data: {
      ...state.data,
      hotelList: hotel
    }
  })
  ),
  on(HotelActions.loadHotelFailure, (state, { error }) => ({ ...state, error }))
);

export function hotelReducer(state: HotelState | undefined, action: Action) {
  return reducer(state, action);
}

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
    cockpitSalesPlan: null,
    ratePlanList: null
  },
  isLoading: false,
  error: null
};


const reducer = createReducer(
  initialHotelState,
  on(HotelActions.initHotel, (state) => ({
    ...state,
    isLoading: true,
    data: {
      ...state.data,
      hotelList: null
    }
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
  on(HotelActions.loadHotelFailure, (state, { error }) => ({ ...state, error })),
  on(HotelActions.loadCockpitSalesPlanList, (state) => ({
    ...state,
    isLoading: true,
    data: {
      ...state.data,
      cockpitSalesPlan: null
    }
  })),
  on(HotelActions.loadedCockpitSalesPlanListSuccessfully, (state, {cockpitSalesPlan}) => ({
    ...state,
    isLoading: false,
    data: {
      ...state.data,
      cockpitSalesPlan
    }
  })),
  on(HotelActions.loadRatePlanList, (state) => ({
    ...state,
    isLoading: true,
    data: {
      ...state.data,
      ratePlanList: null
    }
  })),
  on(HotelActions.loadedRatePlanListSuccessfully, (state, {ratePlans}) => ({
    ...state,
    isLoading: false,
    data: {
      ...state.data,
      ratePlanList: ratePlans
    }
  })),
);

export function hotelReducer(state: HotelState | undefined, action: Action) {
  return reducer(state, action);
}

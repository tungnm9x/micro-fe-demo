import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HOTEL_FEATURE_KEY } from './hotel.reducer';
import { HotelState } from './hotel.models';

// Lookup the 'Hotel' feature state managed by NgRx
export const selectHotelState =
  createFeatureSelector<HotelState>(HOTEL_FEATURE_KEY);

export const selectHotelLoaded = createSelector(
  selectHotelState,
  (state: HotelState) => state.isLoading
);

export const selectAllHotel = createSelector(
  selectHotelState,
  (state: HotelState) =>state?.data?.hotelList
);
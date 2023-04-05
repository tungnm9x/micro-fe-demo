import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHotel from './+state/hotel/hotel.reducer';
import { HotelEffects } from './+state/hotel/hotel.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromHotel.HOTEL_FEATURE_KEY, fromHotel.hotelReducer),
    EffectsModule.forFeature([HotelEffects]),
  ],
})
export class StoreSharingModule {}

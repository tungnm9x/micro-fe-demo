import { createAction, props } from '@ngrx/store';
import { ExtranetRatePlanFilter, Hotel, QueryWeeklyOverviewListArgs, RatePlan, WeeklyOverview } from '@micro-fe-test/graphql';

export const initHotel = createAction('[Hotel Page] Init');

export const loadHotelSuccess = createAction(
  '[Hotel/API] Load Hotel Success',
  props<{ hotel: Hotel[] }>()
);

export const loadHotelFailure = createAction(
  '[Hotel/API] Load Hotel Failure',
  props<{ error: any }>()
);

export const loadCockpitSalesPlanList = createAction(
  '[Hotel/API] Load cockpit sales plan list',
  props<{
    hotelCode: string,
    ratePlanIdList: string[],
    fromDate: string,
    toDate: string,
    guestCount: number,
    hasIncludedServicesInPrice: boolean,
    hasCityTaxInPrice: boolean
  }>()
);

export const loadedCockpitSalesPlanListSuccessfully = createAction(
  '[Hotel/API] Loaded cockpit sales plan list successfully',
  props<{ cockpitSalesPlan: any[] }>()
);

export const loadRatePlanList = createAction(
  '[Hotel/API] Load rate plan list',
  props<{ filter: ExtranetRatePlanFilter }>()
);

export const loadedRatePlanListSuccessfully = createAction(
  '[Hotel/API] Loaded rate plan list successfully',
  props<{ ratePlans: RatePlan[], count: number, totalPage: number }>()
);

export const loadWeeklyOverview = createAction(
  '[Hotel/API] load weekly overview',
  props<{ variables: QueryWeeklyOverviewListArgs }>()
);

export const loadedWeeklyOverviewSuccessfully = createAction(
  '[Hotel/API] loaded weekly overview successfully',
  props<{ weeklyOverview: WeeklyOverview[] }>()
);
import { HotelService } from './hotel.service';
import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, combineLatest } from 'rxjs';
import * as HotelActions from './hotel.actions';
import {
  DailyRatePlanAdjustment,
  DailySalesPlanPricingBreakdown,
  DistributionChannel,
  Hotel,
  RatePlan,
  RatePlanCxlPolicyDaily,
  RatePlanHotelExtrasDaily,
  RatePlanPaymentTermDaily,
  RatePlanRestrictionCodeEnum,
  RatePlanRestrictionsDaily,
  SalesPlanSellabilityAdjustment,
} from '@micro-fe-test/graphql';
import * as moment from 'moment';
import { chain } from 'lodash';
import { CockpitType } from '../../models/cockpit-summary-item';

@Injectable()
export class HotelEffects {
  private actions$ = inject(Actions);

  constructor(private hotelService: HotelService) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HotelActions.initHotel),
      switchMap(() => {
        return this.hotelService
          .hotelList({
            filter: null,
          })
          .pipe(
            map((res) =>
              HotelActions.loadHotelSuccess({ hotel: res?.data as Hotel[] })
            )
          );
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(HotelActions.loadHotelFailure({ error }));
      })
    )
  );

  loadCockpitSalesPlanList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HotelActions.loadCockpitSalesPlanList),
      switchMap(
        ({
          hotelCode,
          ratePlanIdList,
          fromDate,
          toDate,
          guestCount,
          hasIncludedServicesInPrice,
          hasCityTaxInPrice,
        }) => {
          return combineLatest([
            this.hotelService.ratePlanRestrictionsDailyList({
              filter: {
                hotelCode,
                fromDate,
                toDate,
                ratePlanIdList,
              },
            }),
            this.hotelService.ratePlanHotelExtraDailyList({
              filter: {
                hotelCode,
                ratePlanIdList,
                fromDate,
                toDate,
              },
            }),
            this.hotelService.dailyRatePlanAdjustmentList({
              filter: {
                hotelCode,
                ratePlanIdList,
                fromDate,
                toDate,
              },
            }),
            this.hotelService.ratePlanPaymentTermDailyList({
              filter: {
                hotelCode,
                ratePlanIdList,
                fromDate,
                toDate,
              },
            }),
            this.hotelService.ratePlanCxlPolicyDailyList({
              filter: {
                hotelCode,
                ratePlanIdList,
                fromDate,
                toDate,
              },
            }),
            this.hotelService.dailySalesPlanSellabilityList({
              filter: {
                propertyCode: hotelCode,
                distributionChannelList: [
                  DistributionChannel.GvSalesEngine,
                  DistributionChannel.GvVoice,
                ],
                fromDate,
                toDate,
                salesPlanIdList: ratePlanIdList,
              },
            }),
            this.hotelService.dailySalesPlanPricingBreakdown({
              filter: {
                propertyCode: hotelCode,
                salesPlanIdList: ratePlanIdList,
                fromDate,
                toDate,
                isFollowingRetailStrategy: false,
                hasPriceCombinedByDate: false,
                guestCount,
                hasIncludedServicesInPrice,
                hasCityTaxInPrice,
              },
            }),
          ]).pipe(
            map((res) =>
              HotelActions.loadedCockpitSalesPlanListSuccessfully({
                cockpitSalesPlan: [
                  {
                    name: 'Open/Closed',
                    type: CockpitType.SELLABILITY,
                    values: chain(
                      res[5]?.data as SalesPlanSellabilityAdjustment[]
                    )
                      .groupBy('date')
                      .map((value, key) => ({
                        date: key,
                        value,
                      }))
                      .value(),
                  },
                  {
                    name: 'Lowest price - Highest price',
                    type: CockpitType.LOWEST_HIGHEST_PRICE,
                    values: chain(
                      res[6]?.data as DailySalesPlanPricingBreakdown[]
                    )
                      .groupBy('date')
                      .map((value, key) => ({
                        date: key,
                        value,
                      }))
                      .value(),
                  },
                  {
                    name: 'Included services',
                    type: CockpitType.INCLUDED_SERVICES,
                    values: chain(res[1]?.data as RatePlanHotelExtrasDaily[])
                      .groupBy('date')
                      .map((value, key) => ({
                        date: key,
                        value,
                      }))
                      .value(),
                  },
                  {
                    name: 'Sales plan adjustment',
                    type: CockpitType.SALES_PLAN_ADJUSTMENT,
                    values: chain(res[2]?.data as DailyRatePlanAdjustment[])
                      .groupBy('date')
                      .map((value, key) => ({
                        date: key,
                        value,
                      }))
                      .value(),
                  },
                  {
                    name: 'Sales Plan Restrictions',
                    type: CockpitType.SALES_PLAN_RESTRICTION,
                    values: res[0]?.data as RatePlanRestrictionsDaily[],
                  },
                  {
                    name: 'Minimum Length of Stays',
                    type: CockpitType.RESTRICTION_TYPE,
                    parentType: CockpitType.SALES_PLAN_RESTRICTION,
                    value: {
                      data: res[0]?.data as RatePlanRestrictionsDaily[],
                      code: RatePlanRestrictionCodeEnum.RstrLosMin,
                    },
                  },
                  {
                    name: 'Maximum Length of Stays',
                    type: CockpitType.RESTRICTION_TYPE,
                    parentType: CockpitType.SALES_PLAN_RESTRICTION,
                    value: {
                      data: res[0]?.data as RatePlanRestrictionsDaily[],
                      code: RatePlanRestrictionCodeEnum.RstrLosMax,
                    },
                  },
                  {
                    name: 'Close to Arrival',
                    type: CockpitType.RESTRICTION_TYPE,
                    parentType: CockpitType.SALES_PLAN_RESTRICTION,
                    value: {
                      data: res[0]?.data as RatePlanRestrictionsDaily[],
                      code: RatePlanRestrictionCodeEnum.RstrCloseToArrival,
                    },
                  },
                  {
                    name: 'Close to Departure',
                    type: CockpitType.RESTRICTION_TYPE,
                    parentType: CockpitType.SALES_PLAN_RESTRICTION,
                    value: {
                      data: res[0]?.data as RatePlanRestrictionsDaily[],
                      code: RatePlanRestrictionCodeEnum.RstrCloseToDeparture,
                    },
                  },
                  {
                    name: 'Minimum Length of Stay Through',
                    type: CockpitType.RESTRICTION_TYPE,
                    parentType: CockpitType.SALES_PLAN_RESTRICTION,
                    value: {
                      data: res[0]?.data as RatePlanRestrictionsDaily[],
                      code: RatePlanRestrictionCodeEnum.RstrMinLosThrough,
                    },
                  },
                  {
                    name: 'Minimum Advance Booking Time',
                    type: CockpitType.RESTRICTION_TYPE,
                    parentType: CockpitType.SALES_PLAN_RESTRICTION,
                    value: {
                      data: res[0]?.data as RatePlanRestrictionsDaily[],
                      code: RatePlanRestrictionCodeEnum.RstrMinAdvanceBooking,
                    },
                  },
                  {
                    name: 'Maximum Advance Booking Time',
                    type: CockpitType.RESTRICTION_TYPE,
                    parentType: CockpitType.SALES_PLAN_RESTRICTION,
                    value: {
                      data: res[0]?.data as RatePlanRestrictionsDaily[],
                      code: RatePlanRestrictionCodeEnum.RstrMaxAdvanceBooking,
                    },
                  },
                  {
                    name: 'Payment term',
                    type: CockpitType.PAYMENT_TERM,
                    values: chain(res[3]?.data as RatePlanPaymentTermDaily[])
                      .groupBy('date')
                      .map((value, key) => ({
                        date: key,
                        value,
                      }))
                      .value(),
                  },
                  {
                    name: 'CXL policy',
                    type: CockpitType.CXL_POLICY,
                    values: chain(res[4]?.data as RatePlanCxlPolicyDaily[])
                      .groupBy('date')
                      .map((value, key) => ({
                        date: key,
                        value,
                      }))
                      .value(),
                  },
                ],
              })
            )
          );
        }
      )
    )
  );

  loadRatePlanList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HotelActions.loadRatePlanList),
      switchMap(({ filter }) =>
        this.hotelService.ratePlanList({ filter }).pipe(
          map((res) =>
            HotelActions.loadedRatePlanListSuccessfully({
              ratePlans: res?.data as RatePlan[],
              count: res?.count,
              totalPage: res?.totalPage,
            })
          )
        )
      )
    )
  );
}

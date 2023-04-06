import { Injectable } from '@angular/core';
import { ExecuteGraphqlService, QueryDailyRatePlanAdjustmentListArgs, QueryDailyRatePlanAdjustmentListDocs, QueryDailySalesPlanPricingBreakdownArgs, QueryDailySalesPlanPricingBreakdownDocs, QueryDailySalesPlanSellabilityListArgs, QueryDailySalesPlanSellabilityListDocs, QueryHotelListArgs, QueryHotelListDocs, QueryRatePlanCxlPolicyDailyListArgs, QueryRatePlanCxlPolicyDailyListDocs, QueryRatePlanHotelExtrasDailyListArgs, QueryRatePlanHotelExtrasDailyListDocs, QueryRatePlanListArgs, QueryRatePlanListDocs, QueryRatePlanPaymentTermDailyListArgs, QueryRatePlanPaymentTermDailyListDocs, QueryRatePlanRestrictionsDailyListArgs, QueryRatePlanRestrictionsDailyListDocs, QueryWeeklyOverviewListArgs, QueryWeeklyOverviewListDocs, RatePlanExpandEnum, ResponseData } from '@micro-fe-test/graphql';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
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

  ratePlanList(variables: QueryRatePlanListArgs): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryRatePlanListDocs,
      variables: {
        filter: {
          ...variables.filter,
          expand: [
            RatePlanExpandEnum.Payment,
            RatePlanExpandEnum.CancellationPolicy,
            RatePlanExpandEnum.Translation,
            RatePlanExpandEnum.DerivedSetting
          ]
        }
      }
    }).pipe(map(({response}) => response));
  }

  ratePlanRestrictionsDailyList(variables: QueryRatePlanRestrictionsDailyListArgs): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryRatePlanRestrictionsDailyListDocs,
      variables
    }).pipe(map(({response}) => response));
  }

  ratePlanHotelExtraDailyList(variables: QueryRatePlanHotelExtrasDailyListArgs): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryRatePlanHotelExtrasDailyListDocs,
      variables
    }).pipe(map(({response}) => response));
  }

  ratePlanCxlPolicyDailyList(variables: QueryRatePlanCxlPolicyDailyListArgs): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryRatePlanCxlPolicyDailyListDocs,
      variables
    }).pipe(map(({response}) => response));
  }

  ratePlanPaymentTermDailyList(variables: QueryRatePlanPaymentTermDailyListArgs): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryRatePlanPaymentTermDailyListDocs,
      variables
    }).pipe(map(({response}) => response));
  }

  dailySalesPlanSellabilityList(variables: QueryDailySalesPlanSellabilityListArgs): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryDailySalesPlanSellabilityListDocs,
      variables
    }).pipe(map(({response}) => response));
  }

  dailySalesPlanPricingBreakdown(variables: QueryDailySalesPlanPricingBreakdownArgs): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryDailySalesPlanPricingBreakdownDocs,
      variables
    }).pipe(map(({response}) => response));
  }

  dailyRatePlanAdjustmentList(variables: QueryDailyRatePlanAdjustmentListArgs): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryDailyRatePlanAdjustmentListDocs,
      variables
    }).pipe(map(({response}) => response));
  }

  weeklyOverviewList(variables: QueryWeeklyOverviewListArgs): Observable<ResponseData> {
    return this.executeGraphqlService.runQuery({
      query: QueryWeeklyOverviewListDocs,
      variables: {
        filter: {
          ...variables.filter,

        }
      }
    }).pipe(map(({response}) => response));
  }
}

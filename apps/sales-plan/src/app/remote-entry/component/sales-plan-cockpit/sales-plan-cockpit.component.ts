import { Store, select } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RatePlan, RatePlanPricingMethodologyEnum, RatePlanRestrictionCodeEnum, RatePlanStatusEnum, RatePlanTypeEnum } from '@micro-fe-test/graphql';
import { Observable, combineLatest, map, skipWhile, tap } from 'rxjs';
import { CockpitType, loadCockpitSalesPlanList, loadRatePlanList, selectorCockpitSalesPlanList, selectorRatePlanList } from '@micro-fe-test/store-sharing';
import * as moment from 'moment';

@Component({
  selector: 'micro-fe-test-sales-plan-cockpit',
  templateUrl: './sales-plan-cockpit.component.html',
  styleUrls: ['./sales-plan-cockpit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesPlanCockpitComponent implements OnInit {

  dateDefault = new Date();
  ratePlanType = RatePlanTypeEnum;
  cockpitSalesPlanList$ = this.store.pipe(
    select(selectorCockpitSalesPlanList)
  );
  
  ratePlanList$: Observable<RatePlan[]> = this.store.pipe(
    select(selectorRatePlanList),
    map(data => {
      if (data)
      {
        // public sales plan
        const publicSalesPlan = this.sortSalesPlan(data, RatePlanTypeEnum.Public);
        // promotion
        const promotionSalesPlan = this.sortSalesPlan(data, RatePlanTypeEnum.Promotion);
        // corporate
        const corporateSalesPlan = this.sortSalesPlan(data, RatePlanTypeEnum.Corporate);
        // group
        const groupSalesPlan = this.sortSalesPlan(data, RatePlanTypeEnum.Group);
        const archiveSalesPlan = data?.filter(x => x?.status === RatePlanStatusEnum.Archive) || [];
        return [...new Set([
          ...publicSalesPlan,
          ...promotionSalesPlan,
          ...corporateSalesPlan,
          ...groupSalesPlan,
          ...archiveSalesPlan
        ])];
      }
    }),
    skipWhile(data => !data),
    tap(data => {
      if (data)
      {
        this.store.dispatch(loadCockpitSalesPlanList({
          ratePlanIdList: data?.map(x => x?.id),
          fromDate: moment(this.dateDefault).format('YYYY-MM-DD'),
          toDate: moment(this.dateDefault).add(6, 'days').format('YYYY-MM-DD'),
          hotelCode: 'GVCGNART',
          hasCityTaxInPrice: true,
          guestCount: 1,
          hasIncludedServicesInPrice: true
        }));
      }
    })
  );

  salesPlanCockpitDetailList$ = combineLatest([
    this.ratePlanList$,
    this.cockpitSalesPlanList$
  ]).pipe(
    skipWhile(([ratePlan, cockpit]) => !ratePlan || !cockpit),
    map(([ratePlan, cockpit]) => {
      return ratePlan?.map(x => {
        return {
          ...x,
          summary: cockpit?.map(y => {
            switch (y?.type)
            {
              case CockpitType.SELLABILITY:
                return {
                  ...y,
                  values: y?.values?.map(z => {
                    return z?.value?.filter(i => i?.salesPlanId === x?.id)?.map(j => ({
                      distributionChannel: j?.distributionChannel,
                      isSellable: j?.isSellable,
                      isAdjusted: j?.isAdjusted
                    }));
                  })
                };
              case CockpitType.LOWEST_HIGHEST_PRICE:
                return {
                  ...y,
                  values: y?.values?.map(z => {
                    const found = z?.value?.find(i => i?.salesPlanId === x?.id);
                    return {
                      lowestPrice: found?.lowestPrice,
                      highestPrice: found?.highestPrice,
                    };
                  })
                };
              case CockpitType.SALES_PLAN_ADJUSTMENT:
                return {
                  ...y,
                  values: y?.values?.map(z => {
                    const found = z?.value?.find(i => i?.ratePlanId === x?.id);
                    return {
                      value: found?.value,
                      isAdjusted: found?.isAdjusted,
                      unit: found?.unit
                    };
                  })
                };
              case CockpitType.PAYMENT_TERM:
                return {
                  ...y,
                  values: y?.values?.map(z => {
                    const found = z?.value?.find(i => i?.ratePlanId === x?.id);
                    return {
                      paymentTermCode: found?.paymentTermCode,
                      isAdjusted: found?.isAdjusted,
                    };
                  })
                };
              case CockpitType.CXL_POLICY:
                return {
                  ...y,
                  values: y?.values?.map(z => {
                    const found = z?.value?.find(i => i?.ratePlanId === x?.id);
                    return {
                      cxlPolicyCode: found?.cxlPolicyCode,
                      isAdjusted: found?.isAdjusted,
                    };
                  })
                };
              case CockpitType.SALES_PLAN_RESTRICTION:
                return {
                  ...y,
                  values: y?.values?.find(z => z?.ratePlanId === x?.id)?.dailyRestrictionList?.map(i => {
                    const tmp = [];
                    const restrictionList = i?.restrictionList;
                    if (restrictionList?.length > 0)
                    {
                      const ctaRestriction = restrictionList.find(j => j?.code === RatePlanRestrictionCodeEnum.RstrCloseToArrival);

                      if (ctaRestriction)
                      {
                        tmp.push('CTA');
                      }

                      const ctdRestriction = restrictionList.find(j => j?.code === RatePlanRestrictionCodeEnum.RstrCloseToDeparture);

                      if (ctdRestriction)
                      {
                        tmp.push('CTD');
                      }

                      const minLosRestriction = restrictionList.find(j => j?.code === RatePlanRestrictionCodeEnum.RstrLosMin);

                      if (minLosRestriction)
                      {
                        tmp.push(`MinLOS ${minLosRestriction?.value}`);
                      }

                      const maxLosRestriction = restrictionList.find(j => j?.code === RatePlanRestrictionCodeEnum.RstrLosMax);

                      if (maxLosRestriction)
                      {
                        tmp.push(`MaxLOS ${maxLosRestriction?.value}`);
                      }

                      const lstRestriction = restrictionList.find(j => j?.code === RatePlanRestrictionCodeEnum.RstrMinLosThrough);

                      if (lstRestriction)
                      {
                        tmp.push(`LST ${lstRestriction?.value}`);
                      }

                      const minAdvancePurchase = restrictionList.find(j => j?.code === RatePlanRestrictionCodeEnum.RstrMinAdvanceBooking);

                      if (minAdvancePurchase)
                      {
                        tmp.push(`MinAdv. ${minAdvancePurchase?.value}`);
                      }

                      const maxAdvancePurchase = restrictionList.find(j => j?.code === RatePlanRestrictionCodeEnum.RstrMaxAdvanceBooking);

                      if (maxAdvancePurchase)
                      {
                        tmp.push(`MaxAdv. ${maxAdvancePurchase?.value}`);
                      }
                    }
                    return {
                      value: tmp?.join(', ') || '--',
                      isAdjusted: i?.restrictionList?.some(j => j?.isAdjusted)
                    };
                  })
                };
              case CockpitType.RESTRICTION_TYPE:
                return {
                  ...y,
                  values: y?.value?.data?.find(z => z?.ratePlanId === x?.id)?.dailyRestrictionList?.map(item => ({
                    value: item?.restrictionList
                      ?.find(resItem => resItem?.code === y?.value?.code)?.value || '--',
                    type: y?.value?.code,
                    isAdjusted: item?.restrictionList
                      ?.find(resItem => resItem?.code === y?.value?.code)?.isAdjusted || false
                  }))
                };
              case CockpitType.INCLUDED_SERVICES:
                return {
                  ...y,
                  values: y?.values?.map(z => {
                    const found = z?.value?.find(i => i?.ratePlanId === x?.id);
                    return {
                      value: found?.hotelExtrasList || [],
                      isAdjusted: found?.isAdjusted
                    };
                  })
                };
              default:
                return y;
            }
          })
        };
      });
    })
  );

  constructor(
    private store: Store
  ) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadRatePlanList({filter: {
      hotelCode: 'GVCGNART'
    }}));
  }

  sortSalesPlan(salesPlanList: RatePlan[], type: RatePlanTypeEnum): RatePlan[] {
    const result = [];
    // public sales plan by type
    const salesPlanPublicType = salesPlanList
      ?.filter(x => x?.status === RatePlanStatusEnum.Active
        && x?.pricingMethodology === RatePlanPricingMethodologyEnum.FeatureBasedPricing
        && x?.type === type
      ) || [];

    // derived sales plan by type
    const derivedSalesPlanType = salesPlanList
      ?.filter(x => x?.status === RatePlanStatusEnum.Active
        && x?.pricingMethodology !== RatePlanPricingMethodologyEnum.FeatureBasedPricing
        && x?.type === type
      ) || [];

    const salesPlanIds = salesPlanPublicType?.map(x => x?.id);
    const derivedSalesPlanPublicType = salesPlanList?.filter(x => x?.status === RatePlanStatusEnum.Active
      && x?.pricingMethodology === RatePlanPricingMethodologyEnum.DerivedPricing
      && x?.type === type
      && salesPlanIds?.includes(x?.ratePlanDerivedSetting?.derivedRatePlanId)
    ) || [];

    for (const item of salesPlanPublicType)
    {
      const findDerived = derivedSalesPlanPublicType?.filter(x => x?.ratePlanDerivedSetting?.derivedRatePlanId === item?.id);
      if (findDerived)
      {
        result.push(item);
        result.push(...findDerived);
      }
    }

    result.push(...salesPlanPublicType);
    result.push(...derivedSalesPlanType);
    return [...new Set([...result])];
  }

  onRefresh(): void {
    this.store.dispatch(loadRatePlanList({filter: {}}));
  }
}

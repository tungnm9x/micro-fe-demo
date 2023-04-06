import {Pipe, PipeTransform} from '@angular/core';
import { RatePlan } from '@micro-fe-test/graphql';

@Pipe({
  name: 'getDerivedSalesPlan'
})
export class GetDerivedSalesPlanPipe implements PipeTransform
{

  transform(value: RatePlan[], currentRatePlan: RatePlan): RatePlan {
    if (value?.length > 0)
    {
      const derivedRatePlan = currentRatePlan?.ratePlanDerivedSetting?.derivedRatePlanId;
      return derivedRatePlan ? value?.find(x => x?.id === derivedRatePlan) : null;
    }
    return null;
  }

}

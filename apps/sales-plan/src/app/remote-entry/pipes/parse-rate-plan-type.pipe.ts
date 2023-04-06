import { Pipe, PipeTransform } from '@angular/core';
import { RatePlanTypeEnum } from '@micro-fe-test/graphql';

@Pipe({
  name: 'parseRatePlanType'
})
export class ParseRatePlanTypePipe implements PipeTransform {

  transform(ratePlanType: RatePlanTypeEnum): string {
    switch (ratePlanType)
    {
      case RatePlanTypeEnum.Corporate:
        return 'Corporate';
      case RatePlanTypeEnum.Group:
        return 'Group';
      case RatePlanTypeEnum.Promotion:
        return 'Promotion';
      default:
        return 'Public';
    }
  }

}

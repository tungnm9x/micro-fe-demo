import {Pipe, PipeTransform} from '@angular/core';
import { RatePlanAdjustment, RatePlanAdjustmentUnitEnum } from '@micro-fe-test/graphql';

@Pipe({
  name: 'adjustmentValue'
})
export class AdjustmentValuePipe implements PipeTransform
{

  transform(ratePlanAdjustment: RatePlanAdjustment): string {
    if (!ratePlanAdjustment?.value || isNaN(ratePlanAdjustment?.value))
    {
      return null;
    }

    if (ratePlanAdjustment?.unit === RatePlanAdjustmentUnitEnum.Percentage)
    {
      return `${ratePlanAdjustment?.value}%`;
    }
    else
    {
      return `${ratePlanAdjustment?.value?.toFixed(2)}`;
    }
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import { RatePlanRfcCount } from '@micro-fe-test/graphql';

@Pipe({
  name: 'getRfcCountByType'
})
export class GetRfcCountByTypePipe implements PipeTransform
{

  transform(value: RatePlanRfcCount[], rfcType: string): number {
    if (value?.length > 0)
    {
      return value.find(x => x?.rfcType === rfcType)?.count;
    }
    return null;
  }

}

import {Pipe, PipeTransform} from '@angular/core';
import { DistributionChannel } from '@micro-fe-test/graphql';

@Pipe({
  name: 'getSalesPlanSellable'
})
export class GetSalesPlanSellablePipe implements PipeTransform
{

  transform(value: { distributionChannel: DistributionChannel; isSellable: boolean; isAdjusted: boolean; }[], channel: DistributionChannel): boolean {
    return value?.find(x => x?.distributionChannel === channel)?.isSellable;
  }

}

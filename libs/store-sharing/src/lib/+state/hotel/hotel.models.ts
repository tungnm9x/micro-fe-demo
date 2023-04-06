import { Hotel, RatePlan } from '@micro-fe-test/graphql';
import { CockpitSummaryItem } from '../../models/cockpit-summary-item';
export interface HotelState {
  data: {
    hotelList: Hotel[];
    hotelSelected: Hotel;
    cockpitSalesPlan: CockpitSummaryItem[];
    ratePlanList: RatePlan[];
  };
  error: string;
  isLoading: boolean;
}

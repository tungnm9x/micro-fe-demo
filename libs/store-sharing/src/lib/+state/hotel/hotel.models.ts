import { Hotel, RatePlan, WeeklyOverview } from '@micro-fe-test/graphql';
import { CockpitSummaryItem } from '../../models/CockpitSummaryItem';
export interface HotelState {
  data: {
    hotelList: Hotel[];
    hotelSelected: Hotel;
    cockpitSalesPlan: CockpitSummaryItem[];
    ratePlanList: RatePlan[];
    weeklyOverview: WeeklyOverview[];
  };
  error: string;
  isLoading: boolean;
}

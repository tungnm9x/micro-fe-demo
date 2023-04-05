import { Hotel } from '@micro-fe-test/graphql';
export interface HotelState {
  data: {
    hotelList: Hotel[];
    hotelSelected: Hotel;
  };
  error: string;
  isLoading: boolean;
}

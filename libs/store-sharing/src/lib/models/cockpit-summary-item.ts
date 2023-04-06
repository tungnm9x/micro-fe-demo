export enum CockpitType
{
  NORMAL = 'Normal',
  OCCUPANCY = 'Occupancy',
  ADR = 'ADR',
  PROPERTY_RESTRICTION = 'Property restriction',
  LOWEST_PRICE = 'Lowest price',
  RESTRICTION_READ_ONLY = 'Restriction readonly',
  SEVEN_OCC_TREND = 'Seven day occ trend',
  SEVEN_ADR_PICK_UP = 'Seven day adr pickup',
  SELLABILITY = 'Sellability',
  SALES_PLAN_ADJUSTMENT = 'Sales plan adjustment',
  INCLUDED_SERVICES = 'Included services',
  SALES_PLAN_RESTRICTION = 'Sales plan restriction',
  PAYMENT_TERM = 'Payment term',
  CXL_POLICY = 'Cancellation policy',
  RESTRICTION_TYPE = 'Restriction type',
  LOWEST_HIGHEST_PRICE = 'Lowest and highest price',
}

export interface CockpitSummaryItem
{
  name: string;
  type?: CockpitType;
  values: number[] | string[] | { amount: string; percentage: number }[] | { value: string; type: string; }[] | any[];
  value?: any;
  parentType?: CockpitType;
}

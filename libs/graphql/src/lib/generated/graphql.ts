export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  Date: any;
  DateTime: any;
  JSON: any;
  Long: any;
  UUID: any;
}

export enum AmenityAvailabilityEnum {
  Daily = 'DAILY',
  OnlyOnArrival = 'ONLY_ON_ARRIVAL',
  OnlyOnDeparture = 'ONLY_ON_DEPARTURE'
}

export interface AmenityReservation {
  ageCategory?: Maybe<HotelAgeCategory>;
  ageCategoryCode?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['BigDecimal']>;
}

export interface AmenityReservationInput {
  ageCategoryCode?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
}

export enum AmenitySellingTypeEnum {
  Combo = 'COMBO',
  Single = 'SINGLE'
}

export enum AmenityStatusEnum {
  Available = 'AVAILABLE',
  UnAvailable = 'UN_AVAILABLE'
}

export interface AmenityTranslation {
  amenityId?: Maybe<Scalars['UUID']>;
  description?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  languageCode?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
}

export interface AmenityTranslationInput {
  description?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
}

export enum AmenityTypeEnum {
  Amenity = 'AMENITY',
  ExtraBed = 'EXTRA_BED',
  MealPlan = 'MEAL_PLAN',
  Service = 'SERVICE'
}

export interface AssignHotelFeatureInput {
  featureType?: InputMaybe<FeatureTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  templateFeatureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface AssignHotelTagInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelRetailFeatureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  id?: InputMaybe<Scalars['UUID']>;
  templateRetailFeatureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface AssignMrfcMappingInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  mrfcId: Scalars['UUID'];
  mrfcMappingList?: InputMaybe<Array<InputMaybe<MrfcMappingInput>>>;
}

export interface AssignRoomFeatureInput {
  featureList?: InputMaybe<Array<InputMaybe<TemplateFeatureInput>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  roomIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface AuditBookingProposalInput {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface AuditReservationRoomStatusInput {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface AuthorizationTokenRequest {
  authorizationCode?: InputMaybe<Scalars['String']>;
  connectorId?: InputMaybe<Scalars['UUID']>;
  connectorType?: InputMaybe<ConnectorTypeEnum>;
  organisationId?: InputMaybe<Scalars['UUID']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
}

export interface AutomatePricingDestination {
  code?: Maybe<Scalars['String']>;
  type?: Maybe<ConnectorTypeEnum>;
}

export interface AutomatePricingDestinationInput {
  code?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ConnectorTypeEnum>;
}

export enum AutomatePricingType {
  Average = 'AVERAGE',
  Reference = 'REFERENCE',
  ReverseByPms = 'REVERSE_BY_PMS'
}

export enum AutomatePricingUnit {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export interface AutomatedPricingData {
  adjustmentRate?: Maybe<Scalars['BigDecimal']>;
  automatedRate?: Maybe<Scalars['BigDecimal']>;
  correlatedRate?: Maybe<Scalars['BigDecimal']>;
  isSoldOut?: Maybe<Scalars['Boolean']>;
  masterBaseRate?: Maybe<Scalars['BigDecimal']>;
  roomProductId?: Maybe<Scalars['UUID']>;
}

export interface AvailableRate {
  isRateAdjusted?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['BigDecimal']>;
  rateAdjustmentUnit?: Maybe<RatePlanAdjustmentUnitEnum>;
  rateAdjustmentValue?: Maybe<Scalars['BigDecimal']>;
  ratePlan?: Maybe<RatePlan>;
  rfcRatePlanCode?: Maybe<Scalars['String']>;
  rfcRatePlanId?: Maybe<Scalars['UUID']>;
}

export interface AvailableRoomOption {
  adr?: Maybe<Scalars['BigDecimal']>;
  cxlPolicy?: Maybe<HotelCancellationPolicy>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  isSelected?: Maybe<Scalars['Boolean']>;
  paymentTerm?: Maybe<HotelPaymentTerm>;
  rfc?: Maybe<Rfc>;
  totalPrice?: Maybe<Scalars['BigDecimal']>;
}

export interface AvailableRoomOptionFilter {
  adultNo: Scalars['Int'];
  arrival: Scalars['Date'];
  childrenAgeList?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  departure: Scalars['Date'];
  featureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  hotelCode: Scalars['String'];
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  roomIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface AverageUpsellProfit {
  increasePerUpsellRoomNight?: Maybe<Scalars['BigDecimal']>;
  profit?: Maybe<Scalars['BigDecimal']>;
}

export interface Booking {
  acceptTnc?: Maybe<Scalars['Boolean']>;
  arrival?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['BigDecimal']>;
  booker?: Maybe<Guest>;
  bookingFlow?: Maybe<BookingFlow>;
  bookingLanguage?: Maybe<Scalars['String']>;
  bookingMetadataList?: Maybe<Array<Maybe<BookingMetadata>>>;
  bookingNumber?: Maybe<Scalars['String']>;
  bookingTransactionList?: Maybe<Array<Maybe<BookingTransaction>>>;
  cancellationFee?: Maybe<Scalars['BigDecimal']>;
  channel?: Maybe<Scalars['String']>;
  cityTaxList?: Maybe<Array<Maybe<HotelCityTax>>>;
  cxlPolicy?: Maybe<HotelCancellationPolicy>;
  cxlPolicyCode?: Maybe<Scalars['String']>;
  departure?: Maybe<Scalars['String']>;
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  guaranteeType?: Maybe<Scalars['String']>;
  guestList?: Maybe<Array<Maybe<Guest>>>;
  hotelPaymentModeCode?: Maybe<Scalars['String']>;
  hourPrior?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  occasionList?: Maybe<Array<Maybe<HotelTag>>>;
  paymentTerm?: Maybe<HotelPaymentTerm>;
  paymentTermCode?: Maybe<Scalars['String']>;
  promoCode?: Maybe<Scalars['String']>;
  promoCodeList?: Maybe<Array<Maybe<Scalars['String']>>>;
  proposalSetting?: Maybe<BookingProposalSetting>;
  ratePlanDescription?: Maybe<Scalars['String']>;
  ratePlanDescriptionTranslation?: Maybe<Scalars['String']>;
  ratePlanName?: Maybe<Scalars['String']>;
  ratePlanNameTranslation?: Maybe<Scalars['String']>;
  ratePlanType?: Maybe<Scalars['String']>;
  reservationList?: Maybe<Array<Maybe<Reservation>>>;
  serviceChargeAmount?: Maybe<Scalars['BigDecimal']>;
  source?: Maybe<Scalars['String']>;
  specialRequest?: Maybe<Scalars['String']>;
  status?: Maybe<BookingStatusEnum>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
  travelTagList?: Maybe<Array<Maybe<HotelTag>>>;
  vatAmount?: Maybe<Scalars['BigDecimal']>;
}

export interface BookingChannel {
  channel?: Maybe<Scalars['String']>;
}

export interface BookingConversion {
  stepList?: Maybe<Array<Maybe<BookingConversionStep>>>;
}

export interface BookingConversionFilter {
  adults?: InputMaybe<Scalars['Int']>;
  deviceList?: InputMaybe<Array<InputMaybe<DeviceEnum>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hasChildren?: InputMaybe<Scalars['Boolean']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface BookingConversionItem {
  adr?: Maybe<Scalars['BigDecimal']>;
  averageAdults?: Maybe<Scalars['BigDecimal']>;
  averageExtra?: Maybe<Scalars['BigDecimal']>;
  averageKids?: Maybe<Scalars['BigDecimal']>;
  averageLeadTime?: Maybe<Scalars['BigDecimal']>;
  averageLengthOfStay?: Maybe<Scalars['BigDecimal']>;
  bookings?: Maybe<Scalars['Int']>;
  conversionRate?: Maybe<Scalars['BigDecimal']>;
  name?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['BigDecimal']>;
  roomNights?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
  traffics?: Maybe<Scalars['Int']>;
}

export interface BookingConversionStep {
  itemList?: Maybe<Array<Maybe<BookingConversionItem>>>;
  name?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  /**  only available in last step */
  totalBookings?: Maybe<Scalars['Int']>;
  totalTraffics?: Maybe<Scalars['Int']>;
}

export enum BookingFlow {
  Direct = 'DIRECT',
  LowestPrice = 'LOWEST_PRICE',
  Match = 'MATCH',
  MostPopular = 'MOST_POPULAR',
  Operator = 'OPERATOR',
  Other = 'OTHER',
  Recommended = 'RECOMMENDED',
  Voice = 'VOICE'
}

export interface BookingFlowTrend {
  dailyList?: Maybe<Array<Maybe<BookingFlowTrendDaily>>>;
  totalAverageDailyRate?: Maybe<Scalars['BigDecimal']>;
  totalBookings?: Maybe<Scalars['Int']>;
  totalOccupancyRate?: Maybe<Scalars['BigDecimal']>;
  totalRoomNights?: Maybe<Scalars['Int']>;
}

export interface BookingFlowTrendDaily {
  bookingFlowList?: Maybe<Array<Maybe<BookingFlowTrendFlow>>>;
  date?: Maybe<Scalars['Date']>;
  totalDailyAverageDailyRate?: Maybe<Scalars['BigDecimal']>;
}

export interface BookingFlowTrendFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface BookingFlowTrendFlow {
  averageBooked?: Maybe<Scalars['BigDecimal']>;
  averageDailyRate?: Maybe<Scalars['BigDecimal']>;
  averageLeadTime?: Maybe<Scalars['BigDecimal']>;
  bookingFlow?: Maybe<BookingFlow>;
  occupancyRate?: Maybe<Scalars['BigDecimal']>;
  totalBookings?: Maybe<Scalars['Int']>;
  totalBookingsPercentage?: Maybe<Scalars['BigDecimal']>;
  totalRoomNights?: Maybe<Scalars['Int']>;
}

export interface BookingInformation {
  additionalGuest?: Maybe<Array<Maybe<Guest>>>;
  adrSubTotal?: Maybe<Scalars['BigDecimal']>;
  adrSubTotalBySetting?: Maybe<Scalars['BigDecimal']>;
  arrival?: Maybe<Scalars['Long']>;
  averageDailyRate?: Maybe<Scalars['BigDecimal']>;
  balance?: Maybe<Scalars['BigDecimal']>;
  booker?: Maybe<Guest>;
  bookingAccommodationTaxAmount?: Maybe<Scalars['BigDecimal']>;
  bookingAccommodationTaxList?: Maybe<Array<Maybe<Tax>>>;
  bookingCityTaxList?: Maybe<Array<Maybe<HotelCityTax>>>;
  bookingExtraServiceTaxAmount?: Maybe<Scalars['BigDecimal']>;
  bookingExtraServiceTaxList?: Maybe<Array<Maybe<Tax>>>;
  bookingFlow?: Maybe<BookingFlow>;
  bookingNumber?: Maybe<Scalars['String']>;
  bookingOtherTaxAmount?: Maybe<Scalars['BigDecimal']>;
  bookingOtherTaxList?: Maybe<Array<Maybe<Tax>>>;
  cityTaxAmount?: Maybe<Scalars['BigDecimal']>;
  cityTaxList?: Maybe<Array<Maybe<HotelCityTax>>>;
  currency?: Maybe<Currency>;
  departure?: Maybe<Scalars['Long']>;
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  feeList?: Maybe<Array<Maybe<Fee>>>;
  guaranteeType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  payAtHotelAmount?: Maybe<Scalars['BigDecimal']>;
  payOnConfirmationAmount?: Maybe<Scalars['BigDecimal']>;
  reservationList?: Maybe<Array<Maybe<Reservation>>>;
  serviceChargeAmount?: Maybe<Scalars['BigDecimal']>;
  specialRequest?: Maybe<Scalars['String']>;
  status?: Maybe<BookingStatusEnum>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
  totalSellingRate?: Maybe<Scalars['BigDecimal']>;
  totalSellingRateBySetting?: Maybe<Scalars['BigDecimal']>;
  vatAmount?: Maybe<Scalars['BigDecimal']>;
}

export interface BookingInformationInput {
  additionalGuestList?: InputMaybe<Array<InputMaybe<GuestInformationInput>>>;
  arrival?: InputMaybe<Scalars['Long']>;
  bookingFlow?: InputMaybe<BookingFlow>;
  channel?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  departure?: InputMaybe<Scalars['Long']>;
  guestInformation?: InputMaybe<GuestInformationInput>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelPaymentModeCode?: InputMaybe<HotelPaymentModeCodeEnum>;
  id?: InputMaybe<Scalars['UUID']>;
  paymentInformation?: InputMaybe<PaymentInfoInput>;
  reservationList?: InputMaybe<Array<InputMaybe<ReservationInput>>>;
  source?: InputMaybe<Scalars['String']>;
  specialRequest?: InputMaybe<Scalars['String']>;
  translateTo?: InputMaybe<LanguageCode>;
}

export interface BookingInput {
  id?: InputMaybe<Scalars['UUID']>;
}

export interface BookingMetadata {
  bookingId?: Maybe<Scalars['String']>;
  entity?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
}

export interface BookingPaymentAction {
  data?: Maybe<BookingPaymentActionData>;
  method?: Maybe<Scalars['String']>;
  paymentData?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface BookingPaymentActionData {
  MD?: Maybe<Scalars['String']>;
  paReq?: Maybe<Scalars['String']>;
  termUrl?: Maybe<Scalars['String']>;
}

export interface BookingPaymentRequest {
  bookingInformation: BookingInformationInput;
  creditCardInformation?: InputMaybe<CreditCardInformationInput>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelPaymentAccountType: HotelPaymentAccountTypeEnum;
  occasionCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  priorityCategoryCodeList?: InputMaybe<Array<InputMaybe<PriorityModel>>>;
  promoCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  translateTo?: InputMaybe<LanguageCode>;
  travelTagCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface BookingPaymentResponse {
  action?: Maybe<BookingPaymentAction>;
  bookingInformation?: Maybe<BookingInformation>;
}

export interface BookingProposalSetting {
  bookingId?: Maybe<Scalars['UUID']>;
  propertyId?: Maybe<Scalars['UUID']>;
  triggerAt?: Maybe<Scalars['DateTime']>;
  validBefore?: Maybe<Scalars['DateTime']>;
}

export interface BookingSource {
  source?: Maybe<Scalars['String']>;
}

export enum BookingStatusEnum {
  Cancelled = 'CANCELLED',
  CheckedIn = 'CHECKED_IN',
  CheckedOut = 'CHECKED_OUT',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Proposed = 'PROPOSED',
  Released = 'RELEASED',
  Reserved = 'RESERVED'
}

export interface BookingTransaction {
  accountHolder?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  bookingId?: Maybe<Scalars['UUID']>;
  cardType?: Maybe<Scalars['String']>;
  currencyId?: Maybe<Scalars['UUID']>;
  expiryMonth?: Maybe<Scalars['Int']>;
  expiryYear?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
  paymentData?: Maybe<Scalars['String']>;
  paymentDate?: Maybe<Scalars['DateTime']>;
  paymentMethod?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['BigDecimal']>;
  transactionNumber?: Maybe<Scalars['String']>;
}

export interface BulkUpdateRoomInput {
  capacityDefault?: InputMaybe<Scalars['Int']>;
  capacityExtra?: InputMaybe<Scalars['Int']>;
  extraBedAdult?: InputMaybe<Scalars['Int']>;
  extraBedKid?: InputMaybe<Scalars['Int']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  maximumAdult?: InputMaybe<Scalars['Int']>;
  maximumKid?: InputMaybe<Scalars['Int']>;
  numberOfBedrooms?: InputMaybe<Scalars['Int']>;
  roomFloor?: InputMaybe<Scalars['String']>;
  space?: InputMaybe<Scalars['Int']>;
}

export interface CalendarViewRfc {
  allocationType?: Maybe<RfcAllocationSettingEnum>;
  calendarViewRfcRatePlanList?: Maybe<Array<Maybe<CalendarViewRfcRatePlan>>>;
  capacityAdult?: Maybe<Scalars['Int']>;
  capacityChildren?: Maybe<Scalars['Int']>;
  capacityDefault?: Maybe<Scalars['Int']>;
  capacityExtra?: Maybe<Scalars['Int']>;
  dailyRoomAvailabilityList?: Maybe<Array<Maybe<DailyRoomAvailability>>>;
  extraBedAdult?: Maybe<Scalars['Int']>;
  extraBedKid?: Maybe<Scalars['Int']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  numberOfBedrooms?: Maybe<Scalars['Int']>;
  rfcCode?: Maybe<Scalars['String']>;
  rfcId?: Maybe<Scalars['UUID']>;
  rfcName?: Maybe<Scalars['String']>;
  roomList?: Maybe<Array<Maybe<Room>>>;
  space?: Maybe<Scalars['Int']>;
}

export interface CalendarViewRfcRatePlan {
  dailyAvailabilityList?: Maybe<Array<Maybe<RfcRatePlanAvailabilityAdjustment>>>;
  dailySellingRateList?: Maybe<Array<Maybe<DailySellingRate>>>;
  rfcRatePlanCode?: Maybe<Scalars['String']>;
  rfcRatePlanId?: Maybe<Scalars['UUID']>;
  rfcRatePlanName?: Maybe<Scalars['String']>;
}

export interface CalendarViewRoom {
  calendarViewRfcList?: Maybe<Array<Maybe<CalendarViewRfc>>>;
  reservationList?: Maybe<Array<Maybe<Reservation>>>;
  roomId?: Maybe<Scalars['UUID']>;
  roomNumber?: Maybe<Scalars['String']>;
  roomStatus?: Maybe<RoomStatusEnum>;
}

export interface CancelReservationInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  reservationNumber?: InputMaybe<Scalars['String']>;
}

export enum CancellationFeeUnitEnum {
  FixAmount = 'FIX_AMOUNT',
  Night = 'NIGHT',
  Percentage = 'PERCENTAGE'
}

export enum CancellationPolicyDisplayUnitEnum {
  Day = 'DAY',
  Hour = 'HOUR'
}

export enum CancellationTypeEnum {
  Flexible = 'FLEXIBLE',
  NonRefundable = 'NON_REFUNDABLE'
}

export enum CategoryTypeEnum {
  MultipleOption = 'MULTIPLE_OPTION',
  OneOption = 'ONE_OPTION'
}

export enum ChannelCode {
  Direct = 'DIRECT',
  Gauvendi = 'GAUVENDI',
  Pms = 'PMS'
}

export enum ChannelNameEnum {
  GauvendiIbe = 'GAUVENDI_IBE',
  GauvendiVoice = 'GAUVENDI_VOICE',
  Pms = 'PMS'
}

export interface Configurator {
  destination?: Maybe<Array<Maybe<Scalars['String']>>>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  mode?: Maybe<ConfiguratorModeEnum>;
  rfcRatePlanId?: Maybe<Scalars['UUID']>;
  type?: Maybe<ConfiguratorTypeEnum>;
}

export interface ConfiguratorFilter {
  hotelIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  rfcRatePlanIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<ConfiguratorTypeEnum>>>;
}

export interface ConfiguratorInput {
  destination?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  mode?: InputMaybe<ConfiguratorModeEnum>;
  rfcRatePlanId?: InputMaybe<Scalars['UUID']>;
  type?: InputMaybe<ConfiguratorTypeEnum>;
}

export enum ConfiguratorModeEnum {
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export enum ConfiguratorTypeEnum {
  PushPms = 'PUSH_PMS'
}

export interface ConfirmBookingResponse {
  action?: Maybe<BookingPaymentAction>;
  booking?: Maybe<Booking>;
}

export interface Connector {
  connectorType?: Maybe<ConnectorTypeEnum>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  mappingHotelList?: Maybe<Array<Maybe<MappingHotel>>>;
  organisationId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['String']>;
}

export enum ConnectorStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum ConnectorTypeEnum {
  Mews = 'Mews',
  Apaleo = 'apaleo'
}

export interface Country {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
}

export interface CreditCardInformationInput {
  cardHolder?: InputMaybe<Scalars['String']>;
  cardNumber?: InputMaybe<Scalars['String']>;
  cvv?: InputMaybe<Scalars['String']>;
  expiryMonth?: InputMaybe<Scalars['String']>;
  expiryYear?: InputMaybe<Scalars['String']>;
  refPaymentMethodId?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}

export interface Currency {
  code?: Maybe<Scalars['String']>;
  currencyRateList?: Maybe<Array<Maybe<CurrencyRate>>>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
}

export interface CurrencyRate {
  baseCurrency?: Maybe<Currency>;
  exchangeCurrency?: Maybe<Currency>;
  id?: Maybe<Scalars['UUID']>;
  rate?: Maybe<Scalars['BigDecimal']>;
}

export interface DailyAdrPickup {
  adr?: Maybe<Scalars['BigDecimal']>;
  date?: Maybe<Scalars['Date']>;
  percentageDifference?: Maybe<Scalars['BigDecimal']>;
  propertyId?: Maybe<Scalars['UUID']>;
}

export interface DailyAdrPickupFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  numberOfDays?: InputMaybe<Scalars['Int']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface DailyExtraOccupancyRate {
  date?: Maybe<Scalars['Date']>;
  extraOccupancyRateList?: Maybe<Array<Maybe<ExtraOccupancyRate>>>;
}

export interface DailyHotelRestriction {
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  restrictionList?: Maybe<Array<Maybe<HotelRestriction>>>;
}

export interface DailyOccPaceTrend {
  date?: Maybe<Scalars['Date']>;
  paceTrend?: Maybe<Scalars['BigDecimal']>;
  propertyId?: Maybe<Scalars['UUID']>;
}

export interface DailyOccPaceTrendFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  numberOfDays?: InputMaybe<Scalars['Int']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface DailyOccupancyRate {
  availableToSellList?: Maybe<Array<Maybe<DailyOccupancyRateAvailableToSell>>>;
  date?: Maybe<Scalars['Date']>;
  occupancyRate?: Maybe<Scalars['Float']>;
  roomSoldList?: Maybe<Array<Maybe<DailyOccupancyRateRoomSold>>>;
  totalAvailabilityAdjustment?: Maybe<Scalars['Int']>;
  totalAvailablePropertyRooms?: Maybe<Scalars['Int']>;
  totalOutOfInventory?: Maybe<Scalars['Int']>;
  totalOutOfOrder?: Maybe<Scalars['Int']>;
  totalOutOfService?: Maybe<Scalars['Int']>;
  totalPropertyRooms?: Maybe<Scalars['Int']>;
  totalRoomInventory?: Maybe<Scalars['Int']>;
  totalRoomsAssigned?: Maybe<Scalars['Int']>;
  totalRoomsSoldAssigned?: Maybe<Scalars['Int']>;
  totalRoomsSoldUnassigned?: Maybe<Scalars['Int']>;
  totalRoomsUnassigned?: Maybe<Scalars['Int']>;
}

export interface DailyOccupancyRateAvailableToSell {
  channel?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
}

export interface DailyOccupancyRateFilter {
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  toDate: Scalars['Date'];
}

export interface DailyOccupancyRateRoomSold {
  channel?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
}

export interface DailyPropertyAdr {
  adr?: Maybe<Scalars['BigDecimal']>;
  date?: Maybe<Scalars['Date']>;
  propertyId?: Maybe<Scalars['UUID']>;
}

export interface DailyPropertyAdrFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface DailyRate {
  date?: Maybe<Scalars['Date']>;
  highestAvailableRate?: Maybe<AvailableRate>;
  lowestAvailableRate?: Maybe<AvailableRate>;
}

export interface DailyRatePlanAdjustment {
  date?: Maybe<Scalars['Date']>;
  isAdjusted?: Maybe<Scalars['Boolean']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
  unit?: Maybe<RatePlanAdjustmentUnitEnum>;
  value?: Maybe<Scalars['BigDecimal']>;
}

export interface DailyRatePlanAdjustmentFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode: Scalars['String'];
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanIdList: Array<InputMaybe<Scalars['UUID']>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface DailyRatePlanRestriction {
  code?: Maybe<RatePlanRestrictionCodeEnum>;
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  isAdjusted?: Maybe<Scalars['Boolean']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
  value?: Maybe<Scalars['String']>;
}

export interface DailyRateUnit {
  date?: Maybe<Scalars['Date']>;
  rate?: Maybe<Scalars['BigDecimal']>;
}

export interface DailyRfcRatePlanExtraOccupancyRateFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  rfcRatePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface DailyRfcRestriction {
  code?: Maybe<RfcRestrictionCodeEnum>;
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  isAdjusted?: Maybe<Scalars['Boolean']>;
  rfcId?: Maybe<Scalars['UUID']>;
  value?: Maybe<Scalars['String']>;
}

export interface DailyRoomAvailability {
  availableRooms?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  occupancy?: Maybe<Scalars['Float']>;
  roomSold?: Maybe<Scalars['Int']>;
}

export interface DailySalesPlanPricingBreakdown {
  date?: Maybe<Scalars['Date']>;
  highestPrice?: Maybe<Scalars['BigDecimal']>;
  lowestPrice?: Maybe<Scalars['BigDecimal']>;
  propertyId?: Maybe<Scalars['UUID']>;
  salesPlanId?: Maybe<Scalars['UUID']>;
}

export interface DailySalesPlanPricingBreakdownFilter {
  distributionChannelList?: InputMaybe<Array<InputMaybe<DistributionChannel>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  guestCount?: InputMaybe<Scalars['Int']>;
  hasCityTaxInPrice?: InputMaybe<Scalars['Boolean']>;
  hasIncludedServicesInPrice?: InputMaybe<Scalars['Boolean']>;
  hasPriceCombinedByDate?: InputMaybe<Scalars['Boolean']>;
  isFollowingRetailStrategy?: InputMaybe<Scalars['Boolean']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  salesPlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface DailySellingRate {
  adjustmentUnit?: Maybe<RatePlanAdjustmentUnitEnum>;
  adjustmentValue?: Maybe<Scalars['BigDecimal']>;
  automatedPricingDataList?: Maybe<Array<Maybe<AutomatedPricingData>>>;
  cityTaxBreakdown?: Maybe<Array<Maybe<ExtranetTax>>>;
  correlatedRateList?: Maybe<Array<Maybe<AutomatedPricingData>>>;
  date?: Maybe<Scalars['Date']>;
  doubleOccupancyRate?: Maybe<Scalars['BigDecimal']>;
  featureAdjustmentRate?: Maybe<Scalars['BigDecimal']>;
  grossPrice?: Maybe<Scalars['BigDecimal']>;
  includedExtraServicesBreakdown?: Maybe<Array<Maybe<ExtranetTax>>>;
  includedExtraServicesRate?: Maybe<Scalars['BigDecimal']>;
  isAdjusted?: Maybe<Scalars['Boolean']>;
  isDerived?: Maybe<Scalars['Boolean']>;
  isSoldOut?: Maybe<Scalars['Boolean']>;
  netPrice?: Maybe<Scalars['BigDecimal']>;
  originalSellingRate?: Maybe<Scalars['BigDecimal']>;
  originalTotalSellingRate?: Maybe<Scalars['BigDecimal']>;
  propertyTaxBreakdown?: Maybe<Array<Maybe<ExtranetTax>>>;
  ratePlanAdjustmentRate?: Maybe<Scalars['BigDecimal']>;
  salesPlanAdjustmentUnit?: Maybe<RatePlanAdjustmentUnitEnum>;
  salesPlanAdjustmentValue?: Maybe<Scalars['BigDecimal']>;
  sellingRate?: Maybe<Scalars['BigDecimal']>;
}

export enum DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export interface DeleteMrfcMappingInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  mrfcMappingId?: InputMaybe<Scalars['UUID']>;
}

export interface DeleteRfcInput {
  hotelCode: Scalars['String'];
  id: Scalars['UUID'];
}

export enum DeviceEnum {
  Desktop = 'DESKTOP',
  Mobile = 'MOBILE',
  Tablet = 'TABLET'
}

export interface DirectMrfcDailyInput {
  date: Scalars['Date'];
  hotelCode: Scalars['String'];
  sold: Scalars['Int'];
}

export enum DistributionChannel {
  GvSalesEngine = 'GV_SALES_ENGINE',
  GvVoice = 'GV_VOICE'
}

export enum DynamicInventoryOptimizationStrategyEnum {
  Balance = 'BALANCE',
  FocusOnAdr = 'FOCUS_ON_ADR',
  FocusOnOccupancy = 'FOCUS_ON_OCCUPANCY'
}

export enum DynamicInventoryReservationCategoryEnum {
  Assigned = 'ASSIGNED',
  Locked = 'LOCKED',
  Movable = 'MOVABLE',
  Unassigned = 'UNASSIGNED',
  Unmovable = 'UNMOVABLE'
}

export enum DynamicInventoryRoomAllocationStrategyEnum {
  Balance = 'BALANCE',
  FocusOnBookingChannel = 'FOCUS_ON_BOOKING_CHANNEL',
  FocusOnReservationValue = 'FOCUS_ON_RESERVATION_VALUE'
}

export interface ExtraOccupancyRate {
  extraPeople?: Maybe<Scalars['Int']>;
  extraRate?: Maybe<Scalars['BigDecimal']>;
}

export interface ExtraOccupancyRateInput {
  extraPeople?: InputMaybe<Scalars['Int']>;
  extraRate?: InputMaybe<Scalars['BigDecimal']>;
}

export interface ExtranetApplyOptimizationInput {
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetAuthorizeConnectorInput {
  authorizationCode?: InputMaybe<Scalars['String']>;
  connectorType?: InputMaybe<ConnectorTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
}

export interface ExtranetAverageUpsellProfitFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetBookingFilter {
  channelList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expand?: InputMaybe<Array<InputMaybe<ReservationExpandEnum>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ExtranetBookingInformation {
  additionalGuest?: Maybe<Array<Maybe<Guest>>>;
  adrSubTotal?: Maybe<Scalars['BigDecimal']>;
  adrSubTotalBySetting?: Maybe<Scalars['BigDecimal']>;
  arrival?: Maybe<Scalars['Long']>;
  arrivalDate?: Maybe<Scalars['Date']>;
  averageDailyRate?: Maybe<Scalars['BigDecimal']>;
  balance?: Maybe<Scalars['BigDecimal']>;
  booker?: Maybe<Guest>;
  bookingAccommodationTaxAmount?: Maybe<Scalars['BigDecimal']>;
  bookingAccommodationTaxList?: Maybe<Array<Maybe<Tax>>>;
  bookingCityTaxList?: Maybe<Array<Maybe<HotelCityTax>>>;
  bookingExtraServiceTaxAmount?: Maybe<Scalars['BigDecimal']>;
  bookingExtraServiceTaxList?: Maybe<Array<Maybe<Tax>>>;
  bookingFlow?: Maybe<BookingFlow>;
  bookingNumber?: Maybe<Scalars['String']>;
  bookingOtherTaxAmount?: Maybe<Scalars['BigDecimal']>;
  bookingOtherTaxList?: Maybe<Array<Maybe<Tax>>>;
  cityTaxAmount?: Maybe<Scalars['BigDecimal']>;
  cityTaxList?: Maybe<Array<Maybe<HotelCityTax>>>;
  currency?: Maybe<Currency>;
  departure?: Maybe<Scalars['Long']>;
  departureDate?: Maybe<Scalars['Date']>;
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  feeList?: Maybe<Array<Maybe<Fee>>>;
  guaranteeType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  payAtHotelAmount?: Maybe<Scalars['BigDecimal']>;
  payOnConfirmationAmount?: Maybe<Scalars['BigDecimal']>;
  reservationList?: Maybe<Array<Maybe<Reservation>>>;
  serviceChargeAmount?: Maybe<Scalars['BigDecimal']>;
  specialRequest?: Maybe<Scalars['String']>;
  status?: Maybe<BookingStatusEnum>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
  totalSellingRate?: Maybe<Scalars['BigDecimal']>;
  totalSellingRateBySetting?: Maybe<Scalars['BigDecimal']>;
  vatAmount?: Maybe<Scalars['BigDecimal']>;
}

export interface ExtranetBookingInformationInput {
  additionalGuestList?: InputMaybe<Array<InputMaybe<GuestInformationInput>>>;
  arrivalDate?: InputMaybe<Scalars['Date']>;
  bookingFlow?: InputMaybe<BookingFlow>;
  channel?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  departureDate?: InputMaybe<Scalars['Date']>;
  guestInformation?: InputMaybe<GuestInformationInput>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelPaymentModeCode?: InputMaybe<HotelPaymentModeCodeEnum>;
  id?: InputMaybe<Scalars['UUID']>;
  paymentInformation?: InputMaybe<PaymentInfoInput>;
  reservationList?: InputMaybe<Array<InputMaybe<ReservationInput>>>;
  source?: InputMaybe<Scalars['String']>;
  specialRequest?: InputMaybe<Scalars['String']>;
  translateTo?: InputMaybe<LanguageCode>;
}

export interface ExtranetBookingProposalSettingInput {
  bookingNumber?: InputMaybe<Scalars['String']>;
  expiredHour: Scalars['Int'];
  expiredMinute: Scalars['Int'];
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetBookingSourceFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetCalendarViewReservationListFilter {
  adultCount?: InputMaybe<Scalars['Int']>;
  arrival?: InputMaybe<Scalars['Date']>;
  bedCount?: InputMaybe<Scalars['Int']>;
  childrenAgeList?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  departure?: InputMaybe<Scalars['Date']>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelRetailFeatureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  promoCode?: InputMaybe<Scalars['String']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  searchText?: InputMaybe<Scalars['String']>;
  searchTextType?: InputMaybe<ReservationSearchTextTypeEnum>;
  toDate?: InputMaybe<Scalars['Date']>;
  translateTo?: InputMaybe<LanguageCode>;
}

export interface ExtranetChannelSourceFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetCloneRatePlanInput {
  hotelCode: Scalars['String'];
  ratePlanId: Scalars['UUID'];
}

export interface ExtranetCloneRoomProductInput {
  hotelCode: Scalars['String'];
  roomProductId?: InputMaybe<Scalars['UUID']>;
  roomProductType?: InputMaybe<RfcTypesEnum>;
}

export interface ExtranetCompleteBookingInput {
  booking?: InputMaybe<BookingInput>;
  hotelCode?: InputMaybe<Scalars['String']>;
  paymentInput?: InputMaybe<PaymentInput>;
}

export interface ExtranetConnectorFilter {
  connectorType?: InputMaybe<ConnectorTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  /** ACTIVE / INACTIVE */
  status?: InputMaybe<ConnectorStatusEnum>;
}

export interface ExtranetDeauthorizeConnectorInput {
  connectorType?: InputMaybe<ConnectorTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetDynamicInventoryReservation {
  adr?: Maybe<Scalars['BigDecimal']>;
  arrival?: Maybe<Scalars['Date']>;
  category?: Maybe<DynamicInventoryReservationCategoryEnum>;
  channel?: Maybe<Scalars['String']>;
  departure?: Maybe<Scalars['Date']>;
  guestName?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['UUID']>;
  reservationId?: Maybe<Scalars['UUID']>;
  reservationNumber?: Maybe<Scalars['String']>;
  roomIdAfter?: Maybe<Scalars['UUID']>;
  roomIdBefore?: Maybe<Scalars['UUID']>;
  roomNumberAfter?: Maybe<Scalars['String']>;
  roomNumberBefore?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['BigDecimal']>;
}

export interface ExtranetDynamicInventorySetting {
  bookingChannelCodeList?: Maybe<Array<Maybe<Scalars['String']>>>;
  frequency?: Maybe<Scalars['Int']>;
  isAssignedAutomatedly?: Maybe<Scalars['Boolean']>;
  optimizationStrategy?: Maybe<DynamicInventoryOptimizationStrategyEnum>;
  propertyId?: Maybe<Scalars['UUID']>;
  roomAllocationStrategy?: Maybe<DynamicInventoryRoomAllocationStrategyEnum>;
}

export interface ExtranetDynamicInventorySettingFilter {
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetDynamicInventorySettingInput {
  bookingChannelCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frequency?: InputMaybe<Scalars['Int']>;
  isAssignedAutomatedly?: InputMaybe<Scalars['Boolean']>;
  optimizationStrategy?: InputMaybe<DynamicInventoryOptimizationStrategyEnum>;
  propertyCode?: InputMaybe<Scalars['String']>;
  roomAllocationStrategy?: InputMaybe<DynamicInventoryRoomAllocationStrategyEnum>;
}

export interface ExtranetDynamicInventoryStatistic {
  assignedReservation?: Maybe<Scalars['Int']>;
  freeUpRatio?: Maybe<Scalars['BigDecimal']>;
  freeUpRationTrendingPercentage?: Maybe<Scalars['BigDecimal']>;
  lastOptimizedDate?: Maybe<Scalars['DateTime']>;
  lastProcessingDate?: Maybe<Scalars['DateTime']>;
  propertyId?: Maybe<Scalars['UUID']>;
  revenueOpportunity?: Maybe<Scalars['BigDecimal']>;
  revenueOpportunityTrendingPercentage?: Maybe<Scalars['BigDecimal']>;
}

export interface ExtranetDynamicInventoryStatisticFilter {
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetFeaturePerformanceFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetGenerateRoomProductDailyBasePriceInput {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  roomProductIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetHotelAgeCategoryFilter {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelCode: Scalars['String'];
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ExtranetHotelAgeCategoryInput {
  code?: InputMaybe<Scalars['String']>;
  fromAge?: InputMaybe<Scalars['Int']>;
  hotelCode: Scalars['String'];
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  toAge?: InputMaybe<Scalars['Int']>;
}

export interface ExtranetHotelCancellationPolicyFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ExtranetHotelCancellationPolicyInput {
  cancellationFeeUnit?: InputMaybe<CancellationFeeUnitEnum>;
  cancellationFeeValue?: InputMaybe<Scalars['Float']>;
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displayUnit?: InputMaybe<HotelCancellationPolicyDisplayUnitEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hourPrior?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['UUID']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  translationList?: InputMaybe<Array<InputMaybe<HotelCxlPolicyTranslationInput>>>;
}

export interface ExtranetHotelCityTaxFilter {
  expand?: InputMaybe<Array<InputMaybe<HotelCityTaxExpandEnum>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  mappingCityTaxCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unitList?: InputMaybe<Array<InputMaybe<HotelCityTaxUnitEnum>>>;
}

export interface ExtranetHotelCityTaxInput {
  ageGroupInputList?: InputMaybe<Array<InputMaybe<HotelCityTaxAgeGroupInput>>>;
  chargeMethod?: InputMaybe<HotelCityTaxChargeMethodEnum>;
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  mappingCityTaxCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<HotelCityTaxStatusEnum>;
  translationInputList?: InputMaybe<Array<InputMaybe<HotelCityTaxTranslationInput>>>;
  unit?: InputMaybe<HotelCityTaxUnitEnum>;
  validFrom?: InputMaybe<Scalars['Date']>;
  validTo?: InputMaybe<Scalars['Date']>;
  value?: InputMaybe<Scalars['BigDecimal']>;
}

export interface ExtranetHotelCityTaxListInput {
  hotelCityTaxInputList?: InputMaybe<Array<InputMaybe<ExtranetHotelCityTaxInput>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetHotelInformationFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetHotelInformationInput {
  address?: InputMaybe<Scalars['String']>;
  baseCurrencyId?: InputMaybe<Scalars['UUID']>;
  city?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['UUID']>;
  emailAddressList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelPrivacyPolicyUrl?: InputMaybe<HotelConfigurationUrlInput>;
  hotelTermAndConditionUrl?: InputMaybe<HotelConfigurationUrlInput>;
  hotelWebsiteUrl?: InputMaybe<HotelConfigurationUrlInput>;
  isCityTaxIncludedSellingPrice?: InputMaybe<Scalars['Boolean']>;
  measureMetric?: InputMaybe<MeasureMetricEnum>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  preferredLanguage?: InputMaybe<LanguageCode>;
  state?: InputMaybe<Scalars['String']>;
}

export interface ExtranetHotelOperationFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetHotelOperationInput {
  code?: InputMaybe<Scalars['String']>;
  defaultPax?: InputMaybe<Scalars['Int']>;
  defaultStayNight?: InputMaybe<Scalars['Int']>;
  isRequireMainGuestAddress?: InputMaybe<Scalars['Boolean']>;
  operationClosingSetting?: InputMaybe<Array<InputMaybe<HotelOperationClosingInput>>>;
  timeSliceArrivalTime?: InputMaybe<Scalars['String']>;
  timeSliceDepartureTime?: InputMaybe<Scalars['String']>;
}

export interface ExtranetHotelPaymentAccountFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetHotelPaymentAndTaxFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetHotelPaymentTermFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelCode: Scalars['String'];
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ExtranetHotelPaymentTermInput {
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  payAtHotel?: InputMaybe<Scalars['Float']>;
  payAtHotelDescription?: InputMaybe<Scalars['String']>;
  payOnConfirmation?: InputMaybe<Scalars['Float']>;
  payOnConfirmationDescription?: InputMaybe<Scalars['String']>;
  translationList?: InputMaybe<Array<InputMaybe<HotelPaymentTermTranslationInput>>>;
}

export interface ExtranetHotelPmsFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetHotelRestrictionFilter {
  codeList?: InputMaybe<Array<InputMaybe<HotelRestrictionCodeEnum>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode: Scalars['String'];
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  mappingPropertyRestrictionCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetHotelRestrictionInput {
  code?: InputMaybe<HotelRestrictionCodeEnum>;
  day?: InputMaybe<DayOfWeek>;
  dayList?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode: Scalars['String'];
  id?: InputMaybe<Scalars['UUID']>;
  mappingPropertyRestrictionCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface ExtranetHotelRestrictionSettingFilter {
  propertyCode: Scalars['String'];
  restrictionCodeList?: InputMaybe<Array<InputMaybe<HotelRestrictionCodeEnum>>>;
  restrictionEntityList?: InputMaybe<Array<InputMaybe<HotelRestrictionSettingEntityEnum>>>;
}

export interface ExtranetHotelRestrictionSettingInput {
  hotelRestrictionSettingList?: InputMaybe<Array<InputMaybe<HotelRestrictionSettingInput>>>;
  propertyCode?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['UUID']>;
  restrictionEntity?: InputMaybe<HotelRestrictionSettingEntityEnum>;
}

export interface ExtranetInstantUpsellRevenueFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetInventoryStatus {
  dailyStatusList?: Maybe<Array<Maybe<ExtranetInventoryStatusDaily>>>;
  propertyId?: Maybe<Scalars['UUID']>;
  summaryList?: Maybe<Array<Maybe<ExtranetInventoryStatusSummary>>>;
}

export interface ExtranetInventoryStatusDaily {
  date?: Maybe<Scalars['Date']>;
  items?: Maybe<Array<Maybe<ExtranetInventoryStatusDailyItem>>>;
}

export interface ExtranetInventoryStatusDailyItem {
  count?: Maybe<Scalars['Int']>;
  status?: Maybe<InventoryStatusEnum>;
}

export interface ExtranetInventoryStatusFilter {
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetInventoryStatusSummary {
  count?: Maybe<Scalars['Int']>;
  status?: Maybe<InventoryStatusEnum>;
}

export interface ExtranetLinkedRfcAvailabilityFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  isSellable?: InputMaybe<Scalars['Boolean']>;
  linkedRfcStatusList?: InputMaybe<Array<InputMaybe<RfcStatusEnum>>>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetMappingHotelFilter {
  connectorIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  connectorType?: InputMaybe<ConnectorTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetMappingHotelInput {
  connectorType?: InputMaybe<ConnectorTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  mappingHotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetMhsCreatePropertyInput {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetMhsPushRateInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['String']>;
  ratePlanId?: InputMaybe<Scalars['String']>;
  roomTypeId?: InputMaybe<Scalars['String']>;
}

export interface ExtranetMostPopularFeatureListFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
  translateTo?: InputMaybe<LanguageCode>;
}

export interface ExtranetOnboardingHotelInput {
  code?: InputMaybe<Scalars['String']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface ExtranetPmsAmenityFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetPmsCityTaxFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetPmsRatePlanFilter {
  mappingSalesPlanCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetPmsRoomFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetPmsRoomTypeFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetPmsTriggerSyncAvailabilityInput {
  dateFilter?: InputMaybe<PmsReservationDateFilterEnum>;
  fromTime?: InputMaybe<Scalars['DateTime']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  toTime?: InputMaybe<Scalars['DateTime']>;
}

export interface ExtranetPmsTriggerSyncMaintenanceInput {
  fromTime?: InputMaybe<Scalars['DateTime']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  toTime?: InputMaybe<Scalars['DateTime']>;
}

export interface ExtranetPmsTriggerSyncReservationInput {
  dateFilter?: InputMaybe<PmsReservationDateFilterEnum>;
  fromTime?: InputMaybe<Scalars['DateTime']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  isRenewData?: InputMaybe<Scalars['Boolean']>;
  mode?: InputMaybe<SyncModeEnum>;
  toTime?: InputMaybe<Scalars['DateTime']>;
}

export interface ExtranetPropertyRestrictionIntegrationSettingDetailInput {
  mode?: InputMaybe<HotelRestrictionSettingMode>;
  restrictionCode?: InputMaybe<HotelRestrictionCodeEnum>;
}

export interface ExtranetPropertyRestrictionIntegrationSettingFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  integrationMappingCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modeList?: InputMaybe<Array<InputMaybe<HotelRestrictionSettingMode>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  restrictionCodeList?: InputMaybe<Array<InputMaybe<HotelRestrictionCodeEnum>>>;
  restrictionEntityList?: InputMaybe<Array<InputMaybe<HotelRestrictionSettingEntityEnum>>>;
  roomProductIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  salesPlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ExtranetPropertyRestrictionIntegrationSettingInput {
  id?: InputMaybe<Scalars['UUID']>;
  integrationMappingCode?: InputMaybe<Scalars['String']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  restrictionEntity?: InputMaybe<HotelRestrictionSettingEntityEnum>;
  roomProductId?: InputMaybe<Scalars['UUID']>;
  salesPlanId?: InputMaybe<Scalars['UUID']>;
  settingList?: InputMaybe<Array<InputMaybe<ExtranetPropertyRestrictionIntegrationSettingDetailInput>>>;
}

export interface ExtranetPushMetaSearchInput {
  propertyCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ExtranetPushToWihpInput {
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetRatePlanAdjustmentFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode: Scalars['String'];
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanId?: InputMaybe<Scalars['UUID']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetRatePlanAdjustmentInput {
  dayList?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode: Scalars['String'];
  id?: InputMaybe<Scalars['UUID']>;
  ratePlanId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
  unit?: InputMaybe<RatePlanAdjustmentUnitEnum>;
  value?: InputMaybe<Scalars['BigDecimal']>;
}

export interface ExtranetRatePlanCancellationPolicyInput {
  cancellationFeeUnit?: InputMaybe<CancellationFeeUnitEnum>;
  cancellationFeeValue?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  displayUnit?: InputMaybe<CancellationPolicyDisplayUnitEnum>;
  hotelCode: Scalars['String'];
  hotelCxlPolicyCode?: InputMaybe<Scalars['String']>;
  hourPrior?: InputMaybe<Scalars['Int']>;
  ratePlanId: Scalars['UUID'];
}

export interface ExtranetRatePlanCxlPolicyDailyFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate: Scalars['Date'];
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate: Scalars['Date'];
}

export interface ExtranetRatePlanCxlPolicyDailyInput {
  cxlPolicyCode?: InputMaybe<Scalars['String']>;
  dayList: Array<InputMaybe<DayOfWeek>>;
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  ratePlanIdList: Array<InputMaybe<Scalars['UUID']>>;
  toDate: Scalars['Date'];
}

export interface ExtranetRatePlanFilter {
  distributionChannelList?: InputMaybe<Array<InputMaybe<DistributionChannel>>>;
  expand?: InputMaybe<Array<InputMaybe<RatePlanExpandEnum>>>;
  hasAmenityList?: InputMaybe<Scalars['Boolean']>;
  hasCounting?: InputMaybe<Scalars['Boolean']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  languageCodeList?: InputMaybe<Array<InputMaybe<LanguageCode>>>;
  mappingRatePlanCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pricingMethodologyList?: InputMaybe<Array<InputMaybe<RatePlanPricingMethodologyEnum>>>;
  promoCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sellingStrategyTypeList?: InputMaybe<Array<InputMaybe<SellingStrategyTypeEnum>>>;
  translateTo?: InputMaybe<LanguageCode>;
  typeList?: InputMaybe<Array<InputMaybe<RatePlanTypeEnum>>>;
}

export interface ExtranetRatePlanHotelExtrasDailyFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate: Scalars['Date'];
}

export interface ExtranetRatePlanHotelExtrasDailyInput {
  dayList: Array<InputMaybe<DayOfWeek>>;
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  hotelExtrasCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ratePlanIdList: Array<InputMaybe<Scalars['UUID']>>;
  toDate: Scalars['Date'];
}

export interface ExtranetRatePlanInput {
  adjustmentUnit?: InputMaybe<RatePlanAdjustmentUnitEnum>;
  adjustmentValue?: InputMaybe<Scalars['BigDecimal']>;
  cancellationFeeUnit?: InputMaybe<CancellationFeeUnitEnum>;
  cancellationFeeValue?: InputMaybe<Scalars['Float']>;
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displayUnit?: InputMaybe<CancellationPolicyDisplayUnitEnum>;
  distributionChannelList?: InputMaybe<Array<InputMaybe<DistributionChannel>>>;
  hotelCode: Scalars['String'];
  hotelCxlPolicyCode?: InputMaybe<Scalars['String']>;
  hotelExtrasCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hourPrior?: InputMaybe<Scalars['Int']>;
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  mappingRatePlanCode?: InputMaybe<Scalars['String']>;
  mrfcPositioningMode?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  payAtHotel?: InputMaybe<Scalars['Float']>;
  payOnConfirmation?: InputMaybe<Scalars['Float']>;
  paymentTermCode?: InputMaybe<Scalars['String']>;
  pricingMethodology?: InputMaybe<RatePlanPricingMethodologyEnum>;
  promoCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ratePlanDerivedSetting?: InputMaybe<RatePlanDerivedSettingInput>;
  ratePlanId?: InputMaybe<Scalars['UUID']>;
  rfcAttributeMode?: InputMaybe<Scalars['Boolean']>;
  roundingMode?: InputMaybe<RoundingModeEnum>;
  selectedRfcIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sellingStrategyType?: InputMaybe<SellingStrategyTypeEnum>;
  status?: InputMaybe<RatePlanStatusEnum>;
  translationList?: InputMaybe<Array<InputMaybe<RatePlanTranslationInput>>>;
  type?: InputMaybe<RatePlanTypeEnum>;
  unselectedRfcIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface ExtranetRatePlanPaymentTermDailyFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetRatePlanPaymentTermDailyInput {
  dayList: Array<InputMaybe<DayOfWeek>>;
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  paymentTermCode?: InputMaybe<Scalars['String']>;
  ratePlanIdList: Array<InputMaybe<Scalars['UUID']>>;
  toDate: Scalars['Date'];
}

export interface ExtranetRatePlanPaymentTermInput {
  hotelCode: Scalars['String'];
  payAtHotel?: InputMaybe<Scalars['Float']>;
  payOnConfirmation?: InputMaybe<Scalars['Float']>;
  paymentTermCode?: InputMaybe<Scalars['String']>;
  ratePlanId: Scalars['UUID'];
}

export interface ExtranetRatePlanRestrictionAdjustmentFilter {
  codeList?: InputMaybe<Array<InputMaybe<RatePlanRestrictionCodeEnum>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetRatePlanRestrictionAdjustmentInput {
  code: RatePlanRestrictionCodeEnum;
  dayList?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  ratePlanId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface ExtranetRatePlanRestrictionFilter {
  codeList?: InputMaybe<Array<InputMaybe<RatePlanRestrictionCodeEnum>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ExtranetRatePlanRestrictionInput {
  code?: InputMaybe<RatePlanRestrictionCodeEnum>;
  day?: InputMaybe<DayOfWeek>;
  dayList?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  ratePlanId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface ExtranetRatePlanRestrictionsDailyFilter {
  codeList?: InputMaybe<Array<InputMaybe<RatePlanRestrictionCodeEnum>>>;
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  ratePlanIsSellable?: InputMaybe<Scalars['Boolean']>;
  ratePlanStatusList?: InputMaybe<Array<InputMaybe<RatePlanStatusEnum>>>;
  toDate: Scalars['Date'];
}

export interface ExtranetRatePlanRfcAssignmentFilter {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelCode: Scalars['String'];
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanIdList: Array<InputMaybe<Scalars['UUID']>>;
  showMode?: InputMaybe<RatePlanRfcAssignmentShowModeEnum>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  statusList?: InputMaybe<Array<InputMaybe<RfcStatusEnum>>>;
  type?: InputMaybe<RfcTypesEnum>;
}

export interface ExtranetRefreshRoomProductDailyBasePriceInput {
  pricingMethodList?: InputMaybe<Array<InputMaybe<RoomProductPricingMethodEnum>>>;
  propertyCode?: InputMaybe<Scalars['String']>;
  roomProductIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  roomProductTypeList?: InputMaybe<Array<InputMaybe<RfcTypesEnum>>>;
}

export interface ExtranetRequestIntegrationInput {
  connectorType?: InputMaybe<ConnectorTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetReservationAllocation {
  date?: Maybe<Scalars['Date']>;
  propertyId?: Maybe<Scalars['UUID']>;
  roomId?: Maybe<Scalars['UUID']>;
  roomNumber?: Maybe<Scalars['String']>;
  statusAfter?: Maybe<ReservationAllocationStatusEnum>;
  statusBefore?: Maybe<ReservationAllocationStatusEnum>;
}

export interface ExtranetReservationAllocationFilter {
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetReservationCount {
  count?: Maybe<Scalars['Int']>;
  notifType?: Maybe<ReservationNotifTypeEnum>;
  propertyId?: Maybe<Scalars['UUID']>;
}

export interface ExtranetReservationCountFilter {
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetReservationFilter {
  bookingChannelList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bookingSourceList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateFilter?: InputMaybe<ReservationDateFilterEnum>;
  expand?: InputMaybe<Array<InputMaybe<ReservationExpandEnum>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  guestName?: InputMaybe<Scalars['String']>;
  hasAssignedRooms?: InputMaybe<Scalars['Boolean']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  reservationNumber?: InputMaybe<Scalars['String']>;
  rfcRatePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  statusList?: InputMaybe<Array<InputMaybe<ReservationStatusEnum>>>;
  toDate?: InputMaybe<Scalars['Date']>;
  translateTo?: InputMaybe<LanguageCode>;
}

export interface ExtranetReservationReviewFilter {
  propertyCode?: InputMaybe<Scalars['String']>;
  searchContent?: InputMaybe<Scalars['String']>;
}

export interface ExtranetRestrictionAutomationSettingOfRoomProductInput {
  isAutomated?: InputMaybe<Scalars['Boolean']>;
  overrideDefault?: InputMaybe<Scalars['Boolean']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  removeAutomatedRestriction?: InputMaybe<Scalars['Boolean']>;
  roomProductId?: InputMaybe<Scalars['UUID']>;
}

export interface ExtranetRfcAvailabilityAdjustmentFilter {
  date?: InputMaybe<Scalars['Date']>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcRetailFeatureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcStatusList?: InputMaybe<Array<InputMaybe<RfcStatusEnum>>>;
  rfcType?: InputMaybe<RfcTypesEnum>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetRfcAvailabilityAdjustmentInput {
  dayList?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
  valueFrom?: InputMaybe<Scalars['Int']>;
  valueTo?: InputMaybe<Scalars['Int']>;
}

export interface ExtranetRfcAvailabilityInput {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetRfcExtraOccupancyRateInput {
  extraOccupancyRateList?: InputMaybe<Array<InputMaybe<ExtraOccupancyRateInput>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
}

export interface ExtranetRfcFilter {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expand?: InputMaybe<Array<InputMaybe<RfcExpandEnum>>>;
  fromTime?: InputMaybe<Scalars['BigDecimal']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  isSellable?: InputMaybe<Scalars['Boolean']>;
  languageCodeList?: InputMaybe<Array<InputMaybe<LanguageCode>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  rfcRetailFeatureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  statusList?: InputMaybe<Array<InputMaybe<RfcStatusEnum>>>;
  text?: InputMaybe<Scalars['String']>;
  toTime?: InputMaybe<Scalars['BigDecimal']>;
  translateTo?: InputMaybe<LanguageCode>;
  type?: InputMaybe<RfcTypesEnum>;
}

export interface ExtranetRfcRatePlanBulkInput {
  extranetRfcRatePlanInputList?: InputMaybe<Array<InputMaybe<ExtranetRfcRatePlanInput>>>;
}

export interface ExtranetRfcRatePlanFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
  isSellable?: InputMaybe<Scalars['Boolean']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface ExtranetRfcRatePlanInput {
  hotelCode: Scalars['String'];
  isSellable?: InputMaybe<Scalars['Boolean']>;
  ratePlanId?: InputMaybe<Scalars['UUID']>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcRatePlanId?: InputMaybe<Scalars['UUID']>;
}

export interface ExtranetRfcRestrictionAdjustmentFilter {
  codeList?: InputMaybe<Array<InputMaybe<RfcRestrictionCodeEnum>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetRfcRestrictionAdjustmentInput {
  code: RfcRestrictionCodeEnum;
  dayList?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface ExtranetRfcRestrictionFilter {
  codeList?: InputMaybe<Array<InputMaybe<RfcRestrictionCodeEnum>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ExtranetRfcRestrictionInput {
  code?: InputMaybe<RfcRestrictionCodeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface ExtranetRfcRestrictionsDailyFilter {
  codeList?: InputMaybe<Array<InputMaybe<RfcRestrictionCodeEnum>>>;
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcIsSellable?: InputMaybe<Scalars['Boolean']>;
  rfcStatusList?: InputMaybe<Array<InputMaybe<RfcStatusEnum>>>;
  rfcTypeList?: InputMaybe<Array<InputMaybe<RfcTypesEnum>>>;
  toDate: Scalars['Date'];
}

export interface ExtranetRollingRoomProductDailyBasePriceInput {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  salesPlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetRoomAvailabilityInput {
  dayList: Array<InputMaybe<DayOfWeek>>;
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  roomId?: InputMaybe<Scalars['UUID']>;
  roomIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  roomNumberList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status: RoomAvailabilityStatusEnum;
  toDate: Scalars['Date'];
}

export interface ExtranetRoomProductIncludedHotelExtraListFilter {
  fromDate: Scalars['Date'];
  propertyCode: Scalars['String'];
  roomProductSalesPlanCode: Scalars['String'];
  toDate: Scalars['Date'];
  translateTo?: InputMaybe<LanguageCode>;
}

export interface ExtranetRoomProductRestrictionAutomationSettingFilter {
  isAutomated?: InputMaybe<Scalars['Boolean']>;
  overrideDefault?: InputMaybe<Scalars['Boolean']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  roomProductIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface ExtranetRoomProductRestrictionAutomationSettingInput {
  isTurnOn?: InputMaybe<Scalars['Boolean']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  roomProductSettingList?: InputMaybe<Array<InputMaybe<RoomProductRestrictionAutomationSettingInput>>>;
}

export interface ExtranetSalesPlanSellabilityInput {
  propertyCode: Scalars['String'];
  sellabilityList?: InputMaybe<Array<InputMaybe<SalesPlanSellabilityInput>>>;
}

export interface ExtranetSalesPlanStrongestPaymentTermsAndCxlPolicyFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  salesPlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
  translateTo?: InputMaybe<LanguageCode>;
}

export interface ExtranetSendBookingConfirmationEmailInput {
  bookingId?: InputMaybe<Scalars['UUID']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelTemplateEmailCode?: HotelTemplateEmailCode;
  language?: InputMaybe<Scalars['String']>;
}

export interface ExtranetSendCancellationEmailInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  reservationId?: InputMaybe<Scalars['UUID']>;
}

export interface ExtranetSendProposalBookingConfirmationEmailInput {
  bookingId?: InputMaybe<Scalars['UUID']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelTemplateEmailCode?: HotelTemplateEmailCode;
  language?: InputMaybe<Scalars['String']>;
}

export interface ExtranetSyncAvailabilityFromPmsInput {
  from?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  mappingRoomTypeCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetSyncHotelRestrictionInput {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelCode: Scalars['String'];
}

export interface ExtranetSyncRestrictionInput {
  isDailySync?: InputMaybe<Scalars['Boolean']>;
  propertyCode: Scalars['String'];
  restrictionLevel: HotelRestrictionSettingEntityEnum;
  restrictionSettingModeList?: InputMaybe<Array<InputMaybe<HotelRestrictionSettingMode>>>;
}

export interface ExtranetSyncStatusFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
  jobTypeList?: InputMaybe<Array<InputMaybe<HotelSyncJobEnum>>>;
}

export interface ExtranetTax {
  amenityPricingUnit?: Maybe<PricingUnitEnum>;
  amount?: Maybe<Scalars['BigDecimal']>;
  cityTaxPricingUnit?: Maybe<HotelCityTaxUnitEnum>;
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigDecimal']>;
}

export interface ExtranetTriggerOptimizationProcessInput {
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface ExtranetUpsellStatisticsFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ExtranetVoiceBookingInformationInput {
  adults?: InputMaybe<Scalars['Int']>;
  arrival: Scalars['Date'];
  booker: VoiceReservationGuestInput;
  bookingLanguage?: InputMaybe<LanguageCode>;
  bookingProposalSettingInput?: InputMaybe<ExtranetBookingProposalSettingInput>;
  childAgeList?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  creditCardInformation?: InputMaybe<CreditCardInformationInput>;
  departure: Scalars['Date'];
  propertyCode: Scalars['String'];
  reservationList: Array<InputMaybe<ExtranetVoiceReservationInformationInput>>;
  specialRequest?: InputMaybe<Scalars['String']>;
  strongestCxlPolicyCode: Scalars['String'];
  strongestPaymentTermsCode: Scalars['String'];
}

export interface ExtranetVoiceReservationAmenityInput {
  code?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
}

export interface ExtranetVoiceReservationInformationInput {
  additionalGuest?: InputMaybe<Array<InputMaybe<VoiceReservationGuestInput>>>;
  adults?: InputMaybe<Scalars['Int']>;
  amenityList?: InputMaybe<Array<InputMaybe<ExtranetVoiceReservationAmenityInput>>>;
  childAgeList?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  childrenAgeList?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  isDeductAll?: InputMaybe<Scalars['Boolean']>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  primaryGuest?: InputMaybe<VoiceReservationGuestInput>;
  promoCode?: InputMaybe<Scalars['String']>;
  roomId?: InputMaybe<Scalars['UUID']>;
  roomProductSalesPlanId: Scalars['UUID'];
  totalAdults: Scalars['Int'];
}

export interface FeaturePerformance {
  code?: Maybe<Scalars['String']>;
  dismatched?: Maybe<Scalars['Int']>;
  displayed?: Maybe<Scalars['Int']>;
  dissold?: Maybe<Scalars['Int']>;
  matched?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Int']>;
}

export interface FeatureRateAdjustmentInput {
  days: Array<InputMaybe<DayOfWeek>>;
  featureId: Scalars['UUID'];
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  rateAdjustment: Scalars['BigDecimal'];
  toDate: Scalars['Date'];
}

export interface FeatureSuggestionFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  translateTo?: InputMaybe<LanguageCode>;
}

export enum FeatureTypeEnum {
  Retail = 'RETAIL',
  Standard = 'STANDARD'
}

export interface Fee {
  feeType?: Maybe<FeeTypeEnum>;
  feeValue?: Maybe<Scalars['BigDecimal']>;
  name?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['BigDecimal']>;
}

export enum FeeTypeEnum {
  FixedValue = 'FIXED_VALUE',
  NetValue = 'NET_VALUE'
}

export interface FileLibrary {
  id?: Maybe<Scalars['UUID']>;
  url?: Maybe<Scalars['String']>;
}

export interface GenerateRfcInput {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface Guest {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['UUID']>;
  countryNumber?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
}

export interface GuestInformationInput {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['UUID']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  isAdult?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneInfo?: InputMaybe<PhoneInfoInput>;
  postalCode?: InputMaybe<Scalars['String']>;
}

export interface Hotel {
  address?: Maybe<Scalars['String']>;
  baseCurrency?: Maybe<Currency>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  defaultPax?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  hotelConfigurationList?: Maybe<Array<Maybe<HotelConfiguration>>>;
  id?: Maybe<Scalars['UUID']>;
  isCityTaxIncludedSellingPrice?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  mappingHotelCode?: Maybe<Scalars['String']>;
  measureMetric?: Maybe<MeasureMetricEnum>;
  name?: Maybe<Scalars['String']>;
  organisation?: Maybe<Organisation>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  preferredLanguageCode?: Maybe<LanguageCode>;
  state?: Maybe<Scalars['String']>;
  taxSetting?: Maybe<HotelTaxSettingEnum>;
  timeZone?: Maybe<Scalars['String']>;
}

export interface HotelAgeCategory {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fromAge?: Maybe<Scalars['Int']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  toAge?: Maybe<Scalars['Int']>;
}

export interface HotelAmenity {
  amenityReservationList?: Maybe<Array<Maybe<AmenityReservation>>>;
  amenityType?: Maybe<AmenityTypeEnum>;
  baseRate?: Maybe<Scalars['BigDecimal']>;
  calculatedRateList?: Maybe<Array<Maybe<HotelAmenityRate>>>;
  code?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  hotelAmenityPriceList?: Maybe<Array<Maybe<HotelAmenityPrice>>>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  isIncluded?: Maybe<Scalars['Boolean']>;
  mappingHotelAmenityCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postNextDay?: Maybe<Scalars['Boolean']>;
  pricingUnit?: Maybe<PricingUnitEnum>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  templateAmenity?: Maybe<TemplateAmenity>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
  totalSellingRate?: Maybe<Scalars['BigDecimal']>;
}

export interface HotelAmenityInput {
  amenityReservationList?: InputMaybe<Array<InputMaybe<AmenityReservationInput>>>;
  code?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
}

export interface HotelAmenityPrice {
  hotelAgeCategory?: Maybe<HotelAgeCategory>;
  hotelAgeCategoryId?: Maybe<Scalars['UUID']>;
  hotelAmenityId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  price?: Maybe<Scalars['BigDecimal']>;
}

export interface HotelAmenityPriceInput {
  hotelAgeCategoryId?: InputMaybe<Scalars['UUID']>;
  price?: InputMaybe<Scalars['BigDecimal']>;
}

export interface HotelAmenityRate {
  amenityRate?: Maybe<Scalars['BigDecimal']>;
  dateOfRate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  status?: Maybe<AmenityStatusEnum>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
}

export enum HotelAmenityStatusEnum {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export interface HotelCancellationPolicy {
  cancellationFeeUnit?: Maybe<CancellationFeeUnitEnum>;
  cancellationFeeValue?: Maybe<Scalars['Float']>;
  cancellationType?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayUnit?: Maybe<HotelCancellationPolicyDisplayUnitEnum>;
  hourPrior?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
  mappingCancellationPolicyCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  translationList?: Maybe<Array<Maybe<HotelCxlPolicyTranslation>>>;
}

export enum HotelCancellationPolicyDisplayUnitEnum {
  Day = 'DAY',
  Hour = 'HOUR'
}

export interface HotelCityTax {
  ageGroupList?: Maybe<Array<Maybe<HotelCityTaxAgeGroup>>>;
  chargeMethod?: Maybe<HotelCityTaxChargeMethodEnum>;
  cityTaxAmount?: Maybe<Scalars['BigDecimal']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  mappingCityTaxCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<HotelCityTaxStatusEnum>;
  translationList?: Maybe<Array<Maybe<HotelCityTaxTranslation>>>;
  unit?: Maybe<HotelCityTaxUnitEnum>;
  validFrom?: Maybe<Scalars['Date']>;
  validTo?: Maybe<Scalars['Date']>;
  value?: Maybe<Scalars['BigDecimal']>;
}

export interface HotelCityTaxAgeGroup {
  fromAge?: Maybe<Scalars['Int']>;
  hotelCityTaxId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  propertyId?: Maybe<Scalars['UUID']>;
  toAge?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['BigDecimal']>;
}

export interface HotelCityTaxAgeGroupFilter {
  fromAge?: InputMaybe<Scalars['Int']>;
  hotelCityTaxIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  propertyIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toAge?: InputMaybe<Scalars['Int']>;
}

export interface HotelCityTaxAgeGroupInput {
  fromAge?: InputMaybe<Scalars['Int']>;
  hotelCityTaxId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  propertyId?: InputMaybe<Scalars['UUID']>;
  toAge?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['BigDecimal']>;
}

export enum HotelCityTaxChargeMethodEnum {
  PayAtHotel = 'PAY_AT_HOTEL',
  PayOnConfirmation = 'PAY_ON_CONFIRMATION'
}

export enum HotelCityTaxExpandEnum {
  AgeGroup = 'ageGroup',
  Translation = 'translation'
}

export enum HotelCityTaxStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export interface HotelCityTaxTranslation {
  description?: Maybe<Scalars['String']>;
  hotelCityTaxId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  languageCode?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
}

export interface HotelCityTaxTranslationInput {
  description?: InputMaybe<Scalars['String']>;
  hotelCityTaxId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  languageCode?: InputMaybe<LanguageCode>;
  name?: InputMaybe<Scalars['String']>;
}

export enum HotelCityTaxUnitEnum {
  FixedOnGrossAmountRoom = 'FIXED_ON_GROSS_AMOUNT_ROOM',
  PercentageOnGrossAmountRoom = 'PERCENTAGE_ON_GROSS_AMOUNT_ROOM',
  PerPersonPerNight = 'PER_PERSON_PER_NIGHT',
  PerPersonPerStayFixed = 'PER_PERSON_PER_STAY_FIXED',
  PerPersonPerStayPercentage = 'PER_PERSON_PER_STAY_PERCENTAGE'
}

export interface HotelConfiguration {
  configType?: Maybe<HotelConfigurationConfigTypeEnum>;
  configValue?: Maybe<HotelConfigurationDetail>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
}

export enum HotelConfigurationConfigTypeEnum {
  AutomationRestrictionMaxLos = 'AUTOMATION_RESTRICTION_MAX_LOS',
  AvailableRfcDisplay = 'AVAILABLE_RFC_DISPLAY',
  BorderColor = 'BORDER_COLOR',
  ButtonBackgroundColor = 'BUTTON_BACKGROUND_COLOR',
  ButtonTextColor = 'BUTTON_TEXT_COLOR',
  CancellationPolicy = 'CANCELLATION_POLICY',
  ChildrenBookingAllowed = 'CHILDREN_BOOKING_ALLOWED',
  ChildrenPolicy = 'CHILDREN_POLICY',
  ColorAccent_1 = 'COLOR_ACCENT_1',
  ColorAccent_2 = 'COLOR_ACCENT_2',
  ColorAccent_3 = 'COLOR_ACCENT_3',
  ColorAccent_4 = 'COLOR_ACCENT_4',
  ColorAccent_5 = 'COLOR_ACCENT_5',
  ColorBackground_1 = 'COLOR_BACKGROUND_1',
  ColorBackground_2 = 'COLOR_BACKGROUND_2',
  ColorBookingSummaryBackground = 'COLOR_BOOKING_SUMMARY_BACKGROUND',
  ColorBorder = 'COLOR_BORDER',
  ColorBtnAddServicesBackground = 'COLOR_BTN_ADD_SERVICES_BACKGROUND',
  ColorBtnAddServiceText = 'COLOR_BTN_ADD_SERVICE_TEXT',
  ColorBtnRemoveServicesBackground = 'COLOR_BTN_REMOVE_SERVICES_BACKGROUND',
  ColorButtonBackground = 'COLOR_BUTTON_BACKGROUND',
  ColorButtonText = 'COLOR_BUTTON_TEXT',
  ColorCalendarMobileBackground = 'COLOR_CALENDAR_MOBILE_BACKGROUND',
  ColorDialogSelectCategoryBackground = 'COLOR_DIALOG_SELECT_CATEGORY_BACKGROUND',
  ColorDialogSelectFeatureBackground = 'COLOR_DIALOG_SELECT_FEATURE_BACKGROUND',
  ColorError = 'COLOR_ERROR',
  ColorExtraDetailBackground = 'COLOR_EXTRA_DETAIL_BACKGROUND',
  ColorExtraHeaderBackground = 'COLOR_EXTRA_HEADER_BACKGROUND',
  ColorExtraServicesItemBackground = 'COLOR_EXTRA_SERVICES_ITEM_BACKGROUND',
  ColorFeatureMatched = 'COLOR_FEATURE_MATCHED',
  ColorFeatureTagBackground = 'COLOR_FEATURE_TAG_BACKGROUND',
  ColorFeatureUnmatched = 'COLOR_FEATURE_UNMATCHED',
  ColorFilterOverlayBackground = 'COLOR_FILTER_OVERLAY_BACKGROUND',
  ColorFooterBackground = 'COLOR_FOOTER_BACKGROUND',
  ColorFooterText = 'COLOR_FOOTER_TEXT',
  ColorGuestInformationBackground = 'COLOR_GUEST_INFORMATION_BACKGROUND',
  ColorLogoBackground = 'COLOR_LOGO_BACKGROUND',
  ColorMainBackground = 'COLOR_MAIN_BACKGROUND',
  ColorNavigationBackground = 'COLOR_NAVIGATION_BACKGROUND',
  ColorNavigationIcon = 'COLOR_NAVIGATION_ICON',
  ColorNavigationIndicator = 'COLOR_NAVIGATION_INDICATOR',
  ColorNavigationItemText = 'COLOR_NAVIGATION_ITEM_TEXT',
  ColorNavigationItemTextActive = 'COLOR_NAVIGATION_ITEM_TEXT_ACTIVE',
  ColorNavigationLineIndicator = 'COLOR_NAVIGATION_LINE_INDICATOR',
  ColorPaymentDetailBackground = 'COLOR_PAYMENT_DETAIL_BACKGROUND',
  ColorPaymentInformationBackground = 'COLOR_PAYMENT_INFORMATION_BACKGROUND',
  ColorPaymentPolicyBackground = 'COLOR_PAYMENT_POLICY_BACKGROUND',
  ColorPaymentResultBackground = 'COLOR_PAYMENT_RESULT_BACKGROUND',
  ColorPaymentResultItemEvenBackground = 'COLOR_PAYMENT_RESULT_ITEM_EVEN_BACKGROUND',
  ColorPaymentResultItemOddBackground = 'COLOR_PAYMENT_RESULT_ITEM_ODD_BACKGROUND',
  ColorPaymentResultSubText = 'COLOR_PAYMENT_RESULT_SUB_TEXT',
  ColorPaymentResultText = 'COLOR_PAYMENT_RESULT_TEXT',
  ColorPaymentResultTitleBackground = 'COLOR_PAYMENT_RESULT_TITLE_BACKGROUND',
  ColorPaymentResultTotalBackground = 'COLOR_PAYMENT_RESULT_TOTAL_BACKGROUND',
  ColorPrice = 'COLOR_PRICE',
  ColorPrimary = 'COLOR_PRIMARY',
  ColorRatePlanBackground = 'COLOR_RATE_PLAN_BACKGROUND',
  ColorRatePlanBackgroundAfter = 'COLOR_RATE_PLAN_BACKGROUND_AFTER',
  ColorRatePlanItemBackground = 'COLOR_RATE_PLAN_ITEM_BACKGROUND',
  ColorRatePlanPanelBackground = 'COLOR_RATE_PLAN_PANEL_BACKGROUND',
  ColorRatePlanPanelText = 'COLOR_RATE_PLAN_PANEL_TEXT',
  ColorRatePlanText = 'COLOR_RATE_PLAN_TEXT',
  ColorRoomDetailBackground = 'COLOR_ROOM_DETAIL_BACKGROUND',
  ColorRoomLockRestriction = 'COLOR_ROOM_LOCK_RESTRICTION',
  ColorSearchBarBackground = 'COLOR_SEARCH_BAR_BACKGROUND',
  ColorSearchBarIcon = 'COLOR_SEARCH_BAR_ICON',
  ColorSearchBarSectionBackground = 'COLOR_SEARCH_BAR_SECTION_BACKGROUND',
  ColorSearchBarTitle = 'COLOR_SEARCH_BAR_TITLE',
  ColorSearchBarValue = 'COLOR_SEARCH_BAR_VALUE',
  ColorSearchFeatureBackgroundSelected = 'COLOR_SEARCH_FEATURE_BACKGROUND_SELECTED',
  ColorSearchFeatureBorder = 'COLOR_SEARCH_FEATURE_BORDER',
  ColorSearchFeatureIcon = 'COLOR_SEARCH_FEATURE_ICON',
  ColorSearchFeatureIconSelected = 'COLOR_SEARCH_FEATURE_ICON_SELECTED',
  ColorSearchFeatureText = 'COLOR_SEARCH_FEATURE_TEXT',
  ColorSearchFeatureTextSelected = 'COLOR_SEARCH_FEATURE_TEXT_SELECTED',
  ColorSecondary_1 = 'COLOR_SECONDARY_1',
  ColorSecondary_2 = 'COLOR_SECONDARY_2',
  ColorSecondary_3 = 'COLOR_SECONDARY_3',
  ColorServicesAddedBackground = 'COLOR_SERVICES_ADDED_BACKGROUND',
  ColorSubText = 'COLOR_SUB_TEXT',
  ColorSuccess = 'COLOR_SUCCESS',
  ColorSuggestionFeatureItemBackground = 'COLOR_SUGGESTION_FEATURE_ITEM_BACKGROUND',
  ColorSuggestionItemBackground = 'COLOR_SUGGESTION_ITEM_BACKGROUND',
  ColorTabInkRoomDetail = 'COLOR_TAB_INK_ROOM_DETAIL',
  ColorTabRoomDetailBackground = 'COLOR_TAB_ROOM_DETAIL_BACKGROUND',
  ColorText = 'COLOR_TEXT',
  ColorWarning = 'COLOR_WARNING',
  CustomThemeBackground = 'CUSTOM_THEME_BACKGROUND',
  DefaultBookingRoomStatus = 'DEFAULT_BOOKING_ROOM_STATUS',
  DefaultLanguage = 'DEFAULT_LANGUAGE',
  DefaultPax = 'DEFAULT_PAX',
  DefaultStayNight = 'DEFAULT_STAY_NIGHT',
  DisableStayOptionPriceClustering = 'DISABLE_STAY_OPTION_PRICE_CLUSTERING',
  FontFamilyPrimary = 'FONT_FAMILY_PRIMARY',
  GauvendiLogoFooter = 'GAUVENDI_LOGO_FOOTER',
  Gtm = 'GTM',
  LastOpeningAvailabilityDate = 'LAST_OPENING_AVAILABILITY_DATE',
  LogoUrl = 'LOGO_URL',
  MandatoryGuestInput = 'MANDATORY_GUEST_INPUT',
  NavigationBackgroundColor = 'NAVIGATION_BACKGROUND_COLOR',
  NavigationItemColor = 'NAVIGATION_ITEM_COLOR',
  NavigationItemTextColor = 'NAVIGATION_ITEM_TEXT_COLOR',
  PenaltyScore = 'PENALTY_SCORE',
  PopularFeatureLimit = 'POPULAR_FEATURE_LIMIT',
  PrimaryColor = 'PRIMARY_COLOR',
  PriorityWeight = 'PRIORITY_WEIGHT',
  PriorDaysTriggerUpdateBookingRoomStatus = 'PRIOR_DAYS_TRIGGER_UPDATE_BOOKING_ROOM_STATUS',
  PrivacyStatementUrl = 'PRIVACY_STATEMENT_URL',
  ReceptionOperationClosing = 'RECEPTION_OPERATION_CLOSING',
  RetailCategoryBackground = 'RETAIL_CATEGORY_BACKGROUND',
  RoomProductRecommendationConfiguratorSetting = 'ROOM_PRODUCT_RECOMMENDATION_CONFIGURATOR_SETTING',
  RoomProductRecommendationDirectSetting = 'ROOM_PRODUCT_RECOMMENDATION_DIRECT_SETTING',
  RoomProductRecommendationGradedLabelSetting = 'ROOM_PRODUCT_RECOMMENDATION_GRADED_LABEL_SETTING',
  RoomProductRestrictionCondition = 'ROOM_PRODUCT_RESTRICTION_CONDITION',
  SecondaryColor = 'SECONDARY_COLOR',
  ServiceChargeSetting = 'SERVICE_CHARGE_SETTING',
  TaxInformation = 'TAX_INFORMATION',
  TermsOfUseUrl = 'TERMS_OF_USE_URL',
  TextColor = 'TEXT_COLOR',
  TimeSliceConfiguration = 'TIME_SLICE_CONFIGURATION',
  Unknown = 'UNKNOWN',
  VatSetting = 'VAT_SETTING'
}

export interface HotelConfigurationDetail {
  colorCode?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  maxChildrenAge?: Maybe<Scalars['Int']>;
  maxChildrenCapacity?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['JSON']>;
  minChildrenAge?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
}

export interface HotelConfigurationDetailInput {
  colorCode?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  maxChildrenAge?: InputMaybe<Scalars['Int']>;
  maxChildrenCapacity?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  minChildrenAge?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface HotelConfigurationFilter {
  configTypeList?: InputMaybe<Array<InputMaybe<HotelConfigurationConfigTypeEnum>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface HotelConfigurationInput {
  configType: HotelConfigurationConfigTypeEnum;
  configValue: HotelConfigurationDetailInput;
  hotelCode: Scalars['String'];
}

export interface HotelConfigurationUrl {
  configType?: Maybe<HotelConfigurationConfigTypeEnum>;
  defaultUrl?: Maybe<Scalars['String']>;
  englishUrl?: Maybe<Scalars['String']>;
  frenchUrl?: Maybe<Scalars['String']>;
  germanUrl?: Maybe<Scalars['String']>;
  italianUrl?: Maybe<Scalars['String']>;
  spanishUrl?: Maybe<Scalars['String']>;
}

export interface HotelConfigurationUrlInput {
  configType?: InputMaybe<HotelConfigurationConfigTypeEnum>;
  defaultUrl?: InputMaybe<Scalars['String']>;
  englishUrl?: InputMaybe<Scalars['String']>;
  frenchUrl?: InputMaybe<Scalars['String']>;
  germanUrl?: InputMaybe<Scalars['String']>;
  italianUrl?: InputMaybe<Scalars['String']>;
  spanishUrl?: InputMaybe<Scalars['String']>;
}

export interface HotelCxlPolicyTranslation {
  description?: Maybe<Scalars['String']>;
  hotelCxlPolicyId?: Maybe<Scalars['UUID']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  languageCode?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
}

export interface HotelCxlPolicyTranslationInput {
  description?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
}

export interface HotelDailyRateFilter {
  checkLowestPriceOffering?: InputMaybe<Scalars['Boolean']>;
  fromDate?: InputMaybe<Scalars['Date']>;
  guestCount?: InputMaybe<Scalars['Int']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  isCityTaxIncluded?: InputMaybe<Scalars['Boolean']>;
  isIncludedDailyExtrasPricing?: InputMaybe<Scalars['Boolean']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export enum HotelExpandEnum {
  Country = 'country',
  Currency = 'currency',
  CurrencyRate = 'currencyRate',
  HotelConfiguration = 'hotelConfiguration',
  HotelPaymentAccount = 'hotelPaymentAccount',
  HotelPaymentMode = 'hotelPaymentMode',
  IconImage = 'iconImage'
}

export interface HotelExtras {
  amenityType?: Maybe<AmenityTypeEnum>;
  availability?: Maybe<AmenityAvailabilityEnum>;
  baseRate?: Maybe<Scalars['BigDecimal']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  distributionChannelList?: Maybe<Array<Maybe<DistributionChannel>>>;
  hotelAmenityPriceList?: Maybe<Array<Maybe<HotelAmenityPrice>>>;
  hotelId?: Maybe<Scalars['UUID']>;
  iconImageId?: Maybe<Scalars['UUID']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  linkedAmenityList?: Maybe<Array<Maybe<LinkedAmenityDto>>>;
  mappingHotelAmenityCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postNextDay?: Maybe<Scalars['Boolean']>;
  pricingUnit?: Maybe<PricingUnitEnum>;
  sellingType?: Maybe<AmenitySellingTypeEnum>;
  status?: Maybe<HotelAmenityStatusEnum>;
  translationList?: Maybe<Array<Maybe<AmenityTranslation>>>;
}

export enum HotelExtrasExpandEnum {
  Translation = 'translation'
}

export interface HotelExtrasFilter {
  amenityType?: InputMaybe<AmenityTypeEnum>;
  availability?: InputMaybe<AmenityAvailabilityEnum>;
  baseRate?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displaySequence?: InputMaybe<Scalars['Int']>;
  distributionChannelList?: InputMaybe<Array<InputMaybe<DistributionChannel>>>;
  expand?: InputMaybe<Array<InputMaybe<HotelExtrasExpandEnum>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  iconImageId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  languageCodeList?: InputMaybe<Array<InputMaybe<LanguageCode>>>;
  name?: InputMaybe<Scalars['String']>;
  postNextDay?: InputMaybe<Scalars['Boolean']>;
  pricingUnit?: InputMaybe<PricingUnitEnum>;
  pricingUnitList?: InputMaybe<Array<InputMaybe<PricingUnitEnum>>>;
  sellingTypeList?: InputMaybe<Array<InputMaybe<AmenitySellingTypeEnum>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  statusList?: InputMaybe<Array<InputMaybe<HotelAmenityStatusEnum>>>;
  translateTo?: InputMaybe<LanguageCode>;
}

export interface HotelExtrasInput {
  amenityType?: InputMaybe<AmenityTypeEnum>;
  availability?: InputMaybe<AmenityAvailabilityEnum>;
  baseRate?: InputMaybe<Scalars['BigDecimal']>;
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displaySequence?: InputMaybe<Scalars['Int']>;
  hotelAmenityPriceList?: InputMaybe<Array<InputMaybe<HotelAmenityPriceInput>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  iconImageId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  isSellableOnIbe?: InputMaybe<Scalars['Boolean']>;
  linkedAmenityList?: InputMaybe<Array<InputMaybe<LinkedAmenityInput>>>;
  mappingHotelAmenityCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  postNextDay?: InputMaybe<Scalars['Boolean']>;
  pricingUnit?: InputMaybe<PricingUnitEnum>;
  sellingType?: InputMaybe<AmenitySellingTypeEnum>;
  status?: InputMaybe<HotelAmenityStatusEnum>;
  translationList?: InputMaybe<Array<InputMaybe<AmenityTranslationInput>>>;
}

export interface HotelFeature {
  assignedRoomList?: Maybe<Array<Maybe<Room>>>;
  baseRate?: Maybe<Scalars['BigDecimal']>;
  baseWeight?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  dailyRateUnitList?: Maybe<Array<Maybe<DailyRateUnit>>>;
  description?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  hotelRetailCategory?: Maybe<HotelRetailCategory>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  isMultiBedroom?: Maybe<Scalars['Boolean']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  occasion?: Maybe<Array<Maybe<Scalars['String']>>>;
  occasionList?: Maybe<Array<Maybe<HotelTag>>>;
  quantity?: Maybe<Scalars['Int']>;
  retailFeatureImageList?: Maybe<Array<Maybe<HotelRetailFeatureImage>>>;
  shortDescription?: Maybe<Scalars['String']>;
  status?: Maybe<HotelRetailFeatureStatusEnum>;
  translationList?: Maybe<Array<Maybe<HotelFeatureTranslation>>>;
  travelTag?: Maybe<Array<Maybe<Scalars['String']>>>;
  travelTagList?: Maybe<Array<Maybe<HotelTag>>>;
  type?: Maybe<FeatureTypeEnum>;
}

export interface HotelFeatureCategoryFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export enum HotelFeatureExpand {
  AssignedRoom = 'assignedRoom'
}

export interface HotelFeatureFilter {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expand?: InputMaybe<Array<InputMaybe<HotelFeatureExpand>>>;
  featureType?: InputMaybe<FeatureTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  isMultiBedroom?: InputMaybe<Scalars['Boolean']>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  languageCodeList?: InputMaybe<Array<InputMaybe<LanguageCode>>>;
  retailCategoryCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  retailCategoryIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  statusList?: InputMaybe<Array<InputMaybe<HotelRetailFeatureStatusEnum>>>;
  translateTo?: InputMaybe<LanguageCode>;
  typeList?: InputMaybe<Array<InputMaybe<FeatureTypeEnum>>>;
}

export interface HotelFeatureInput {
  baseRate?: InputMaybe<Scalars['BigDecimal']>;
  baseWeight?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  displaySequence?: InputMaybe<Scalars['Int']>;
  featureType?: InputMaybe<FeatureTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelRetailCategoryId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  isMultiBedroom?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  templateRetailFeatureId?: InputMaybe<Scalars['UUID']>;
  templateStandardFeatureId?: InputMaybe<Scalars['UUID']>;
  translationList?: InputMaybe<Array<InputMaybe<HotelFeatureTranslationInput>>>;
  type?: InputMaybe<FeatureTypeEnum>;
}

export interface HotelFeatureTranslation {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  languageCode?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
}

export interface HotelFeatureTranslationInput {
  description?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
}

export interface HotelFilter {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expand?: InputMaybe<Array<InputMaybe<HotelExpandEnum>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  measureMetricList?: InputMaybe<Array<InputMaybe<MeasureMetricEnum>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface HotelInformation {
  address?: Maybe<Scalars['String']>;
  baseCurrency?: Maybe<Currency>;
  childAgeFrom?: Maybe<Scalars['Int']>;
  childAgeTo?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  defaultPax?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  emailAddressList?: Maybe<Array<Maybe<Scalars['String']>>>;
  hotelPrivacyPolicyUrl?: Maybe<HotelConfigurationUrl>;
  hotelTermAndConditionUrl?: Maybe<HotelConfigurationUrl>;
  hotelWebsiteUrl?: Maybe<HotelConfigurationUrl>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  mappingHotelCode?: Maybe<Scalars['String']>;
  measureMetric?: Maybe<MeasureMetricEnum>;
  name?: Maybe<Scalars['String']>;
  organisation?: Maybe<Organisation>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
}

export interface HotelOperation {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  defaultPax?: Maybe<Scalars['Int']>;
  defaultStayNight?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  emailAddressList?: Maybe<Array<Maybe<Scalars['String']>>>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  isRequireMainGuestAddress?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  operationClosingSetting?: Maybe<Array<Maybe<HotelOperationClosing>>>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  timeSliceArrivalTime?: Maybe<Scalars['String']>;
  timeSliceDepartureTime?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
}

export interface HotelOperationClosing {
  closingTime?: Maybe<Scalars['String']>;
  dayOfWeek?: Maybe<Scalars['String']>;
}

export interface HotelOperationClosingInput {
  closingTime?: InputMaybe<Scalars['String']>;
  dayOfWeek?: InputMaybe<Scalars['String']>;
}

export interface HotelPaymentAccount {
  environment?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  liveEndpointUrlPrefix?: Maybe<Scalars['String']>;
  merchant?: Maybe<Scalars['String']>;
  origin?: Maybe<HotelPaymentAccountOriginEnum>;
  paymentApiKey?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  publicKey?: Maybe<Scalars['String']>;
  subMerchantId?: Maybe<Scalars['String']>;
  type?: Maybe<HotelPaymentAccountTypeEnum>;
}

export enum HotelPaymentAccountOriginEnum {
  Extranet = 'EXTRANET',
  SalesEngine = 'SALES_ENGINE'
}

export enum HotelPaymentAccountTypeEnum {
  Adyen = 'ADYEN',
  MewsPayment = 'MEWS_PAYMENT',
  Stripe = 'STRIPE'
}

export interface HotelPaymentAndTax {
  hotelPaymentModeList?: Maybe<Array<Maybe<HotelPaymentMode>>>;
  hotelTaxList?: Maybe<Array<Maybe<HotelTax>>>;
}

export interface HotelPaymentMode {
  code?: Maybe<HotelPaymentModeCodeEnum>;
  description?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
}

export enum HotelPaymentModeCodeEnum {
  Guabtc = 'GUABTC',
  Guainv = 'GUAINV',
  Guawcc = 'GUAWCC',
  Guawde = 'GUAWDE',
  Guawep = 'GUAWEP',
  Noguar = 'NOGUAR',
  Spm = 'SPM'
}

export interface HotelPaymentModeInput {
  code?: InputMaybe<HotelPaymentModeCodeEnum>;
  description?: InputMaybe<Scalars['String']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface HotelPaymentTerm {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  payAtHotel?: Maybe<Scalars['Float']>;
  payAtHotelDescription?: Maybe<Scalars['String']>;
  payOnConfirmation?: Maybe<Scalars['Float']>;
  payOnConfirmationDescription?: Maybe<Scalars['String']>;
  translationList?: Maybe<Array<Maybe<HotelPaymentTermTranslation>>>;
}

export interface HotelPaymentTermTranslation {
  description?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  hotelPaymentTermId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  languageCode?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
  payAtHotelDescription?: Maybe<Scalars['String']>;
  payOnConfirmationDescription?: Maybe<Scalars['String']>;
}

export interface HotelPaymentTermTranslationInput {
  description?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
  payAtHotelDescription?: InputMaybe<Scalars['String']>;
  payOnConfirmationDescription?: InputMaybe<Scalars['String']>;
}

export interface HotelRestriction {
  code?: Maybe<HotelRestrictionCodeEnum>;
  fromDate?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  mappingPropertyRestrictionCode?: Maybe<Scalars['String']>;
  toDate?: Maybe<Scalars['Date']>;
  value?: Maybe<Scalars['String']>;
}

export enum HotelRestrictionCodeEnum {
  RstrAvailablePeriod = 'RSTR_AVAILABLE_PERIOD',
  RstrCloseToArrival = 'RSTR_CLOSE_TO_ARRIVAL',
  RstrCloseToDeparture = 'RSTR_CLOSE_TO_DEPARTURE',
  RstrCloseToStay = 'RSTR_CLOSE_TO_STAY',
  RstrCloseToStaySellability = 'RSTR_CLOSE_TO_STAY_SELLABILITY',
  RstrLosMax = 'RSTR_LOS_MAX',
  RstrLosMin = 'RSTR_LOS_MIN',
  RstrMaxAdvanceBooking = 'RSTR_MAX_ADVANCE_BOOKING',
  RstrMinAdvanceBooking = 'RSTR_MIN_ADVANCE_BOOKING',
  RstrMinLosThrough = 'RSTR_MIN_LOS_THROUGH',
  RstrStayThroughDay = 'RSTR_STAY_THROUGH_DAY'
}

export interface HotelRestrictionSetting {
  mode?: Maybe<HotelRestrictionSettingMode>;
  propertyId?: Maybe<Scalars['UUID']>;
  restrictionCode?: Maybe<HotelRestrictionCodeEnum>;
}

export enum HotelRestrictionSettingEntityEnum {
  Property = 'PROPERTY',
  RoomProduct = 'ROOM_PRODUCT',
  RoomProductSalesPlan = 'ROOM_PRODUCT_SALES_PLAN',
  SalesPlan = 'SALES_PLAN'
}

export interface HotelRestrictionSettingInput {
  id?: InputMaybe<Scalars['UUID']>;
  mode: HotelRestrictionSettingMode;
  propertyId?: InputMaybe<Scalars['String']>;
  restrictionCode: HotelRestrictionCodeEnum;
  restrictionEntity: HotelRestrictionSettingEntityEnum;
}

export enum HotelRestrictionSettingMode {
  Neutral = 'NEUTRAL',
  Pull = 'PULL',
  Push = 'PUSH'
}

export interface HotelRetailCategory {
  categoryType?: Maybe<CategoryTypeEnum>;
  code?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  hotelRetailFeatureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  translationList?: Maybe<Array<Maybe<HotelRetailCategoryTranslation>>>;
}

export interface HotelRetailCategoryTranslation {
  hotelRetailCategoryId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  languageCode?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
}

export interface HotelRetailFeature {
  baseRate?: Maybe<Scalars['BigDecimal']>;
  baseWeight?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  dailySellingRateList?: Maybe<Array<Maybe<DailySellingRate>>>;
  description?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  hotelRetailCategory?: Maybe<HotelRetailCategory>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  matched?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  retailFeatureImageList?: Maybe<Array<Maybe<HotelRetailFeatureImage>>>;
  shortDescription?: Maybe<Scalars['String']>;
  status?: Maybe<HotelRetailFeatureStatusEnum>;
  type?: Maybe<FeatureTypeEnum>;
}

export interface HotelRetailFeatureImage {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  image?: Maybe<FileLibrary>;
  imageId?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['Boolean']>;
}

export interface HotelRetailFeatureInput {
  baseRate?: InputMaybe<Scalars['BigDecimal']>;
  baseWeight?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  displaySequence?: InputMaybe<Scalars['Int']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelRetailCategoryId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  templateRetailFeatureId?: InputMaybe<Scalars['UUID']>;
  type?: InputMaybe<FeatureTypeEnum>;
}

export enum HotelRetailFeatureStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export interface HotelStandardFeature {
  baseRate?: Maybe<Scalars['BigDecimal']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
}

export interface HotelStandardFeatureInput {
  baseRate?: InputMaybe<Scalars['BigDecimal']>;
  description?: InputMaybe<Scalars['String']>;
  displaySequence?: InputMaybe<Scalars['Int']>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  templateStandardFeatureId?: InputMaybe<Scalars['UUID']>;
}

export enum HotelSyncJobEnum {
  AvailabilitySync = 'AVAILABILITY_SYNC',
  PropertyRestrictionSync = 'PROPERTY_RESTRICTION_SYNC',
  ReservationSync = 'RESERVATION_SYNC',
  RoomProductRestrictionSync = 'ROOM_PRODUCT_RESTRICTION_SYNC',
  RoomProductSalesPlanRestrictionSync = 'ROOM_PRODUCT_SALES_PLAN_RESTRICTION_SYNC',
  SalesPlanRestrictionSync = 'SALES_PLAN_RESTRICTION_SYNC'
}

export interface HotelTag {
  assignedFeatureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  code?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  translationList?: Maybe<Array<Maybe<HotelTagTranslation>>>;
  type?: Maybe<HotelTagType>;
}

export enum HotelTagExpandEnum {
  AssignedFeature = 'assignedFeature',
  Translation = 'translation'
}

export interface HotelTagFilter {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expand?: InputMaybe<Array<InputMaybe<HotelTagExpandEnum>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeList?: InputMaybe<Array<InputMaybe<HotelTagType>>>;
}

export interface HotelTagInput {
  code?: InputMaybe<Scalars['String']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  translationList?: InputMaybe<Array<InputMaybe<HotelTagTranslationInput>>>;
  type?: InputMaybe<HotelTagType>;
}

export interface HotelTagTranslation {
  hotelTagId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  languageCode?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
}

export interface HotelTagTranslationInput {
  hotelTagId?: InputMaybe<Scalars['UUID']>;
  languageCode?: InputMaybe<LanguageCode>;
  name?: InputMaybe<Scalars['String']>;
}

export enum HotelTagType {
  Occasion = 'OCCASION',
  TravelTag = 'TRAVEL_TAG'
}

export interface HotelTax {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['BigDecimal']>;
}

export interface HotelTaxFilter {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface HotelTaxInput {
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['BigDecimal']>;
}

export interface HotelTaxMapping {
  description?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  hotelTax?: Maybe<HotelTax>;
  id?: Maybe<Scalars['UUID']>;
  serviceCode?: Maybe<Scalars['String']>;
  serviceType?: Maybe<Scalars['String']>;
  taxCode?: Maybe<Scalars['String']>;
}

export interface HotelTaxMappingFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  serviceCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceTypeList?: InputMaybe<Array<InputMaybe<HotelTaxMappingServiceTypeEnum>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export enum HotelTaxMappingServiceTypeEnum {
  Accommodation = 'ACCOMMODATION',
  Extras = 'EXTRAS',
  Others = 'OTHERS'
}

export enum HotelTaxSettingEnum {
  Exclusive = 'EXCLUSIVE',
  Inclusive = 'INCLUSIVE'
}

export enum HotelTemplateEmailCode {
  BookingConfirmation = 'BOOKING_CONFIRMATION',
  ProposalBookingConfirmation = 'PROPOSAL_BOOKING_CONFIRMATION',
  ReleasedEmail = 'RELEASED_EMAIL',
  ReservationCancellation = 'RESERVATION_CANCELLATION',
  VoiceBookingConfirmation = 'VOICE_BOOKING_CONFIRMATION'
}

export interface IdentityLink {
  hotelId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface ImageInput {
  description?: InputMaybe<Scalars['String']>;
  displaySequence?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['UUID']>;
}

export interface ImportProtelReservationInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  reservationList?: InputMaybe<Array<InputMaybe<ProtelReservationInput>>>;
}

export interface InstantUpsellRevenue {
  upsellRevenueOverLowestPrice?: Maybe<Scalars['BigDecimal']>;
  upsellRevenueOverMrfc?: Maybe<Scalars['BigDecimal']>;
}

export enum InventoryStatusEnum {
  Locked = 'LOCKED',
  Movable = 'MOVABLE',
  Unassigned = 'UNASSIGNED',
  Unavailable = 'UNAVAILABLE'
}

export enum LanguageCode {
  De = 'DE',
  Es = 'ES',
  Fr = 'FR',
  It = 'IT'
}

export interface LastAvailabilitySettingInput {
  hotelCode: Scalars['String'];
  lastAvailabilityDate?: InputMaybe<Scalars['Date']>;
}

export interface LinkedAmenityDto {
  code?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
}

export interface LinkedAmenityInput {
  code?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
}

export interface MappingHotel {
  connector?: Maybe<Connector>;
  connectorId?: Maybe<Scalars['UUID']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  mappingHotelCode?: Maybe<Scalars['String']>;
}

export enum MeasureMetricEnum {
  Sqft = 'sqft',
  Sqm = 'sqm'
}

export interface MetaSearchMessage {
  event: Scalars['String'];
  metaSearchProviderList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  propertyId: Scalars['UUID'];
  roomProductIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  salesPlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface MhsProperty {
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  propertyId?: Maybe<Scalars['Int']>;
}

export enum Month {
  April = 'APRIL',
  August = 'AUGUST',
  December = 'DECEMBER',
  February = 'FEBRUARY',
  January = 'JANUARY',
  July = 'JULY',
  June = 'JUNE',
  March = 'MARCH',
  May = 'MAY',
  November = 'NOVEMBER',
  October = 'OCTOBER',
  September = 'SEPTEMBER'
}

export interface MonthlySalesPlanOverview {
  adr?: Maybe<Scalars['BigDecimal']>;
  month?: Maybe<Month>;
  occupancy?: Maybe<Scalars['BigDecimal']>;
  propertyId?: Maybe<Scalars['UUID']>;
  sevenDayAvgDailyRoomPickup?: Maybe<Scalars['BigDecimal']>;
  sevenDayOccupancyPaceTrend?: Maybe<Scalars['BigDecimal']>;
  sevenDayPickupAdr?: Maybe<Scalars['BigDecimal']>;
  totalRoomRevenue?: Maybe<Scalars['BigDecimal']>;
}

export interface MonthlySalesPlanOverviewFilter {
  month?: InputMaybe<Month>;
  propertyCode?: InputMaybe<Scalars['String']>;
}

export interface Mrfc {
  code?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  mrfcMappingList?: Maybe<Array<Maybe<MrfcMapping>>>;
  name?: Maybe<Scalars['String']>;
  rfc?: Maybe<Rfc>;
  rfcId?: Maybe<Scalars['UUID']>;
}

export interface MrfcDaily {
  availableToSell?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  mrfcMappingId?: Maybe<Scalars['UUID']>;
  sold?: Maybe<Scalars['Int']>;
  totalRoomInventory?: Maybe<Scalars['Int']>;
}

export interface MrfcDailyFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  mrfcMappingIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface MrfcDailyInput {
  adjustSold?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['Date']>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  mrfcMappingId?: InputMaybe<Scalars['UUID']>;
  totalRoomInventory?: InputMaybe<Scalars['Int']>;
}

export interface MrfcMapping {
  channel?: Maybe<ChannelCode>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  mrfcId?: Maybe<Scalars['UUID']>;
  relatedCode?: Maybe<Scalars['String']>;
}

export interface MrfcMappingFilter {
  channelList?: InputMaybe<Array<InputMaybe<ChannelCode>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  mrfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  relatedCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface MrfcMappingInput {
  channel?: InputMaybe<ChannelCode>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  mrfcId?: InputMaybe<Scalars['UUID']>;
  relatedCode?: InputMaybe<Scalars['String']>;
}

export interface Mutation {
  applyOptimization?: Maybe<ResponseContent>;
  assignHotelFeature?: Maybe<ResponseContent>;
  assignHotelTag?: Maybe<ResponseContent>;
  assignMrfcMapping?: Maybe<ResponseContent>;
  assignRfcRoom?: Maybe<ResponseContent>;
  assignRfcToRatePlan?: Maybe<ResponseContent>;
  assignRoomFeature?: Maybe<ResponseContent>;
  assignRoomProductToSalesPlan?: Maybe<ResponseContent>;
  auditBookingProposal?: Maybe<ResponseContent>;
  auditReservationRoomStatus?: Maybe<ResponseContent>;
  authorizeConnector?: Maybe<ResponseContent>;
  bulkUpdateRoom?: Maybe<ResponseContent>;
  calculateRfcAvailability?: Maybe<ResponseContent>;
  cancelReservation?: Maybe<ResponseContent>;
  changePassword?: Maybe<ResponseContent>;
  cloneRatePlan?: Maybe<ResponseContent>;
  cloneRoomProduct?: Maybe<ResponseContent>;
  completeBookingVoice?: Maybe<ResponseContent>;
  confirmBookingVoice?: Maybe<ResponseContent>;
  createBookingVoice?: Maybe<ResponseContent>;
  createERFC?: Maybe<ResponseContent>;
  createHotelAgeCategory?: Maybe<ResponseContent>;
  createHotelCityTax?: Maybe<ResponseContent>;
  createHotelCityTaxAgeGroup?: Maybe<ResponseContent>;
  createHotelExtras?: Maybe<ResponseContent>;
  createHotelPaymentMode?: Maybe<ResponseContent>;
  createHotelRestriction?: Maybe<ResponseContent>;
  createHotelTag?: Maybe<ResponseContent>;
  createHotelTax?: Maybe<ResponseContent>;
  createMRfc?: Maybe<ResponseContent>;
  createMappingHotel?: Maybe<ResponseContent>;
  createOrUpdateDynamicInventorySetting?: Maybe<ResponseContent>;
  createOrUpdateFeatureRateAdjustment?: Maybe<ResponseContent>;
  createOrUpdateHotelConfiguration?: Maybe<ResponseContent>;
  createOrUpdateMrfcDailyOnDirectChannel?: Maybe<ResponseContent>;
  createOrUpdateRatePlanAdjustment?: Maybe<ResponseContent>;
  createOrUpdateRatePlanCxlPolicyDaily?: Maybe<ResponseContent>;
  createOrUpdateRatePlanFeatureDailyRate?: Maybe<ResponseContent>;
  createOrUpdateRatePlanHotelExtrasDaily?: Maybe<ResponseContent>;
  createOrUpdateRatePlanPaymentTermDaily?: Maybe<ResponseContent>;
  createOrUpdateRatePlanRestrictionAdjustment?: Maybe<ResponseContent>;
  createOrUpdateRfcAvailabilityAdjustment?: Maybe<ResponseContent>;
  createOrUpdateRfcExtraOccupancyRate?: Maybe<ResponseContent>;
  createOrUpdateRfcFeatureRateAdjustment?: Maybe<ResponseContent>;
  createOrUpdateRfcRatePlanExtraOccupancyRateAdjustment?: Maybe<ResponseContent>;
  createOrUpdateRfcRestrictionAdjustment?: Maybe<ResponseContent>;
  createOrUpdateSalesPlanSellability?: Maybe<ResponseContent>;
  createOrUpdateSalesPlanSellabilityAdjustment?: Maybe<ResponseContent>;
  createRatePlan?: Maybe<ResponseContent>;
  createRatePlanRestriction?: Maybe<ResponseContent>;
  createRfcHotelRetailFeature?: Maybe<ResponseContent>;
  createRfcHotelStandardFeature?: Maybe<ResponseContent>;
  createRfcRestriction?: Maybe<ResponseContent>;
  createRoom?: Maybe<ResponseContent>;
  createRoomHotelFeature?: Maybe<ResponseContent>;
  createSubscription?: Maybe<ResponseContent>;
  createUser?: Maybe<ResponseContent>;
  deauthorizeConnector?: Maybe<ResponseContent>;
  deleteHotelAgeCategory?: Maybe<ResponseContent>;
  deleteHotelCityTax?: Maybe<ResponseContent>;
  deleteHotelCityTaxAgeGroup?: Maybe<ResponseContent>;
  deleteHotelExtras?: Maybe<ResponseContent>;
  deleteHotelPaymentMode?: Maybe<ResponseContent>;
  deleteHotelRestriction?: Maybe<ResponseContent>;
  deleteHotelRetailFeature?: Maybe<ResponseContent>;
  deleteHotelTag?: Maybe<ResponseContent>;
  deleteHotelTax?: Maybe<ResponseContent>;
  deleteMrfcMapping?: Maybe<ResponseContent>;
  deleteRatePlan?: Maybe<ResponseContent>;
  deleteRatePlanAdjustment?: Maybe<ResponseContent>;
  deleteRatePlanCxlPolicyDaily?: Maybe<ResponseContent>;
  deleteRatePlanHotelExtrasDaily?: Maybe<ResponseContent>;
  deleteRatePlanPaymentTermDaily?: Maybe<ResponseContent>;
  deleteRatePlanRestriction?: Maybe<ResponseContent>;
  deleteRatePlanRestrictionAdjustment?: Maybe<ResponseContent>;
  deleteRfc?: Maybe<ResponseContent>;
  deleteRfcAvailabilityAdjustment?: Maybe<ResponseContent>;
  deleteRfcExtraOccupancyRate?: Maybe<ResponseContent>;
  deleteRfcFeatureRateAdjustment?: Maybe<ResponseContent>;
  deleteRfcHotelRetailFeature?: Maybe<ResponseContent>;
  deleteRfcHotelStandardFeature?: Maybe<ResponseContent>;
  deleteRfcImage?: Maybe<ResponseContent>;
  deleteRfcRatePlanExtraOccupancyRateAdjustment?: Maybe<ResponseContent>;
  deleteRfcRestriction?: Maybe<ResponseContent>;
  deleteRfcRestrictionAdjustment?: Maybe<ResponseContent>;
  deleteRoomHotelFeature?: Maybe<ResponseContent>;
  deleteSalesPlanSellabilityAdjustment?: Maybe<ResponseContent>;
  deleteUser?: Maybe<ResponseContent>;
  generateRfc?: Maybe<ResponseContent>;
  generateRoomProductDailyBasePrice?: Maybe<ResponseContent>;
  importProtelReservation?: Maybe<ResponseContent>;
  mhsCreateProperty?: Maybe<ResponseContent>;
  mhsPushRate?: Maybe<ResponseContent>;
  onboardingHotel?: Maybe<ResponseContent>;
  pmsPullInventory?: Maybe<ResponseContent>;
  pmsTriggerSyncAvailability?: Maybe<ResponseContent>;
  pmsTriggerSyncMaintenance?: Maybe<ResponseContent>;
  pmsTriggerSyncReservation?: Maybe<ResponseContent>;
  populateMrfcMapping?: Maybe<ResponseContent>;
  proposeBookingVoice?: Maybe<ResponseContent>;
  publishMetaSearchEvent?: Maybe<ResponseContent>;
  pushAvailabilityRoomProduct?: Maybe<ResponseContent>;
  pushBookingToPms?: Maybe<ResponseContent>;
  pushInventoryRoomProduct?: Maybe<ResponseContent>;
  pushLowestPriceRoomProduct?: Maybe<ResponseContent>;
  pushMetaSearchData?: Maybe<ResponseContent>;
  reallocateReservation?: Maybe<ResponseContent>;
  refreshRoomProductDailyBasePrice?: Maybe<ResponseContent>;
  removeRfcFromRatePlan?: Maybe<ResponseContent>;
  removeRoomProductFromSalesPlan?: Maybe<ResponseContent>;
  requestIntegration?: Maybe<ResponseContent>;
  reserveBookingVoice?: Maybe<ResponseContent>;
  rollingRoomProductDailyBasePrice?: Maybe<ResponseContent>;
  sendBookingConfirmationEmail?: Maybe<ResponseContent>;
  sendCancellationEmail?: Maybe<ResponseContent>;
  sendProposalBookingConfirmationEmail?: Maybe<ResponseContent>;
  setInactiveHotelRetailFeature?: Maybe<ResponseContent>;
  setVisibleHotelRetailFeature?: Maybe<ResponseContent>;
  setupAutomatePricing?: Maybe<ResponseContent>;
  setupPricingMethod?: Maybe<ResponseContent>;
  syncAvailabilityFromPms?: Maybe<ResponseContent>;
  syncHotelRestriction?: Maybe<ResponseContent>;
  syncRestrictions?: Maybe<ResponseContent>;
  toggleRemoteLogging?: Maybe<ResponseContent>;
  triggerHotelAutomatePricing?: Maybe<ResponseContent>;
  triggerOptimizationProcess?: Maybe<ResponseContent>;
  triggerRestrictionAutomation?: Maybe<ResponseContent>;
  unAssignHotelFeature?: Maybe<ResponseContent>;
  updateConfigurator?: Maybe<ResponseContent>;
  updateERFC?: Maybe<ResponseContent>;
  updateHotelAgeCategory?: Maybe<ResponseContent>;
  updateHotelCityTax?: Maybe<ResponseContent>;
  updateHotelCityTaxAgeGroup?: Maybe<ResponseContent>;
  updateHotelCityTaxList?: Maybe<ResponseContent>;
  updateHotelCxlPolicy?: Maybe<ResponseContent>;
  updateHotelExtras?: Maybe<ResponseContent>;
  updateHotelExtrasMapping?: Maybe<ResponseContent>;
  updateHotelFeature?: Maybe<ResponseContent>;
  updateHotelInformation?: Maybe<ResponseContent>;
  updateHotelOperation?: Maybe<ResponseContent>;
  updateHotelPaymentMode?: Maybe<ResponseContent>;
  updateHotelPaymentTerm?: Maybe<ResponseContent>;
  updateHotelRestriction?: Maybe<ResponseContent>;
  updateHotelRestrictionSetting?: Maybe<ResponseContent>;
  updateHotelSetting?: Maybe<ResponseContent>;
  updateHotelTag?: Maybe<ResponseContent>;
  updateHotelTax?: Maybe<ResponseContent>;
  updateLastAvailabilitySetting?: Maybe<ResponseContent>;
  updateMRfc?: Maybe<ResponseContent>;
  updatePropertyRestrictionIntegrationSetting?: Maybe<ResponseContent>;
  updateRatePlan?: Maybe<ResponseContent>;
  updateRatePlanCancellationPolicy?: Maybe<ResponseContent>;
  updateRatePlanPaymentTerm?: Maybe<ResponseContent>;
  updateRatePlanRestriction?: Maybe<ResponseContent>;
  updateReservationLock?: Maybe<ResponseContent>;
  updateRestrictionAutomationSettingOfRoomProduct?: Maybe<ResponseContent>;
  updateRfc?: Maybe<ResponseContent>;
  updateRfcHotelRetailFeature?: Maybe<ResponseContent>;
  updateRfcImage?: Maybe<ResponseContent>;
  updateRfcRatePlanBulk?: Maybe<ResponseContent>;
  updateRfcRatePlanDailyAvailability?: Maybe<ResponseContent>;
  updateRfcRatePlanMapping?: Maybe<ResponseContent>;
  updateRfcRestriction?: Maybe<ResponseContent>;
  updateRoom?: Maybe<ResponseContent>;
  updateRoomAvailability?: Maybe<ResponseContent>;
  updateRoomHotelFeature?: Maybe<ResponseContent>;
  updateRoomMapping?: Maybe<ResponseContent>;
  updateRoomProductRestrictionAutomationSetting?: Maybe<ResponseContent>;
  updateUser?: Maybe<ResponseContent>;
}


export interface MutationApplyOptimizationArgs {
  input?: InputMaybe<ExtranetApplyOptimizationInput>;
}


export interface MutationAssignHotelFeatureArgs {
  input?: InputMaybe<AssignHotelFeatureInput>;
}


export interface MutationAssignHotelTagArgs {
  input?: InputMaybe<AssignHotelTagInput>;
}


export interface MutationAssignMrfcMappingArgs {
  input?: InputMaybe<AssignMrfcMappingInput>;
}


export interface MutationAssignRfcRoomArgs {
  input?: InputMaybe<RfcRoomInput>;
}


export interface MutationAssignRfcToRatePlanArgs {
  input?: InputMaybe<ExtranetRfcRatePlanInput>;
}


export interface MutationAssignRoomFeatureArgs {
  input?: InputMaybe<AssignRoomFeatureInput>;
}


export interface MutationAssignRoomProductToSalesPlanArgs {
  input?: InputMaybe<ExtranetRfcRatePlanInput>;
}


export interface MutationAuditBookingProposalArgs {
  input?: InputMaybe<AuditBookingProposalInput>;
}


export interface MutationAuditReservationRoomStatusArgs {
  input?: InputMaybe<AuditReservationRoomStatusInput>;
}


export interface MutationAuthorizeConnectorArgs {
  input?: InputMaybe<ExtranetAuthorizeConnectorInput>;
}


export interface MutationBulkUpdateRoomArgs {
  input?: InputMaybe<BulkUpdateRoomInput>;
}


export interface MutationCalculateRfcAvailabilityArgs {
  input?: InputMaybe<ExtranetRfcAvailabilityInput>;
}


export interface MutationCancelReservationArgs {
  input?: InputMaybe<CancelReservationInput>;
}


export interface MutationChangePasswordArgs {
  input?: InputMaybe<UserInput>;
}


export interface MutationCloneRatePlanArgs {
  input?: InputMaybe<ExtranetCloneRatePlanInput>;
}


export interface MutationCloneRoomProductArgs {
  input?: InputMaybe<ExtranetCloneRoomProductInput>;
}


export interface MutationCompleteBookingVoiceArgs {
  input?: InputMaybe<ExtranetCompleteBookingInput>;
}


export interface MutationConfirmBookingVoiceArgs {
  input?: InputMaybe<ExtranetVoiceBookingInformationInput>;
}


export interface MutationCreateBookingVoiceArgs {
  request?: InputMaybe<BookingPaymentRequest>;
}


export interface MutationCreateErfcArgs {
  input?: InputMaybe<RfcInput>;
}


export interface MutationCreateHotelAgeCategoryArgs {
  input?: InputMaybe<ExtranetHotelAgeCategoryInput>;
}


export interface MutationCreateHotelCityTaxArgs {
  input?: InputMaybe<ExtranetHotelCityTaxInput>;
}


export interface MutationCreateHotelCityTaxAgeGroupArgs {
  input?: InputMaybe<HotelCityTaxAgeGroupInput>;
}


export interface MutationCreateHotelExtrasArgs {
  input?: InputMaybe<HotelExtrasInput>;
}


export interface MutationCreateHotelPaymentModeArgs {
  input?: InputMaybe<HotelPaymentModeInput>;
}


export interface MutationCreateHotelRestrictionArgs {
  input?: InputMaybe<ExtranetHotelRestrictionInput>;
}


export interface MutationCreateHotelTagArgs {
  input?: InputMaybe<HotelTagInput>;
}


export interface MutationCreateHotelTaxArgs {
  input?: InputMaybe<HotelTaxInput>;
}


export interface MutationCreateMRfcArgs {
  input?: InputMaybe<RfcInput>;
}


export interface MutationCreateMappingHotelArgs {
  input?: InputMaybe<ExtranetMappingHotelInput>;
}


export interface MutationCreateOrUpdateDynamicInventorySettingArgs {
  input?: InputMaybe<ExtranetDynamicInventorySettingInput>;
}


export interface MutationCreateOrUpdateFeatureRateAdjustmentArgs {
  input: FeatureRateAdjustmentInput;
}


export interface MutationCreateOrUpdateHotelConfigurationArgs {
  input?: InputMaybe<HotelConfigurationInput>;
}


export interface MutationCreateOrUpdateMrfcDailyOnDirectChannelArgs {
  input: DirectMrfcDailyInput;
}


export interface MutationCreateOrUpdateRatePlanAdjustmentArgs {
  input?: InputMaybe<ExtranetRatePlanAdjustmentInput>;
}


export interface MutationCreateOrUpdateRatePlanCxlPolicyDailyArgs {
  input: ExtranetRatePlanCxlPolicyDailyInput;
}


export interface MutationCreateOrUpdateRatePlanFeatureDailyRateArgs {
  input: RatePlanFeatureDailyRateInput;
}


export interface MutationCreateOrUpdateRatePlanHotelExtrasDailyArgs {
  input: ExtranetRatePlanHotelExtrasDailyInput;
}


export interface MutationCreateOrUpdateRatePlanPaymentTermDailyArgs {
  input: ExtranetRatePlanPaymentTermDailyInput;
}


export interface MutationCreateOrUpdateRatePlanRestrictionAdjustmentArgs {
  input?: InputMaybe<ExtranetRatePlanRestrictionAdjustmentInput>;
}


export interface MutationCreateOrUpdateRfcAvailabilityAdjustmentArgs {
  input?: InputMaybe<ExtranetRfcAvailabilityAdjustmentInput>;
}


export interface MutationCreateOrUpdateRfcExtraOccupancyRateArgs {
  input?: InputMaybe<ExtranetRfcExtraOccupancyRateInput>;
}


export interface MutationCreateOrUpdateRfcFeatureRateAdjustmentArgs {
  input?: InputMaybe<RfcFeatureRateAdjustmentInput>;
}


export interface MutationCreateOrUpdateRfcRatePlanExtraOccupancyRateAdjustmentArgs {
  input?: InputMaybe<RfcRatePlanExtraOccupancyRateAdjustmentInput>;
}


export interface MutationCreateOrUpdateRfcRestrictionAdjustmentArgs {
  input?: InputMaybe<ExtranetRfcRestrictionAdjustmentInput>;
}


export interface MutationCreateOrUpdateSalesPlanSellabilityArgs {
  input?: InputMaybe<ExtranetSalesPlanSellabilityInput>;
}


export interface MutationCreateOrUpdateSalesPlanSellabilityAdjustmentArgs {
  input?: InputMaybe<SalesPlanSellabilityAdjustmentInput>;
}


export interface MutationCreateRatePlanArgs {
  input?: InputMaybe<ExtranetRatePlanInput>;
}


export interface MutationCreateRatePlanRestrictionArgs {
  input?: InputMaybe<ExtranetRatePlanRestrictionInput>;
}


export interface MutationCreateRfcHotelRetailFeatureArgs {
  input?: InputMaybe<RfcFeatureInput>;
}


export interface MutationCreateRfcHotelStandardFeatureArgs {
  input?: InputMaybe<RfcFeatureInput>;
}


export interface MutationCreateRfcRestrictionArgs {
  input?: InputMaybe<ExtranetRfcRestrictionInput>;
}


export interface MutationCreateRoomArgs {
  input?: InputMaybe<RoomInput>;
}


export interface MutationCreateRoomHotelFeatureArgs {
  input?: InputMaybe<RoomTemplateFeatureInput>;
}


export interface MutationCreateSubscriptionArgs {
  input?: InputMaybe<SubscriptionInput>;
}


export interface MutationCreateUserArgs {
  input?: InputMaybe<UserInput>;
}


export interface MutationDeauthorizeConnectorArgs {
  input?: InputMaybe<ExtranetDeauthorizeConnectorInput>;
}


export interface MutationDeleteHotelAgeCategoryArgs {
  input?: InputMaybe<ExtranetHotelAgeCategoryInput>;
}


export interface MutationDeleteHotelCityTaxArgs {
  input?: InputMaybe<ExtranetHotelCityTaxInput>;
}


export interface MutationDeleteHotelCityTaxAgeGroupArgs {
  input?: InputMaybe<HotelCityTaxAgeGroupInput>;
}


export interface MutationDeleteHotelExtrasArgs {
  input?: InputMaybe<HotelExtrasInput>;
}


export interface MutationDeleteHotelPaymentModeArgs {
  input?: InputMaybe<HotelPaymentModeInput>;
}


export interface MutationDeleteHotelRestrictionArgs {
  input?: InputMaybe<ExtranetHotelRestrictionInput>;
}


export interface MutationDeleteHotelRetailFeatureArgs {
  input?: InputMaybe<HotelRetailFeatureInput>;
}


export interface MutationDeleteHotelTagArgs {
  input?: InputMaybe<HotelTagInput>;
}


export interface MutationDeleteHotelTaxArgs {
  input?: InputMaybe<HotelTaxInput>;
}


export interface MutationDeleteMrfcMappingArgs {
  input?: InputMaybe<DeleteMrfcMappingInput>;
}


export interface MutationDeleteRatePlanArgs {
  input?: InputMaybe<ExtranetRatePlanInput>;
}


export interface MutationDeleteRatePlanAdjustmentArgs {
  input?: InputMaybe<ExtranetRatePlanAdjustmentInput>;
}


export interface MutationDeleteRatePlanCxlPolicyDailyArgs {
  input: ExtranetRatePlanCxlPolicyDailyInput;
}


export interface MutationDeleteRatePlanHotelExtrasDailyArgs {
  input: ExtranetRatePlanHotelExtrasDailyInput;
}


export interface MutationDeleteRatePlanPaymentTermDailyArgs {
  input: ExtranetRatePlanPaymentTermDailyInput;
}


export interface MutationDeleteRatePlanRestrictionArgs {
  input?: InputMaybe<ExtranetRatePlanRestrictionInput>;
}


export interface MutationDeleteRatePlanRestrictionAdjustmentArgs {
  input?: InputMaybe<ExtranetRatePlanRestrictionAdjustmentInput>;
}


export interface MutationDeleteRfcArgs {
  input: DeleteRfcInput;
}


export interface MutationDeleteRfcAvailabilityAdjustmentArgs {
  input?: InputMaybe<ExtranetRfcAvailabilityAdjustmentInput>;
}


export interface MutationDeleteRfcExtraOccupancyRateArgs {
  input?: InputMaybe<ExtranetRfcExtraOccupancyRateInput>;
}


export interface MutationDeleteRfcFeatureRateAdjustmentArgs {
  input?: InputMaybe<RfcFeatureRateAdjustmentInput>;
}


export interface MutationDeleteRfcHotelRetailFeatureArgs {
  input?: InputMaybe<RfcFeatureInput>;
}


export interface MutationDeleteRfcHotelStandardFeatureArgs {
  input?: InputMaybe<RfcFeatureInput>;
}


export interface MutationDeleteRfcImageArgs {
  input?: InputMaybe<RfcImageInput>;
}


export interface MutationDeleteRfcRatePlanExtraOccupancyRateAdjustmentArgs {
  input?: InputMaybe<RfcRatePlanExtraOccupancyRateAdjustmentInput>;
}


export interface MutationDeleteRfcRestrictionArgs {
  input?: InputMaybe<ExtranetRfcRestrictionInput>;
}


export interface MutationDeleteRfcRestrictionAdjustmentArgs {
  input?: InputMaybe<ExtranetRfcRestrictionAdjustmentInput>;
}


export interface MutationDeleteRoomHotelFeatureArgs {
  input?: InputMaybe<RoomTemplateFeatureInput>;
}


export interface MutationDeleteSalesPlanSellabilityAdjustmentArgs {
  input?: InputMaybe<SalesPlanSellabilityAdjustmentInput>;
}


export interface MutationDeleteUserArgs {
  input?: InputMaybe<UserInput>;
}


export interface MutationGenerateRfcArgs {
  input?: InputMaybe<GenerateRfcInput>;
}


export interface MutationGenerateRoomProductDailyBasePriceArgs {
  input?: InputMaybe<ExtranetGenerateRoomProductDailyBasePriceInput>;
}


export interface MutationImportProtelReservationArgs {
  input?: InputMaybe<ImportProtelReservationInput>;
}


export interface MutationMhsCreatePropertyArgs {
  input?: InputMaybe<ExtranetMhsCreatePropertyInput>;
}


export interface MutationMhsPushRateArgs {
  input?: InputMaybe<ExtranetMhsPushRateInput>;
}


export interface MutationOnboardingHotelArgs {
  input?: InputMaybe<ExtranetOnboardingHotelInput>;
}


export interface MutationPmsPullInventoryArgs {
  input?: InputMaybe<PmsPullInventoryInput>;
}


export interface MutationPmsTriggerSyncAvailabilityArgs {
  input?: InputMaybe<ExtranetPmsTriggerSyncAvailabilityInput>;
}


export interface MutationPmsTriggerSyncMaintenanceArgs {
  input?: InputMaybe<ExtranetPmsTriggerSyncMaintenanceInput>;
}


export interface MutationPmsTriggerSyncReservationArgs {
  input?: InputMaybe<ExtranetPmsTriggerSyncReservationInput>;
}


export interface MutationPopulateMrfcMappingArgs {
  input?: InputMaybe<PopulateMrfcMappingInput>;
}


export interface MutationProposeBookingVoiceArgs {
  input?: InputMaybe<ExtranetVoiceBookingInformationInput>;
}


export interface MutationPublishMetaSearchEventArgs {
  input?: InputMaybe<MetaSearchMessage>;
}


export interface MutationPushAvailabilityRoomProductArgs {
  input?: InputMaybe<ExtranetPushToWihpInput>;
}


export interface MutationPushBookingToPmsArgs {
  bookingId?: InputMaybe<Scalars['UUID']>;
  hotelCode?: InputMaybe<Scalars['String']>;
}


export interface MutationPushInventoryRoomProductArgs {
  input?: InputMaybe<ExtranetPushToWihpInput>;
}


export interface MutationPushLowestPriceRoomProductArgs {
  input?: InputMaybe<ExtranetPushToWihpInput>;
}


export interface MutationPushMetaSearchDataArgs {
  input?: InputMaybe<ExtranetPushMetaSearchInput>;
}


export interface MutationReallocateReservationArgs {
  input?: InputMaybe<ReallocateReservationInput>;
}


export interface MutationRefreshRoomProductDailyBasePriceArgs {
  input?: InputMaybe<ExtranetRefreshRoomProductDailyBasePriceInput>;
}


export interface MutationRemoveRfcFromRatePlanArgs {
  input?: InputMaybe<ExtranetRfcRatePlanInput>;
}


export interface MutationRemoveRoomProductFromSalesPlanArgs {
  input?: InputMaybe<ExtranetRfcRatePlanInput>;
}


export interface MutationRequestIntegrationArgs {
  input?: InputMaybe<ExtranetRequestIntegrationInput>;
}


export interface MutationReserveBookingVoiceArgs {
  input?: InputMaybe<ExtranetVoiceBookingInformationInput>;
}


export interface MutationRollingRoomProductDailyBasePriceArgs {
  input?: InputMaybe<ExtranetRollingRoomProductDailyBasePriceInput>;
}


export interface MutationSendBookingConfirmationEmailArgs {
  input?: InputMaybe<ExtranetSendBookingConfirmationEmailInput>;
}


export interface MutationSendCancellationEmailArgs {
  input?: InputMaybe<ExtranetSendCancellationEmailInput>;
}


export interface MutationSendProposalBookingConfirmationEmailArgs {
  input?: InputMaybe<ExtranetSendProposalBookingConfirmationEmailInput>;
}


export interface MutationSetInactiveHotelRetailFeatureArgs {
  input?: InputMaybe<HotelRetailFeatureInput>;
}


export interface MutationSetVisibleHotelRetailFeatureArgs {
  input?: InputMaybe<HotelRetailFeatureInput>;
}


export interface MutationSetupAutomatePricingArgs {
  input?: InputMaybe<SetupAutomatePricingInput>;
}


export interface MutationSetupPricingMethodArgs {
  input?: InputMaybe<SetupAutomatePricingInput>;
}


export interface MutationSyncAvailabilityFromPmsArgs {
  input?: InputMaybe<ExtranetSyncAvailabilityFromPmsInput>;
}


export interface MutationSyncHotelRestrictionArgs {
  input?: InputMaybe<ExtranetSyncHotelRestrictionInput>;
}


export interface MutationSyncRestrictionsArgs {
  input?: InputMaybe<ExtranetSyncRestrictionInput>;
}


export interface MutationToggleRemoteLoggingArgs {
  isEnable?: InputMaybe<Scalars['Boolean']>;
  isEnableResponse?: InputMaybe<Scalars['Boolean']>;
}


export interface MutationTriggerHotelAutomatePricingArgs {
  input?: InputMaybe<TriggerHotelAutomatePricingInput>;
}


export interface MutationTriggerOptimizationProcessArgs {
  input?: InputMaybe<ExtranetTriggerOptimizationProcessInput>;
}


export interface MutationTriggerRestrictionAutomationArgs {
  input?: InputMaybe<TriggerRestrictionAutomationInput>;
}


export interface MutationUnAssignHotelFeatureArgs {
  input?: InputMaybe<AssignHotelFeatureInput>;
}


export interface MutationUpdateConfiguratorArgs {
  input?: InputMaybe<ConfiguratorInput>;
}


export interface MutationUpdateErfcArgs {
  input?: InputMaybe<RfcInput>;
}


export interface MutationUpdateHotelAgeCategoryArgs {
  input?: InputMaybe<ExtranetHotelAgeCategoryInput>;
}


export interface MutationUpdateHotelCityTaxArgs {
  input?: InputMaybe<ExtranetHotelCityTaxInput>;
}


export interface MutationUpdateHotelCityTaxAgeGroupArgs {
  input?: InputMaybe<HotelCityTaxAgeGroupInput>;
}


export interface MutationUpdateHotelCityTaxListArgs {
  input?: InputMaybe<ExtranetHotelCityTaxListInput>;
}


export interface MutationUpdateHotelCxlPolicyArgs {
  input?: InputMaybe<ExtranetHotelCancellationPolicyInput>;
}


export interface MutationUpdateHotelExtrasArgs {
  input?: InputMaybe<HotelExtrasInput>;
}


export interface MutationUpdateHotelExtrasMappingArgs {
  input?: InputMaybe<UpdateHotelExtrasMappingInput>;
}


export interface MutationUpdateHotelFeatureArgs {
  input?: InputMaybe<HotelFeatureInput>;
}


export interface MutationUpdateHotelInformationArgs {
  input?: InputMaybe<ExtranetHotelInformationInput>;
}


export interface MutationUpdateHotelOperationArgs {
  input?: InputMaybe<ExtranetHotelOperationInput>;
}


export interface MutationUpdateHotelPaymentModeArgs {
  input?: InputMaybe<HotelPaymentModeInput>;
}


export interface MutationUpdateHotelPaymentTermArgs {
  input?: InputMaybe<ExtranetHotelPaymentTermInput>;
}


export interface MutationUpdateHotelRestrictionArgs {
  input?: InputMaybe<ExtranetHotelRestrictionInput>;
}


export interface MutationUpdateHotelRestrictionSettingArgs {
  input?: InputMaybe<ExtranetHotelRestrictionSettingInput>;
}


export interface MutationUpdateHotelSettingArgs {
  input?: InputMaybe<ExtranetHotelInformationInput>;
}


export interface MutationUpdateHotelTagArgs {
  input?: InputMaybe<HotelTagInput>;
}


export interface MutationUpdateHotelTaxArgs {
  input?: InputMaybe<HotelTaxInput>;
}


export interface MutationUpdateLastAvailabilitySettingArgs {
  input?: InputMaybe<LastAvailabilitySettingInput>;
}


export interface MutationUpdateMRfcArgs {
  input?: InputMaybe<RfcInput>;
}


export interface MutationUpdatePropertyRestrictionIntegrationSettingArgs {
  input?: InputMaybe<Array<InputMaybe<ExtranetPropertyRestrictionIntegrationSettingInput>>>;
}


export interface MutationUpdateRatePlanArgs {
  input?: InputMaybe<ExtranetRatePlanInput>;
}


export interface MutationUpdateRatePlanCancellationPolicyArgs {
  input?: InputMaybe<ExtranetRatePlanCancellationPolicyInput>;
}


export interface MutationUpdateRatePlanPaymentTermArgs {
  input?: InputMaybe<ExtranetRatePlanPaymentTermInput>;
}


export interface MutationUpdateRatePlanRestrictionArgs {
  input?: InputMaybe<ExtranetRatePlanRestrictionInput>;
}


export interface MutationUpdateReservationLockArgs {
  input?: InputMaybe<UpdateReservationLockInput>;
}


export interface MutationUpdateRestrictionAutomationSettingOfRoomProductArgs {
  input?: InputMaybe<ExtranetRestrictionAutomationSettingOfRoomProductInput>;
}


export interface MutationUpdateRfcArgs {
  input?: InputMaybe<RfcInput>;
}


export interface MutationUpdateRfcHotelRetailFeatureArgs {
  input?: InputMaybe<RfcFeatureInput>;
}


export interface MutationUpdateRfcImageArgs {
  input?: InputMaybe<RfcImageInput>;
}


export interface MutationUpdateRfcRatePlanBulkArgs {
  input?: InputMaybe<ExtranetRfcRatePlanBulkInput>;
}


export interface MutationUpdateRfcRatePlanDailyAvailabilityArgs {
  input?: InputMaybe<UpdateRfcRatePlanDailyAvailabilityInput>;
}


export interface MutationUpdateRfcRatePlanMappingArgs {
  input?: InputMaybe<UpdateRfcRatePlanMappingInput>;
}


export interface MutationUpdateRfcRestrictionArgs {
  input?: InputMaybe<ExtranetRfcRestrictionInput>;
}


export interface MutationUpdateRoomArgs {
  input?: InputMaybe<RoomInput>;
}


export interface MutationUpdateRoomAvailabilityArgs {
  input: ExtranetRoomAvailabilityInput;
}


export interface MutationUpdateRoomHotelFeatureArgs {
  input?: InputMaybe<RoomTemplateFeatureInput>;
}


export interface MutationUpdateRoomMappingArgs {
  input?: InputMaybe<UpdateRoomMappingInput>;
}


export interface MutationUpdateRoomProductRestrictionAutomationSettingArgs {
  input?: InputMaybe<ExtranetRoomProductRestrictionAutomationSettingInput>;
}


export interface MutationUpdateUserArgs {
  input?: InputMaybe<UserInput>;
}

export interface NumberComparison {
  operation?: InputMaybe<NumberOperatorEnum>;
  value?: InputMaybe<Scalars['BigDecimal']>;
}

export enum NumberOperatorEnum {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterEqual = 'GREATER_EQUAL',
  Lesser = 'LESSER',
  LesserEqual = 'LESSER_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export interface OrderByDate {
  date?: InputMaybe<Scalars['Date']>;
  order?: InputMaybe<OrderByDateOrderEnum>;
}

export enum OrderByDateOrderEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export interface Organisation {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
}

export interface PaymentInfoInput {
  accountHolder?: InputMaybe<Scalars['String']>;
  accountNumber?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  referenceNumber?: InputMaybe<Scalars['String']>;
  transactionNumber?: InputMaybe<Scalars['String']>;
}

export interface PaymentInput {
  id: Scalars['String'];
}

export interface PaymentIntent {
  clientSecret?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
}

export interface PaymentMode {
  code?: Maybe<HotelPaymentModeCodeEnum>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface PeriodInput {
  from?: InputMaybe<Scalars['Long']>;
  to?: InputMaybe<Scalars['Long']>;
}

export interface PhoneInfo {
  phoneCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
}

export interface PhoneInfoInput {
  phoneCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
}

export interface PmsAmenity {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  mappingHotelAmenityCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface PmsCityTax {
  cityTaxFullName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  discriminator?: Maybe<Scalars['String']>;
  mappingCityTaxCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigDecimal']>;
}

export interface PmsHotel {
  baseCurrency?: Maybe<Currency>;
  mappingHotelCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
}

export interface PmsPullInventoryInput {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface PmsRatePlan {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  mappingSalesPlanCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export enum PmsReservationDateFilterEnum {
  Arrival = 'Arrival',
  Cancellation = 'Cancellation',
  Creation = 'Creation',
  Departure = 'Departure',
  Modification = 'Modification',
  Stay = 'Stay'
}

export interface PmsRoom {
  mappingRoomCode?: Maybe<Scalars['String']>;
  roomNumber?: Maybe<Scalars['String']>;
}

export interface PmsRoomType {
  mappingRoomTypeCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export enum PmsType {
  Apaleo = 'APALEO'
}

export interface PopulateMrfcMappingInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
}

export enum PricingUnitEnum {
  Item = 'ITEM',
  Night = 'NIGHT',
  Person = 'PERSON',
  PerPersonPerRoom = 'PER_PERSON_PER_ROOM',
  Room = 'ROOM'
}

export interface PriorityModel {
  code?: InputMaybe<Scalars['String']>;
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sequence?: InputMaybe<Scalars['Int']>;
}

export interface ProductPerformance {
  averageDailyRate?: Maybe<Scalars['BigDecimal']>;
  avr?: Maybe<Scalars['BigDecimal']>;
  productCode?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  productType?: Maybe<RfcTypesEnum>;
  revenue?: Maybe<Scalars['BigDecimal']>;
  totalReservations?: Maybe<Scalars['Int']>;
  totalRoomNights?: Maybe<Scalars['Int']>;
}

export interface ProductPerformanceFilter {
  bookingChannelList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface PropertyRestrictionIntegrationSetting {
  id?: Maybe<Scalars['UUID']>;
  integrationMappingCode?: Maybe<Scalars['String']>;
  mappingRestrictionCodeList?: Maybe<Array<Maybe<Scalars['String']>>>;
  mode?: Maybe<HotelRestrictionSettingMode>;
  propertyId?: Maybe<Scalars['UUID']>;
  restrictionCode?: Maybe<HotelRestrictionCodeEnum>;
  restrictionEntity?: Maybe<HotelRestrictionSettingEntityEnum>;
  roomProductId?: Maybe<Scalars['UUID']>;
  salesPlanId?: Maybe<Scalars['UUID']>;
}

export interface ProtelReservationInput {
  adult?: InputMaybe<Scalars['Int']>;
  arrival?: InputMaybe<Scalars['DateTime']>;
  comment?: InputMaybe<Scalars['String']>;
  dailyRoomRate?: InputMaybe<Scalars['BigDecimal']>;
  departure?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mappingReservationCode?: InputMaybe<Scalars['String']>;
  roomNumber?: InputMaybe<Scalars['String']>;
}

export interface Query {
  availabilitySyncStatus?: Maybe<ResponseData>;
  availableRfcTemplateFeature?: Maybe<ResponseData>;
  availableRoomOptionList?: Maybe<ResponseData>;
  availableSalesPlanToDeriveList?: Maybe<ResponseData>;
  averageUpsellProfit?: Maybe<ResponseData>;
  bookingChannelList?: Maybe<ResponseData>;
  bookingConversionList?: Maybe<ResponseData>;
  bookingFlowTrendList?: Maybe<ResponseData>;
  bookingList?: Maybe<ResponseData>;
  bookingSourceList?: Maybe<ResponseData>;
  calculateBookingVoice?: Maybe<ExtranetBookingInformation>;
  calculateRoomProductPriceWithDateRange?: Maybe<ResponseData>;
  calendarViewReservationList?: Maybe<ResponseData>;
  connectorList?: Maybe<ResponseData>;
  countryList?: Maybe<Array<Maybe<Country>>>;
  currencyList?: Maybe<Array<Maybe<Currency>>>;
  currentUser?: Maybe<ResponseData>;
  dailyHotelOccupancyRateList?: Maybe<ResponseData>;
  dailyHotelRestrictionList?: Maybe<ResponseData>;
  dailyPropertyAdrList?: Maybe<ResponseData>;
  dailyPropertyOccPaceTrendList?: Maybe<ResponseData>;
  dailyPropertyPickupAdrList?: Maybe<ResponseData>;
  dailyRatePlanAdjustmentList?: Maybe<ResponseData>;
  dailyRfcRatePlanExtraOccupancyRateList?: Maybe<ResponseData>;
  dailyRoomAvailabilityStatusList?: Maybe<ResponseData>;
  dailySalesPlanPricingBreakdown?: Maybe<ResponseData>;
  dailySalesPlanSellabilityList?: Maybe<ResponseData>;
  dynamicInventorySettingList?: Maybe<ResponseData>;
  dynamicInventoryStatistics?: Maybe<ResponseData>;
  featurePerformanceStatistics?: Maybe<ResponseData>;
  featureSuggestionList?: Maybe<ResponseData>;
  getConfigurator?: Maybe<ResponseData>;
  getSyncStatus?: Maybe<ResponseData>;
  hotelAgeCategoryList?: Maybe<ResponseData>;
  hotelCancellationPolicyList?: Maybe<ResponseData>;
  hotelCityTaxAgeGroupList?: Maybe<ResponseData>;
  hotelCityTaxList?: Maybe<ResponseData>;
  hotelConfigurationList?: Maybe<ResponseData>;
  hotelDailyRateList?: Maybe<ResponseData>;
  hotelExtrasList?: Maybe<ResponseData>;
  hotelExtrasPricingUnitList?: Maybe<Array<Maybe<PricingUnitEnum>>>;
  hotelFeatureCategoryList?: Maybe<ResponseData>;
  hotelFeatureList?: Maybe<ResponseData>;
  hotelInformation?: Maybe<ResponseData>;
  hotelList?: Maybe<ResponseData>;
  hotelOperation?: Maybe<ResponseData>;
  hotelPaymentAccountList?: Maybe<ResponseData>;
  hotelPaymentAndTax?: Maybe<ResponseData>;
  hotelPaymentTermList?: Maybe<ResponseData>;
  hotelRestrictionList?: Maybe<ResponseData>;
  hotelRestrictionSettingList?: Maybe<ResponseData>;
  hotelTagList?: Maybe<ResponseData>;
  hotelTaxList?: Maybe<ResponseData>;
  instantUpsellRevenue?: Maybe<ResponseData>;
  inventoryStatusChart?: Maybe<ResponseData>;
  linkedRfcAvailabilityList?: Maybe<ResponseData>;
  lowestPriceRoomProductPerSalePlanList?: Maybe<ResponseData>;
  mappingHotelList?: Maybe<ResponseData>;
  monthlySalesPlanOverview?: Maybe<ResponseData>;
  mostPopularFeatureList?: Maybe<ResponseData>;
  paymentModeList?: Maybe<ResponseData>;
  pmsAmenityList?: Maybe<ResponseData>;
  pmsCityTaxList?: Maybe<ResponseData>;
  pmsHotelList?: Maybe<ResponseData>;
  pmsRatePlanList?: Maybe<ResponseData>;
  pmsRoomList?: Maybe<ResponseData>;
  pmsRoomTypeList?: Maybe<ResponseData>;
  productPerformanceList?: Maybe<ResponseData>;
  propertyRestrictionIntegrationSettingList?: Maybe<ResponseData>;
  ratePlanAdjustmentList?: Maybe<ResponseData>;
  ratePlanCxlPolicyDailyList?: Maybe<ResponseData>;
  ratePlanFeatureWithDailyRateList?: Maybe<ResponseData>;
  ratePlanHotelExtrasDailyList?: Maybe<ResponseData>;
  ratePlanList?: Maybe<ResponseData>;
  ratePlanPaymentTermDailyList?: Maybe<ResponseData>;
  ratePlanRestrictionAdjustmentList?: Maybe<ResponseData>;
  ratePlanRestrictionList?: Maybe<ResponseData>;
  ratePlanRestrictionsDailyList?: Maybe<ResponseData>;
  ratePlanRfcAssignmentList?: Maybe<ResponseData>;
  reservationAllocationChart?: Maybe<ResponseData>;
  reservationList?: Maybe<ResponseData>;
  reservationNotif?: Maybe<ResponseData>;
  reservationReviewList?: Maybe<ResponseData>;
  reservationSyncStatus?: Maybe<ResponseData>;
  rfcAllocationSettingList?: Maybe<Array<Maybe<RfcAllocationSettingEnum>>>;
  rfcAvailabilityAdjustmentList?: Maybe<ResponseData>;
  rfcDailyRateDetailsList?: Maybe<ResponseData>;
  rfcDailyRateList?: Maybe<ResponseData>;
  rfcExtraOccupancyRateList?: Maybe<ResponseData>;
  rfcList?: Maybe<ResponseData>;
  rfcRatePlanList?: Maybe<ResponseData>;
  rfcRestrictionAdjustmentList?: Maybe<ResponseData>;
  rfcRestrictionList?: Maybe<ResponseData>;
  rfcRestrictionsDailyList?: Maybe<ResponseData>;
  roleList?: Maybe<ResponseData>;
  roomDailyAvailabilityList?: Maybe<ResponseData>;
  roomList?: Maybe<ResponseData>;
  roomOptimizationPreviewList?: Maybe<ResponseData>;
  roomProductIncludedHotelExtraList?: Maybe<ResponseData>;
  roomProductRestrictionAutomationSettingList?: Maybe<ResponseData>;
  salesPlanSellabilityList?: Maybe<ResponseData>;
  salesPlanStrongestPaymentTermsAndCxlPolicy?: Maybe<ResponseData>;
  stayOptionRecommendationList?: Maybe<ResponseData>;
  templateConnectorList?: Maybe<ResponseData>;
  templateFeatureList?: Maybe<ResponseData>;
  topSelectedAndSoldList?: Maybe<ResponseData>;
  upsellStatistics?: Maybe<ResponseData>;
  userList?: Maybe<ResponseData>;
  weeklyOverviewList?: Maybe<ResponseData>;
}


export interface QueryAvailabilitySyncStatusArgs {
  filter?: InputMaybe<ExtranetSyncStatusFilter>;
}


export interface QueryAvailableRfcTemplateFeatureArgs {
  filter?: InputMaybe<RfcTemplateFeatureFilter>;
}


export interface QueryAvailableRoomOptionListArgs {
  filter?: InputMaybe<AvailableRoomOptionFilter>;
}


export interface QueryAvailableSalesPlanToDeriveListArgs {
  filter?: InputMaybe<ExtranetRatePlanFilter>;
}


export interface QueryAverageUpsellProfitArgs {
  filter?: InputMaybe<ExtranetAverageUpsellProfitFilter>;
}


export interface QueryBookingChannelListArgs {
  filter?: InputMaybe<ExtranetChannelSourceFilter>;
}


export interface QueryBookingConversionListArgs {
  filter?: InputMaybe<BookingConversionFilter>;
}


export interface QueryBookingFlowTrendListArgs {
  filter?: InputMaybe<BookingFlowTrendFilter>;
}


export interface QueryBookingListArgs {
  filter?: InputMaybe<ExtranetBookingFilter>;
}


export interface QueryBookingSourceListArgs {
  filter?: InputMaybe<ExtranetBookingSourceFilter>;
}


export interface QueryCalculateBookingVoiceArgs {
  bookingInformation?: InputMaybe<ExtranetBookingInformationInput>;
}


export interface QueryCalculateRoomProductPriceWithDateRangeArgs {
  filter?: InputMaybe<RoomProductCalculatedPriceFilter>;
}


export interface QueryCalendarViewReservationListArgs {
  filter?: InputMaybe<ExtranetCalendarViewReservationListFilter>;
}


export interface QueryConnectorListArgs {
  filter?: InputMaybe<ExtranetConnectorFilter>;
}


export interface QueryDailyHotelOccupancyRateListArgs {
  filter: DailyOccupancyRateFilter;
}


export interface QueryDailyHotelRestrictionListArgs {
  filter?: InputMaybe<ExtranetHotelRestrictionFilter>;
}


export interface QueryDailyPropertyAdrListArgs {
  filter?: InputMaybe<DailyPropertyAdrFilter>;
}


export interface QueryDailyPropertyOccPaceTrendListArgs {
  filter?: InputMaybe<DailyOccPaceTrendFilter>;
}


export interface QueryDailyPropertyPickupAdrListArgs {
  filter?: InputMaybe<DailyAdrPickupFilter>;
}


export interface QueryDailyRatePlanAdjustmentListArgs {
  filter?: InputMaybe<DailyRatePlanAdjustmentFilter>;
}


export interface QueryDailyRfcRatePlanExtraOccupancyRateListArgs {
  filter?: InputMaybe<DailyRfcRatePlanExtraOccupancyRateFilter>;
}


export interface QueryDailyRoomAvailabilityStatusListArgs {
  filter: RoomAvailabilityFilter;
}


export interface QueryDailySalesPlanPricingBreakdownArgs {
  filter?: InputMaybe<DailySalesPlanPricingBreakdownFilter>;
}


export interface QueryDailySalesPlanSellabilityListArgs {
  filter?: InputMaybe<SalesPlanSellabilityAdjustmentFilter>;
}


export interface QueryDynamicInventorySettingListArgs {
  filter?: InputMaybe<ExtranetDynamicInventorySettingFilter>;
}


export interface QueryDynamicInventoryStatisticsArgs {
  filter?: InputMaybe<ExtranetDynamicInventoryStatisticFilter>;
}


export interface QueryFeaturePerformanceStatisticsArgs {
  filter?: InputMaybe<ExtranetFeaturePerformanceFilter>;
}


export interface QueryFeatureSuggestionListArgs {
  filter?: InputMaybe<FeatureSuggestionFilter>;
}


export interface QueryGetConfiguratorArgs {
  filter?: InputMaybe<ConfiguratorFilter>;
}


export interface QueryGetSyncStatusArgs {
  filter?: InputMaybe<ExtranetSyncStatusFilter>;
}


export interface QueryHotelAgeCategoryListArgs {
  filter?: InputMaybe<ExtranetHotelAgeCategoryFilter>;
}


export interface QueryHotelCancellationPolicyListArgs {
  filter?: InputMaybe<ExtranetHotelCancellationPolicyFilter>;
}


export interface QueryHotelCityTaxAgeGroupListArgs {
  filter?: InputMaybe<HotelCityTaxAgeGroupFilter>;
}


export interface QueryHotelCityTaxListArgs {
  filter?: InputMaybe<ExtranetHotelCityTaxFilter>;
}


export interface QueryHotelConfigurationListArgs {
  filter?: InputMaybe<HotelConfigurationFilter>;
}


export interface QueryHotelDailyRateListArgs {
  filter?: InputMaybe<HotelDailyRateFilter>;
}


export interface QueryHotelExtrasListArgs {
  filter?: InputMaybe<HotelExtrasFilter>;
}


export interface QueryHotelFeatureCategoryListArgs {
  filter?: InputMaybe<HotelFeatureCategoryFilter>;
}


export interface QueryHotelFeatureListArgs {
  filter?: InputMaybe<HotelFeatureFilter>;
}


export interface QueryHotelInformationArgs {
  filter?: InputMaybe<ExtranetHotelInformationFilter>;
}


export interface QueryHotelListArgs {
  filter?: InputMaybe<HotelFilter>;
}


export interface QueryHotelOperationArgs {
  filter?: InputMaybe<ExtranetHotelOperationFilter>;
}


export interface QueryHotelPaymentAccountListArgs {
  filter?: InputMaybe<ExtranetHotelPaymentAccountFilter>;
}


export interface QueryHotelPaymentAndTaxArgs {
  filter?: InputMaybe<ExtranetHotelPaymentAndTaxFilter>;
}


export interface QueryHotelPaymentTermListArgs {
  filter?: InputMaybe<ExtranetHotelPaymentTermFilter>;
}


export interface QueryHotelRestrictionListArgs {
  filter?: InputMaybe<ExtranetHotelRestrictionFilter>;
}


export interface QueryHotelRestrictionSettingListArgs {
  filter?: InputMaybe<ExtranetHotelRestrictionSettingFilter>;
}


export interface QueryHotelTagListArgs {
  filter?: InputMaybe<HotelTagFilter>;
}


export interface QueryHotelTaxListArgs {
  filter?: InputMaybe<HotelTaxFilter>;
}


export interface QueryInstantUpsellRevenueArgs {
  filter?: InputMaybe<ExtranetInstantUpsellRevenueFilter>;
}


export interface QueryInventoryStatusChartArgs {
  filter?: InputMaybe<ExtranetInventoryStatusFilter>;
}


export interface QueryLinkedRfcAvailabilityListArgs {
  filter?: InputMaybe<ExtranetLinkedRfcAvailabilityFilter>;
}


export interface QueryLowestPriceRoomProductPerSalePlanListArgs {
  filter?: InputMaybe<ExtranetCalendarViewReservationListFilter>;
}


export interface QueryMappingHotelListArgs {
  filter?: InputMaybe<ExtranetMappingHotelFilter>;
}


export interface QueryMonthlySalesPlanOverviewArgs {
  filter?: InputMaybe<MonthlySalesPlanOverviewFilter>;
}


export interface QueryMostPopularFeatureListArgs {
  filter?: InputMaybe<ExtranetMostPopularFeatureListFilter>;
}


export interface QueryPmsAmenityListArgs {
  filter?: InputMaybe<ExtranetPmsAmenityFilter>;
}


export interface QueryPmsCityTaxListArgs {
  filter?: InputMaybe<ExtranetPmsCityTaxFilter>;
}


export interface QueryPmsHotelListArgs {
  filter?: InputMaybe<ExtranetHotelPmsFilter>;
}


export interface QueryPmsRatePlanListArgs {
  filter?: InputMaybe<ExtranetPmsRatePlanFilter>;
}


export interface QueryPmsRoomListArgs {
  filter?: InputMaybe<ExtranetPmsRoomFilter>;
}


export interface QueryPmsRoomTypeListArgs {
  filter?: InputMaybe<ExtranetPmsRoomTypeFilter>;
}


export interface QueryProductPerformanceListArgs {
  filter?: InputMaybe<ProductPerformanceFilter>;
}


export interface QueryPropertyRestrictionIntegrationSettingListArgs {
  filter?: InputMaybe<ExtranetPropertyRestrictionIntegrationSettingFilter>;
}


export interface QueryRatePlanAdjustmentListArgs {
  filter?: InputMaybe<ExtranetRatePlanAdjustmentFilter>;
}


export interface QueryRatePlanCxlPolicyDailyListArgs {
  filter: ExtranetRatePlanCxlPolicyDailyFilter;
}


export interface QueryRatePlanFeatureWithDailyRateListArgs {
  filter: RatePlanFeatureWithDailyRateListFilter;
}


export interface QueryRatePlanHotelExtrasDailyListArgs {
  filter: ExtranetRatePlanHotelExtrasDailyFilter;
}


export interface QueryRatePlanListArgs {
  filter?: InputMaybe<ExtranetRatePlanFilter>;
}


export interface QueryRatePlanPaymentTermDailyListArgs {
  filter: ExtranetRatePlanPaymentTermDailyFilter;
}


export interface QueryRatePlanRestrictionAdjustmentListArgs {
  filter?: InputMaybe<ExtranetRatePlanRestrictionAdjustmentFilter>;
}


export interface QueryRatePlanRestrictionListArgs {
  filter?: InputMaybe<ExtranetRatePlanRestrictionFilter>;
}


export interface QueryRatePlanRestrictionsDailyListArgs {
  filter?: InputMaybe<ExtranetRatePlanRestrictionsDailyFilter>;
}


export interface QueryRatePlanRfcAssignmentListArgs {
  filter?: InputMaybe<ExtranetRatePlanRfcAssignmentFilter>;
}


export interface QueryReservationAllocationChartArgs {
  filter?: InputMaybe<ExtranetReservationAllocationFilter>;
}


export interface QueryReservationListArgs {
  filter?: InputMaybe<ExtranetReservationFilter>;
}


export interface QueryReservationNotifArgs {
  filter?: InputMaybe<ExtranetReservationCountFilter>;
}


export interface QueryReservationReviewListArgs {
  filter?: InputMaybe<ExtranetReservationReviewFilter>;
}


export interface QueryReservationSyncStatusArgs {
  filter?: InputMaybe<ExtranetSyncStatusFilter>;
}


export interface QueryRfcAvailabilityAdjustmentListArgs {
  filter?: InputMaybe<ExtranetRfcAvailabilityAdjustmentFilter>;
}


export interface QueryRfcDailyRateDetailsListArgs {
  filter?: InputMaybe<RfcDailyRateDetailsFilter>;
}


export interface QueryRfcDailyRateListArgs {
  filter?: InputMaybe<RfcDailyRateFilter>;
}


export interface QueryRfcExtraOccupancyRateListArgs {
  filter?: InputMaybe<RfcExtraOccupancyRateFilter>;
}


export interface QueryRfcListArgs {
  filter?: InputMaybe<ExtranetRfcFilter>;
}


export interface QueryRfcRatePlanListArgs {
  filter?: InputMaybe<ExtranetRfcRatePlanFilter>;
}


export interface QueryRfcRestrictionAdjustmentListArgs {
  filter?: InputMaybe<ExtranetRfcRestrictionAdjustmentFilter>;
}


export interface QueryRfcRestrictionListArgs {
  filter?: InputMaybe<ExtranetRfcRestrictionFilter>;
}


export interface QueryRfcRestrictionsDailyListArgs {
  filter?: InputMaybe<ExtranetRfcRestrictionsDailyFilter>;
}


export interface QueryRoomDailyAvailabilityListArgs {
  filter?: InputMaybe<RoomDailyAvailabilityFilter>;
}


export interface QueryRoomListArgs {
  filter?: InputMaybe<RoomFilter>;
}


export interface QueryRoomOptimizationPreviewListArgs {
  filter?: InputMaybe<RoomOptimizationFilter>;
}


export interface QueryRoomProductIncludedHotelExtraListArgs {
  filter?: InputMaybe<ExtranetRoomProductIncludedHotelExtraListFilter>;
}


export interface QueryRoomProductRestrictionAutomationSettingListArgs {
  filter?: InputMaybe<ExtranetRoomProductRestrictionAutomationSettingFilter>;
}


export interface QuerySalesPlanSellabilityListArgs {
  filter?: InputMaybe<SalesPlanSellabilityFilter>;
}


export interface QuerySalesPlanStrongestPaymentTermsAndCxlPolicyArgs {
  filter?: InputMaybe<ExtranetSalesPlanStrongestPaymentTermsAndCxlPolicyFilter>;
}


export interface QueryStayOptionRecommendationListArgs {
  filter?: InputMaybe<StayOptionRecommendationFilter>;
}


export interface QueryTemplateConnectorListArgs {
  filter?: InputMaybe<ExtranetConnectorFilter>;
}


export interface QueryTemplateFeatureListArgs {
  filter?: InputMaybe<TemplateFeatureFilter>;
}


export interface QueryTopSelectedAndSoldListArgs {
  filter?: InputMaybe<TopSelectedAndSoldFilter>;
}


export interface QueryUpsellStatisticsArgs {
  filter?: InputMaybe<ExtranetUpsellStatisticsFilter>;
}


export interface QueryUserListArgs {
  filter?: InputMaybe<UserFilter>;
}


export interface QueryWeeklyOverviewListArgs {
  filter?: InputMaybe<WeeklyOverviewFilter>;
}

export interface RateDateInput {
  dateOfRate?: InputMaybe<Scalars['Long']>;
  rfcRate?: InputMaybe<Scalars['BigDecimal']>;
}

export interface RatePlan {
  IsPromoted?: Maybe<Scalars['Boolean']>;
  adjustmentUnit?: Maybe<RatePlanAdjustmentUnitEnum>;
  adjustmentValue?: Maybe<Scalars['BigDecimal']>;
  cancellationFeeUnit?: Maybe<CancellationFeeUnitEnum>;
  cancellationFeeValue?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayUnit?: Maybe<CancellationPolicyDisplayUnitEnum>;
  distributionChannelList?: Maybe<Array<Maybe<DistributionChannel>>>;
  hotelCancellationPolicy?: Maybe<HotelCancellationPolicy>;
  hotelCxlPolicyCode?: Maybe<Scalars['String']>;
  hotelExtrasCodeList?: Maybe<Array<Maybe<Scalars['String']>>>;
  hotelExtrasList?: Maybe<Array<Maybe<HotelAmenity>>>;
  hotelId?: Maybe<Scalars['UUID']>;
  hotelPaymentTerm?: Maybe<HotelPaymentTerm>;
  hourPrior?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
  includedHotelExtrasList?: Maybe<Array<Maybe<HotelAmenity>>>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  mappingRatePlanCode?: Maybe<Scalars['String']>;
  mrfcPositioningMode?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payAtHotel?: Maybe<Scalars['Float']>;
  payOnConfirmation?: Maybe<Scalars['Float']>;
  paymentTermCode?: Maybe<Scalars['String']>;
  pricingMethodology?: Maybe<RatePlanPricingMethodologyEnum>;
  promoCodeList?: Maybe<Array<Maybe<Scalars['String']>>>;
  ratePlanDerivedSetting?: Maybe<RatePlanDerivedSetting>;
  ratePlanRfcCountList?: Maybe<Array<Maybe<RatePlanRfcCount>>>;
  rfcAttributeMode?: Maybe<Scalars['Boolean']>;
  roundingMode?: Maybe<RoundingModeEnum>;
  sellingStrategyType?: Maybe<SellingStrategyTypeEnum>;
  status?: Maybe<RatePlanStatusEnum>;
  translationList?: Maybe<Array<Maybe<RatePlanTranslation>>>;
  type?: Maybe<RatePlanTypeEnum>;
}

export interface RatePlanAdjustment {
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
  unit?: Maybe<RatePlanAdjustmentUnitEnum>;
  value?: Maybe<Scalars['BigDecimal']>;
}

export enum RatePlanAdjustmentUnitEnum {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export interface RatePlanCxlPolicyDaily {
  cxlPolicyCode?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  isAdjusted?: Maybe<Scalars['Boolean']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
}

export interface RatePlanDerivedSetting {
  derivedRatePlanId?: Maybe<Scalars['UUID']>;
  followDailyCxlPolicy?: Maybe<Scalars['Boolean']>;
  followDailyIncludedAmenity?: Maybe<Scalars['Boolean']>;
  followDailyPaymentTerm?: Maybe<Scalars['Boolean']>;
  followDailyRestriction?: Maybe<Scalars['Boolean']>;
  followDailyRoomProductAvailability?: Maybe<Scalars['Boolean']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
}

export interface RatePlanDerivedSettingInput {
  followDailyCxlPolicy?: InputMaybe<Scalars['Boolean']>;
  followDailyIncludedAmenity?: InputMaybe<Scalars['Boolean']>;
  followDailyPaymentTerm?: InputMaybe<Scalars['Boolean']>;
  followDailyRestriction?: InputMaybe<Scalars['Boolean']>;
  followDailyRoomProductAvailability?: InputMaybe<Scalars['Boolean']>;
  ratePlanId: Scalars['UUID'];
}

export enum RatePlanExpandEnum {
  CancellationPolicy = 'cancellationPolicy',
  DerivedSetting = 'derivedSetting',
  Payment = 'payment',
  Translation = 'translation'
}

export interface RatePlanFeatureDailyRate {
  date?: Maybe<Scalars['Date']>;
  featureId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  rate?: Maybe<Scalars['BigDecimal']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
}

export interface RatePlanFeatureDailyRateInput {
  dayList: Array<InputMaybe<DayOfWeek>>;
  featureId: Scalars['UUID'];
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  rate: Scalars['BigDecimal'];
  ratePlanId: Scalars['UUID'];
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate: Scalars['Date'];
}

export enum RatePlanFeatureWithDailyRateFeatureStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export interface RatePlanFeatureWithDailyRateListFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featureCategoryIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  featureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  featureStatusList?: InputMaybe<Array<InputMaybe<RatePlanFeatureWithDailyRateFeatureStatusEnum>>>;
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  orderByDate?: InputMaybe<OrderByDate>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanId: Scalars['UUID'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate: Scalars['Date'];
}

export interface RatePlanHotelExtrasDaily {
  date?: Maybe<Scalars['Date']>;
  hotelExtrasCodeList?: Maybe<Array<Maybe<Scalars['String']>>>;
  hotelExtrasList?: Maybe<Array<Maybe<HotelExtras>>>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  isAdjusted?: Maybe<Scalars['Boolean']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
}

export interface RatePlanPaymentMapping {
  depositValue?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['UUID']>;
  paymentTermCode?: Maybe<Scalars['String']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
}

export interface RatePlanPaymentTermDaily {
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  isAdjusted?: Maybe<Scalars['Boolean']>;
  paymentTermCode?: Maybe<Scalars['String']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
}

export enum RatePlanPricingMethodologyEnum {
  DerivedPricing = 'DERIVED_PRICING',
  FeatureBasedPricing = 'FEATURE_BASED_PRICING'
}

export interface RatePlanRestriction {
  code?: Maybe<RatePlanRestrictionCodeEnum>;
  fromDate?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  isAdjusted?: Maybe<Scalars['Boolean']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
  toDate?: Maybe<Scalars['Date']>;
  value?: Maybe<Scalars['String']>;
}

export interface RatePlanRestrictionAdjustment {
  code?: Maybe<RatePlanRestrictionCodeEnum>;
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
  value?: Maybe<Scalars['String']>;
}

export enum RatePlanRestrictionCodeEnum {
  RstrAvailablePeriod = 'RSTR_AVAILABLE_PERIOD',
  RstrCloseToArrival = 'RSTR_CLOSE_TO_ARRIVAL',
  RstrCloseToDeparture = 'RSTR_CLOSE_TO_DEPARTURE',
  RstrCloseToStay = 'RSTR_CLOSE_TO_STAY',
  RstrCloseToStaySellability = 'RSTR_CLOSE_TO_STAY_SELLABILITY',
  RstrLosMax = 'RSTR_LOS_MAX',
  RstrLosMin = 'RSTR_LOS_MIN',
  RstrMaxAdvanceBooking = 'RSTR_MAX_ADVANCE_BOOKING',
  RstrMinAdvanceBooking = 'RSTR_MIN_ADVANCE_BOOKING',
  RstrMinLosThrough = 'RSTR_MIN_LOS_THROUGH',
  RstrStayThroughDay = 'RSTR_STAY_THROUGH_DAY'
}

export interface RatePlanRestrictionsDaily {
  dailyRestrictionList?: Maybe<Array<Maybe<RatePlanRestrictionsPerDate>>>;
  hotelId?: Maybe<Scalars['UUID']>;
  ratePlan?: Maybe<RatePlan>;
  ratePlanId?: Maybe<Scalars['UUID']>;
}

export interface RatePlanRestrictionsPerDate {
  date?: Maybe<Scalars['Date']>;
  restrictionList?: Maybe<Array<Maybe<RatePlanRestriction>>>;
}

export enum RatePlanRfcAssignmentShowModeEnum {
  All = 'ALL',
  Assigned = 'ASSIGNED',
  Unassigned = 'UNASSIGNED'
}

export interface RatePlanRfcCount {
  count?: Maybe<Scalars['Int']>;
  rfcType?: Maybe<RfcTypesEnum>;
}

export enum RatePlanStatusEnum {
  Active = 'ACTIVE',
  Archive = 'ARCHIVE'
}

export interface RatePlanTranslation {
  description?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  languageCode?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
}

export interface RatePlanTranslationInput {
  description?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
}

export enum RatePlanTypeEnum {
  Corporate = 'CORPORATE',
  Group = 'GROUP',
  Promotion = 'PROMOTION',
  Public = 'PUBLIC'
}

export interface ReallocateReservationInput {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  reallocatedMappingList?: InputMaybe<Array<InputMaybe<ReallocateReservationMappingInput>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface ReallocateReservationMappingInput {
  reservationIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  roomId?: InputMaybe<Scalars['UUID']>;
}

export interface Reservation {
  additionalGuest?: Maybe<Array<Maybe<Guest>>>;
  adult?: Maybe<Scalars['Int']>;
  amenityList?: Maybe<Array<Maybe<HotelAmenity>>>;
  arrival?: Maybe<Scalars['String']>;
  averageDailyRate?: Maybe<Scalars['BigDecimal']>;
  balance?: Maybe<Scalars['BigDecimal']>;
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['UUID']>;
  cancellationFee?: Maybe<Scalars['BigDecimal']>;
  cancellationType?: Maybe<Scalars['String']>;
  childrenAgeList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdDate?: Maybe<Scalars['String']>;
  cxlPolicy?: Maybe<HotelCancellationPolicy>;
  cxlPolicyCode?: Maybe<Scalars['String']>;
  departure?: Maybe<Scalars['String']>;
  hourPrior?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  isLocked?: Maybe<Scalars['Boolean']>;
  mappingReservationCode?: Maybe<Scalars['String']>;
  matchedFeature?: Maybe<Array<Maybe<Scalars['String']>>>;
  matchedFeatureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  paymentTerm?: Maybe<HotelPaymentTerm>;
  paymentTermCode?: Maybe<Scalars['String']>;
  primaryGuest?: Maybe<Guest>;
  primaryGuestId?: Maybe<Scalars['UUID']>;
  proposalSetting?: Maybe<BookingProposalSetting>;
  reservationAccommodationTaxAmount?: Maybe<Scalars['BigDecimal']>;
  reservationAccommodationTaxList?: Maybe<Array<Maybe<Tax>>>;
  reservationAmenityList?: Maybe<Array<Maybe<ReservationAmenity>>>;
  reservationCityTaxList?: Maybe<Array<Maybe<HotelCityTax>>>;
  reservationComment?: Maybe<Scalars['String']>;
  reservationExtraServiceTaxAmount?: Maybe<Scalars['BigDecimal']>;
  reservationExtraServiceTaxList?: Maybe<Array<Maybe<Tax>>>;
  reservationNumber?: Maybe<Scalars['String']>;
  reservationOtherTaxAmount?: Maybe<Scalars['BigDecimal']>;
  reservationOtherTaxList?: Maybe<Array<Maybe<Tax>>>;
  reservationRoomList?: Maybe<Array<Maybe<ReservationRoom>>>;
  reservationTimeSliceList?: Maybe<Array<Maybe<ReservationTimeSlice>>>;
  rfc?: Maybe<Rfc>;
  rfcRatePlan?: Maybe<RfcRatePlan>;
  rfcRatePlanId?: Maybe<Scalars['UUID']>;
  roomId?: Maybe<Scalars['UUID']>;
  status?: Maybe<ReservationStatusEnum>;
  stayOption?: Maybe<StayOption>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
  vatAmount?: Maybe<Scalars['BigDecimal']>;
}

export enum ReservationAllocationStatusEnum {
  Available = 'AVAILABLE',
  Locked = 'LOCKED',
  Movable = 'MOVABLE',
  Moved = 'MOVED',
  Unassigned = 'UNASSIGNED',
  Unmoved = 'UNMOVED'
}

export interface ReservationAmenity {
  ageCategoryCode?: Maybe<Scalars['String']>;
  hotelAmenity?: Maybe<HotelAmenity>;
  hotelAmenityId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  reservationAmenityDateList?: Maybe<Array<Maybe<ReservationAmenityDate>>>;
  reservationId?: Maybe<Scalars['UUID']>;
  serviceChargeAmount?: Maybe<Scalars['BigDecimal']>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
}

export interface ReservationAmenityDate {
  count?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['UUID']>;
  reservationAmenityId?: Maybe<Scalars['UUID']>;
  serviceChargeAmount?: Maybe<Scalars['BigDecimal']>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
}

export enum ReservationDateFilterEnum {
  Arrival = 'ARRIVAL',
  Creation = 'CREATION',
  Departure = 'DEPARTURE',
  Modification = 'MODIFICATION',
  Staying = 'STAYING'
}

export enum ReservationExpandEnum {
  Booker = 'booker',
  Booking = 'booking',
  Currency = 'currency',
  Guest = 'guest',
  ReservationAmenity = 'reservationAmenity',
  ReservationAmenityMapping = 'reservationAmenityMapping',
  ReservationRoom = 'reservationRoom',
  ReservationTimeSlice = 'reservationTimeSlice',
  Rfc = 'rfc',
  RfcRatePlan = 'rfcRatePlan',
  RfcRatePlanMapping = 'rfcRatePlanMapping',
  StayOption = 'stayOption'
}

export interface ReservationInput {
  adult?: InputMaybe<Scalars['Int']>;
  amenityList?: InputMaybe<Array<InputMaybe<HotelAmenityInput>>>;
  childrenAgeList?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  priorityCategoryCodeList?: InputMaybe<Array<InputMaybe<PriorityModel>>>;
  rfcCode?: InputMaybe<Scalars['String']>;
  rfcRatePlanCode?: InputMaybe<Scalars['String']>;
  stayOptionCode?: InputMaybe<Scalars['String']>;
}

export enum ReservationNotifTypeEnum {
  Cancelled = 'CANCELLED',
  Locked = 'LOCKED',
  New = 'NEW',
  RoomChanged = 'ROOM_CHANGED',
  Unlocked = 'UNLOCKED'
}

export interface ReservationRoom {
  id?: Maybe<Scalars['UUID']>;
  reservationId?: Maybe<Scalars['UUID']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['UUID']>;
}

export enum ReservationSearchTextTypeEnum {
  ProductName = 'ProductName',
  RoomNumber = 'RoomNumber'
}

export enum ReservationStatusEnum {
  Cancelled = 'CANCELLED',
  CheckedIn = 'CHECKED_IN',
  CheckedOut = 'CHECKED_OUT',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Proposed = 'PROPOSED',
  Released = 'RELEASED',
  Reserved = 'RESERVED'
}

export interface ReservationTimeSlice {
  fromTime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  reservationId?: Maybe<Scalars['UUID']>;
  rfcId?: Maybe<Scalars['UUID']>;
  roomId?: Maybe<Scalars['UUID']>;
  serviceChargeAmount?: Maybe<Scalars['BigDecimal']>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  toTime?: Maybe<Scalars['String']>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
}

export interface ResponseContent {
  code?: Maybe<Scalars['String']>;
  data?: Maybe<ResponseModel>;
  dataList?: Maybe<Array<Maybe<ResponseModel>>>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<ResponseContentStatusEnum>;
}

export enum ResponseContentStatusEnum {
  Default = 'DEFAULT',
  Error = 'ERROR',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

export interface ResponseData {
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<ResponseModel>>>;
  totalPage?: Maybe<Scalars['Int']>;
}

export type ResponseModel = AvailableRoomOption | AverageUpsellProfit | Booking | BookingChannel | BookingConversion | BookingFlowTrend | BookingFlowTrendDaily | BookingPaymentResponse | BookingSource | CalendarViewRoom | Configurator | ConfirmBookingResponse | Connector | Country | Currency | DailyAdrPickup | DailyExtraOccupancyRate | DailyHotelRestriction | DailyOccPaceTrend | DailyOccupancyRate | DailyPropertyAdr | DailyRate | DailyRatePlanAdjustment | DailyRfcRestriction | DailyRoomAvailability | DailySalesPlanPricingBreakdown | ExtranetBookingInformation | ExtranetDynamicInventoryReservation | ExtranetDynamicInventorySetting | ExtranetDynamicInventoryStatistic | ExtranetInventoryStatus | ExtranetReservationAllocation | ExtranetReservationCount | FeaturePerformance | Hotel | HotelAgeCategory | HotelCancellationPolicy | HotelCityTax | HotelConfiguration | HotelExtras | HotelFeature | HotelInformation | HotelOperation | HotelPaymentAccount | HotelPaymentAndTax | HotelPaymentMode | HotelPaymentTerm | HotelRestriction | HotelRestrictionSetting | HotelRetailCategory | HotelRetailFeature | HotelStandardFeature | HotelTag | HotelTax | IdentityLink | InstantUpsellRevenue | MappingHotel | MhsProperty | MonthlySalesPlanOverview | Mrfc | MrfcDaily | MrfcMapping | PaymentMode | PmsAmenity | PmsCityTax | PmsHotel | PmsRatePlan | PmsRoom | PmsRoomType | ProductPerformance | PropertyRestrictionIntegrationSetting | RatePlan | RatePlanAdjustment | RatePlanCxlPolicyDaily | RatePlanFeatureDailyRate | RatePlanHotelExtrasDaily | RatePlanPaymentTermDaily | RatePlanRestriction | RatePlanRestrictionAdjustment | RatePlanRestrictionsDaily | Reservation | RestrictionAutomationSetting | Rfc | RfcAvailabilityAdjustment | RfcDailyRateDetails | RfcExtraOccupancyRate | RfcFeatureRateAdjustment | RfcRatePlan | RfcRatePlanAutomatePricing | RfcRatePlanAvailabilityAdjustment | RfcRatePlanExtraOccupancyRateAdjustment | RfcRestriction | RfcRestrictionAdjustment | RfcRestrictionsDaily | RfcRestrictionsPerDate | Role | Room | RoomAvailability | RoomOptimization | RoomProductCalculatedPrice | RoomProductRestrictionAutomationSetting | RoomRetailFeature | SalesPlanSellability | SalesPlanSellabilityAdjustment | SalesPlanStrongestPaymentTermsAndCxlPolicy | SelectedAndSoldFeature | StayOptionSuggestion | Subscription | SyncStatus | TemplateConnector | TemplateFeature | TemplateRetailFeature | TemplateStandardFeature | TopSelectedAndSold | UpsellStatistics | User | WeeklyOverview | WeeklyOverviewChannel | WeeklyOverviewDaily;

export interface RestrictionAutomationSetting {
  isTurnOn?: Maybe<Scalars['Boolean']>;
  settingList?: Maybe<Array<Maybe<RoomProductRestrictionAutomationSetting>>>;
}

export enum RestrictionCodeEnum {
  RstrAvailablePeriod = 'RSTR_AVAILABLE_PERIOD',
  RstrCloseToArrival = 'RSTR_CLOSE_TO_ARRIVAL',
  RstrCloseToDeparture = 'RSTR_CLOSE_TO_DEPARTURE',
  RstrCloseToStay = 'RSTR_CLOSE_TO_STAY',
  RstrCloseToStaySellability = 'RSTR_CLOSE_TO_STAY_SELLABILITY',
  RstrLosMax = 'RSTR_LOS_MAX',
  RstrLosMin = 'RSTR_LOS_MIN',
  RstrMinAdvanceBooking = 'RSTR_MIN_ADVANCE_BOOKING',
  RstrMinLosThrough = 'RSTR_MIN_LOS_THROUGH',
  RstrStayThroughDay = 'RSTR_STAY_THROUGH_DAY'
}

export interface Rfc {
  additionalFeatureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  allocatedAdultCount?: Maybe<Scalars['Int']>;
  allocatedChildCount?: Maybe<Scalars['Int']>;
  allocatedExtraBedAdultCount?: Maybe<Scalars['Int']>;
  allocatedExtraBedChildCount?: Maybe<Scalars['Int']>;
  assignedRoomList?: Maybe<Array<Maybe<Room>>>;
  capacityAdult?: Maybe<Scalars['Int']>;
  capacityChildren?: Maybe<Scalars['Int']>;
  capacityDefault?: Maybe<Scalars['Int']>;
  capacityExtra?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  dailyRateList?: Maybe<Array<Maybe<DailyRate>>>;
  dailyRfcRestrictionList?: Maybe<Array<Maybe<DailyRfcRestriction>>>;
  dailyRoomAvailabilityList?: Maybe<Array<Maybe<DailyRoomAvailability>>>;
  distributionChannelList?: Maybe<Array<Maybe<DistributionChannel>>>;
  extraAdult?: Maybe<Scalars['Int']>;
  extraBedAdult?: Maybe<Scalars['Int']>;
  extraBedKid?: Maybe<Scalars['Int']>;
  extraChildren?: Maybe<Scalars['Int']>;
  featureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  id?: Maybe<Scalars['UUID']>;
  isCorrelatedProduct?: Maybe<Scalars['Boolean']>;
  isSellable?: Maybe<Scalars['Boolean']>;
  layoutFeatureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  linkedMrfcList?: Maybe<Array<Maybe<Rfc>>>;
  mappingRoomTypeCode?: Maybe<Scalars['String']>;
  matchingPercentage?: Maybe<Scalars['Float']>;
  maxChild?: Maybe<Scalars['Int']>;
  maximumAdult?: Maybe<Scalars['Int']>;
  maximumKid?: Maybe<Scalars['Int']>;
  minChild?: Maybe<Scalars['Int']>;
  mostPopularFeatureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  mrfc?: Maybe<Mrfc>;
  name?: Maybe<Scalars['String']>;
  numberOfBedrooms?: Maybe<Scalars['Int']>;
  occasionList?: Maybe<Array<Maybe<HotelTag>>>;
  originalMatchingPercentage?: Maybe<Scalars['Float']>;
  retailFeatureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  rfcAllocationSetting?: Maybe<RfcAllocationSettingEnum>;
  rfcAvailabilityAdjustmentList?: Maybe<Array<Maybe<RfcAvailabilityAdjustment>>>;
  rfcExtraOccupancyRateList?: Maybe<Array<Maybe<RfcExtraOccupancyRate>>>;
  rfcImageList?: Maybe<Array<Maybe<RfcImage>>>;
  rfcRatePlanList?: Maybe<Array<Maybe<RfcRatePlan>>>;
  rfcRestrictionList?: Maybe<Array<Maybe<RfcRestriction>>>;
  roomList?: Maybe<Array<Maybe<Room>>>;
  space?: Maybe<Scalars['Int']>;
  standardFeatureList?: Maybe<Array<Maybe<HotelStandardFeature>>>;
  status?: Maybe<RfcStatusEnum>;
  totalFeatureRate?: Maybe<Scalars['BigDecimal']>;
  translationList?: Maybe<Array<Maybe<RfcTranslation>>>;
  travelTagList?: Maybe<Array<Maybe<HotelTag>>>;
  type?: Maybe<RfcTypesEnum>;
}

export enum RfcAllocationSettingEnum {
  All = 'ALL',
  Deduct = 'DEDUCT'
}

export interface RfcAvailabilityAdjustment {
  adjustment?: Maybe<Scalars['Int']>;
  availabilityAdjustment?: Maybe<Scalars['Int']>;
  availableToSell?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  rfcId?: Maybe<Scalars['UUID']>;
  sellable?: Maybe<Scalars['Int']>;
}

export interface RfcDailyRateDetails {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  rfcRatePlanList?: Maybe<Array<Maybe<RfcRatePlan>>>;
}

export interface RfcDailyRateDetailsFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  guestCount?: InputMaybe<Scalars['Int']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  isIncludedCityTax?: InputMaybe<Scalars['Boolean']>;
  isIncludedDailyExtrasPricing?: InputMaybe<Scalars['Boolean']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  rfcRatePlanId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface RfcDailyRateFilter {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  extraOccupancyRateExtraPeople?: InputMaybe<Scalars['Int']>;
  fromDate?: InputMaybe<Scalars['Date']>;
  guestCount?: InputMaybe<Scalars['Int']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  isIncludedCityTax?: InputMaybe<Scalars['Boolean']>;
  isIncludedDailyExtrasPricing?: InputMaybe<Scalars['Boolean']>;
  orderByDate?: InputMaybe<OrderByDate>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  ratePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcRetailFeatureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  rfcStatusList?: InputMaybe<Array<InputMaybe<RfcStatusEnum>>>;
  rfcType?: InputMaybe<RfcTypesEnum>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export enum RfcExpandEnum {
  Mrfc = 'mrfc',
  RetailFeature = 'retailFeature',
  RfcImage = 'rfcImage',
  RfcRatePlan = 'rfcRatePlan',
  Room = 'room',
  RoomType = 'roomType',
  StandardFeature = 'standardFeature',
  TotalFeatureRate = 'totalFeatureRate',
  Translation = 'translation'
}

export interface RfcExtraOccupancyRate {
  extraPeople?: Maybe<Scalars['Int']>;
  extraRate?: Maybe<Scalars['BigDecimal']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  rfcId?: Maybe<Scalars['UUID']>;
}

export interface RfcExtraOccupancyRateFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  rfcIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface RfcFeatureInput {
  featureType?: InputMaybe<FeatureTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  templateFeatureList?: InputMaybe<Array<InputMaybe<TemplateFeatureInput>>>;
}

export interface RfcFeatureRateAdjustment {
  dateAdjustment?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['UUID']>;
  rateAdjustment?: Maybe<Scalars['BigDecimal']>;
  rateOriginal?: Maybe<Scalars['BigDecimal']>;
  rfcFeatureId?: Maybe<Scalars['UUID']>;
  rfcRatePlanId?: Maybe<Scalars['UUID']>;
}

export interface RfcFeatureRateAdjustmentInput {
  days?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  rateAdjustment?: InputMaybe<Scalars['BigDecimal']>;
  rfcFeatureId?: InputMaybe<Scalars['UUID']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  rfcRatePlanId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface RfcFilter {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expand?: InputMaybe<Array<InputMaybe<RfcExpandEnum>>>;
  fromTime?: InputMaybe<Scalars['BigDecimal']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  isSellable?: InputMaybe<Scalars['Boolean']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  statusList?: InputMaybe<Array<InputMaybe<RfcStatusEnum>>>;
  text?: InputMaybe<Scalars['String']>;
  toTime?: InputMaybe<Scalars['BigDecimal']>;
  type?: InputMaybe<RfcTypesEnum>;
}

export interface RfcImage {
  description?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
  imageId?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  rfcId?: Maybe<Scalars['UUID']>;
}

export interface RfcImageInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  imageList?: InputMaybe<Array<InputMaybe<ImageInput>>>;
  rfcId?: InputMaybe<Scalars['UUID']>;
}

export interface RfcInput {
  capacityAdult?: InputMaybe<Scalars['Int']>;
  capacityChildren?: InputMaybe<Scalars['Int']>;
  capacityDefault?: InputMaybe<Scalars['Int']>;
  capacityExtra?: InputMaybe<Scalars['Int']>;
  distributionChannelList?: InputMaybe<Array<InputMaybe<DistributionChannel>>>;
  extraAdult?: InputMaybe<Scalars['Int']>;
  extraBedAdult?: InputMaybe<Scalars['Int']>;
  extraBedKid?: InputMaybe<Scalars['Int']>;
  extraChildren?: InputMaybe<Scalars['Int']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  isSellable?: InputMaybe<Scalars['Boolean']>;
  maxChild?: InputMaybe<Scalars['Int']>;
  maximumAdult?: InputMaybe<Scalars['Int']>;
  maximumKid?: InputMaybe<Scalars['Int']>;
  minChild?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  numberOfBedrooms?: InputMaybe<Scalars['Int']>;
  rfcAllocationSetting?: InputMaybe<RfcAllocationSettingEnum>;
  space?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<RfcStatusEnum>;
  translationList?: InputMaybe<Array<InputMaybe<RfcTranslationInput>>>;
}

export interface RfcRatePlan {
  automatePricing?: Maybe<RfcRatePlanAutomatePricing>;
  averageDailyRate?: Maybe<Scalars['BigDecimal']>;
  cancellationType?: Maybe<RfcRatePlanCancellationTypeEnum>;
  channel?: Maybe<Scalars['String']>;
  cityTaxAmount?: Maybe<Scalars['BigDecimal']>;
  code?: Maybe<Scalars['String']>;
  dailyAvailabilityList?: Maybe<Array<Maybe<RfcRatePlanAvailabilityAdjustment>>>;
  dailyExtraOccupancyRateList?: Maybe<Array<Maybe<DailyExtraOccupancyRate>>>;
  dailySellingRateList?: Maybe<Array<Maybe<DailySellingRate>>>;
  hotelId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  isAutomatePricing?: Maybe<Scalars['Boolean']>;
  isPmsReversedRoomProduct?: Maybe<Scalars['Boolean']>;
  isSellable?: Maybe<Scalars['Boolean']>;
  mappingRatePlanCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ratePlan?: Maybe<RatePlan>;
  ratePlanId?: Maybe<Scalars['UUID']>;
  restrictionValidationList?: Maybe<Array<Maybe<RatePlanRestriction>>>;
  retailFeatureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  rfcId?: Maybe<Scalars['UUID']>;
  roomList?: Maybe<Array<Maybe<Room>>>;
  serviceChargeAmount?: Maybe<Scalars['BigDecimal']>;
  standardFeatureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  totalBaseAmount?: Maybe<Scalars['BigDecimal']>;
  totalBaseRate?: Maybe<Scalars['BigDecimal']>;
  totalGrossAmount?: Maybe<Scalars['BigDecimal']>;
  totalSellingRate?: Maybe<Scalars['BigDecimal']>;
  virtualBaseRate?: Maybe<Scalars['BigDecimal']>;
}

export interface RfcRatePlanAutomatePricing {
  correlatedRoomProductList?: Maybe<Array<Maybe<Rfc>>>;
  destinationList?: Maybe<Array<Maybe<AutomatePricingDestination>>>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  isPush?: Maybe<Scalars['Boolean']>;
  rfcRatePlanId?: Maybe<Scalars['UUID']>;
  sourceList?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceRoomProductList?: Maybe<Array<Maybe<Rfc>>>;
  type?: Maybe<AutomatePricingType>;
  unit?: Maybe<AutomatePricingUnit>;
  value?: Maybe<Scalars['BigDecimal']>;
}

export interface RfcRatePlanAvailabilityAdjustment {
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  isSellable?: Maybe<Scalars['Boolean']>;
  ratePlanId?: Maybe<Scalars['UUID']>;
  rfcRatePlanId?: Maybe<Scalars['UUID']>;
}

export enum RfcRatePlanCancellationTypeEnum {
  Flexible = 'FLEXIBLE',
  NonRefundable = 'NON_REFUNDABLE'
}

export enum RfcRatePlanDerivedUnitEnum {
  Number = 'NUMBER',
  Percent = 'PERCENT'
}

export interface RfcRatePlanExtraOccupancyRateAdjustment {
  date?: Maybe<Scalars['Date']>;
  extraPeople?: Maybe<Scalars['Int']>;
  extraRate?: Maybe<Scalars['BigDecimal']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  rfcRatePlanId?: Maybe<Scalars['UUID']>;
}

export interface RfcRatePlanExtraOccupancyRateAdjustmentInput {
  dayList?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  extraPeople?: InputMaybe<Scalars['Int']>;
  extraRate?: InputMaybe<Scalars['BigDecimal']>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  rfcRatePlanId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export enum RfcRatePlanGuaranteeTypeEnum {
  CreditCard = 'CREDIT_CARD'
}

export interface RfcRatePlanInput {
  bookingPeriodList?: InputMaybe<Array<InputMaybe<PeriodInput>>>;
  /** deprecated */
  cancellationPolicyId?: InputMaybe<Scalars['UUID']>;
  cancellationType?: InputMaybe<RfcRatePlanCancellationTypeEnum>;
  code?: InputMaybe<Scalars['String']>;
  derivedRatePlanId?: InputMaybe<Scalars['UUID']>;
  derivedUnit?: InputMaybe<RfcRatePlanDerivedUnitEnum>;
  derivedValue?: InputMaybe<Scalars['BigDecimal']>;
  guaranteeType?: InputMaybe<RfcRatePlanGuaranteeTypeEnum>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  mappingRatePlanCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ratePlanId?: InputMaybe<Scalars['UUID']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  rfcRateDateList?: InputMaybe<Array<InputMaybe<RateDateInput>>>;
  totalBaseRate?: InputMaybe<Scalars['BigDecimal']>;
}

export interface RfcRestriction {
  adjustmentType?: Maybe<RfcRestrictionAdjustmentType>;
  code?: Maybe<RfcRestrictionCodeEnum>;
  fromDate?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  rfcId?: Maybe<Scalars['UUID']>;
  toDate?: Maybe<Scalars['Date']>;
  value?: Maybe<Scalars['String']>;
}

export interface RfcRestrictionAdjustment {
  code?: Maybe<RfcRestrictionCodeEnum>;
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  rfcId?: Maybe<Scalars['UUID']>;
  value?: Maybe<Scalars['String']>;
}

export enum RfcRestrictionAdjustmentType {
  Automated = 'AUTOMATED',
  Default = 'DEFAULT',
  Manual = 'MANUAL'
}

export enum RfcRestrictionCodeEnum {
  RstrAvailablePeriod = 'RSTR_AVAILABLE_PERIOD',
  RstrCloseToArrival = 'RSTR_CLOSE_TO_ARRIVAL',
  RstrCloseToDeparture = 'RSTR_CLOSE_TO_DEPARTURE',
  RstrCloseToStay = 'RSTR_CLOSE_TO_STAY',
  RstrCloseToStaySellability = 'RSTR_CLOSE_TO_STAY_SELLABILITY',
  RstrLosMax = 'RSTR_LOS_MAX',
  RstrLosMin = 'RSTR_LOS_MIN',
  RstrMinAdvanceBooking = 'RSTR_MIN_ADVANCE_BOOKING',
  RstrMinLosThrough = 'RSTR_MIN_LOS_THROUGH',
  RstrStayThroughDay = 'RSTR_STAY_THROUGH_DAY'
}

export interface RfcRestrictionsDaily {
  dailyRestrictionList?: Maybe<Array<Maybe<RfcRestrictionsPerDate>>>;
  hotelId?: Maybe<Scalars['UUID']>;
  rfc?: Maybe<Rfc>;
  rfcId?: Maybe<Scalars['UUID']>;
}

export interface RfcRestrictionsPerDate {
  date?: Maybe<Scalars['Date']>;
  restrictionList?: Maybe<Array<Maybe<RfcRestriction>>>;
}

export interface RfcRetailFeature {
  hotelRetailFeatureId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  rfcId?: Maybe<Scalars['UUID']>;
}

export interface RfcRoomInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  roomIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export enum RfcStatusEnum {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export interface RfcTemplateFeatureFilter {
  featureType: FeatureTypeEnum;
  hotelCode: Scalars['String'];
  rfcId: Scalars['UUID'];
}

export interface RfcTranslation {
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  languageCode?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
  rfcId?: Maybe<Scalars['UUID']>;
}

export interface RfcTranslationInput {
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
}

export enum RfcTypeEnum {
  AdjacentRoom = 'ADJACENT_ROOM',
  ConnectingRoom = 'CONNECTING_ROOM'
}

export enum RfcTypesEnum {
  Erfc = 'ERFC',
  Mrfc = 'MRFC',
  Rfc = 'RFC'
}

export interface Role {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
}

export interface Room {
  capacityAdult?: Maybe<Scalars['Int']>;
  capacityChildren?: Maybe<Scalars['Int']>;
  capacityDefault?: Maybe<Scalars['Int']>;
  capacityExtra?: Maybe<Scalars['Int']>;
  connectingRoom?: Maybe<Room>;
  connectingRoomId?: Maybe<Scalars['UUID']>;
  extraAdult?: Maybe<Scalars['Int']>;
  extraBedAdult?: Maybe<Scalars['Int']>;
  extraBedKid?: Maybe<Scalars['Int']>;
  extraChildren?: Maybe<Scalars['Int']>;
  featureList?: Maybe<Array<Maybe<HotelRetailFeature>>>;
  featureString?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  isChanged?: Maybe<Scalars['Boolean']>;
  mappingRoomCode?: Maybe<Scalars['String']>;
  maximumAdult?: Maybe<Scalars['Int']>;
  maximumKid?: Maybe<Scalars['Int']>;
  numberOfBedrooms?: Maybe<Scalars['Int']>;
  reservationList?: Maybe<Array<Maybe<Reservation>>>;
  rfcList?: Maybe<Array<Maybe<Rfc>>>;
  roomAvailabilityList?: Maybe<Array<Maybe<RoomAvailability>>>;
  roomFloor?: Maybe<Scalars['String']>;
  roomNumber?: Maybe<Scalars['String']>;
  space?: Maybe<Scalars['Int']>;
  status?: Maybe<RoomStatusEnum>;
}

export interface RoomAvailability {
  date?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  reservation?: Maybe<Reservation>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['UUID']>;
  status?: Maybe<RoomAvailabilityStatusEnum>;
}

export interface RoomAvailabilityFilter {
  expand?: InputMaybe<Array<InputMaybe<RoomExpandEnum>>>;
  fromDate: Scalars['Date'];
  hotelCode: Scalars['String'];
  hotelRetailFeatureIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  roomIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<Scalars['String']>;
  toDate: Scalars['Date'];
  translateTo?: InputMaybe<LanguageCode>;
}

export enum RoomAvailabilityStatusEnum {
  Assigned = 'ASSIGNED',
  Available = 'AVAILABLE',
  Blocked = 'BLOCKED',
  OutOfInventory = 'OUT_OF_INVENTORY',
  OutOfOrder = 'OUT_OF_ORDER',
  Unavailable = 'UNAVAILABLE'
}

export interface RoomDailyAvailabilityFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export enum RoomExpandEnum {
  MappingRoom = 'mappingRoom',
  RetailFeature = 'retailFeature',
  Rfc = 'rfc',
  RoomAvailability = 'roomAvailability',
  StandardFeature = 'standardFeature'
}

export interface RoomFilter {
  expand?: InputMaybe<Array<InputMaybe<RoomExpandEnum>>>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  isChanged?: InputMaybe<Scalars['Boolean']>;
  isConnected?: InputMaybe<Scalars['Boolean']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  statusList?: InputMaybe<Array<InputMaybe<RoomStatusEnum>>>;
}

export interface RoomInput {
  capacityAdult?: InputMaybe<Scalars['Int']>;
  capacityChildren?: InputMaybe<Scalars['Int']>;
  capacityDefault?: InputMaybe<Scalars['Int']>;
  capacityExtra?: InputMaybe<Scalars['Int']>;
  childrenAges?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  connectingRoomId?: InputMaybe<Scalars['UUID']>;
  extraAdult?: InputMaybe<Scalars['Int']>;
  extraBedAdult?: InputMaybe<Scalars['Int']>;
  extraBedKid?: InputMaybe<Scalars['Int']>;
  extraChildren?: InputMaybe<Scalars['Int']>;
  featureString?: InputMaybe<Scalars['String']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  isChanged?: InputMaybe<Scalars['Boolean']>;
  maximumAdult?: InputMaybe<Scalars['Int']>;
  maximumKid?: InputMaybe<Scalars['Int']>;
  numberOfBedrooms?: InputMaybe<Scalars['Int']>;
  rfcId?: InputMaybe<Scalars['UUID']>;
  roomFloor?: InputMaybe<Scalars['String']>;
  roomNumber?: InputMaybe<Scalars['String']>;
  space?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<RoomStatusEnum>;
  stayOptionId?: InputMaybe<Scalars['UUID']>;
}

export interface RoomOptimization {
  isOptimized?: Maybe<Scalars['Boolean']>;
  optimizationResult?: Maybe<Array<Maybe<Room>>>;
  statistics?: Maybe<RoomOptimizationStatistic>;
}

export interface RoomOptimizationFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface RoomOptimizationStatistic {
  freeUpRatioFrom?: Maybe<Scalars['BigDecimal']>;
  freeUpRatioTo?: Maybe<Scalars['BigDecimal']>;
  gapReducedFrom?: Maybe<Scalars['Int']>;
  gapReducedTo?: Maybe<Scalars['Int']>;
  movedReservationCount?: Maybe<Scalars['Int']>;
}

export interface RoomProductCalculatedPrice {
  allocationSetting?: Maybe<RfcAllocationSettingEnum>;
  averageDailyPrice?: Maybe<Scalars['BigDecimal']>;
  capacityAdult?: Maybe<Scalars['Int']>;
  capacityChildren?: Maybe<Scalars['Int']>;
  capacityDefault?: Maybe<Scalars['Int']>;
  capacityExtra?: Maybe<Scalars['Int']>;
  extraBedAdult?: Maybe<Scalars['Int']>;
  extraBedKid?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Boolean']>;
  label?: Maybe<RoomProductLabelEnum>;
  numberOfBedrooms?: Maybe<Scalars['Int']>;
  propertyId?: Maybe<Scalars['UUID']>;
  restrictionList?: Maybe<Array<Maybe<RoomProductRestriction>>>;
  /** @deprecated No longer supported */
  roomId?: Maybe<Scalars['UUID']>;
  roomList?: Maybe<Array<Maybe<Room>>>;
  /** @deprecated No longer supported */
  roomNumber?: Maybe<Scalars['String']>;
  roomProductCode?: Maybe<Scalars['String']>;
  roomProductId?: Maybe<Scalars['UUID']>;
  roomProductName?: Maybe<Scalars['String']>;
  roomProductSalesPlanCode?: Maybe<Scalars['String']>;
  roomProductSalesPlanId?: Maybe<Scalars['UUID']>;
  salesPlanCode?: Maybe<Scalars['String']>;
  salesPlanId?: Maybe<Scalars['UUID']>;
  salesPlanName?: Maybe<Scalars['String']>;
  soldOutDateList?: Maybe<Array<Maybe<Scalars['Date']>>>;
  space?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['BigDecimal']>;
}

export interface RoomProductCalculatedPriceFilter {
  adult: Scalars['Int'];
  arrival: Scalars['Date'];
  childrenAgeList?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  departure: Scalars['Date'];
  label?: InputMaybe<RoomProductLabelEnum>;
  propertyCode: Scalars['String'];
  roomId?: InputMaybe<Scalars['UUID']>;
  roomIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  roomProductSalesPlanIdList: Array<InputMaybe<Scalars['UUID']>>;
  translateTo?: InputMaybe<LanguageCode>;
}

export enum RoomProductLabelEnum {
  Default = 'DEFAULT',
  LowestPrice = 'LOWEST_PRICE'
}

export enum RoomProductPricingMethodEnum {
  Derived = 'DERIVED',
  FeatureBasedPricing = 'FEATURE_BASED_PRICING',
  Link = 'LINK',
  PmsPricing = 'PMS_PRICING',
  RfcPricing = 'RFC_PRICING'
}

export interface RoomProductRestriction {
  code?: Maybe<RfcRestrictionCodeEnum>;
  fromDate?: Maybe<Scalars['Date']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  roomProductId?: Maybe<Scalars['UUID']>;
  toDate?: Maybe<Scalars['Date']>;
  value?: Maybe<Scalars['String']>;
}

export interface RoomProductRestrictionAutomationSetting {
  id?: Maybe<Scalars['UUID']>;
  isAutomated?: Maybe<Scalars['Boolean']>;
  overrideDefault?: Maybe<Scalars['Boolean']>;
  roomProductCode?: Maybe<Scalars['String']>;
  roomProductId?: Maybe<Scalars['UUID']>;
  roomProductName?: Maybe<Scalars['String']>;
  roomProductStatus?: Maybe<RfcStatusEnum>;
  roomProductType?: Maybe<RfcTypesEnum>;
}

export interface RoomProductRestrictionAutomationSettingInput {
  isAutomated?: InputMaybe<Scalars['Boolean']>;
  overrideDefault?: InputMaybe<Scalars['Boolean']>;
  removeAutomatedRestriction?: InputMaybe<Scalars['Boolean']>;
  roomProductId?: InputMaybe<Scalars['UUID']>;
}

export interface RoomRequest {
  adult?: InputMaybe<Scalars['Int']>;
  childrenAgeList?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  roomRequestList?: InputMaybe<Array<InputMaybe<RoomRequest>>>;
}

export interface RoomRetailFeature {
  id?: Maybe<Scalars['UUID']>;
  quantity?: Maybe<Scalars['Int']>;
  retailFeatureId?: Maybe<Scalars['UUID']>;
  roomId?: Maybe<Scalars['UUID']>;
}

export interface RoomRetailFeatureFilter {
  hotelCode?: InputMaybe<Scalars['String']>;
  hotelId?: InputMaybe<Scalars['UUID']>;
  hotelRetailFeatureId?: InputMaybe<Scalars['UUID']>;
  roomId?: InputMaybe<Scalars['UUID']>;
}

export enum RoomStatusEnum {
  Clean = 'CLEAN',
  Dirty = 'DIRTY',
  Inspected = 'INSPECTED',
  OutOfService = 'OUT_OF_SERVICE'
}

export interface RoomTemplateFeatureInput {
  featureType?: InputMaybe<FeatureTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  roomId?: InputMaybe<Scalars['UUID']>;
  roomIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  templateFeatureList?: InputMaybe<Array<InputMaybe<TemplateFeatureInput>>>;
}

export enum RoundingModeEnum {
  Down = 'DOWN',
  HalfRoundUp = 'HALF_ROUND_UP',
  NoRounding = 'NO_ROUNDING',
  Up = 'UP'
}

export interface SalesPlanSellability {
  distributionChannel?: Maybe<DistributionChannel>;
  id?: Maybe<Scalars['UUID']>;
  isSellable?: Maybe<Scalars['Boolean']>;
  propertyId?: Maybe<Scalars['UUID']>;
  salesPlanId?: Maybe<Scalars['UUID']>;
}

export interface SalesPlanSellabilityAdjustment {
  date?: Maybe<Scalars['Date']>;
  distributionChannel?: Maybe<DistributionChannel>;
  id?: Maybe<Scalars['UUID']>;
  isAdjusted?: Maybe<Scalars['Boolean']>;
  isSellable?: Maybe<Scalars['Boolean']>;
  propertyId?: Maybe<Scalars['UUID']>;
  salesPlanId?: Maybe<Scalars['UUID']>;
}

export interface SalesPlanSellabilityAdjustmentFilter {
  distributionChannelList?: InputMaybe<Array<InputMaybe<DistributionChannel>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  isSellable?: InputMaybe<Scalars['Boolean']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyCode: Scalars['String'];
  salesPlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface SalesPlanSellabilityAdjustmentInput {
  daysOfWeek?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  distributionChannel: DistributionChannel;
  fromDate: Scalars['Date'];
  isSellable?: InputMaybe<Scalars['Boolean']>;
  propertyCode: Scalars['String'];
  salesPlanId: Scalars['UUID'];
  toDate: Scalars['Date'];
}

export interface SalesPlanSellabilityFilter {
  distributionChannelList?: InputMaybe<Array<InputMaybe<DistributionChannel>>>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  isSellable?: InputMaybe<Scalars['Boolean']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyCode: Scalars['String'];
  salesPlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface SalesPlanSellabilityInput {
  distributionChannel?: InputMaybe<DistributionChannel>;
  id?: InputMaybe<Scalars['UUID']>;
  isSellable?: InputMaybe<Scalars['Boolean']>;
  propertyId?: InputMaybe<Scalars['UUID']>;
  salesPlanId?: InputMaybe<Scalars['UUID']>;
}

export interface SalesPlanStrongestPaymentTermsAndCxlPolicy {
  fromDate?: Maybe<Scalars['Date']>;
  propertyId?: Maybe<Scalars['UUID']>;
  salesPlanId?: Maybe<Scalars['UUID']>;
  strongestCxlPolicy?: Maybe<HotelCancellationPolicy>;
  strongestPaymentTerms?: Maybe<HotelPaymentTerm>;
  toDate?: Maybe<Scalars['Date']>;
}

export interface SelectedAndSoldFeature {
  featureCode?: Maybe<Scalars['String']>;
  featureName?: Maybe<Scalars['String']>;
  recommendedTimes?: Maybe<Scalars['Int']>;
  selectedTimes?: Maybe<Scalars['Int']>;
  soldTimes?: Maybe<Scalars['Int']>;
}

export enum SellingStrategyTypeEnum {
  Default = 'DEFAULT',
  LongStay = 'LONG_STAY'
}

export interface SetupAutomatePricingInput {
  destinationList?: InputMaybe<Array<InputMaybe<AutomatePricingDestinationInput>>>;
  hotelCode: Scalars['String'];
  isEnabled: Scalars['Boolean'];
  isPush?: InputMaybe<Scalars['Boolean']>;
  rfcRatePlanId: Scalars['UUID'];
  sourceList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<AutomatePricingType>;
  unit?: InputMaybe<AutomatePricingUnit>;
  value?: InputMaybe<Scalars['BigDecimal']>;
}

export interface StayOption {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<StayOptionTypeEnum>;
}

export interface StayOptionRecommendationFilter {
  arrival?: InputMaybe<Scalars['Date']>;
  bookingFlow?: InputMaybe<BookingFlow>;
  departure?: InputMaybe<Scalars['Date']>;
  hotelCode: Scalars['String'];
  occasionCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  priorityCategoryCodeList?: InputMaybe<Array<InputMaybe<PriorityModel>>>;
  promoCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  roomRequestList?: InputMaybe<Array<InputMaybe<RoomRequest>>>;
  splitToDoubleRooms?: InputMaybe<Scalars['Boolean']>;
  translateTo?: InputMaybe<LanguageCode>;
  travelTagCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface StayOptionSuggestion {
  availableRfcList?: Maybe<Array<Maybe<Rfc>>>;
  availableRfcRatePlanList?: Maybe<Array<Maybe<RfcRatePlan>>>;
  label?: Maybe<BookingFlow>;
  occasionCodeList?: Maybe<Array<Maybe<Scalars['String']>>>;
  restrictionValidationList?: Maybe<Array<Maybe<RfcRestriction>>>;
  travelTagCodeList?: Maybe<Array<Maybe<Scalars['String']>>>;
  unavailableRfcRatePlanList?: Maybe<Array<Maybe<RfcRatePlan>>>;
}

export enum StayOptionTypeEnum {
  CustomizedTheme = 'CUSTOMIZED_THEME',
  LowestPrice = 'LOWEST_PRICE',
  MostPopular = 'MOST_POPULAR'
}

export interface Subscription {
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  subscriptionId?: Maybe<Scalars['String']>;
}

export interface SubscriptionInput {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export enum SyncModeEnum {
  Daily = 'DAILY',
  Full = 'FULL'
}

export interface SyncStatus {
  jobType?: Maybe<HotelSyncJobEnum>;
  lastSynced?: Maybe<Scalars['DateTime']>;
}

export interface Tax {
  serviceCode?: Maybe<Scalars['String']>;
  serviceType?: Maybe<HotelTaxMappingServiceTypeEnum>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  taxCode?: Maybe<Scalars['String']>;
  taxDescription?: Maybe<Scalars['String']>;
  taxName?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['BigDecimal']>;
}

export interface TemplateAmenity {
  amenityType?: Maybe<AmenityTypeEnum>;
  availability?: Maybe<AmenityAvailabilityEnum>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  postNextDay?: Maybe<Scalars['Boolean']>;
  pricingUnit?: Maybe<PricingUnitEnum>;
}

export interface TemplateCategory {
  categoryType?: Maybe<CategoryTypeEnum>;
  code?: Maybe<Scalars['String']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  templateFeatureList?: Maybe<Array<Maybe<TemplateFeature>>>;
}

export interface TemplateConnector {
  connectorType?: Maybe<ConnectorTypeEnum>;
  isAuthorized?: Maybe<Scalars['Boolean']>;
}

/**  todo templateRetailCategory update to templateCategory */
export interface TemplateFeature {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  templateRetailCategory?: Maybe<TemplateRetailCategory>;
}

export enum TemplateFeatureExpandEnum {
  IconImage = 'iconImage'
}

export interface TemplateFeatureFilter {
  expand?: InputMaybe<Array<InputMaybe<TemplateFeatureExpandEnum>>>;
  featureType?: InputMaybe<FeatureTypeEnum>;
  hotelCode?: InputMaybe<Scalars['String']>;
  isAssigned?: InputMaybe<Scalars['Boolean']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  retailCategoryCodeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  retailCategoryIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface TemplateFeatureInput {
  id?: InputMaybe<Scalars['UUID']>;
  isTemplateFeature?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Int']>;
}

export interface TemplateRetailCategory {
  categoryType?: Maybe<CategoryTypeEnum>;
  code?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  templateRetailFeatureList?: Maybe<Array<Maybe<TemplateRetailFeature>>>;
}

export interface TemplateRetailFeature {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  templateRetailCategory?: Maybe<TemplateRetailCategory>;
}

export interface TemplateStandardFeature {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displaySequence?: Maybe<Scalars['Int']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
}

export interface TopSelectedAndSold {
  recommendedFeatureList?: Maybe<Array<Maybe<SelectedAndSoldFeature>>>;
  selectedFeatureList?: Maybe<Array<Maybe<SelectedAndSoldFeature>>>;
  soldFeatureList?: Maybe<Array<Maybe<SelectedAndSoldFeature>>>;
}

export interface TopSelectedAndSoldFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface TriggerHotelAutomatePricingInput {
  hotelCode?: InputMaybe<Scalars['String']>;
}

export interface TriggerRestrictionAutomationInput {
  fromDate?: InputMaybe<Scalars['Date']>;
  propertyCode?: InputMaybe<Scalars['String']>;
  restrictionCodeList?: InputMaybe<Array<InputMaybe<RestrictionCodeEnum>>>;
  roomProductIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  salesPlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface UpdateHotelExtrasMappingInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  mappingHotelExtrasCode?: InputMaybe<Scalars['String']>;
}

export interface UpdateReservationLockInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  reservationNumber?: InputMaybe<Scalars['String']>;
}

export interface UpdateRfcRatePlanDailyAvailabilityInput {
  daysOfWeek?: InputMaybe<Array<InputMaybe<DayOfWeek>>>;
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  isSellable?: InputMaybe<Scalars['Boolean']>;
  rfcRatePlanIdList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  toDate?: InputMaybe<Scalars['Date']>;
}

export interface UpdateRfcRatePlanMappingInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  mappingRatePlanCode?: InputMaybe<Scalars['String']>;
}

export interface UpdateRoomMappingInput {
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  mappingRoomCode?: InputMaybe<Scalars['String']>;
}

export interface UpsellStatistics {
  adr?: Maybe<Scalars['BigDecimal']>;
  averageAdults?: Maybe<Scalars['BigDecimal']>;
  averageExtra?: Maybe<Scalars['BigDecimal']>;
  averageKids?: Maybe<Scalars['BigDecimal']>;
  averageLOS?: Maybe<Scalars['BigDecimal']>;
  averageLeadTime?: Maybe<Scalars['BigDecimal']>;
  averageProfit?: Maybe<Scalars['BigDecimal']>;
  bookingFlow?: Maybe<BookingFlow>;
  totalBookings?: Maybe<Scalars['Int']>;
  totalRevenue?: Maybe<Scalars['BigDecimal']>;
  totalRoomNights?: Maybe<Scalars['Int']>;
  upsellRevenue?: Maybe<Scalars['BigDecimal']>;
}

export interface User {
  createdDate?: Maybe<Scalars['DateTime']>;
  emailAddress?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  hotelId?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['UUID']>;
  lastName?: Maybe<Scalars['String']>;
  organisationCode?: Maybe<Scalars['String']>;
  userHotelRoleList?: Maybe<Array<Maybe<UserHotelRole>>>;
}

export interface UserFilter {
  emailAddress?: InputMaybe<Scalars['String']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  idList?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
}

export interface UserHotelRole {
  hotel?: Maybe<Hotel>;
  role?: Maybe<Role>;
}

export interface UserHotelRoleInput {
  roleId?: InputMaybe<Scalars['UUID']>;
}

export interface UserInput {
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  userHotelRoleList?: InputMaybe<Array<InputMaybe<UserHotelRoleInput>>>;
}

export interface VoiceReservationGuestInput {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['UUID']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isAdult?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneInfo?: InputMaybe<PhoneInfoInput>;
  postalCode?: InputMaybe<Scalars['String']>;
}

export interface WeeklyOverview {
  overviewDailyList?: Maybe<Array<Maybe<WeeklyOverviewDaily>>>;
  totalAverageDailyRate?: Maybe<Scalars['BigDecimal']>;
  totalOccupancyRate?: Maybe<Scalars['Float']>;
  totalRoomNights?: Maybe<Scalars['Int']>;
  totalRoomNightsPickUpFromYesterday?: Maybe<Scalars['Int']>;
}

export interface WeeklyOverviewChannel {
  averageDailyRate?: Maybe<Scalars['BigDecimal']>;
  channelName?: Maybe<ChannelNameEnum>;
  date?: Maybe<Scalars['Date']>;
  occupancyRate?: Maybe<Scalars['Float']>;
  totalAdults?: Maybe<Scalars['Int']>;
  totalKids?: Maybe<Scalars['Int']>;
  totalRoomNightsPickUpFromYesterday?: Maybe<Scalars['Int']>;
  totalRoomSold?: Maybe<Scalars['Int']>;
}

export interface WeeklyOverviewDaily {
  availablePropertyRooms?: Maybe<Scalars['Int']>;
  availableToSell?: Maybe<Scalars['Int']>;
  averageDailyRate?: Maybe<Scalars['BigDecimal']>;
  channelList?: Maybe<Array<Maybe<WeeklyOverviewChannel>>>;
  date?: Maybe<Scalars['Date']>;
  totalArrival?: Maybe<Scalars['Int']>;
  totalDeparture?: Maybe<Scalars['Int']>;
  totalPropertyRooms?: Maybe<Scalars['Int']>;
  totalRoomNightsPickUpFromYesterday?: Maybe<Scalars['Int']>;
}

export interface WeeklyOverviewFilter {
  fromDate?: InputMaybe<Scalars['Date']>;
  hotelCode?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['Date']>;
}

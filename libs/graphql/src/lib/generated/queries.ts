import gql from 'graphql-tag';

export const QueryCurrentUserDocs = gql`
    query CurrentUser {
  response: currentUser {
    count
    totalPage
    data {
      ... on User {
        emailAddress
        fullName
        organisationCode
        userHotelRoleList {
          hotel {
            code
          }
          role {
            code
          }
        }
      }
    }
  }
}
    `;
export const QueryDailyRatePlanAdjustmentListDocs = gql`
    query DailyRatePlanAdjustmentList($filter: DailyRatePlanAdjustmentFilter) {
  response: dailyRatePlanAdjustmentList(filter: $filter) {
    count
    totalPage
    data {
      ... on DailyRatePlanAdjustment {
        date
        ratePlanId
        value
        unit
        isAdjusted
      }
    }
  }
}
    `;
export const QueryDailySalesPlanPricingBreakdownDocs = gql`
    query DailySalesPlanPricingBreakdown($filter: DailySalesPlanPricingBreakdownFilter) {
  response: dailySalesPlanPricingBreakdown(filter: $filter) {
    data {
      ... on DailySalesPlanPricingBreakdown {
        propertyId
        salesPlanId
        date
        lowestPrice
        highestPrice
      }
    }
  }
}
    `;
export const QueryDailySalesPlanSellabilityListDocs = gql`
    query DailySalesPlanSellabilityList($filter: SalesPlanSellabilityAdjustmentFilter) {
  response: dailySalesPlanSellabilityList(filter: $filter) {
    count
    totalPage
    data {
      ... on SalesPlanSellabilityAdjustment {
        propertyId
        salesPlanId
        distributionChannel
        date
        isSellable
        isAdjusted
      }
    }
  }
}
    `;
export const QueryHotelListDocs = gql`
    query HotelList($filter: HotelFilter) {
  response: hotelList(filter: $filter) {
    count
    totalPage
    data {
      ... on Hotel {
        timeZone
        defaultPax
        preferredLanguageCode
        isCityTaxIncludedSellingPrice
        organisation {
          id
          name
        }
        country {
          name
          code
          phoneCode
        }
        id
        code
        name
        address
        city
        state
        phone
        mappingHotelCode
        baseCurrency {
          code
        }
        measureMetric
        taxSetting
      }
    }
  }
}
    `;
export const QueryRatePlanCxlPolicyDailyListDocs = gql`
    query RatePlanCxlPolicyDailyList($filter: ExtranetRatePlanCxlPolicyDailyFilter!) {
  response: ratePlanCxlPolicyDailyList(filter: $filter) {
    count
    totalPage
    data {
      ... on RatePlanCxlPolicyDaily {
        hotelId
        ratePlanId
        cxlPolicyCode
        date
        isAdjusted
      }
    }
  }
}
    `;
export const QueryRatePlanHotelExtrasDailyListDocs = gql`
    query RatePlanHotelExtrasDailyList($filter: ExtranetRatePlanHotelExtrasDailyFilter!) {
  response: ratePlanHotelExtrasDailyList(filter: $filter) {
    count
    totalPage
    data {
      ... on RatePlanHotelExtrasDaily {
        id
        date
        isAdjusted
        ratePlanId
        hotelExtrasList {
          id
          name
          code
          hotelAmenityPriceList {
            price
            hotelAgeCategory {
              name
              code
            }
          }
        }
      }
    }
  }
}
    `;
export const QueryRatePlanListDocs = gql`
    query RatePlanList($filter: ExtranetRatePlanFilter) {
  response: ratePlanList(filter: $filter) {
    count
    totalPage
    data {
      ... on RatePlan {
        id
        code
        name
        roundingMode
        status
        description
        promoCodeList
        type
        paymentTermCode
        payAtHotel
        payOnConfirmation
        hotelCxlPolicyCode
        hourPrior
        displayUnit
        cancellationFeeValue
        cancellationFeeUnit
        mappingRatePlanCode
        adjustmentValue
        adjustmentUnit
        isPrimary
        pricingMethodology
        mrfcPositioningMode
        rfcAttributeMode
        sellingStrategyType
        ratePlanDerivedSetting {
          id
          hotelId
          ratePlanId
          derivedRatePlanId
          followDailyPaymentTerm
          followDailyCxlPolicy
          followDailyIncludedAmenity
          followDailyRoomProductAvailability
          followDailyRestriction
        }
        translationList {
          languageCode
          name
          description
        }
        hotelCancellationPolicy {
          id
          name
          cancellationType
          mappingCancellationPolicyCode
          hourPrior
          displayUnit
          cancellationFeeValue
          cancellationFeeUnit
          description
        }
        hotelExtrasCodeList
        ratePlanRfcCountList {
          rfcType
          count
        }
        hotelExtrasList {
          name
          code
          description
        }
        distributionChannelList
      }
    }
  }
}
    `;
export const QueryRatePlanPaymentTermDailyListDocs = gql`
    query RatePlanPaymentTermDailyList($filter: ExtranetRatePlanPaymentTermDailyFilter!) {
  response: ratePlanPaymentTermDailyList(filter: $filter) {
    count
    totalPage
    data {
      ... on RatePlanPaymentTermDaily {
        hotelId
        ratePlanId
        paymentTermCode
        date
        isAdjusted
      }
    }
  }
}
    `;
export const QueryRatePlanRestrictionsDailyListDocs = gql`
    query RatePlanRestrictionsDailyList($filter: ExtranetRatePlanRestrictionsDailyFilter) {
  response: ratePlanRestrictionsDailyList(filter: $filter) {
    data {
      ... on RatePlanRestrictionsDaily {
        hotelId
        ratePlanId
        ratePlan {
          id
          code
          name
        }
        dailyRestrictionList {
          date
          restrictionList {
            isAdjusted
            code
            value
          }
        }
      }
    }
  }
}
    `;
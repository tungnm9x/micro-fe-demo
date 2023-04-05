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
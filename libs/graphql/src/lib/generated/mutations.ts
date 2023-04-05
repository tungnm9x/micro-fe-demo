import gql from 'graphql-tag';

export const MutationCreateRatePlanDocs = gql`
    mutation CreateRatePlan($input: ExtranetRatePlanInput) {
  response: createRatePlan(input: $input) {
    code
    status
    message
  }
}
    `;
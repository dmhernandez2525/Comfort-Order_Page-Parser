import gql from 'graphql-tag';

export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  FETCH_BUSINESS: gql`
    query FetchBusiness($id: ID!) {
        business(_id: $id) {
          name
        }
    }
  `
}
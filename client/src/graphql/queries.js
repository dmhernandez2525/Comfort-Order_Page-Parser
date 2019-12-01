import gql from 'graphql-tag';

export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  FETCH_BUSSNESS: gql`
    query FetchBussness($id: ID!) {
        bussness(_id: $id) {
          name
    }
  `
}
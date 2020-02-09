import gql from 'graphql-tag';

export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
      role @client
    }
  `,
  FETCH_BUSINESS: gql`
    query FetchBusiness($id: ID!) {
        business(_id: $id) {
          template
          name
          map
          url
          features{
            data
            name
          }
          phoneNumber
          address
          slogan
        }
    }
  `,
  FETCH_All_BUSINESS: gql`
    query FetchAllBusiness {
        businesses{
          _id
          user{
            _id
            email
          }
          template
          features {
            _id
          }
          name
          map
          url
          phoneNumber
          address
          slogan
        }
    }
  `,
  FETCH_All_BUSINESS_USERS: gql`
    query FetchAllBusinessUsers {
        businessUsers{
          _id
          email
          name
        }
    }
  `
}
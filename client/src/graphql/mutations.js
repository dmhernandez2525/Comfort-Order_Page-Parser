import gql from "graphql-tag";

export default {
  REGISTER_USER: gql`
    mutation RegisterUser($name: String!, $role: String!, $email: String!, $password: String!) {
      register(name: $name, role: $role, email: $email, password: $password) {
        token
        loggedIn
      }
    }
  `,
  LOGIN_USER: gql`
    mutation LoginUser($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        loggedIn
        role
      }
    }
  `,
  VERIFY_USER: gql`
    mutation VerifyUser($token: String!) {
      verifyUser(token: $token) {
        loggedIn
        role
      }
    }
  `,
    CREATE_BUSINESS: gql `
      mutation CreateBusiness(
        $name: String!,
        $map: String!,
        $url: String!,
        $phoneNumber: String!,
        $address: String!,
        $slogan: String!,
        $hours: String!,
        $about: String!,
        $userId: ID!,
        $features: [String], 
        $template: String!, 
        $businessData: [String]) {
        makeBusiness(
          name: $name,
          map: $map,
          url: $url,
          phoneNumber: $phoneNumber,
          address: $address,
          slogan: $slogan,
          hours: $hours,
          about: $about,
          userId: $userId,
          features: $features,
          template: $template,
          businessData:$businessData 
          ){
            _id
            user{
              email
            }
            features
            template
            businessData
            name
            map
            url
            phoneNumber
            address
            slogan
            hours
            about
        }
      }
  `,
}
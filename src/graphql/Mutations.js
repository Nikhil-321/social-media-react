import { gql } from "@apollo/react-hooks";

export const REGISTER_USER = gql`
  mutation registerUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $userName: String!
    $password: String!
    $confirmPassword: String!
  ) {
    registerUser(
      registerUserInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        userName: $userName
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      userName
      firstName
      lastName
    }
  }
`;

export const USER_LOGIN = gql`

mutation loginUser($email: String!, $password: String!) {
    loginUser(loginInput: {
        email: $email,
        password: $password
    }) {
        token
        
    }
}

`;

import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
query GetUserById($userId: ID!) {
  getUserById(userId: $userId) {
    id
    firstName
    lastName
    userName
    email
    createdAt
  }
}
`
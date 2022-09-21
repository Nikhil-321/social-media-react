import { gql } from "@apollo/react-hooks";

export const CREATE_POST = gql`
  mutation createPost($description: String!) {
    createPost(description: $description) {
      id
      description
      username
      createdAt
    }
  }
`;

export const LIKE_POST = gql`
mutation likeandDislikePost($postId: ID!) {
    likeandDislikePost(postId: $postId)
}
`

export const ADD_COMMENT = gql`
mutation createComment($postId: ID!, $comment: String!) {
  createComment(postId: $postId, comment: $comment) {
    id
    username
    comment
    createdAt
  }
}
`

export const DELETE_POST = gql`
mutation deletePost($postId: ID!) {
  deletePost(postId: $postId)
}

`

import { gql } from "@apollo/react-hooks";

export const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      description
      username
      createdAt
      comments {
        username
        comment
        createdAt
      }
      likes {
        username
        createdAt
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query GetPostById($postId: ID!) {
    getPostById(postId: $postId) {
      id
      description
      username
      createdAt
      comments {
        username
        comment
        createdAt
        id
      }
      likes {
        username
        createdAt
      }
    }
  }
`;

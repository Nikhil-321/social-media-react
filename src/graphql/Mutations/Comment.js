import { gql } from "@apollo/client";

export const DELETE_COMMENT = gql`
mutation deleteComment($postId: ID!, $commentId: ID!){
    deleteComment(postId:$postId, commentId: $commentId) 
}
`

export const EDIT_COMMENT = gql`
mutation editComment($postId: ID!, $commentId: ID!, $comment: String!) {
    editComment(postId: $postId, commentId: $commentId, comment: $comment) {
        id
        username
        comment
        createdAt
    }
}

`
import { gql } from "@apollo/client";

export const SUBMIT_COMMENT = gql`
  mutation createComment($article: ID!, $name: String!, $message: String!) {
    createComment(
      data: {
        article: $article
        name: $name
        message: $message
        publishedAt: null
      }
    ) {
      data {
        id
        attributes {
          name
          message
          createdAt
          updatedAt
          publishedAt
          article {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

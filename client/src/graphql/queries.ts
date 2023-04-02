import { gql } from "@apollo/client";

export const GET_AUTHOR = gql`
  query getAuthor($slug: String!) {
    authors(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          email
          slug
          description
          quote
          quoteDescription
          createdAt
          updatedAt
          publishedAt
          locale
          articles {
            data {
              id
              attributes {
                title
                slug
                shortDescription
                readTime
                createdAt
                updatedAt
                publishedAt
                locale
                category
                cover {
                  data {
                    attributes {
                      name
                      alternativeText
                      width
                      height
                      mime
                      size
                      url
                      createdAt
                      updatedAt
                    }
                  }
                }
                author {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
          avatar {
            data {
              attributes {
                name
                alternativeText
                width
                height
                size
                url
                previewUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query {
    authors {
      data {
        attributes {
          name
          avatar {
            data {
              attributes {
                name
                width
                height
                url
                previewUrl
              }
            }
          }
          articles {
            data {
              id
              attributes {
                title
              }
            }
          }
          slug
        }
      }
    }
  }
`;

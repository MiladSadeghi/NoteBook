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

export const GET_ARTICLE = gql`
  query getAuthor($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          category
          blocks {
            ... on ComponentSharedRichText {
              id
              body
            }
            ... on ComponentSharedMedia {
              id
              file {
                data {
                  id
                  attributes {
                    name
                    alternativeText
                    height
                    size
                    url
                    previewUrl
                    width
                  }
                }
              }
            }
          }
          readTime
          createdAt
          cover {
            data {
              attributes {
                name
                alternativeText
                url
              }
            }
          }
          author {
            data {
              attributes {
                name
                slug
                avatar {
                  data {
                    attributes {
                      alternativeText
                      url
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

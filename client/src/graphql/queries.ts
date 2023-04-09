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
        id
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
          comments {
            data {
              attributes {
                name
                message
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ARTICLES_AND_AUTHORS = gql`
  query {
    articles(pagination: { limit: 100 }) {
      data {
        id
        attributes {
          title
          category
        }
      }
    }
    authors {
      data {
        id
        attributes {
          name
          slug
          articles {
            data {
              id
            }
          }
          avatar {
            data {
              id
              attributes {
                alternativeText
                url
                previewUrl
              }
            }
          }
          email
        }
      }
    }
  }
`;

export const GET_FEATURE_ARTICLE = gql`
  query {
    articles(filters: { tag: { eq: "featured" } }) {
      data {
        attributes {
          title
          slug
          category
          tag
          shortDescription
          readTime
          author {
            data {
              id
              attributes {
                name
                slug
                avatar {
                  data {
                    id
                    attributes {
                      alternativeText
                      url
                      previewUrl
                    }
                  }
                }
              }
            }
          }
          cover {
            data {
              attributes {
                alternativeText
                url
                previewUrl
              }
              id
            }
          }
          createdAt
        }
      }
    }
  }
`;

export const GET_POPULAR_ARTICLE = gql`
  query {
    articles(filters: { tag: { eq: "popular" } }) {
      data {
        attributes {
          title
          slug
          category
          tag
          shortDescription
          readTime
          author {
            data {
              id
              attributes {
                name
                slug
                avatar {
                  data {
                    id
                    attributes {
                      alternativeText
                      url
                      previewUrl
                    }
                  }
                }
              }
            }
          }
          cover {
            data {
              attributes {
                alternativeText
                url
                previewUrl
              }
              id
            }
          }
          createdAt
        }
      }
    }
  }
`;

export const GET_ARTICLES = gql`
  query getArticles($page: Int!) {
    articles(pagination: { page: $page, pageSize: 9 }) {
      data {
        id
        attributes {
          title
          slug
          cover {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          category
          author {
            data {
              attributes {
                name
                avatar {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                slug
              }
            }
          }
          readTime
          shortDescription
          createdAt
        }
      }
      meta {
        pagination {
          total
          page
          pageCount
          pageSize
        }
      }
    }
  }
`;

export const SEARCH_ARTICLES = gql`
  query search($title: String!, $category: String!) {
    articles(
      filters: {
        title: { contains: $title }
        category: { contains: $category }
      }
      pagination: { limit: 100 }
    ) {
      data {
        id
        attributes {
          title
          slug
          category
          tag
          shortDescription
          readTime
          createdAt
          updatedAt
          publishedAt
          cover {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
          author {
            data {
              attributes {
                slug
                name
                avatar {
                  data {
                    id
                    attributes {
                      alternativeText
                      url
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

export const listPosts = /* GraphQL */ `
  query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        body
        status
        images {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

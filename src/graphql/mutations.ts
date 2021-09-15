/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
    createPost(input: $input, condition: $condition) {
      id
      title
      body
      status
      images {
        items {
          id
          postID
          key
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      body
      status
      images {
        items {
          id
          postID
          key
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      body
      status
      images {
        items {
          id
          postID
          key
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage($input: CreateImageInput!, $condition: ModelImageConditionInput) {
    createImage(input: $input, condition: $condition) {
      id
      postID
      post {
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
      key
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage($input: UpdateImageInput!, $condition: ModelImageConditionInput) {
    updateImage(input: $input, condition: $condition) {
      id
      postID
      post {
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
      key
      createdAt
      updatedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage($input: DeleteImageInput!, $condition: ModelImageConditionInput) {
    deleteImage(input: $input, condition: $condition) {
      id
      postID
      post {
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
      key
      createdAt
      updatedAt
    }
  }
`;

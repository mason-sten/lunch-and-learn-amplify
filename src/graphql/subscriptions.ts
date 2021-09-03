/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
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

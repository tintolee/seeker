import {API, graphqlOperation} from 'aws-amplify';
import {createPost as apiCreatePost} from '../../../graphql/mutations';
import {updatePost as apiUpdatePost} from '../../../graphql/mutations';

export function getPost(postId, queryParams) {
  const getPost = /* GraphQL */ `
    query GetPost($id: ID!) {
      getPost(id: $id) {
        id
        type
        caption
        status
        visibility
        blog {
          blogTitle
          blogDescription
          visibility
        }
        photo {
          bucket
          region
          key
        }
        video {
          bucket
          region
          key
        }
        milestone {
          title
          date
        }
        createdAt
        routeMap {
          id
          destination
        }
        opportunity {
          id
          title
        }
        tags {
          id
          tag
          link
          createdAt
          updatedAt
        }
        seeker {
          id
          username
          firstName
          lastName
        }
        updatedAt
      }
    }
  `;
  return API.graphql(
    graphqlOperation(getPost, {
      id: postId,
      filter: queryParams.filter,
    }),
  );
}

export function createPost(post) {
  return API.graphql(graphqlOperation(apiCreatePost, {input: post}));
}

export function updatePost(post) {
  return API.graphql(graphqlOperation(apiUpdatePost, {input: post}));
}

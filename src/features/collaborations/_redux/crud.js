import {API, graphqlOperation} from 'aws-amplify';
import {
  createCollaboration as apiCreateCollaboration,
  updateCollaboration as apiUpdateCollaboration,
  createCollaborationMember as apiCreateCollaborationMember,
  updateCollaborationMember as apiUpdateCollaborationMember,
} from '../../../graphql/mutations';
import {getCollaboration as apiGetCollaboration} from '../../../graphql/queries';

export function getCollaborations(queryParams) {
  return API.graphql(
    graphqlOperation(apiGetCollaboration, {
      input: queryParams,
    }),
  );
}

export function getCollaboration(collaborationId, queryParams) {
  const getCollaboration = /* GraphQL */ `
    query GetCollaboration($id: ID!) {
      getCollaboration(id: $id) {
        id
        title
        location
        startDate
        endDate
        description
        caption
        capacity
        status
        cover {
          bucket
          region
          key
        }
        coverThumb {
          bucket
          region
          key
        }
        inviteOnly
        owner {
          id
          username
          firstName
          lastName
          profilePic {
            bucket
            region
            key
          }
        }
        members {
          items {
            collaborationId
            comment
            id
            seekerId
            status
            updatedAt
            createdAt
            seeker {
              id
              lastName
              firstName
              profilePic {
                bucket
                key
                region
              }
            }
          }
        }
        createdAt
        updatedAt
      }
    }
  `;
  return API.graphql(
    graphqlOperation(getCollaboration, {
      id: collaborationId,
      filter: queryParams.filter,
    }),
  );
}

export function createCollaboration(collaboration) {
  return API.graphql(
    graphqlOperation(apiCreateCollaboration, {
      input: collaboration,
    }),
  );
}

export function updateCollaboration(collaboration) {
  return API.graphql(
    graphqlOperation(apiUpdateCollaboration, {
      input: collaboration,
    }),
  );
}

export function createCollaborationMember(collaborationMember) {
  return API.graphql(
    graphqlOperation(apiCreateCollaborationMember, {
      input: collaborationMember,
    }),
  );
}

export function updateCollaborationMember(collaborationMember) {
  return API.graphql(
    graphqlOperation(apiUpdateCollaborationMember, {
      input: collaborationMember,
    }),
  );
}

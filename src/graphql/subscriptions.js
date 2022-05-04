/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessageByConversationId = /* GraphQL */ `
  subscription OnCreateMessageByConversationId($conversationId: ID!) {
    onCreateMessageByConversationId(conversationId: $conversationId) {
      id
      conversationId
      author
      body
      sortable
      content
      seekerId
      type
      isSeen
      seeker {
        id
        username
        firstName
        lastName
        sortable
        createdAt
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        profileCompleted
        visibleToProviders
        visibleToSeekers
        updatedAt
      }
      conversation {
        id
        type
        title
        sortable
        createdAt
        updatedAt
        groupId
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConversationMemberBySeekerId = /* GraphQL */ `
  subscription OnCreateConversationMemberBySeekerId($seekerId: ID!) {
    onCreateConversationMemberBySeekerId(seekerId: $seekerId) {
      id
      status
      comment
      conversationId
      seekerId
      providerId
      conversation {
        id
        type
        title
        sortable
        createdAt
        updatedAt
        groupId
        avatar
      }
      seeker {
        id
        username
        firstName
        lastName
        sortable
        createdAt
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        profileCompleted
        visibleToProviders
        visibleToSeekers
        updatedAt
      }
      provider {
        id
        name
        createdAt
        sortable
        displayName
        companyNo
        parent
        email
        educationalInstitution
        opportunityProviderPrimarySectorId
        status
        tagline
        address
        phone
        website
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      conversationId
      author
      body
      sortable
      content
      seekerId
      type
      isSeen
      seeker {
        id
        username
        firstName
        lastName
        sortable
        createdAt
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        profileCompleted
        visibleToProviders
        visibleToSeekers
        updatedAt
      }
      conversation {
        id
        type
        title
        sortable
        createdAt
        updatedAt
        groupId
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      conversationId
      author
      body
      sortable
      content
      seekerId
      type
      isSeen
      seeker {
        id
        username
        firstName
        lastName
        sortable
        createdAt
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        profileCompleted
        visibleToProviders
        visibleToSeekers
        updatedAt
      }
      conversation {
        id
        type
        title
        sortable
        createdAt
        updatedAt
        groupId
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      conversationId
      author
      body
      sortable
      content
      seekerId
      type
      isSeen
      seeker {
        id
        username
        firstName
        lastName
        sortable
        createdAt
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        profileCompleted
        visibleToProviders
        visibleToSeekers
        updatedAt
      }
      conversation {
        id
        type
        title
        sortable
        createdAt
        updatedAt
        groupId
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
      id
      type
      title
      sortable
      createdAt
      updatedAt
      groupId
      avatar
      members {
        nextToken
      }
      messages {
        nextToken
      }
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
      id
      type
      title
      sortable
      createdAt
      updatedAt
      groupId
      avatar
      members {
        nextToken
      }
      messages {
        nextToken
      }
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
      id
      type
      title
      sortable
      createdAt
      updatedAt
      groupId
      avatar
      members {
        nextToken
      }
      messages {
        nextToken
      }
    }
  }
`;

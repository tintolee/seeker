/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOpportunityType = /* GraphQL */ `
  mutation ProcessOpportunityType(
    $input: CreateOpportunityProviderOpportunityTypeInput!
  ) {
    processOpportunityType(input: $input) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const likeResource = /* GraphQL */ `
  mutation LikeResource($input: CreateResourceReactionInput!) {
    likeResource(input: $input) {
      id
      postId
      contentId
      collaborationId
      opportunityId
      seekerId
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
      createdAt
      updatedAt
    }
  }
`;
export const unlikeResource = /* GraphQL */ `
  mutation UnlikeResource($input: DeleteResourceReactionInput!) {
    unlikeResource(input: $input) {
      id
      postId
      contentId
      collaborationId
      opportunityId
      seekerId
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
      createdAt
      updatedAt
    }
  }
`;
export const createOpportunityProvider = /* GraphQL */ `
  mutation CreateOpportunityProvider(
    $input: CreateOpportunityProviderInput!
    $condition: ModelOpportunityProviderConditionInput
  ) {
    createOpportunityProvider(input: $input, condition: $condition) {
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
      logo {
        bucket
        region
        key
      }
      tagline
      address
      phone
      website
      primarySector {
        id
        name
        status
        createdAt
        updatedAt
      }
      otherSectors {
        nextToken
      }
      followers {
        nextToken
      }
      contents {
        nextToken
      }
      opportunities {
        nextToken
      }
      opportunityTypes {
        nextToken
      }
      users {
        nextToken
      }
      conversationMembers {
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateOpportunityProvider = /* GraphQL */ `
  mutation UpdateOpportunityProvider(
    $input: UpdateOpportunityProviderInput!
    $condition: ModelOpportunityProviderConditionInput
  ) {
    updateOpportunityProvider(input: $input, condition: $condition) {
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
      logo {
        bucket
        region
        key
      }
      tagline
      address
      phone
      website
      primarySector {
        id
        name
        status
        createdAt
        updatedAt
      }
      otherSectors {
        nextToken
      }
      followers {
        nextToken
      }
      contents {
        nextToken
      }
      opportunities {
        nextToken
      }
      opportunityTypes {
        nextToken
      }
      users {
        nextToken
      }
      conversationMembers {
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteOpportunityProvider = /* GraphQL */ `
  mutation DeleteOpportunityProvider(
    $input: DeleteOpportunityProviderInput!
    $condition: ModelOpportunityProviderConditionInput
  ) {
    deleteOpportunityProvider(input: $input, condition: $condition) {
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
      logo {
        bucket
        region
        key
      }
      tagline
      address
      phone
      website
      primarySector {
        id
        name
        status
        createdAt
        updatedAt
      }
      otherSectors {
        nextToken
      }
      followers {
        nextToken
      }
      contents {
        nextToken
      }
      opportunities {
        nextToken
      }
      opportunityTypes {
        nextToken
      }
      users {
        nextToken
      }
      conversationMembers {
        nextToken
      }
      updatedAt
    }
  }
`;
export const createOpportunityProviderFollower = /* GraphQL */ `
  mutation CreateOpportunityProviderFollower(
    $input: CreateOpportunityProviderFollowerInput!
    $condition: ModelOpportunityProviderFollowerConditionInput
  ) {
    createOpportunityProviderFollower(input: $input, condition: $condition) {
      id
      status
      sortable
      startedAt
      updatedAt
      opportunityProviderId
      seekerId
      opportunityProvider {
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
      createdAt
    }
  }
`;
export const updateOpportunityProviderFollower = /* GraphQL */ `
  mutation UpdateOpportunityProviderFollower(
    $input: UpdateOpportunityProviderFollowerInput!
    $condition: ModelOpportunityProviderFollowerConditionInput
  ) {
    updateOpportunityProviderFollower(input: $input, condition: $condition) {
      id
      status
      sortable
      startedAt
      updatedAt
      opportunityProviderId
      seekerId
      opportunityProvider {
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
      createdAt
    }
  }
`;
export const deleteOpportunityProviderFollower = /* GraphQL */ `
  mutation DeleteOpportunityProviderFollower(
    $input: DeleteOpportunityProviderFollowerInput!
    $condition: ModelOpportunityProviderFollowerConditionInput
  ) {
    deleteOpportunityProviderFollower(input: $input, condition: $condition) {
      id
      status
      sortable
      startedAt
      updatedAt
      opportunityProviderId
      seekerId
      opportunityProvider {
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
      createdAt
    }
  }
`;
export const createOpportunityProviderSector = /* GraphQL */ `
  mutation CreateOpportunityProviderSector(
    $input: CreateOpportunityProviderSectorInput!
    $condition: ModelOpportunityProviderSectorConditionInput
  ) {
    createOpportunityProviderSector(input: $input, condition: $condition) {
      id
      name
      status
      opportunityProviders {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOpportunityProviderSector = /* GraphQL */ `
  mutation UpdateOpportunityProviderSector(
    $input: UpdateOpportunityProviderSectorInput!
    $condition: ModelOpportunityProviderSectorConditionInput
  ) {
    updateOpportunityProviderSector(input: $input, condition: $condition) {
      id
      name
      status
      opportunityProviders {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpportunityProviderSector = /* GraphQL */ `
  mutation DeleteOpportunityProviderSector(
    $input: DeleteOpportunityProviderSectorInput!
    $condition: ModelOpportunityProviderSectorConditionInput
  ) {
    deleteOpportunityProviderSector(input: $input, condition: $condition) {
      id
      name
      status
      opportunityProviders {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOpportunityProviderOtherSector = /* GraphQL */ `
  mutation CreateOpportunityProviderOtherSector(
    $input: CreateOpportunityProviderOtherSectorInput!
    $condition: ModelOpportunityProviderOtherSectorConditionInput
  ) {
    createOpportunityProviderOtherSector(input: $input, condition: $condition) {
      id
      opportunityProviderId
      sectorId
      opportunityProvider {
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
      sector {
        id
        name
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOpportunityProviderOtherSector = /* GraphQL */ `
  mutation UpdateOpportunityProviderOtherSector(
    $input: UpdateOpportunityProviderOtherSectorInput!
    $condition: ModelOpportunityProviderOtherSectorConditionInput
  ) {
    updateOpportunityProviderOtherSector(input: $input, condition: $condition) {
      id
      opportunityProviderId
      sectorId
      opportunityProvider {
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
      sector {
        id
        name
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpportunityProviderOtherSector = /* GraphQL */ `
  mutation DeleteOpportunityProviderOtherSector(
    $input: DeleteOpportunityProviderOtherSectorInput!
    $condition: ModelOpportunityProviderOtherSectorConditionInput
  ) {
    deleteOpportunityProviderOtherSector(input: $input, condition: $condition) {
      id
      opportunityProviderId
      sectorId
      opportunityProvider {
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
      sector {
        id
        name
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOpportunityProviderOpportunityType = /* GraphQL */ `
  mutation CreateOpportunityProviderOpportunityType(
    $input: CreateOpportunityProviderOpportunityTypeInput!
    $condition: ModelOpportunityProviderOpportunityTypeConditionInput
  ) {
    createOpportunityProviderOpportunityType(
      input: $input
      condition: $condition
    ) {
      id
      opportunityProviderId
      opportunityTypeId
      opportunityProvider {
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
      opportunityType {
        id
        name
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOpportunityProviderOpportunityType = /* GraphQL */ `
  mutation UpdateOpportunityProviderOpportunityType(
    $input: UpdateOpportunityProviderOpportunityTypeInput!
    $condition: ModelOpportunityProviderOpportunityTypeConditionInput
  ) {
    updateOpportunityProviderOpportunityType(
      input: $input
      condition: $condition
    ) {
      id
      opportunityProviderId
      opportunityTypeId
      opportunityProvider {
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
      opportunityType {
        id
        name
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpportunityProviderOpportunityType = /* GraphQL */ `
  mutation DeleteOpportunityProviderOpportunityType(
    $input: DeleteOpportunityProviderOpportunityTypeInput!
    $condition: ModelOpportunityProviderOpportunityTypeConditionInput
  ) {
    deleteOpportunityProviderOpportunityType(
      input: $input
      condition: $condition
    ) {
      id
      opportunityProviderId
      opportunityTypeId
      opportunityProvider {
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
      opportunityType {
        id
        name
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOpportunityProviderUser = /* GraphQL */ `
  mutation CreateOpportunityProviderUser(
    $input: CreateOpportunityProviderUserInput!
    $condition: ModelOpportunityProviderUserConditionInput
  ) {
    createOpportunityProviderUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      status
      opportunityProvider {
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
      opportunityProviderUserOpportunityProviderId
      createdAt
      updatedAt
    }
  }
`;
export const updateOpportunityProviderUser = /* GraphQL */ `
  mutation UpdateOpportunityProviderUser(
    $input: UpdateOpportunityProviderUserInput!
    $condition: ModelOpportunityProviderUserConditionInput
  ) {
    updateOpportunityProviderUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      status
      opportunityProvider {
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
      opportunityProviderUserOpportunityProviderId
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpportunityProviderUser = /* GraphQL */ `
  mutation DeleteOpportunityProviderUser(
    $input: DeleteOpportunityProviderUserInput!
    $condition: ModelOpportunityProviderUserConditionInput
  ) {
    deleteOpportunityProviderUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      status
      opportunityProvider {
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
      opportunityProviderUserOpportunityProviderId
      createdAt
      updatedAt
    }
  }
`;
export const createOpportunity = /* GraphQL */ `
  mutation CreateOpportunity(
    $input: CreateOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    createOpportunity(input: $input, condition: $condition) {
      id
      title
      location
      date
      createdAt
      sortable
      description
      caption
      __typename
      capacity
      opportunityOpportunityTypeId
      opportunityOrganiserId
      status
      cover {
        bucket
        region
        key
      }
      applicationRequired
      applicationDeadline
      isLimitedCapacity
      opportunityType {
        id
        name
        status
        createdAt
        updatedAt
      }
      opportunityCreatedSteps {
        nextToken
      }
      organiser {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityProvider {
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
      opportunityOpportunityProviderId
      attendees {
        nextToken
      }
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateOpportunity = /* GraphQL */ `
  mutation UpdateOpportunity(
    $input: UpdateOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    updateOpportunity(input: $input, condition: $condition) {
      id
      title
      location
      date
      createdAt
      sortable
      description
      caption
      __typename
      capacity
      opportunityOpportunityTypeId
      opportunityOrganiserId
      status
      cover {
        bucket
        region
        key
      }
      applicationRequired
      applicationDeadline
      isLimitedCapacity
      opportunityType {
        id
        name
        status
        createdAt
        updatedAt
      }
      opportunityCreatedSteps {
        nextToken
      }
      organiser {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityProvider {
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
      opportunityOpportunityProviderId
      attendees {
        nextToken
      }
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteOpportunity = /* GraphQL */ `
  mutation DeleteOpportunity(
    $input: DeleteOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    deleteOpportunity(input: $input, condition: $condition) {
      id
      title
      location
      date
      createdAt
      sortable
      description
      caption
      __typename
      capacity
      opportunityOpportunityTypeId
      opportunityOrganiserId
      status
      cover {
        bucket
        region
        key
      }
      applicationRequired
      applicationDeadline
      isLimitedCapacity
      opportunityType {
        id
        name
        status
        createdAt
        updatedAt
      }
      opportunityCreatedSteps {
        nextToken
      }
      organiser {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityProvider {
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
      opportunityOpportunityProviderId
      attendees {
        nextToken
      }
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const createOpportunityType = /* GraphQL */ `
  mutation CreateOpportunityType(
    $input: CreateOpportunityTypeInput!
    $condition: ModelOpportunityTypeConditionInput
  ) {
    createOpportunityType(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateOpportunityType = /* GraphQL */ `
  mutation UpdateOpportunityType(
    $input: UpdateOpportunityTypeInput!
    $condition: ModelOpportunityTypeConditionInput
  ) {
    updateOpportunityType(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpportunityType = /* GraphQL */ `
  mutation DeleteOpportunityType(
    $input: DeleteOpportunityTypeInput!
    $condition: ModelOpportunityTypeConditionInput
  ) {
    deleteOpportunityType(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const createOpportunityAttendee = /* GraphQL */ `
  mutation CreateOpportunityAttendee(
    $input: CreateOpportunityAttendeeInput!
    $condition: ModelOpportunityAttendeeConditionInput
  ) {
    createOpportunityAttendee(input: $input, condition: $condition) {
      id
      status
      createdAt
      sortable
      seekerComment
      opportunityId
      seekerId
      opportunityAttendeeOpportunityProviderId
      opportunity {
        id
        title
        location
        date
        createdAt
        sortable
        description
        caption
        __typename
        capacity
        opportunityOpportunityTypeId
        opportunityOrganiserId
        status
        applicationRequired
        applicationDeadline
        isLimitedCapacity
        opportunityOpportunityProviderId
        updatedAt
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
      opportunityProvider {
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
      updatedAt
    }
  }
`;
export const updateOpportunityAttendee = /* GraphQL */ `
  mutation UpdateOpportunityAttendee(
    $input: UpdateOpportunityAttendeeInput!
    $condition: ModelOpportunityAttendeeConditionInput
  ) {
    updateOpportunityAttendee(input: $input, condition: $condition) {
      id
      status
      createdAt
      sortable
      seekerComment
      opportunityId
      seekerId
      opportunityAttendeeOpportunityProviderId
      opportunity {
        id
        title
        location
        date
        createdAt
        sortable
        description
        caption
        __typename
        capacity
        opportunityOpportunityTypeId
        opportunityOrganiserId
        status
        applicationRequired
        applicationDeadline
        isLimitedCapacity
        opportunityOpportunityProviderId
        updatedAt
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
      opportunityProvider {
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
      updatedAt
    }
  }
`;
export const deleteOpportunityAttendee = /* GraphQL */ `
  mutation DeleteOpportunityAttendee(
    $input: DeleteOpportunityAttendeeInput!
    $condition: ModelOpportunityAttendeeConditionInput
  ) {
    deleteOpportunityAttendee(input: $input, condition: $condition) {
      id
      status
      createdAt
      sortable
      seekerComment
      opportunityId
      seekerId
      opportunityAttendeeOpportunityProviderId
      opportunity {
        id
        title
        location
        date
        createdAt
        sortable
        description
        caption
        __typename
        capacity
        opportunityOpportunityTypeId
        opportunityOrganiserId
        status
        applicationRequired
        applicationDeadline
        isLimitedCapacity
        opportunityOpportunityProviderId
        updatedAt
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
      opportunityProvider {
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
      updatedAt
    }
  }
`;
export const createOpportunityStep = /* GraphQL */ `
  mutation CreateOpportunityStep(
    $input: CreateOpportunityStepInput!
    $condition: ModelOpportunityStepConditionInput
  ) {
    createOpportunityStep(input: $input, condition: $condition) {
      id
      opportunity {
        id
        title
        location
        date
        createdAt
        sortable
        description
        caption
        __typename
        capacity
        opportunityOpportunityTypeId
        opportunityOrganiserId
        status
        applicationRequired
        applicationDeadline
        isLimitedCapacity
        opportunityOpportunityProviderId
        updatedAt
      }
      opportunityStepOpportunityId
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
      createdAt
      updatedAt
    }
  }
`;
export const updateOpportunityStep = /* GraphQL */ `
  mutation UpdateOpportunityStep(
    $input: UpdateOpportunityStepInput!
    $condition: ModelOpportunityStepConditionInput
  ) {
    updateOpportunityStep(input: $input, condition: $condition) {
      id
      opportunity {
        id
        title
        location
        date
        createdAt
        sortable
        description
        caption
        __typename
        capacity
        opportunityOpportunityTypeId
        opportunityOrganiserId
        status
        applicationRequired
        applicationDeadline
        isLimitedCapacity
        opportunityOpportunityProviderId
        updatedAt
      }
      opportunityStepOpportunityId
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpportunityStep = /* GraphQL */ `
  mutation DeleteOpportunityStep(
    $input: DeleteOpportunityStepInput!
    $condition: ModelOpportunityStepConditionInput
  ) {
    deleteOpportunityStep(input: $input, condition: $condition) {
      id
      opportunity {
        id
        title
        location
        date
        createdAt
        sortable
        description
        caption
        __typename
        capacity
        opportunityOpportunityTypeId
        opportunityOrganiserId
        status
        applicationRequired
        applicationDeadline
        isLimitedCapacity
        opportunityOpportunityProviderId
        updatedAt
      }
      opportunityStepOpportunityId
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
      createdAt
      updatedAt
    }
  }
`;
export const createSeeker = /* GraphQL */ `
  mutation CreateSeeker(
    $input: CreateSeekerInput!
    $condition: ModelSeekerConditionInput
  ) {
    createSeeker(input: $input, condition: $condition) {
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
      profilePic {
        bucket
        region
        key
      }
      routeMaps {
        nextToken
      }
      opportunityProviders {
        nextToken
      }
      opportunities {
        nextToken
      }
      posts {
        nextToken
      }
      interests
      admireBrands
      profileCompleted
      visibleToProviders
      visibleToSeekers
      friends {
        nextToken
      }
      friendRequests {
        nextToken
      }
      collaborations {
        nextToken
      }
      collaborationMembers {
        nextToken
      }
      conversationMembers {
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateSeeker = /* GraphQL */ `
  mutation UpdateSeeker(
    $input: UpdateSeekerInput!
    $condition: ModelSeekerConditionInput
  ) {
    updateSeeker(input: $input, condition: $condition) {
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
      profilePic {
        bucket
        region
        key
      }
      routeMaps {
        nextToken
      }
      opportunityProviders {
        nextToken
      }
      opportunities {
        nextToken
      }
      posts {
        nextToken
      }
      interests
      admireBrands
      profileCompleted
      visibleToProviders
      visibleToSeekers
      friends {
        nextToken
      }
      friendRequests {
        nextToken
      }
      collaborations {
        nextToken
      }
      collaborationMembers {
        nextToken
      }
      conversationMembers {
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteSeeker = /* GraphQL */ `
  mutation DeleteSeeker(
    $input: DeleteSeekerInput!
    $condition: ModelSeekerConditionInput
  ) {
    deleteSeeker(input: $input, condition: $condition) {
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
      profilePic {
        bucket
        region
        key
      }
      routeMaps {
        nextToken
      }
      opportunityProviders {
        nextToken
      }
      opportunities {
        nextToken
      }
      posts {
        nextToken
      }
      interests
      admireBrands
      profileCompleted
      visibleToProviders
      visibleToSeekers
      friends {
        nextToken
      }
      friendRequests {
        nextToken
      }
      collaborations {
        nextToken
      }
      collaborationMembers {
        nextToken
      }
      conversationMembers {
        nextToken
      }
      updatedAt
    }
  }
`;
export const createRouteMap = /* GraphQL */ `
  mutation CreateRouteMap(
    $input: CreateRouteMapInput!
    $condition: ModelRouteMapConditionInput
  ) {
    createRouteMap(input: $input, condition: $condition) {
      id
      visibility
      status
      sortable
      createdAt
      coverPhoto {
        bucket
        region
        key
      }
      destination
      isCompleted
      category {
        id
        name
        iconName
        bgColor
        status
        createdAt
        updatedAt
      }
      owner {
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
      focusAreas
      posts {
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateRouteMap = /* GraphQL */ `
  mutation UpdateRouteMap(
    $input: UpdateRouteMapInput!
    $condition: ModelRouteMapConditionInput
  ) {
    updateRouteMap(input: $input, condition: $condition) {
      id
      visibility
      status
      sortable
      createdAt
      coverPhoto {
        bucket
        region
        key
      }
      destination
      isCompleted
      category {
        id
        name
        iconName
        bgColor
        status
        createdAt
        updatedAt
      }
      owner {
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
      focusAreas
      posts {
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteRouteMap = /* GraphQL */ `
  mutation DeleteRouteMap(
    $input: DeleteRouteMapInput!
    $condition: ModelRouteMapConditionInput
  ) {
    deleteRouteMap(input: $input, condition: $condition) {
      id
      visibility
      status
      sortable
      createdAt
      coverPhoto {
        bucket
        region
        key
      }
      destination
      isCompleted
      category {
        id
        name
        iconName
        bgColor
        status
        createdAt
        updatedAt
      }
      owner {
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
      focusAreas
      posts {
        nextToken
      }
      updatedAt
    }
  }
`;
export const createRouteMapCategory = /* GraphQL */ `
  mutation CreateRouteMapCategory(
    $input: CreateRouteMapCategoryInput!
    $condition: ModelRouteMapCategoryConditionInput
  ) {
    createRouteMapCategory(input: $input, condition: $condition) {
      id
      name
      iconName
      bgColor
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateRouteMapCategory = /* GraphQL */ `
  mutation UpdateRouteMapCategory(
    $input: UpdateRouteMapCategoryInput!
    $condition: ModelRouteMapCategoryConditionInput
  ) {
    updateRouteMapCategory(input: $input, condition: $condition) {
      id
      name
      iconName
      bgColor
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteRouteMapCategory = /* GraphQL */ `
  mutation DeleteRouteMapCategory(
    $input: DeleteRouteMapCategoryInput!
    $condition: ModelRouteMapCategoryConditionInput
  ) {
    deleteRouteMapCategory(input: $input, condition: $condition) {
      id
      name
      iconName
      bgColor
      status
      createdAt
      updatedAt
    }
  }
`;
export const createRouteMapDestination = /* GraphQL */ `
  mutation CreateRouteMapDestination(
    $input: CreateRouteMapDestinationInput!
    $condition: ModelRouteMapDestinationConditionInput
  ) {
    createRouteMapDestination(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateRouteMapDestination = /* GraphQL */ `
  mutation UpdateRouteMapDestination(
    $input: UpdateRouteMapDestinationInput!
    $condition: ModelRouteMapDestinationConditionInput
  ) {
    updateRouteMapDestination(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteRouteMapDestination = /* GraphQL */ `
  mutation DeleteRouteMapDestination(
    $input: DeleteRouteMapDestinationInput!
    $condition: ModelRouteMapDestinationConditionInput
  ) {
    deleteRouteMapDestination(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      type
      caption
      sortable
      status
      visibility
      blog {
        blogTitle
        blogDescription
        blogBody
        visibility
      }
      __typename
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
      videoThumbnail {
        bucket
        region
        key
      }
      postSeekerId
      postRouteMapId
      milestone {
        title
        date
      }
      createdAt
      routeMap {
        id
        visibility
        status
        sortable
        createdAt
        destination
        isCompleted
        focusAreas
        updatedAt
      }
      opportunity {
        id
        title
        location
        date
        createdAt
        sortable
        description
        caption
        __typename
        capacity
        opportunityOpportunityTypeId
        opportunityOrganiserId
        status
        applicationRequired
        applicationDeadline
        isLimitedCapacity
        opportunityOpportunityProviderId
        updatedAt
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
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      type
      caption
      sortable
      status
      visibility
      blog {
        blogTitle
        blogDescription
        blogBody
        visibility
      }
      __typename
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
      videoThumbnail {
        bucket
        region
        key
      }
      postSeekerId
      postRouteMapId
      milestone {
        title
        date
      }
      createdAt
      routeMap {
        id
        visibility
        status
        sortable
        createdAt
        destination
        isCompleted
        focusAreas
        updatedAt
      }
      opportunity {
        id
        title
        location
        date
        createdAt
        sortable
        description
        caption
        __typename
        capacity
        opportunityOpportunityTypeId
        opportunityOrganiserId
        status
        applicationRequired
        applicationDeadline
        isLimitedCapacity
        opportunityOpportunityProviderId
        updatedAt
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
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      type
      caption
      sortable
      status
      visibility
      blog {
        blogTitle
        blogDescription
        blogBody
        visibility
      }
      __typename
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
      videoThumbnail {
        bucket
        region
        key
      }
      postSeekerId
      postRouteMapId
      milestone {
        title
        date
      }
      createdAt
      routeMap {
        id
        visibility
        status
        sortable
        createdAt
        destination
        isCompleted
        focusAreas
        updatedAt
      }
      opportunity {
        id
        title
        location
        date
        createdAt
        sortable
        description
        caption
        __typename
        capacity
        opportunityOpportunityTypeId
        opportunityOrganiserId
        status
        applicationRequired
        applicationDeadline
        isLimitedCapacity
        opportunityOpportunityProviderId
        updatedAt
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
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const createPostTag = /* GraphQL */ `
  mutation CreatePostTag(
    $input: CreatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    createPostTag(input: $input, condition: $condition) {
      id
      tag
      link
      posts {
        id
        type
        caption
        sortable
        status
        visibility
        __typename
        postSeekerId
        postRouteMapId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePostTag = /* GraphQL */ `
  mutation UpdatePostTag(
    $input: UpdatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    updatePostTag(input: $input, condition: $condition) {
      id
      tag
      link
      posts {
        id
        type
        caption
        sortable
        status
        visibility
        __typename
        postSeekerId
        postRouteMapId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePostTag = /* GraphQL */ `
  mutation DeletePostTag(
    $input: DeletePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    deletePostTag(input: $input, condition: $condition) {
      id
      tag
      link
      posts {
        id
        type
        caption
        sortable
        status
        visibility
        __typename
        postSeekerId
        postRouteMapId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceReactionInput!
    $condition: ModelResourceReactionConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
      id
      postId
      contentId
      collaborationId
      opportunityId
      seekerId
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceReactionInput!
    $condition: ModelResourceReactionConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
      id
      postId
      contentId
      collaborationId
      opportunityId
      seekerId
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
      createdAt
      updatedAt
    }
  }
`;
export const createOpsNotInApp = /* GraphQL */ `
  mutation CreateOpsNotInApp(
    $input: CreateOpsNotInAppInput!
    $condition: ModelOpsNotInAppConditionInput
  ) {
    createOpsNotInApp(input: $input, condition: $condition) {
      id
      name
      interested
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateOpsNotInApp = /* GraphQL */ `
  mutation UpdateOpsNotInApp(
    $input: UpdateOpsNotInAppInput!
    $condition: ModelOpsNotInAppConditionInput
  ) {
    updateOpsNotInApp(input: $input, condition: $condition) {
      id
      name
      interested
      status
      createdAt
      updatedAt
    }
  }
`;
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
      id
      createdAt
      sortable
      dateTime
      from
      details
      typeId
      type
      about
      status
      updatedAt
    }
  }
`;
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
      id
      createdAt
      sortable
      dateTime
      from
      details
      typeId
      type
      about
      status
      updatedAt
    }
  }
`;
export const createSpecialProject = /* GraphQL */ `
  mutation CreateSpecialProject(
    $input: CreateSpecialProjectInput!
    $condition: ModelSpecialProjectConditionInput
  ) {
    createSpecialProject(input: $input, condition: $condition) {
      id
      opportunityProviderId
      opportunityProviderUserId
      contactName
      createdAt
      sortable
      email
      telephoneNumber
      mobileNumber
      employeeCount
      projectSummary
      status
      primarySectorId
      primarySector {
        id
        name
        status
        createdAt
        updatedAt
      }
      createdBy {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityProvider {
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
      updatedAt
    }
  }
`;
export const updateSpecialProject = /* GraphQL */ `
  mutation UpdateSpecialProject(
    $input: UpdateSpecialProjectInput!
    $condition: ModelSpecialProjectConditionInput
  ) {
    updateSpecialProject(input: $input, condition: $condition) {
      id
      opportunityProviderId
      opportunityProviderUserId
      contactName
      createdAt
      sortable
      email
      telephoneNumber
      mobileNumber
      employeeCount
      projectSummary
      status
      primarySectorId
      primarySector {
        id
        name
        status
        createdAt
        updatedAt
      }
      createdBy {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityProvider {
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
      updatedAt
    }
  }
`;
export const deleteSpecialProject = /* GraphQL */ `
  mutation DeleteSpecialProject(
    $input: DeleteSpecialProjectInput!
    $condition: ModelSpecialProjectConditionInput
  ) {
    deleteSpecialProject(input: $input, condition: $condition) {
      id
      opportunityProviderId
      opportunityProviderUserId
      contactName
      createdAt
      sortable
      email
      telephoneNumber
      mobileNumber
      employeeCount
      projectSummary
      status
      primarySectorId
      primarySector {
        id
        name
        status
        createdAt
        updatedAt
      }
      createdBy {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityProvider {
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
      updatedAt
    }
  }
`;
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
      id
      title
      sortable
      caption
      description
      createdAt
      type
      __typename
      positiveFeedbacks {
        nextToken
      }
      blog {
        blogTitle
        blogDescription
        blogBody
        visibility
      }
      photo {
        bucket
        region
        key
      }
      video
      status
      opportunityProviderId
      opportunityProviderUserId
      createdBy {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityProvider {
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
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
      id
      title
      sortable
      caption
      description
      createdAt
      type
      __typename
      positiveFeedbacks {
        nextToken
      }
      blog {
        blogTitle
        blogDescription
        blogBody
        visibility
      }
      photo {
        bucket
        region
        key
      }
      video
      status
      opportunityProviderId
      opportunityProviderUserId
      createdBy {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityProvider {
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
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
      id
      title
      sortable
      caption
      description
      createdAt
      type
      __typename
      positiveFeedbacks {
        nextToken
      }
      blog {
        blogTitle
        blogDescription
        blogBody
        visibility
      }
      photo {
        bucket
        region
        key
      }
      video
      status
      opportunityProviderId
      opportunityProviderUserId
      createdBy {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityProvider {
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
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const createContentPositiveFeedback = /* GraphQL */ `
  mutation CreateContentPositiveFeedback(
    $input: CreateContentPositiveFeedbackInput!
    $condition: ModelContentPositiveFeedbackConditionInput
  ) {
    createContentPositiveFeedback(input: $input, condition: $condition) {
      id
      addedAt
      contentId
      seekerId
      content {
        id
        title
        sortable
        caption
        description
        createdAt
        type
        __typename
        video
        status
        opportunityProviderId
        opportunityProviderUserId
        updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const updateContentPositiveFeedback = /* GraphQL */ `
  mutation UpdateContentPositiveFeedback(
    $input: UpdateContentPositiveFeedbackInput!
    $condition: ModelContentPositiveFeedbackConditionInput
  ) {
    updateContentPositiveFeedback(input: $input, condition: $condition) {
      id
      addedAt
      contentId
      seekerId
      content {
        id
        title
        sortable
        caption
        description
        createdAt
        type
        __typename
        video
        status
        opportunityProviderId
        opportunityProviderUserId
        updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteContentPositiveFeedback = /* GraphQL */ `
  mutation DeleteContentPositiveFeedback(
    $input: DeleteContentPositiveFeedbackInput!
    $condition: ModelContentPositiveFeedbackConditionInput
  ) {
    deleteContentPositiveFeedback(input: $input, condition: $condition) {
      id
      addedAt
      contentId
      seekerId
      content {
        id
        title
        sortable
        caption
        description
        createdAt
        type
        __typename
        video
        status
        opportunityProviderId
        opportunityProviderUserId
        updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const createFriendship = /* GraphQL */ `
  mutation CreateFriendship(
    $input: CreateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    createFriendship(input: $input, condition: $condition) {
      id
      status
      friendId
      seekerId
      friend {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateFriendship = /* GraphQL */ `
  mutation UpdateFriendship(
    $input: UpdateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    updateFriendship(input: $input, condition: $condition) {
      id
      status
      friendId
      seekerId
      friend {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteFriendship = /* GraphQL */ `
  mutation DeleteFriendship(
    $input: DeleteFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    deleteFriendship(input: $input, condition: $condition) {
      id
      status
      friendId
      seekerId
      friend {
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
      createdAt
      updatedAt
    }
  }
`;
export const createFriendshipRequest = /* GraphQL */ `
  mutation CreateFriendshipRequest(
    $input: CreateFriendshipRequestInput!
    $condition: ModelFriendshipRequestConditionInput
  ) {
    createFriendshipRequest(input: $input, condition: $condition) {
      id
      status
      createdAt
      sortable
      recipientId
      requesterId
      recipient {
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
      requester {
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
      updatedAt
    }
  }
`;
export const updateFriendshipRequest = /* GraphQL */ `
  mutation UpdateFriendshipRequest(
    $input: UpdateFriendshipRequestInput!
    $condition: ModelFriendshipRequestConditionInput
  ) {
    updateFriendshipRequest(input: $input, condition: $condition) {
      id
      status
      createdAt
      sortable
      recipientId
      requesterId
      recipient {
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
      requester {
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
      updatedAt
    }
  }
`;
export const deleteFriendshipRequest = /* GraphQL */ `
  mutation DeleteFriendshipRequest(
    $input: DeleteFriendshipRequestInput!
    $condition: ModelFriendshipRequestConditionInput
  ) {
    deleteFriendshipRequest(input: $input, condition: $condition) {
      id
      status
      createdAt
      sortable
      recipientId
      requesterId
      recipient {
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
      requester {
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
      updatedAt
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      sortable
      createdAt
      message
      date
      type
      updatedAt
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      sortable
      createdAt
      message
      date
      type
      updatedAt
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      sortable
      createdAt
      message
      date
      type
      updatedAt
    }
  }
`;
export const createCollaboration = /* GraphQL */ `
  mutation CreateCollaboration(
    $input: CreateCollaborationInput!
    $condition: ModelCollaborationConditionInput
  ) {
    createCollaboration(input: $input, condition: $condition) {
      id
      title
      location
      startDate
      sortable
      endDate
      createdAt
      description
      collaborationOwnerId
      __typename
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
      members {
        nextToken
      }
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateCollaboration = /* GraphQL */ `
  mutation UpdateCollaboration(
    $input: UpdateCollaborationInput!
    $condition: ModelCollaborationConditionInput
  ) {
    updateCollaboration(input: $input, condition: $condition) {
      id
      title
      location
      startDate
      sortable
      endDate
      createdAt
      description
      collaborationOwnerId
      __typename
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
      members {
        nextToken
      }
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteCollaboration = /* GraphQL */ `
  mutation DeleteCollaboration(
    $input: DeleteCollaborationInput!
    $condition: ModelCollaborationConditionInput
  ) {
    deleteCollaboration(input: $input, condition: $condition) {
      id
      title
      location
      startDate
      sortable
      endDate
      createdAt
      description
      collaborationOwnerId
      __typename
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
      members {
        nextToken
      }
      likes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const createCollaborationMember = /* GraphQL */ `
  mutation CreateCollaborationMember(
    $input: CreateCollaborationMemberInput!
    $condition: ModelCollaborationMemberConditionInput
  ) {
    createCollaborationMember(input: $input, condition: $condition) {
      id
      status
      comment
      collaborationId
      seekerId
      collaboration {
        id
        title
        location
        startDate
        sortable
        endDate
        createdAt
        description
        collaborationOwnerId
        __typename
        caption
        capacity
        status
        inviteOnly
        updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const updateCollaborationMember = /* GraphQL */ `
  mutation UpdateCollaborationMember(
    $input: UpdateCollaborationMemberInput!
    $condition: ModelCollaborationMemberConditionInput
  ) {
    updateCollaborationMember(input: $input, condition: $condition) {
      id
      status
      comment
      collaborationId
      seekerId
      collaboration {
        id
        title
        location
        startDate
        sortable
        endDate
        createdAt
        description
        collaborationOwnerId
        __typename
        caption
        capacity
        status
        inviteOnly
        updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteCollaborationMember = /* GraphQL */ `
  mutation DeleteCollaborationMember(
    $input: DeleteCollaborationMemberInput!
    $condition: ModelCollaborationMemberConditionInput
  ) {
    deleteCollaborationMember(input: $input, condition: $condition) {
      id
      status
      comment
      collaborationId
      seekerId
      collaboration {
        id
        title
        location
        startDate
        sortable
        endDate
        createdAt
        description
        collaborationOwnerId
        __typename
        caption
        capacity
        status
        inviteOnly
        updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createConversationMember = /* GraphQL */ `
  mutation CreateConversationMember(
    $input: CreateConversationMemberInput!
    $condition: ModelConversationMemberConditionInput
  ) {
    createConversationMember(input: $input, condition: $condition) {
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
export const updateConversationMember = /* GraphQL */ `
  mutation UpdateConversationMember(
    $input: UpdateConversationMemberInput!
    $condition: ModelConversationMemberConditionInput
  ) {
    updateConversationMember(input: $input, condition: $condition) {
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
export const deleteConversationMember = /* GraphQL */ `
  mutation DeleteConversationMember(
    $input: DeleteConversationMemberInput!
    $condition: ModelConversationMemberConditionInput
  ) {
    deleteConversationMember(input: $input, condition: $condition) {
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

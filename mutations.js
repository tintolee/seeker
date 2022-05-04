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
export const createOpportunityProvider = /* GraphQL */ `
  mutation CreateOpportunityProvider(
    $input: CreateOpportunityProviderInput!
    $condition: ModelOpportunityProviderConditionInput
  ) {
    createOpportunityProvider(input: $input, condition: $condition) {
      id
      name
      displayName
      companyNo
      parent
      email
      educationalInstitution
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
      createdAt
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
      displayName
      companyNo
      parent
      email
      educationalInstitution
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
      createdAt
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
      displayName
      companyNo
      parent
      email
      educationalInstitution
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
      createdAt
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
      startedAt
      opportunityProviderId
      seekerId
      opportunityProvider {
        id
        name
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      startedAt
      opportunityProviderId
      seekerId
      opportunityProvider {
        id
        name
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      startedAt
      opportunityProviderId
      seekerId
      opportunityProvider {
        id
        name
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
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
      description
      capacity
      status
      cover {
        bucket
        region
        key
      }
      applicationRequired
      applicationDeadline
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      opportunityOpportunityProviderId
      attendees {
        nextToken
      }
      createdAt
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
      description
      capacity
      status
      cover {
        bucket
        region
        key
      }
      applicationRequired
      applicationDeadline
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      opportunityOpportunityProviderId
      attendees {
        nextToken
      }
      createdAt
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
      description
      capacity
      status
      cover {
        bucket
        region
        key
      }
      applicationRequired
      applicationDeadline
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      opportunityOpportunityProviderId
      attendees {
        nextToken
      }
      createdAt
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
      seekerComment
      opportunityId
      seekerId
      opportunity {
        id
        title
        location
        date
        description
        capacity
        status
        applicationRequired
        applicationDeadline
        opportunityOpportunityProviderId
        createdAt
        updatedAt
      }
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      opportunityProvider {
        id
        name
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      createdAt
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
      seekerComment
      opportunityId
      seekerId
      opportunity {
        id
        title
        location
        date
        description
        capacity
        status
        applicationRequired
        applicationDeadline
        opportunityOpportunityProviderId
        createdAt
        updatedAt
      }
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      opportunityProvider {
        id
        name
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      createdAt
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
      seekerComment
      opportunityId
      seekerId
      opportunity {
        id
        title
        location
        date
        description
        capacity
        status
        applicationRequired
        applicationDeadline
        opportunityOpportunityProviderId
        createdAt
        updatedAt
      }
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      opportunityProvider {
        id
        name
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      createdAt
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
        description
        capacity
        status
        applicationRequired
        applicationDeadline
        opportunityOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityStepOpportunityId
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
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
        description
        capacity
        status
        applicationRequired
        applicationDeadline
        opportunityOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityStepOpportunityId
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
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
        description
        capacity
        status
        applicationRequired
        applicationDeadline
        opportunityOpportunityProviderId
        createdAt
        updatedAt
      }
      opportunityStepOpportunityId
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
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
      createdAt
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
      createdAt
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
      createdAt
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
      coverPhoto {
        bucket
        region
        key
      }
      destination
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
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      focusAreas {
        nextToken
      }
      posts {
        nextToken
      }
      createdAt
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
      coverPhoto {
        bucket
        region
        key
      }
      destination
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
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      focusAreas {
        nextToken
      }
      posts {
        nextToken
      }
      createdAt
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
      coverPhoto {
        bucket
        region
        key
      }
      destination
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
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      focusAreas {
        nextToken
      }
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFocusArea = /* GraphQL */ `
  mutation CreateFocusArea(
    $input: CreateFocusAreaInput!
    $condition: ModelFocusAreaConditionInput
  ) {
    createFocusArea(input: $input, condition: $condition) {
      id
      name
      status
      routeMaps {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFocusArea = /* GraphQL */ `
  mutation UpdateFocusArea(
    $input: UpdateFocusAreaInput!
    $condition: ModelFocusAreaConditionInput
  ) {
    updateFocusArea(input: $input, condition: $condition) {
      id
      name
      status
      routeMaps {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFocusArea = /* GraphQL */ `
  mutation DeleteFocusArea(
    $input: DeleteFocusAreaInput!
    $condition: ModelFocusAreaConditionInput
  ) {
    deleteFocusArea(input: $input, condition: $condition) {
      id
      name
      status
      routeMaps {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRouteMapFocusArea = /* GraphQL */ `
  mutation CreateRouteMapFocusArea(
    $input: CreateRouteMapFocusAreaInput!
    $condition: ModelRouteMapFocusAreaConditionInput
  ) {
    createRouteMapFocusArea(input: $input, condition: $condition) {
      id
      routeMapId
      focusAreaId
      routeMap {
        id
        visibility
        status
        destination
        createdAt
        updatedAt
      }
      focusArea {
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
export const updateRouteMapFocusArea = /* GraphQL */ `
  mutation UpdateRouteMapFocusArea(
    $input: UpdateRouteMapFocusAreaInput!
    $condition: ModelRouteMapFocusAreaConditionInput
  ) {
    updateRouteMapFocusArea(input: $input, condition: $condition) {
      id
      routeMapId
      focusAreaId
      routeMap {
        id
        visibility
        status
        destination
        createdAt
        updatedAt
      }
      focusArea {
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
export const deleteRouteMapFocusArea = /* GraphQL */ `
  mutation DeleteRouteMapFocusArea(
    $input: DeleteRouteMapFocusAreaInput!
    $condition: ModelRouteMapFocusAreaConditionInput
  ) {
    deleteRouteMapFocusArea(input: $input, condition: $condition) {
      id
      routeMapId
      focusAreaId
      routeMap {
        id
        visibility
        status
        destination
        createdAt
        updatedAt
      }
      focusArea {
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
      routeMap {
        id
        visibility
        status
        destination
        createdAt
        updatedAt
      }
      opportunity {
        id
        title
        location
        date
        description
        capacity
        status
        applicationRequired
        applicationDeadline
        opportunityOpportunityProviderId
        createdAt
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
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      createdAt
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
      routeMap {
        id
        visibility
        status
        destination
        createdAt
        updatedAt
      }
      opportunity {
        id
        title
        location
        date
        description
        capacity
        status
        applicationRequired
        applicationDeadline
        opportunityOpportunityProviderId
        createdAt
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
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      createdAt
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
      routeMap {
        id
        visibility
        status
        destination
        createdAt
        updatedAt
      }
      opportunity {
        id
        title
        location
        date
        description
        capacity
        status
        applicationRequired
        applicationDeadline
        opportunityOpportunityProviderId
        createdAt
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
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      createdAt
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
        status
        visibility
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
        status
        visibility
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
        status
        visibility
        createdAt
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
      dateTime
      from
      details
      typeId
      type
      about
      status
      createdAt
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
      dateTime
      from
      details
      typeId
      type
      about
      status
      createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      createdAt
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      createdAt
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
      description
      type
      positiveFeedbacks {
        nextToken
      }
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      createdAt
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
      description
      type
      positiveFeedbacks {
        nextToken
      }
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      createdAt
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
      description
      type
      positiveFeedbacks {
        nextToken
      }
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
        displayName
        companyNo
        parent
        email
        educationalInstitution
        status
        tagline
        address
        phone
        website
        createdAt
        updatedAt
      }
      createdAt
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
        description
        type
        video
        status
        opportunityProviderId
        opportunityProviderUserId
        createdAt
        updatedAt
      }
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
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
        description
        type
        video
        status
        opportunityProviderId
        opportunityProviderUserId
        createdAt
        updatedAt
      }
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
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
        description
        type
        video
        status
        opportunityProviderId
        opportunityProviderUserId
        createdAt
        updatedAt
      }
      seeker {
        id
        username
        firstName
        lastName
        email
        status
        mobileNumber
        postcodeArea
        dateOfBirth
        biography
        interests
        admireBrands
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

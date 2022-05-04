/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const bringOpportunity = /* GraphQL */ `
  query BringOpportunity($id: ID!) {
    bringOpportunity(id: $id) {
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
      cover
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
export const searchFeed = /* GraphQL */ `
  query SearchFeed {
    searchFeed {
      feed {
        ... on Post {
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
        ... on Content {
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
      }
    }
  }
`;
export const listDiscover = /* GraphQL */ `
  query ListDiscover($nextToken: String, $limit: Int) {
    listDiscover(nextToken: $nextToken, limit: $limit) {
      data {
        ... on Post {
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
        ... on Content {
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
        ... on Opportunity {
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
        ... on Collaboration {
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
      }
      nextToken
    }
  }
`;
export const search = /* GraphQL */ `
  query Search($query: String!) {
    search(query: $query) {
      ... on Post {
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
        photo 
        video 
        videoThumbnail 
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
      ... on Content {
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
        photo 
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
      ... on Opportunity {
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
        cover 
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
      ... on Collaboration {
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
        cover 
        coverThumb 
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
  }
`;
export const listContentsDiscover = /* GraphQL */ `
  query ListContentsDiscover(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentsDiscover(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOpportunitiesDiscover = /* GraphQL */ `
  query ListOpportunitiesDiscover(
    $filter: ModelOpportunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunitiesDiscover(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listCollaborationsDiscover = /* GraphQL */ `
  query ListCollaborationsDiscover(
    $filter: ModelCollaborationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollaborationsDiscover(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listConnectionsDiscover = /* GraphQL */ `
  query ListConnectionsDiscover(
    $seekerId: ID!
    $nextToken: String
    $limit: Int
  ) {
    listConnectionsDiscover(
      seekerId: $seekerId
      nextToken: $nextToken
      limit: $limit
    ) {
      data {
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
      nextToken
    }
  }
`;
export const getOpportunityProvider = /* GraphQL */ `
  query GetOpportunityProvider($id: ID!) {
    getOpportunityProvider(id: $id) {
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
      logo 
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
export const listOpportunityProviders = /* GraphQL */ `
  query ListOpportunityProviders(
    $filter: ModelOpportunityProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunityProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getOpportunityProviderFollower = /* GraphQL */ `
  query GetOpportunityProviderFollower($id: ID!) {
    getOpportunityProviderFollower(id: $id) {
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
export const listOpportunityProviderFollowers = /* GraphQL */ `
  query ListOpportunityProviderFollowers(
    $filter: ModelOpportunityProviderFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunityProviderFollowers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        sortable
        startedAt
        updatedAt
        opportunityProviderId
        seekerId
        createdAt
      }
      nextToken
    }
  }
`;
export const getOpportunityProviderSector = /* GraphQL */ `
  query GetOpportunityProviderSector($id: ID!) {
    getOpportunityProviderSector(id: $id) {
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
export const listOpportunityProviderSectors = /* GraphQL */ `
  query ListOpportunityProviderSectors(
    $filter: ModelOpportunityProviderSectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunityProviderSectors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOpportunityProviderUser = /* GraphQL */ `
  query GetOpportunityProviderUser($id: ID!) {
    getOpportunityProviderUser(id: $id) {
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
export const listOpportunityProviderUsers = /* GraphQL */ `
  query ListOpportunityProviderUsers(
    $filter: ModelOpportunityProviderUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunityProviderUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        status
        opportunityProviderUserOpportunityProviderId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOpportunity = /* GraphQL */ `
  query GetOpportunity($id: ID!) {
    getOpportunity(id: $id) {
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
      cover 
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
export const listOpportunitys = /* GraphQL */ `
  query ListOpportunitys(
    $filter: ModelOpportunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOpportunityType = /* GraphQL */ `
  query GetOpportunityType($id: ID!) {
    getOpportunityType(id: $id) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const listOpportunityTypes = /* GraphQL */ `
  query ListOpportunityTypes(
    $filter: ModelOpportunityTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunityTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOpportunityStep = /* GraphQL */ `
  query GetOpportunityStep($id: ID!) {
    getOpportunityStep(id: $id) {
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
export const listOpportunitySteps = /* GraphQL */ `
  query ListOpportunitySteps(
    $filter: ModelOpportunityStepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunitySteps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        opportunityStepOpportunityId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSeeker = /* GraphQL */ `
  query GetSeeker($id: ID!) {
    getSeeker(id: $id) {
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
      profilePic 
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
export const listSeekers = /* GraphQL */ `
  query ListSeekers(
    $filter: ModelSeekerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeekers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRouteMap = /* GraphQL */ `
  query GetRouteMap($id: ID!) {
    getRouteMap(id: $id) {
      id
      visibility
      status
      sortable
      createdAt
      coverPhoto 
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
export const listRouteMaps = /* GraphQL */ `
  query ListRouteMaps(
    $filter: ModelRouteMapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRouteMaps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRouteMapCategory = /* GraphQL */ `
  query GetRouteMapCategory($id: ID!) {
    getRouteMapCategory(id: $id) {
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
export const listRouteMapCategorys = /* GraphQL */ `
  query ListRouteMapCategorys(
    $filter: ModelRouteMapCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRouteMapCategorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        iconName
        bgColor
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRouteMapDestination = /* GraphQL */ `
  query GetRouteMapDestination($id: ID!) {
    getRouteMapDestination(id: $id) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const listRouteMapDestinations = /* GraphQL */ `
  query ListRouteMapDestinations(
    $filter: ModelRouteMapDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRouteMapDestinations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
      photo 
      video 
      videoThumbnail 
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPostTag = /* GraphQL */ `
  query GetPostTag($id: ID!) {
    getPostTag(id: $id) {
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
export const listPostTags = /* GraphQL */ `
  query ListPostTags(
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tag
        link
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOpsNotInApp = /* GraphQL */ `
  query GetOpsNotInApp($id: ID!) {
    getOpsNotInApp(id: $id) {
      id
      name
      interested
      status
      createdAt
      updatedAt
    }
  }
`;
export const listOpsNotInApps = /* GraphQL */ `
  query ListOpsNotInApps(
    $filter: ModelOpsNotInAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpsNotInApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        interested
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
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
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSpecialProject = /* GraphQL */ `
  query GetSpecialProject($id: ID!) {
    getSpecialProject(id: $id) {
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
export const listSpecialProjects = /* GraphQL */ `
  query ListSpecialProjects(
    $filter: ModelSpecialProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecialProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
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
      photo 
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
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFriendshipRequest = /* GraphQL */ `
  query GetFriendshipRequest($id: ID!) {
    getFriendshipRequest(id: $id) {
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
export const listFriendshipRequests = /* GraphQL */ `
  query ListFriendshipRequests(
    $filter: ModelFriendshipRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendshipRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        createdAt
        sortable
        recipientId
        requesterId
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sortable
        createdAt
        message
        date
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCollaboration = /* GraphQL */ `
  query GetCollaboration($id: ID!) {
    getCollaboration(id: $id) {
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
      cover 
      coverThumb 
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
export const listCollaborations = /* GraphQL */ `
  query ListCollaborations(
    $filter: ModelCollaborationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollaborations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        conversationId
        author
        body
        sortable
        content
        seekerId
        type
        isSeen
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
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
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        sortable
        createdAt
        updatedAt
        groupId
        avatar
      }
      nextToken
    }
  }
`;
export const listOrderedOpportunityProviders = /* GraphQL */ `
  query ListOrderedOpportunityProviders(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOpportunityProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedOpportunityProviders(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrderedProviderFollowersByUpdatedAt = /* GraphQL */ `
  query ListOrderedProviderFollowersByUpdatedAt(
    $sortable: Sortable
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOpportunityProviderFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedProviderFollowersByUpdatedAt(
      sortable: $sortable
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        sortable
        startedAt
        updatedAt
        opportunityProviderId
        seekerId
        createdAt
      }
      nextToken
    }
  }
`;
export const listOrderedOpportunities = /* GraphQL */ `
  query ListOrderedOpportunities(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOpportunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedOpportunities(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrderedOpportunityAttendees = /* GraphQL */ `
  query ListOrderedOpportunityAttendees(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOpportunityAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedOpportunityAttendees(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        createdAt
        sortable
        seekerComment
        opportunityId
        seekerId
        opportunityAttendeeOpportunityProviderId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listOrderedSeekers = /* GraphQL */ `
  query ListOrderedSeekers(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSeekerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedSeekers(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrderedRouteMaps = /* GraphQL */ `
  query ListOrderedRouteMaps(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRouteMapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedRouteMaps(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrderedPosts = /* GraphQL */ `
  query ListOrderedPosts(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedPosts(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrderedPostsBySeekerByStatusByCreatedDate = /* GraphQL */ `
  query ListOrderedPostsBySeekerByStatusByCreatedDate(
    $postSeekerId: ID
    $statusCreatedAt: ModelPostBySeekerByStatusByCreatedDateCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedPostsBySeekerByStatusByCreatedDate(
      postSeekerId: $postSeekerId
      statusCreatedAt: $statusCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrderedPostsBySeekerByCreatedDate = /* GraphQL */ `
  query ListOrderedPostsBySeekerByCreatedDate(
    $postSeekerId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedPostsBySeekerByCreatedDate(
      postSeekerId: $postSeekerId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrderedReports = /* GraphQL */ `
  query ListOrderedReports(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedReports(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrderedSpecialProjects = /* GraphQL */ `
  query ListOrderedSpecialProjects(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSpecialProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedSpecialProjects(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const listOrderedContents = /* GraphQL */ `
  query ListOrderedContents(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedContents(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrderedFriendshipRequests = /* GraphQL */ `
  query ListOrderedFriendshipRequests(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFriendshipRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedFriendshipRequests(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        createdAt
        sortable
        recipientId
        requesterId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listOrderedNotifications = /* GraphQL */ `
  query ListOrderedNotifications(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedNotifications(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sortable
        createdAt
        message
        date
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const listOrderedCollaborations = /* GraphQL */ `
  query ListOrderedCollaborations(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCollaborationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedCollaborations(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByConversationId = /* GraphQL */ `
  query MessagesByConversationId(
    $conversationId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByConversationId(
      conversationId: $conversationId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        firstName
        lastName
      }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listOrderedMessages = /* GraphQL */ `
  query ListOrderedMessages(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedMessages(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        conversationId
        author
        body
        sortable
        content
        seekerId
        type
        isSeen
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listOrderedConversations = /* GraphQL */ `
  query ListOrderedConversations(
    $sortable: Sortable
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderedConversations(
      sortable: $sortable
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        sortable
        createdAt
        updatedAt
        groupId
        avatar
      }
      nextToken
    }
  }
`;

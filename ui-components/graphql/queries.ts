/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      awayTeam {
        createdAt
        id
        owner
        teamId
        teamName
        teamTags
        updatedAt
        __typename
      }
      channel {
        channelAppImageName
        channelId
        channelName
        channelWebImageName
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      createdAt
      date
      homeTeam {
        createdAt
        id
        owner
        teamId
        teamName
        teamTags
        updatedAt
        __typename
      }
      id
      isTopGame
      matchAwayTeamId
      matchChannelId
      matchHomeTeamId
      matchId
      matchTournamentId
      owner
      time
      tournament {
        createdAt
        id
        owner
        tournamentId
        tournamentLink
        tournamentName
        tournamentTags
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      createdAt
      id
      owner
      teamId
      teamName
      teamTags
      updatedAt
      __typename
    }
  }
`;
export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
      createdAt
      id
      owner
      tournamentId
      tournamentLink
      tournamentName
      tournamentTags
      updatedAt
      __typename
    }
  }
`;
export const getTvChannel = /* GraphQL */ `
  query GetTvChannel($id: ID!) {
    getTvChannel(id: $id) {
      channelAppImageName
      channelId
      channelName
      channelWebImageName
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: ModelMatchFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMatches(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        date
        id
        isTopGame
        matchAwayTeamId
        matchChannelId
        matchHomeTeamId
        matchId
        matchTournamentId
        owner
        time
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTeams(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        owner
        teamId
        teamName
        teamTags
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTournaments(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        owner
        tournamentId
        tournamentLink
        tournamentName
        tournamentTags
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTvChannels = /* GraphQL */ `
  query ListTvChannels(
    $filter: ModelTvChannelFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTvChannels(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        channelAppImageName
        channelId
        channelName
        channelWebImageName
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

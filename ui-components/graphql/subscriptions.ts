/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch(
    $filter: ModelSubscriptionMatchFilterInput
    $owner: String
  ) {
    onCreateMatch(filter: $filter, owner: $owner) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam(
    $filter: ModelSubscriptionTeamFilterInput
    $owner: String
  ) {
    onCreateTeam(filter: $filter, owner: $owner) {
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
export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
    $owner: String
  ) {
    onCreateTournament(filter: $filter, owner: $owner) {
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
export const onCreateTvChannel = /* GraphQL */ `
  subscription OnCreateTvChannel(
    $filter: ModelSubscriptionTvChannelFilterInput
    $owner: String
  ) {
    onCreateTvChannel(filter: $filter, owner: $owner) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch(
    $filter: ModelSubscriptionMatchFilterInput
    $owner: String
  ) {
    onDeleteMatch(filter: $filter, owner: $owner) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam(
    $filter: ModelSubscriptionTeamFilterInput
    $owner: String
  ) {
    onDeleteTeam(filter: $filter, owner: $owner) {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament(
    $filter: ModelSubscriptionTournamentFilterInput
    $owner: String
  ) {
    onDeleteTournament(filter: $filter, owner: $owner) {
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
export const onDeleteTvChannel = /* GraphQL */ `
  subscription OnDeleteTvChannel(
    $filter: ModelSubscriptionTvChannelFilterInput
    $owner: String
  ) {
    onDeleteTvChannel(filter: $filter, owner: $owner) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch(
    $filter: ModelSubscriptionMatchFilterInput
    $owner: String
  ) {
    onUpdateMatch(filter: $filter, owner: $owner) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam(
    $filter: ModelSubscriptionTeamFilterInput
    $owner: String
  ) {
    onUpdateTeam(filter: $filter, owner: $owner) {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
    $owner: String
  ) {
    onUpdateTournament(filter: $filter, owner: $owner) {
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
export const onUpdateTvChannel = /* GraphQL */ `
  subscription OnUpdateTvChannel(
    $filter: ModelSubscriptionTvChannelFilterInput
    $owner: String
  ) {
    onUpdateTvChannel(filter: $filter, owner: $owner) {
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

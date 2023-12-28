/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $condition: ModelMatchConditionInput
    $input: CreateMatchInput!
  ) {
    createMatch(condition: $condition, input: $input) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $condition: ModelTeamConditionInput
    $input: CreateTeamInput!
  ) {
    createTeam(condition: $condition, input: $input) {
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
export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $condition: ModelTournamentConditionInput
    $input: CreateTournamentInput!
  ) {
    createTournament(condition: $condition, input: $input) {
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
export const createTvChannel = /* GraphQL */ `
  mutation CreateTvChannel(
    $condition: ModelTvChannelConditionInput
    $input: CreateTvChannelInput!
  ) {
    createTvChannel(condition: $condition, input: $input) {
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
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $condition: ModelMatchConditionInput
    $input: DeleteMatchInput!
  ) {
    deleteMatch(condition: $condition, input: $input) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $condition: ModelTeamConditionInput
    $input: DeleteTeamInput!
  ) {
    deleteTeam(condition: $condition, input: $input) {
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
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $condition: ModelTournamentConditionInput
    $input: DeleteTournamentInput!
  ) {
    deleteTournament(condition: $condition, input: $input) {
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
export const deleteTvChannel = /* GraphQL */ `
  mutation DeleteTvChannel(
    $condition: ModelTvChannelConditionInput
    $input: DeleteTvChannelInput!
  ) {
    deleteTvChannel(condition: $condition, input: $input) {
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
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $condition: ModelMatchConditionInput
    $input: UpdateMatchInput!
  ) {
    updateMatch(condition: $condition, input: $input) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $condition: ModelTeamConditionInput
    $input: UpdateTeamInput!
  ) {
    updateTeam(condition: $condition, input: $input) {
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
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $condition: ModelTournamentConditionInput
    $input: UpdateTournamentInput!
  ) {
    updateTournament(condition: $condition, input: $input) {
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
export const updateTvChannel = /* GraphQL */ `
  mutation UpdateTvChannel(
    $condition: ModelTvChannelConditionInput
    $input: UpdateTvChannelInput!
  ) {
    updateTvChannel(condition: $condition, input: $input) {
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

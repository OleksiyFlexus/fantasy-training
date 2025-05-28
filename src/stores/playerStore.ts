export const homePlayersByPosition = ref<Record<string, any>>({
  goalkipper: null,
  defender1: null,
  defender2: null,
  defender3: null,
  striker1: null,
  striker2: null,
});

export const awayPlayersByPosition = ref<Record<string, any>>({
  goalkipper: null,
  defender1: null,
  defender2: null,
  defender3: null,
  striker1: null,
  striker2: null,
});

export const assignedPlayers = ref<Record<string, string>>({});

export const isPlayerAssigned = (playerId: string) => {
  return assignedPlayers.value[playerId] || null;
};

export const removePlayerFromPosition = (team: string, position: string) => {
  const playersByTeam = team === "home" ? homePlayersByPosition : awayPlayersByPosition;

  if (playersByTeam.value[position]) {
    const playerId = playersByTeam.value[position].id;
    if (playerId && assignedPlayers.value[playerId]) {
      delete assignedPlayers.value[playerId];
    }
    playersByTeam.value[position] = null;
    console.log(`Player removed from ${team} team position ${position}`);
  }
};

export const addPlayerToPosition = (player: any, position: string, team: string) => {
  const playersByTeam = team === "home" ? homePlayersByPosition : awayPlayersByPosition;
  if (position && playersByTeam.value.hasOwnProperty(position)) {
    const assignedTeam = isPlayerAssigned(player.id);
    if (assignedTeam) {
      console.warn(`Player ${player.name} is already assigned to the ${assignedTeam} team`);
      return;
    }

    if (player.position && player.position !== position) {
      console.warn(`Warning: Player ${player.name} has position ${player.position} but is being assigned to ${position}`);
    }

    if (playersByTeam.value[position]) {
      removePlayerFromPosition(team, position);
    }

    playersByTeam.value[position] = player;
    assignedPlayers.value[player.id] = team;

    console.log(`Player ${player.name} added to ${team} team position ${position}`);
  } else {
    console.error(`Invalid position: ${position}`);
  }
};

export const substitutePlayer = (newPlayer: any, position: string, team: string) => {
  const playersByTeam = team === "home" ? homePlayersByPosition : awayPlayersByPosition;

  if (!position || !playersByTeam.value.hasOwnProperty(position)) {
    console.error(`Invalid position: ${position}`);
    return null;
  }

  const assignedTeam = isPlayerAssigned(newPlayer.id);
  if (assignedTeam) {
    console.warn(`Player ${newPlayer.name} is already assigned to the ${assignedTeam} team`);
    return null;
  }

  const currentPlayer = playersByTeam.value[position];
  if (!currentPlayer) {
    console.warn(`No player to substitute at position ${position}`);
    addPlayerToPosition(newPlayer, position, team);
    return null;
  }

  const substitutedPlayer = { ...currentPlayer };

  if (currentPlayer.id && assignedPlayers.value[currentPlayer.id]) {
    delete assignedPlayers.value[currentPlayer.id];
  }

  playersByTeam.value[position] = newPlayer;
  assignedPlayers.value[newPlayer.id] = team;

  console.log(`Player ${substitutedPlayer.name} substituted with ${newPlayer.name} at position ${position} in ${team} team`);

  return substitutedPlayer;
};

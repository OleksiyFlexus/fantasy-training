import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { ref as dbRef, set, get, child, onValue } from 'firebase/database';

export interface PlayerScore {
  id: string;
  name: string;
  surname: string;
  team: string;
  position: string;
  goals: number;
  assists: number;
  photo?: string;
}

// Store for players who scored goals or made assists
export const playerScores = ref<PlayerScore[]>([]);
let matchId: string | null = null;

// Initialize with match ID
export const initMatchScores = (id: string) => {
  matchId = id;
  loadScores();
};

// Get the database reference for the current match
const getScoresRef = () => {
  if (!matchId) {
    console.error('Match ID not set. Call initMatchScores first.');
    return null;
  }
  return dbRef(db, `matches/${matchId}/scores`);
};

// Save scores to Firebase
const saveScores = async () => {
  const scoresRef = getScoresRef();
  if (!scoresRef) return;
  
  try {
    await set(scoresRef, playerScores.value);
    console.log('Scores saved to Firebase');
  } catch (error) {
    console.error('Error saving scores:', error);
  }
};

// Load scores from Firebase
const loadScores = () => {
  const scoresRef = getScoresRef();
  if (!scoresRef) return;

  onValue(scoresRef, (snapshot) => {
    const data = snapshot.val() || [];
    playerScores.value = Array.isArray(data) ? data : [];
    console.log('Scores loaded from Firebase');
  });
};

// Add a goal for a player
export const addPlayerGoal = async (player: any, position: string, team: string) => {
  if (!player) return;
  
  const existingPlayerIndex = playerScores.value.findIndex(p => p.id === player.id);
  
  if (existingPlayerIndex >= 0) {
    // Player already exists in the score list, increment goals
    playerScores.value[existingPlayerIndex].goals += 1;
    console.log(`Added goal for ${player.name}, total goals: ${playerScores.value[existingPlayerIndex].goals}`);
  } else {
    // Add new player to the score list
    playerScores.value.push({
      id: player.id,
      name: player.name,
      surname: player.surname || '',
      team,
      position,
      goals: 1,
      assists: 0,
      photo: player.photo
    });
    console.log(`Added first goal for ${player.name}`);
  }
  
  await saveScores();
};

// Add an assist for a player
export const addPlayerAssist = async (player: any, position: string, team: string) => {
  if (!player) return;
  
  const existingPlayerIndex = playerScores.value.findIndex(p => p.id === player.id);
  
  if (existingPlayerIndex >= 0) {
    // Player already exists in the score list, increment assists
    playerScores.value[existingPlayerIndex].assists += 1;
    console.log(`Added assist for ${player.name}, total assists: ${playerScores.value[existingPlayerIndex].assists}`);
  } else {
    // Add new player to the score list
    playerScores.value.push({
      id: player.id,
      name: player.name,
      surname: player.surname || '',
      team,
      position,
      goals: 0,
      assists: 1,
      photo: player.photo
    });
    console.log(`Added first assist for ${player.name}`);
  }
  
  await saveScores();
};

// Get player by position and team
export const getPlayerByPositionAndTeam = (position: string, team: string) => {
  return playerScores.value.find(p => p.position === position && p.team === team);
};

// Clear all scores
export const clearAllScores = async () => {
  playerScores.value = [];
  await saveScores();
};

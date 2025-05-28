import { ref as dbRef, get, query, orderByChild, limitToLast, DataSnapshot } from 'firebase/database';
import { db } from "@/firebase";

export interface Match {
  id?: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  timestamp?: number;
  status?: 'upcoming' | 'live' | 'completed';
}

// Fetch all matches
export const getMatches = async (): Promise<Match[]> => {
  try {
    const matchesRef = dbRef(db, 'matches');
    const snapshot = await get(matchesRef);
    
    if (snapshot.exists()) {
      const matches: Match[] = [];
      snapshot.forEach((childSnapshot: DataSnapshot) => {
        matches.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      return matches;
    }
    return [];
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};

// Fetch recent matches (e.g., last 5)
export const getRecentMatches = async (limit: number = 5): Promise<Match[]> => {
  try {
    const matchesRef = dbRef(db, 'matches');
    const q = query(matchesRef, orderByChild('timestamp'), limitToLast(limit));
    const snapshot = await get(q);
    
    if (snapshot.exists()) {
      const matches: Match[] = [];
      snapshot.forEach((childSnapshot: DataSnapshot) => {
        matches.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      return matches.reverse(); // Return most recent first
    }
    return [];
  } catch (error) {
    console.error('Error fetching recent matches:', error);
    throw error;
  }
};

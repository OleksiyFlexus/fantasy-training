import { ref as dbRef, push, set, onValue, update, get } from "firebase/database";
import { db } from "@/firebase";

export type Team = {
  id?: string;
  name: string;
  logo?: string;
  players?: string[];
  games?: number;
  wins?: number;
  goals?: number;
};

export const saveTeamInDB = (team: Team) => {
  const teamsRef = dbRef(db, "teams");
  const newTeamRef = push(teamsRef);
  return set(newTeamRef, team);
};

export const updateTeamInDB = (teamId: string, teamData: Partial<Team>) => {
  const teamRef = dbRef(db, `teams/${teamId}`);
  return update(teamRef, teamData);
};

const teamsRef = ref<Team[]>([]);

export const fetchTeams = () => {
  const dbTeamsRef = dbRef(db, "teams");

  onValue(dbTeamsRef, (snapshot) => {
    const data = snapshot.val();
    teamsRef.value = data
      ? Object.entries(data).map(([id, team]: any) => ({
          id,
          ...team,
        }))
      : [];
    console.log("Teams data loaded from Firebase:", teamsRef.value);
  });

  return teamsRef;
};

export const getTeamById = async (teamId: string) => {
  const teamRef = dbRef(db, `teams/${teamId}`);
  const snapshot = await get(teamRef);
  if (snapshot.exists()) {
    return { id: teamId, ...snapshot.val() } as Team;
  }
  return null;
};

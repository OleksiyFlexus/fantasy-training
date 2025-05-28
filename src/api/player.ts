import { ref as dbRef, push, set, onValue } from "firebase/database";
import { db } from "@/firebase";

export type Player = {
  id?: string;
  name: string;
  surname: string;
  team?: string;
  photo?: string;
  games?: number;
  goals?: number;
  assists?: number;
};

export const savePlayerInDB = (player: Player) => {
  const playersRef = dbRef(db, "players");
  const newPlayerRef = push(playersRef);
  return set(newPlayerRef, player);
};

export const fetchPlayers = () => {
  const players = ref<Player[]>([]);
  const playersRef = dbRef(db, "players");

  onValue(playersRef, (snapshot) => {
    const data = snapshot.val();
    players.value = data
      ? Object.entries(data).map(([id, player]: any) => ({
          id,
          ...player,
        }))
      : [];
  });

  return players;
};
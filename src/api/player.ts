import { ref } from "vue";
import { db, storage } from "@/firebase";
import { ref as dbRef, push, set, onValue } from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export const firstName = ref("");
export const lastName = ref("");
export const playerPhotoUrl = ref<string | null>(null);
const fileRef = ref<File | null>(null);

export const handlePhotoUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    playerPhotoUrl.value = URL.createObjectURL(file);
    fileRef.value = file;
  }
};

export const savePlayer = async (
  playerData: {
    name: string;
    surname: string;
    file?: File | null;
    team?: string | null;
    goals?: number;
    assists?: number;
    id?: string;
  },
  onSuccess: () => void
) => {
  try {
    let photoUrl = "";

    if (playerData.file) {
      console.log("Uploading photo...");
      const storageReference = storageRef(
        storage,
        `playerPhotos/${Date.now()}_${playerData.file.name}`
      );
      const snapshot = await uploadBytes(storageReference, playerData.file);
      photoUrl = await getDownloadURL(snapshot.ref);
    } else {
    }

    const newPlayerRef = push(dbRef(db, "players"));
    await set(newPlayerRef, {
      name: playerData.name,
      surname: playerData.surname,
      photo: photoUrl || "",
      team: playerData.team || null,
      goals: playerData.goals || 0,
      assists: playerData.assists || 0,
      id: playerData.id || newPlayerRef.key,
    });

    onSuccess(); // вызываем onSuccess после сохранения данных
  } catch (error) {
    alert("Failed to save player.");
  }
};

export const fetchPlayers = (callback: (players: any[]) => void) => {
  const playersRef = dbRef(db, "players");
  onValue(playersRef, (snapshot) => {
    const data = snapshot.val();
    const result = data
      ? Object.entries(data).map(([id, player]: any) => ({
          id,
          ...player,
        }))
      : [];
    callback(result);
  });
};

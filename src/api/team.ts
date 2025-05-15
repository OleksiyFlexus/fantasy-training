import { ref } from "vue";
import { db, storage } from "@/firebase";
import { ref as dbRef, push, set, onValue } from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export const teamName = ref("");
export const teamLogoUrl = ref<string | null>(null);
const fileRef = ref<File | null>(null);

export const handleLogoUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    teamLogoUrl.value = URL.createObjectURL(file);
    fileRef.value = file;
  }
};

export const saveTeam = async (
  { name, file }: { name: string; file: File | null },
  onSuccess: () => void
) => {
  try {
    if (!name.trim()) {
      throw new Error("Team name is required!");
    }

    let logoUrl = "";

    if (file) {
      const storageReference = storageRef(
        storage,
        `teamLogos/${Date.now()}_${file.name}`
      );
      const snapshot = await uploadBytes(storageReference, file);
      logoUrl = await getDownloadURL(snapshot.ref);
    }

    const newTeamRef = push(dbRef(db, "teams"));
    await set(newTeamRef, {
      name,
      logo: logoUrl || "",
    });

    onSuccess();
  } catch (error: any) {
    console.error("Error saving team:", error);
    alert(error.message || "Failed to save team.");
  }
};

export const fetchTeams = async (): Promise<Team[]> => {
  const teamsRef = dbRef(db, "teams");
  const snapshot = await get(teamsRef);
  const data = snapshot.val();
  const result: Team[] = data
    ? Object.entries(data).map(([id, team]: [string, any]) => ({
        id,
        ...team,
      }))
    : [];
  return result;
};

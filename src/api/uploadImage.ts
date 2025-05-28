import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImage = async (file: File, folderPath: string = 'players'): Promise<string> => {
  const storage = getStorage();
  const imageRef = ref(storage, `${folderPath}/${Date.now()}_${file.name}`);

  const snapshot = await uploadBytes(imageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);

  return downloadURL;
};
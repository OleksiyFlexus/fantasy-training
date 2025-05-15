const firstName = ref('')
const lastName = ref('')
const photoUrl = ref<string | null>(null)
const photoFile = ref<File | null>(null)

export function usePlayerForm() {
  return {
    firstName,
    lastName,
    photoUrl,
    photoFile
  }
}
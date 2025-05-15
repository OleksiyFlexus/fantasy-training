import { ref, computed, onMounted, onUnmounted, watch } from "vue";

export function useTimer(emit: (event: "update:time", value: string) => void) {
  const isRunning = ref(false);
  const timerInterval = ref<any>(null);
  const timeInSeconds = ref(420);
  const inputMinutes = ref<number | null>(null);
  const inputSeconds = ref<number | null>(null);

  const formattedTime = computed(() => {
    const minutes = String(Math.floor(timeInSeconds.value / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(timeInSeconds.value % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  });

  const startTimer = () => {
    if (isRunning.value) return;
    isRunning.value = true;
    timerInterval.value = setInterval(() => {
      if (timeInSeconds.value > 0) {
        timeInSeconds.value--;
        saveTimer();
      } else {
        clearInterval(timerInterval.value);
        isRunning.value = false;
      }
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(timerInterval.value);
    isRunning.value = false;
    saveTimer();
  };

  const resetTimer = () => {
    clearInterval(timerInterval.value);
    isRunning.value = false;
    timeInSeconds.value = 420;
    sessionStorage.removeItem("timer");
    saveTimer();
  };

  const setTimer = () => {
    const total = (inputMinutes.value ?? 0) * 60 + (inputSeconds.value ?? 0);
    timeInSeconds.value = total;
    saveTimer();
    closeModalTimer();
  };

  const saveTimer = () => {
    sessionStorage.setItem("timer", timeInSeconds.value.toString());
    sessionStorage.setItem("isTimerRunning", isRunning.value.toString());
  };

  const loadTimer = () => {
    const saved = parseInt(sessionStorage.getItem("timer") || "");
    const running = sessionStorage.getItem("isTimerRunning") === "true";
    if (!isNaN(saved)) timeInSeconds.value = saved;
    if (running) startTimer();
  };

  const closeModalTimer = () => {
    emit("closeModalTimer");
  };

  onMounted(loadTimer);
  onUnmounted(() => clearInterval(timerInterval.value));

  watch(formattedTime, (newVal) => {
    emit("update:time", newVal);
  });

  return {
    isRunning,
    timeInSeconds,
    inputMinutes,
    inputSeconds,
    formattedTime,
    startTimer,
    pauseTimer,
    resetTimer,
    setTimer,
  };
}

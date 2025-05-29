export function useCountdownTimer(initialSeconds = 7 * 60) {
  const timer = ref(initialSeconds);
  let intervalId: number | null = null;

  const startTimer = () => {
    if (intervalId === null && timer.value > 0) {
      intervalId = window.setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          stopTimer();
        }
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const stopTimer = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
    timer.value = initialSeconds;
  };

  return { timer, startTimer, pauseTimer, stopTimer };
}

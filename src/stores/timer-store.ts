import { create } from 'zustand';

import { TimerPhase, TimerStatus, TimerData } from '@/types';
import { DEFAULT_FOCUS_TIME } from '@/lib/timeConfig';
import useSessionStore from '@/stores/session-store';

interface TimerState {
  minutes: number;
  seconds: number;
  timer: NodeJS.Timeout | null;
  elapsedTime: number;
  initialMinutes: number;
  initialSeconds: number;
  status: TimerStatus;
  phase: TimerPhase;
  updateTimeData: (data: TimerData) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

const clearExistingTimer = (timer: NodeJS.Timeout | null) => {
  if (timer) clearInterval(timer);
};

const useTimerStore = create<TimerState>()((set, get) => ({
  minutes: DEFAULT_FOCUS_TIME.minutes,
  seconds: DEFAULT_FOCUS_TIME.seconds,
  initialMinutes: DEFAULT_FOCUS_TIME.minutes,
  initialSeconds: DEFAULT_FOCUS_TIME.seconds,
  phase: 'focus',
  timer: null,
  elapsedTime: 0,
  status: 'inactive',
  updateTimeData: (data: TimerData) => {
    set(() => ({
      minutes: data.minutes,
      seconds: data.seconds,
      initialSeconds: data.initialSeconds,
      initialMinutes: data.initialMinutes,
      phase: data.phase,
      status: data.status,
    }));
  },
  startTimer: () => {
    const { status, timer, minutes, seconds } = get();
    if (status === 'active') return;

    set({ status: 'active' });
    clearExistingTimer(timer);

    const timeStart = Date.now(); // Get time user starts timer
    const totalSeconds = minutes * 60 + seconds; // Convert input time to seconds

    const newTimer = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - timeStart) / 1000); // Elapsed time in seconds (counts up)
      const remainingTime = totalSeconds - elapsedTime; // Remaining time left until completion

      if (remainingTime <= 0) {
        clearInterval(newTimer);
        useSessionStore.getState().markSessionCompleted();
        set({ minutes: 0, seconds: 0, status: 'complete', timer: null });
      } else {
        const remainingMinutes = Math.floor(remainingTime / 60); // Convert to minutes
        const remainingSeconds = remainingTime % 60; // Convert to seconds

        set({
          elapsedTime,
          minutes: remainingMinutes,
          seconds: remainingSeconds,
        });
      }
    }, 1000); // Update every second

    set(() => ({ timer: newTimer }));
  },
  pauseTimer: () => {
    const currentTimer = get().timer;
    clearExistingTimer(currentTimer);
    set({ status: 'paused' });
  },
  resetTimer: () => {
    const currentTimer = get().timer;
    clearExistingTimer(currentTimer);
    set((state) => ({
      seconds: state.initialSeconds | 0,
      minutes: state.initialMinutes | 0,
      elapsedTime: 0,
      status: 'inactive',
      timer: null,
    }));
  },
}));

export default useTimerStore;

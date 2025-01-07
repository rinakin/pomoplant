import { create } from 'zustand';

import { TimerPhase, TimerStatus, TimerData } from '@/types';
import { DEFAULT_FOCUS_TIME } from '@/lib/timeConfig';
import useSessionStore from '@/stores/session-store';

interface TimerState {
  minutes: number;
  seconds: number;
  timer: NodeJS.Timeout | null;
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
    const { status, timer } = get();
    if (status === 'active') return;
    set({ status: 'active' });
    clearExistingTimer(timer);
    const newTimer = setInterval(() => {
      set((state) => {
        const minutes = state.minutes;
        const seconds = state.seconds;
        if (seconds > 0) return { minutes, seconds: seconds - 1 };
        if (minutes > 0) return { minutes: minutes - 1, seconds: 59 };
        clearInterval(newTimer);
        useSessionStore.getState().markSessionCompleted();
        return { minutes: 0, seconds: 0, status: 'complete' };
      });
    }, 1000);
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
    console.log(`reset`);
    console.log(get().initialMinutes);
    set((state) => ({
      seconds: state.initialSeconds | 0,
      minutes: state.initialMinutes | 0,
      status: 'inactive',
      timer: null,
    }));
  },
}));

export default useTimerStore;

import { create } from 'zustand';

import { Time, TimerPhase, TimerStatus, TimerData } from '@/types';
import { DEFAULT_FOCUS_TIME } from '@/lib/timeConfig';
import useSessionStore from '@/stores/session-store';

interface TimerState {
  time: Time;
  timer: NodeJS.Timeout | null;
  initialTime: Time;
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
  time: DEFAULT_FOCUS_TIME,
  initialTime: DEFAULT_FOCUS_TIME,
  phase: 'focus',
  timer: null,
  status: 'inactive',
  updateTimeData: (data: TimerData) => {
    set(() => ({ time: data.time, initialTime: data.initialTime, phase: data.phase }));
  },
  startTimer: () => {
    const { status, timer } = get();
    if (status === 'active') return;
    set({ status: 'active' });
    clearExistingTimer(timer);
    const newTimer = setInterval(() => {
      set((state) => {
        const { minutes, seconds } = state.time;
        if (seconds > 0) return { time: { minutes, seconds: seconds - 1 } };
        if (minutes > 0) return { time: { minutes: minutes - 1, seconds: 59 } };
        clearInterval(newTimer);
        useSessionStore.getState().markSessionCompleted();
        return { time: { minutes: 0, seconds: 0 }, status: 'complete' };
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
    set((state) => ({ time: state.initialTime, status: 'inactive', timer: null }));
  },
}));

export default useTimerStore;

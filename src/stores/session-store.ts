import { create } from 'zustand';
import { Session } from '@/types';
import { DEFAULT_POMODORO_CYCLE } from '@/lib/timeConfig';

interface SessionState {
  sessions: Session[];
  activeSessionIndex: number;
  setActiveSession: () => void;
  markSessionCompleted: () => void;
}

const useSessionStore = create<SessionState>()((set, get) => ({
  sessions: DEFAULT_POMODORO_CYCLE,
  activeSessionIndex: 0,
  setActiveSession: () => {
    const { sessions, activeSessionIndex } = get();
    if (activeSessionIndex === sessions.length - 1) {
      return;
    } else {
      set(() => ({
        activeSessionIndex: activeSessionIndex + 1,
      }));
    }
  },
  markSessionCompleted: () => {
    const { activeSessionIndex, sessions } = get();
    const updatedSessions = [...sessions];
    updatedSessions[activeSessionIndex] = {
      ...updatedSessions[activeSessionIndex],
      completed: true,
    };
    set(() => ({ sessions: updatedSessions }));
  },
}));

export default useSessionStore;

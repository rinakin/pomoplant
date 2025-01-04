import { create } from 'zustand';
import { Session } from '@/types';
import { DEFAULT_POMODORO_CYCLE } from '@/lib/timeConfig';

interface SessionState {
  sessions: Session[];
  allSessionsCompleted: boolean;
  activeSessionIndex: number;
  setActiveSession: () => void;
  markSessionCompleted: () => void;
  resetSessions: () => void;
}

const useSessionStore = create<SessionState>()((set, get) => ({
  sessions: DEFAULT_POMODORO_CYCLE,
  activeSessionIndex: 0,
  allSessionsCompleted: false,
  setActiveSession: () => {
    const { sessions, activeSessionIndex } = get();
    if (activeSessionIndex === sessions.length - 1) {
      const allCompleted = sessions.every((item) => item.completed);
      if (allCompleted) set(() => ({ allSessionsCompleted: true }));
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
  resetSessions: () => {
    const { sessions } = get();
    const updatedSessions = sessions.map((item) => ({
      ...item,
      completed: false,
    }));
    set(() => ({ sessions: updatedSessions, activeSessionIndex: 0, allSessionsCompleted: false }));
  },
}));

export default useSessionStore;

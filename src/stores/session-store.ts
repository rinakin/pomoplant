import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { DEFAULT_POMODORO_CYCLE } from '@/lib/timeConfig';
import { Session } from '@/types';

interface SessionState {
  sessions: Session[];
  allSessionsCompleted: boolean;
  activeSessionIndex: number;
  setActiveSession: () => void;
  markSessionCompleted: () => void;
  updateSessions: (data: Session[]) => void;
  resetSessions: () => void;
}

const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
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
        set(() => ({
          sessions: updatedSessions,
          activeSessionIndex: 0,
          allSessionsCompleted: false,
        }));
      },
      updateSessions: (data) => {
        set(() => ({ sessions: data }));
      },
    }),
    {
      name: 'sessions',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSessionStore;

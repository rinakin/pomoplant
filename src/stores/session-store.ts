import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { DEFAULT_POMODORO_CYCLE } from '@/lib/timeConfig';
import { Session, Audio, PlantData } from '@/types/types';
import { ALARM_SOUNDS } from '@/lib/audio';
import { PLANT_ANIMATIONS } from '@/lib/plant-animations';

interface SessionState {
  sessions: Session[];
  plant: PlantData | undefined;
  alarm: Audio | undefined;
  darkMode: boolean;
  setDarkMode: () => void;
  setAlarm: (alarm: Audio | undefined) => void;
  allSessionsCompleted: boolean;
  activeSessionIndex: number;
  setActiveSession: () => void;
  markSessionCompleted: () => void;
  updateSessions: (data: Session[]) => void;
  updatePlant: (plantId: string) => void;
  resetSessions: () => void;
}

const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      sessions: DEFAULT_POMODORO_CYCLE,
      plant: PLANT_ANIMATIONS[0],
      darkMode: false,
      activeSessionIndex: 0,
      allSessionsCompleted: false,
      alarm: ALARM_SOUNDS[0],
      setAlarm: (alarm) => set({ alarm: alarm || undefined }),
      setActiveSession: () => {
        const { sessions, activeSessionIndex } = get();
        if (activeSessionIndex < sessions.length - 1) {
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
        const allCompleted = updatedSessions.every((item) => item.completed);
        set(() => ({ sessions: updatedSessions, allSessionsCompleted: allCompleted }));
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
      updatePlant: (plantId) => {
        if (plantId === 'none') {
          set({ plant: undefined });
        } else if (plantId === 'random') {
          // Randomly select a plant and set the entire plant object in the state
          const randomPlant = PLANT_ANIMATIONS[Math.floor(Math.random() * PLANT_ANIMATIONS.length)];
          set({ plant: randomPlant });
        } else {
          // Find the plant based on the plantId and set the full plant object
          const findPlant = PLANT_ANIMATIONS.find((plant) => plant.id === plantId);
          if (findPlant) {
            set({ plant: findPlant });
          }
        }
      },
      setDarkMode: () => {
        set((state) => ({ darkMode: !state.darkMode }));
      },
    }),
    {
      name: 'sessions',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSessionStore;

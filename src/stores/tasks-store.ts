import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { nanoid } from 'nanoid';

import { Task } from '@/types/types';

interface TaskState {
  tasks: Task[];
  allTasksCompleted: boolean;
  updateTask: (task: Task) => void;
  addTask: (task: { name: string; note: string }) => void;
  removeTask: (taskId: string) => void;
  clearTasks: () => void;
}

const useTasksStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      allTasksCompleted: false,
      updateTask: (task) => {
        set((state) => {
          const updatedTasks = state.tasks.map((item) => {
            if (item.id === task.id) {
              return task;
            } else return item;
          });
          return { tasks: updatedTasks };
        });
      },
      addTask: (task) => {
        const newTask = { ...task, completed: false, id: nanoid() };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },
      removeTask: (taskId) => {
        set((state) => ({
          tasks: state.tasks.filter((item) => item.id !== taskId),
        }));
      },
      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: 'tasks',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useTasksStore;

// Represents a Pomodoro session
export type Session = {
  minutes: number;
  seconds: number;
  phase: TimerPhase;
  completed: boolean;
};

export type TimerStatus = 'complete' | 'active' | 'paused' | 'inactive';
// Represents a timer's mode
export type TimerPhase = 'focus' | 'break';

// Represents timer-related data
export type TimerData = {
  minutes: number;
  seconds: number;
  phase: TimerPhase; // Consistent naming
  initialSeconds: number;
  initialMinutes: number;
  status: TimerStatus;
};

export type Task = {
  name: string;
  note?: string;
  completed: boolean;
  id: string;
};

export type Audio = {
  label: string;
  value: string;
};

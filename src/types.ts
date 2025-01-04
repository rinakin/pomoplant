// Represents a time structure
export type Time = {
  minutes: number;
  seconds: number;
};

// Represents a Pomodoro session
export type Session = {
  time: Time;
  phase: 'focus' | 'break';
  completed: boolean;
};

export type TimerStatus = 'complete' | 'active' | 'paused' | 'inactive';
// Represents a timer's mode
export type TimerPhase = 'focus' | 'break';

// Represents timer-related data
export type TimerData = {
  time: Time;
  phase: TimerPhase; // Consistent naming
  initialTime: Time;
};

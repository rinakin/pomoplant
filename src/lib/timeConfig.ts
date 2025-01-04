import { Time, Session } from '@/types';

// Classic time constraints for Pomodoro
export const DEFAULT_FOCUS_TIME: Time = {
  minutes: 0,
  seconds: 7,
};
export const DEFAULT_SHORT_BREAK_TIME: Time = {
  minutes: 0,
  seconds: 5,
};
export const DEFAULT_LONG_BREAK_TIME: Time = {
  minutes: 0,
  seconds: 8,
};

// Default session configuration
export const DEFAULT_SESSION: Session = {
  time: DEFAULT_FOCUS_TIME, // Adjusting the session to match the new structure
  phase: 'focus', // This denotes the session phase: either 'focus' or 'break',
  completed: false,
};

export const DEFAULT_BREAK_SESSION: Session = {
  time: DEFAULT_SHORT_BREAK_TIME,
  phase: 'break',
  completed: false,
};
// Session with a long break after completion
export const DEFAULT_LONG_BREAK_SESSION: Session = {
  time: DEFAULT_FOCUS_TIME, // Using focus time for consistency
  phase: 'break', // This is a 'break' session with long break time
  completed: false,
};

// Default Pomodoro cycle (4 sessions, 1 long break after the 4th)
export const DEFAULT_POMODORO_CYCLE: Session[] = [
  DEFAULT_SESSION, // Focus sessions
  DEFAULT_BREAK_SESSION,
  DEFAULT_SESSION, // Focus sessions
  DEFAULT_BREAK_SESSION,
  DEFAULT_SESSION, // Focus sessions
  DEFAULT_BREAK_SESSION,
];

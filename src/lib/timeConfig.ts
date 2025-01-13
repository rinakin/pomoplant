import { TSessionsFormSchema } from '@/schemas';
import { Session } from '@/types';

// Classic time constraints for Pomodoro
export const DEFAULT_FOCUS_TIME = {
  minutes: 25,
  seconds: 0,
};

export const DEFAULT_SHORT_BREAK_TIME = {
  minutes: 5,
  seconds: 0,
};

export const DEFAULT_LONG_BREAK_TIME = {
  minutes: 15,
  seconds: 0,
};

// Default session configuration
export const DEFAULT_SESSION: Session = {
  ...DEFAULT_FOCUS_TIME,
  phase: 'focus', // This denotes the session phase: either 'focus' or 'break',
  completed: false,
};

export const DEFAULT_BREAK_SESSION: Session = {
  ...DEFAULT_SHORT_BREAK_TIME,
  phase: 'break',
  completed: false,
};
// Session with a long break after completion
export const DEFAULT_LONG_BREAK_SESSION: Session = {
  ...DEFAULT_FOCUS_TIME,
  phase: 'break',
  completed: false,
};

// Default Pomodoro cycle (4 sessions, 1 long break after the 4th)
export const DEFAULT_POMODORO_CYCLE: Session[] = [
  DEFAULT_SESSION,
  DEFAULT_BREAK_SESSION,
  DEFAULT_SESSION,
  DEFAULT_LONG_BREAK_SESSION,
];

// Match the session schema used in the form
export const DEFAULT_SESSIONS_FORM_VALUES: TSessionsFormSchema = {
  sessions: [...DEFAULT_POMODORO_CYCLE],
};

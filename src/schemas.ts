import { z } from 'zod';

// Define the schema for a single session
const sessionSchema = z.object({
  minutes: z.preprocess(
    (val) => Number(val),
    z
      .number({ message: 'Must be a valid minute' })
      .min(0, { message: 'Please enter valid minute' }),
  ),
  seconds: z.preprocess((val) => {
    const num = Number(val); // Convert the input to a number
    return isNaN(num) ? null : num; // Return `null` if the input is not a valid number
  }, z.number().nonnegative().max(59)),
  phase: z.enum(['focus', 'break']),
});

// Define the schema for the entire form, which is an array of sessions
export const sessionsFormSchema = z.object({
  sessions: z.array(sessionSchema), // This is an array of session objects
});

export type TSessionsFormSchema = z.infer<typeof sessionsFormSchema>;

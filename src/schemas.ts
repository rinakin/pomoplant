import { z } from 'zod';

// Define the schema for a single session
const sessionSchema = z
  .object({
    minutes: z.preprocess(
      (val) => Number(val),
      z
        .number({ message: 'Must be a valid minute' })
        .nonnegative({ message: 'Must be a valid minute' }), // Add .nonnegative() for consistency
    ),
    seconds: z.preprocess(
      (val) => Number(val),
      z
        .number({ message: 'Must be a valid second' })
        .nonnegative()
        .max(59, { message: 'Seconds must be between 0 and 59' }),
    ),
    phase: z.enum(['focus', 'break']),
  })
  .refine(
    (data) => data.minutes !== 0 || data.seconds !== 0, // Ensure minutes and seconds are not both 0
    {
      message: 'Minutes and seconds cannot both be 0', // Error message for invalid input
      path: ['minutes'],
    },
  );

// Define the schema for the entire form, which is an array of sessions
export const sessionsFormSchema = z.object({
  sessions: z.array(sessionSchema),
  plant: z.string(),
});

export type TSessionsFormSchema = z.infer<typeof sessionsFormSchema>;

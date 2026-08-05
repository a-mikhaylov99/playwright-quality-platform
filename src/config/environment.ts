import 'dotenv/config';

import { z } from 'zod';

const environmentSchema = z.object({
  BASE_URL: z.url(),
  API_URL: z.url(),
  DEFAULT_TIMEOUT_MS: z.coerce.number().int().positive().default(10_000),
});

const parsedEnvironment = environmentSchema.safeParse(process.env);

if (!parsedEnvironment.success) {
  const formattedErrors = z.prettifyError(parsedEnvironment.error);

  throw new Error(`Invalid environment configuration:\n${formattedErrors}`);
}

export const environment = {
  baseUrl: parsedEnvironment.data.BASE_URL,
  apiUrl: parsedEnvironment.data.API_URL,
  defaultTimeoutMs: parsedEnvironment.data.DEFAULT_TIMEOUT_MS,
} as const;

// This file checks if the environment variables for Supabase are set.
// It is used to determine if the application can connect to Supabase or not.
export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

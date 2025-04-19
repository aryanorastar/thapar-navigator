
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://rjgcapndexyehwckmfte.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ2NhcG5kZXh5ZWh3Y2ttZnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MDA4ODksImV4cCI6MjA1ODk3Njg4OX0.p7OSwjV5LJ5ouOtDMQfajxTuMbA4y64TX-WBFR4hJ-c";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

// Set up client with more options to handle large JSON data
export const supabase = createClient(
  SUPABASE_URL, 
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    },
    global: {
      headers: {
        'Content-Type': 'application/json'
      },
    },
  }
);

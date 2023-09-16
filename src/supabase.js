import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rqbrqazqhklwgljdohyq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxYnJxYXpxaGtsd2dsamRvaHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNjg2ODcsImV4cCI6MjAwOTc0NDY4N30.ymRPhijy4Y07NBklc6j98uF4tuRFU9eeVuf18tTB0ek";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

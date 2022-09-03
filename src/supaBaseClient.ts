import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://neacuummagnyvquivdtx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lYWN1dW1tYWdueXZxdWl2ZHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIxNDYwMDIsImV4cCI6MTk3NzcyMjAwMn0.H6yDhZVZORuN30SI7uVyyHN-e0nPzWu2_X4I6mAGqqY"

console.log(supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


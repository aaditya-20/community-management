import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! || 'https://oigotirltpkjcykarctk.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY! || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZ290aXJsdHBramN5a2FyY3RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzMDk5NDcsImV4cCI6MTk5NTg4NTk0N30.ELBFoXWOS8OlyXlBkoFsS5q2fB38k_APj5aRz66PJJo"

export const supabase = createClient(supabaseUrl,supabaseKey);

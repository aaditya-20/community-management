import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! || 'https://vpxfyftnadjflbjxurvt.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY! || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZweGZ5ZnRuYWRqZmxianh1cnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTY1NjEsImV4cCI6MTk5NzI5MjU2MX0.gDXwXxrEPbB6GHRckbo1TcLxC8atxWHOpskh0ltDSb4"

export const supabase = createClient(supabaseUrl,supabaseKey);

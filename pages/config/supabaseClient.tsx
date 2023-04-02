import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASEURL!
const supabaseKey = process.env.SUPABASEKEY!
console.log(supabaseUrl);
export const supabase = createClient(supabaseUrl,supabaseKey);

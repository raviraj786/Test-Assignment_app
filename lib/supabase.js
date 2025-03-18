import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://hdlrveljdqccxlhesgit.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkbHJ2ZWxqZHFjY3hsaGVzZ2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTE1MTcsImV4cCI6MjA1NzUyNzUxN30.P_JhzDUKuVLLWVN04ySdgtZxn61o4CBaUIihn6ev-0Q"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

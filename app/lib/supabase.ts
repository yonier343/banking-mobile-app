import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tlsxfczwaxgeramegeun.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsc3hmY3p3YXhnZXJhbWVnZXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzg4NzgsImV4cCI6MjA3OTc1NDg3OH0.xxO013G8YuYo0FMSmCKrr1TxohF6oe0QsgP8gRtpa9Q';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
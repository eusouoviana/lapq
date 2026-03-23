import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please check your environment variables.');
}

// Initialize the Supabase client with proper settings
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  global: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
  db: {
    schema: 'public',
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Test Supabase connection on initialization (dev only)
if (import.meta.env.DEV) {
  (async () => {
    try {
      console.log('Testing Supabase connection...');

      const { count, error, status } = await supabase
        .from('lapq_event_registrations')
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.error('Supabase connection test failed:', error);
        console.error('Status code:', status);
      } else {
        console.log(`Supabase connection successful. Found ${count} event registrations.`);
      }
    } catch (err) {
      console.error('Error testing Supabase connection:', err);
    }
  })();
}
/*
  # Create LAPQ event registrations table

  1. New Tables
    - `lapq_event_registrations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `whatsapp` (text)
      - `email` (text)
      - `cpf` (text)
      - `university` (text)
      - `course` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `lapq_event_registrations` table
    - Add policy for anonymous users to insert data
    - Add policy for authenticated users to read data
*/

CREATE TABLE IF NOT EXISTS lapq_event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  whatsapp text NOT NULL,
  email text NOT NULL,
  cpf text NOT NULL,
  university text NOT NULL,
  course text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE lapq_event_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert data (for public forms)
CREATE POLICY "Allow anonymous inserts to event registrations"
  ON lapq_event_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read data
CREATE POLICY "Allow authenticated users to read event registrations"
  ON lapq_event_registrations
  FOR SELECT
  TO authenticated
  USING (true);
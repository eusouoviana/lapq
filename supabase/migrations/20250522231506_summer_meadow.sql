/*
  # Create student questions table and schema

  1. New Types
    - `question_status_type`: Enum for question status

  2. New Tables
    - `lapq_student_questions`
      - `id` (uuid, primary key)
      - `created_at` (timestamptz)
      - `student_name` (text)
      - `whatsapp` (text) 
      - `email` (text)
      - `question` (text)
      - `status` (question_status_type)
      - `answered_at` (timestamptz)

  3. Security
    - Enable RLS
    - Add policies for anonymous inserts
    - Add policies for authenticated reads
*/

-- Create question status enum
CREATE TYPE question_status_type AS ENUM ('pending', 'answered');

-- Create questions table
CREATE TABLE IF NOT EXISTS lapq_student_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  student_name text NOT NULL,
  whatsapp text NOT NULL,
  email text NOT NULL,
  question text NOT NULL,
  status question_status_type DEFAULT 'pending',
  answered_at timestamptz,
  
  -- Add constraints
  CONSTRAINT student_name_min_length CHECK (length(student_name) >= 3),
  CONSTRAINT question_length CHECK (length(question) >= 10 AND length(question) <= 1000),
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_whatsapp CHECK (whatsapp ~* '^\+55 \d{2} \d{5}-\d{4}$')
);

-- Enable RLS
ALTER TABLE lapq_student_questions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow anonymous inserts" 
  ON lapq_student_questions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated reads" 
  ON lapq_student_questions
  FOR SELECT
  TO authenticated
  USING (true);
import { createClient } from "npm:@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface QuestionSubmission {
  student_name: string;
  whatsapp: string;
  email: string;
  question: string;
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { 
        status: 405, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Parse request body
    const data: QuestionSubmission = await req.json();

    // Validate required fields
    if (!data.student_name || !data.whatsapp || !data.email || !data.question) {
      return new Response(
        JSON.stringify({ error: "Todos os campos são obrigatórios" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Validate field lengths
    if (data.student_name.length < 3) {
      return new Response(
        JSON.stringify({ error: "Nome deve ter pelo menos 3 caracteres" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    if (data.question.length < 10 || data.question.length > 1000) {
      return new Response(
        JSON.stringify({ error: "A pergunta deve ter entre 10 e 1000 caracteres" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Validate WhatsApp format
    const whatsappRegex = /^\+55 \d{2} \d{5}-\d{4}$/;
    if (!whatsappRegex.test(data.whatsapp)) {
      return new Response(
        JSON.stringify({ error: "Número de WhatsApp inválido" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Check rate limit
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { count: questionCount } = await supabaseClient
      .from("lapq_student_questions")
      .select("*", { count: "exact" })
      .eq("email", data.email)
      .gte("created_at", today.toISOString());

    if (questionCount && questionCount >= 5) {
      return new Response(
        JSON.stringify({ 
          error: "Limite de 5 perguntas por dia atingido. Tente novamente amanhã." 
        }),
        { 
          status: 429, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Insert question
    const { error: insertError } = await supabaseClient
      .from("lapq_student_questions")
      .insert([data]);

    if (insertError) {
      console.error("Error inserting question:", insertError);
      throw insertError;
    }

    return new Response(
      JSON.stringify({ 
        message: "Pergunta enviada com sucesso! Em breve entraremos em contato." 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (err) {
    console.error("Error processing request:", err);
    
    return new Response(
      JSON.stringify({ 
        error: "Erro ao processar sua solicitação. Por favor, tente novamente." 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
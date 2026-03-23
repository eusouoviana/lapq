import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { HelpCircle, Send, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';

interface QuestionFormInput {
  student_name: string;
  whatsapp: string;
  email: string;
  question: string;
}

const Questions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<QuestionFormInput>();

  const onSubmit: SubmitHandler<QuestionFormInput> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/lapq-submit-question`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar pergunta');
      }

      setSubmitSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (err) {
      setSubmitError(
        err instanceof Error 
          ? err.message 
          : 'Ocorreu um erro ao enviar sua pergunta. Por favor, tente novamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Dúvidas
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 w-24 bg-white mx-auto mb-8"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl font-light"
            >
              Envie suas dúvidas sobre pesquisa qualitativa
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: 'white', width: '100%', height: 60 }}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Questions Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedElement>
            <SectionTitle 
              title="Envie sua Pergunta"
              subtitle="Nossa equipe está pronta para ajudar com suas dúvidas sobre pesquisa qualitativa"
              center
            />
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={200}>
            <div className="bg-light rounded-xl p-8 shadow-lg">
              {submitSuccess && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <div className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <p className="text-green-700 font-medium">Pergunta enviada com sucesso!</p>
                      <p className="text-green-600">Em breve entraremos em contato com você.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex">
                    <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
                    <div>
                      <p className="text-red-700 font-medium">Erro ao enviar pergunta</p>
                      <p className="text-red-600">{submitError}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="student_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="student_name"
                    {...register("student_name", { 
                      required: "Nome é obrigatório",
                      minLength: {
                        value: 3,
                        message: "Nome deve ter pelo menos 3 caracteres"
                      }
                    })}
                    className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                      errors.student_name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Digite seu nome completo"
                    disabled={isSubmitting}
                  />
                  {errors.student_name && (
                    <p className="mt-1 text-sm text-red-600">{errors.student_name.message}</p>
                  )}
                </div>

                {/* WhatsApp Field */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp *
                  </label>
                  <InputMask
                    mask="+55 99 99999-9999"
                    id="whatsapp"
                    {...register("whatsapp", {
                      required: "WhatsApp é obrigatório",
                      pattern: {
                        value: /^\+55 \d{2} \d{5}-\d{4}$/,
                        message: "Formato inválido. Use: +55 XX XXXXX-XXXX"
                      }
                    })}
                    className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                      errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+55 XX XXXXX-XXXX"
                    disabled={isSubmitting}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "E-mail é obrigatório",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "E-mail inválido"
                      }
                    })}
                    className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Question Field */}
                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                    Sua Pergunta *
                  </label>
                  <textarea
                    id="question"
                    {...register("question", {
                      required: "Pergunta é obrigatória",
                      minLength: {
                        value: 10,
                        message: "Pergunta deve ter pelo menos 10 caracteres"
                      },
                      maxLength: {
                        value: 1000,
                        message: "Pergunta não pode ter mais de 1000 caracteres"
                      }
                    })}
                    className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary/50 focus:outline-none min-h-[150px] ${
                      errors.question ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Descreva sua dúvida em detalhes..."
                    disabled={isSubmitting}
                  />
                  {errors.question && (
                    <p className="mt-1 text-sm text-red-600">{errors.question.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Enviar Pergunta
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-light">
        <div className="container-custom max-w-4xl">
          <AnimatedElement>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <HelpCircle size={24} className="text-primary mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-heading font-bold mb-4">Informações Importantes</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Responderemos sua pergunta o mais breve possível</li>
                    <li>• Você pode enviar até 5 perguntas por dia</li>
                    <li>• Mantenha suas perguntas relacionadas à pesquisa qualitativa</li>
                    <li>• Forneça informações claras e detalhadas para melhor compreensão</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Questions;
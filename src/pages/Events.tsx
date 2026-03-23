import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Mail, Phone, School, FileText, CheckCircle, AlertTriangle, Loader } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputMask from 'react-input-mask';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';
import { supabase } from '../lib/supabase';

type FormInput = {
  name: string;
  whatsapp: string;
  email: string;
  cpf: string;
  university: string;
  course: string;
};

enum SubmissionStatus {
  IDLE = 'idle',
  SUBMITTING = 'submitting',
  SUCCESS = 'success',
  ERROR = 'error'
}

const Events = () => {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>(SubmissionStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormInput>({
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      cpf: "",
      university: "",
      course: ""
    }
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setSubmissionStatus(SubmissionStatus.SUBMITTING);
    setErrorMessage(null);

    try {
      // Remove masks before saving to database
      const cleanedData = {
        ...data,
        whatsapp: data.whatsapp.replace(/\D/g, ''),
        cpf: data.cpf.replace(/\D/g, '')
      };

      const { error: supabaseError } = await supabase
        .from('lapq_event_registrations')
        .insert([cleanedData]);

      if (supabaseError) throw supabaseError;

      setSubmissionStatus(SubmissionStatus.SUCCESS);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(SubmissionStatus.IDLE);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMessage(
        err instanceof Error 
          ? err.message 
          : 'Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.'
      );
      setSubmissionStatus(SubmissionStatus.ERROR);
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
              Eventos
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
              Participe dos nossos eventos e expanda seu conhecimento em pesquisa qualitativa
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

      {/* Current Event Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Próximo Evento"
              subtitle="Inscreva-se para participar"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <AnimatedElement animation="slide-up">
              <div className="bg-light rounded-xl overflow-hidden shadow-md">
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-6 text-dark">
                    Oficina: Conhecer o Mendeley - gerenciador de citações e referências
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Uma oficina prática para conhecer e aprender a utilizar o Mendeley, um poderoso gerenciador de citações e referências, com o uso de bases científicas do Periódico Capes.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">
                        <strong>Data:</strong> 16 de Maio de 2025, Sexta-feira
                      </span>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">
                        <strong>Horário:</strong> 12h00 - 13h30
                      </span>
                    </div>
                    
                    <div className="flex items-start">
                      <User className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <span className="text-gray-700">
                          <strong>Palestrante:</strong> Prof. Dr. José Eduardo Ricciardi Favaretto
                        </span>
                        <p className="text-gray-600 text-sm mt-1">
                          Professor do PPGCFTG da UPM, na linha de atuação de Tecnologias de Gestão (TEG) e Pesquisador do TAMAF - Technology & Analytics in Management, Accounting and Finance
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">
                        <strong>Local:</strong> Online via <a href="https://teams.microsoft.com/meet/2561694247237?p=1lLmPF1mfdtcq8Akme" target="_blank" className="underline">Microsoft Teams (Link da Sala)</a>
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Certificado:</strong> Será emitido certificado de participação para os presentes.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={200}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 p-8">
                <h3 className="font-heading text-2xl font-bold mb-6 text-dark">
                  Inscrição
                </h3>
                
                {submissionStatus === SubmissionStatus.SUCCESS && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-700 font-medium">Inscrição realizada com sucesso!</p>
                        <p className="text-sm text-green-700">
                          Você receberá um e-mail de confirmação em breve com mais informações sobre o evento.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {submissionStatus === SubmissionStatus.ERROR && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700 font-medium">Erro ao realizar inscrição</p>
                        <p className="text-sm text-red-700">{errorMessage}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <input 
                        type="text"
                        id="name"
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Digite seu nome completo"
                        {...register("name", { required: "Nome é obrigatório" })}
                        disabled={submissionStatus === SubmissionStatus.SUBMITTING}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp *
                    </label>
                    <div className="relative">
                      <InputMask 
                        mask="(99) 99999-9999"
                        id="whatsapp"
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                          errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="(XX) XXXXX-XXXX"
                        {...register("whatsapp", { 
                          required: "WhatsApp é obrigatório",
                          pattern: {
                            value: /^\(\d{2}\) \d{5}-\d{4}$/,
                            message: "Formato inválido"
                          }
                        })}
                        disabled={submissionStatus === SubmissionStatus.SUBMITTING}
                      />
                      {errors.whatsapp && (
                        <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail *
                    </label>
                    <div className="relative">
                      <input 
                        type="email"
                        id="email"
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="seu@email.com"
                        {...register("email", { 
                          required: "E-mail é obrigatório",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "E-mail inválido"
                          }
                        })}
                        disabled={submissionStatus === SubmissionStatus.SUBMITTING}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                      CPF *
                    </label>
                    <div className="relative">
                      <InputMask 
                        mask="999.999.999-99"
                        id="cpf"
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                          errors.cpf ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="XXX.XXX.XXX-XX"
                        {...register("cpf", { 
                          required: "CPF é obrigatório",
                          pattern: {
                            value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                            message: "Formato de CPF inválido"
                          }
                        })}
                        disabled={submissionStatus === SubmissionStatus.SUBMITTING}
                      />
                      {errors.cpf && (
                        <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                      Universidade *
                    </label>
                    <div className="relative">
                      <input 
                        type="text"
                        id="university"
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                          errors.university ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nome da sua universidade"
                        {...register("university", { required: "Universidade é obrigatória" })}
                        disabled={submissionStatus === SubmissionStatus.SUBMITTING}
                      />
                      {errors.university && (
                        <p className="text-red-500 text-xs mt-1">{errors.university.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                      Curso *
                    </label>
                    <div className="relative">
                      <input 
                        type="text"
                        id="course"
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                          errors.course ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nome do seu curso"
                        {...register("course", { required: "Curso é obrigatório" })}
                        disabled={submissionStatus === SubmissionStatus.SUBMITTING}
                      />
                      {errors.course && (
                        <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                    disabled={submissionStatus === SubmissionStatus.SUBMITTING}
                  >
                    {submissionStatus === SubmissionStatus.SUBMITTING ? (
                      <>
                        <Loader size={20} className="animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : 'Inscrever-se'}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Ao se inscrever, você concorda em receber e-mails do LAPQ com informações sobre o evento.
                  </p>
                </form>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Eventos Anteriores"
              subtitle="Confira os eventos que já realizamos"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* This is a placeholder for future past events */}
            <AnimatedElement animation="scale-in">
              <div className="bg-white p-6 rounded-xl shadow-md text-center py-16">
                <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2 text-gray-400">Em breve</h3>
                <p className="text-gray-500">
                  Nosso histórico de eventos anteriores será exibido aqui.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Quer sugerir um evento?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Entre em contato conosco para sugerir temas para nossos próximos eventos.
              </p>
              <a 
                href="mailto:contato@lapq.org.br" 
                className="btn bg-white text-primary hover:bg-white/90 hover:shadow-lg"
              >
                Entre em Contato
              </a>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
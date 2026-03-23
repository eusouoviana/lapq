import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Check, AlertCircle, Loader } from 'lucide-react';

interface CandidaturaFormData {
  nomeCompleto: string;
  email: string;
  instituicao: string;
  lattes: string;
  experiencia: string;
  motivacao: string;
}

interface CandidaturasFormProps {
  subcoordenacaoNome: string;
  onSuccess?: () => void;
}

/**
 * CandidaturasForm Component
 * Form for submitting candidaturas to subcoordenacoes
 */
const CandidaturasForm = ({ subcoordenacaoNome, onSuccess }: CandidaturasFormProps) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<CandidaturaFormData>();
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: CandidaturaFormData) => {
    try {
      setSubmissionStatus('idle');

      // TODO: Integrate with Supabase to save candidatura
      console.log('Candidatura data:', data);

      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmissionStatus('success');
      reset();

      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (error) {
      setSubmissionStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar candidatura');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-2xl"
    >
      <h3 className="font-heading text-2xl font-bold mb-2 text-dark">
        Candidature-se para {subcoordenacaoNome}
      </h3>
      <p className="text-gray-600 mb-8">
        Preencha o formulário abaixo para se candidatar a esta subcoordenação
      </p>

      {submissionStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start"
        >
          <Check size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-green-800">Candidatura enviada com sucesso!</p>
            <p className="text-green-700 text-sm">Entraremos em contato em breve.</p>
          </div>
        </motion.div>
      )}

      {submissionStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start"
        >
          <AlertCircle size={20} className="text-red-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-red-800">Erro ao enviar candidatura</p>
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            {...register('nomeCompleto', { required: 'Nome completo é obrigatório' })}
            placeholder="Seu nome completo"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.nomeCompleto ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.nomeCompleto && (
            <p className="text-red-500 text-sm mt-1">{errors.nomeCompleto.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Email *
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email é obrigatório',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email inválido' }
              })}
              placeholder="seu.email@exemplo.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Instituição *
            </label>
            <input
              type="text"
              {...register('instituicao', { required: 'Instituição é obrigatória' })}
              placeholder="Sua instituição"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.instituicao ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.instituicao && (
              <p className="text-red-500 text-sm mt-1">{errors.instituicao.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Link Currículo Lattes (opcional)
          </label>
          <input
            type="url"
            {...register('lattes')}
            placeholder="http://lattes.cnpq.br/..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Experiência Relevante *
          </label>
          <textarea
            {...register('experiencia', { required: 'Descreva sua experiência relevante' })}
            placeholder="Descreva sua experiência em pesquisa qualitativa, gestão de equipes ou áreas correlatas..."
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-vertical ${
              errors.experiencia ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.experiencia && (
            <p className="text-red-500 text-sm mt-1">{errors.experiencia.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Motivação para Candidatura *
          </label>
          <textarea
            {...register('motivacao', { required: 'Descreva sua motivação' })}
            placeholder="Por que você gostaria de fazer parte desta subcoordenação?"
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-vertical ${
              errors.motivacao ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.motivacao && (
            <p className="text-red-500 text-sm mt-1">{errors.motivacao.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting || submissionStatus === 'success'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader size={18} className="mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar Candidatura'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CandidaturasForm;

import { motion } from 'framer-motion';
import { Users, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubcoordenacaoCardProps {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
  coordenador?: {
    nome: string;
    instituicao: string;
  };
  delay?: number;
  background?: string;
}

/**
 * SubcoordenacaoCard Component
 * Displays information about a subcoordenacao with link to its detail page
 */
const SubcoordenacaoCard = ({
  nome,
  slug,
  descricao,
  coordenador,
  delay = 0,
  background = 'bg-white'
}: SubcoordenacaoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`${background} p-8 rounded-xl shadow-md border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105`}
    >
      <h3 className="font-heading text-xl font-bold mb-3 text-dark line-clamp-2">
        {nome}
      </h3>

      <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
        {descricao}
      </p>

      {coordenador && (
        <div className="mb-6 pb-6 border-t border-gray-100">
          <div className="flex items-start">
            <Users size={18} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-dark text-sm truncate">{coordenador.nome}</p>
              <p className="text-gray-500 text-xs flex items-center mt-1">
                <MapPin size={12} className="mr-1 flex-shrink-0" />
                <span className="truncate">{coordenador.instituicao}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <Link
        to={`/subcoordenacoes/${slug}`}
        className="btn btn-primary text-sm inline-flex items-center justify-center w-full"
      >
        Saiba Mais <ChevronRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default SubcoordenacaoCard;

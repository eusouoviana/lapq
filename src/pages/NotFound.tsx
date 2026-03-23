import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import AnimatedElement from '../components/utils/AnimatedElement';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light px-4">
      <div className="max-w-md w-full text-center">
        <AnimatedElement animation="fade-in">
          <h1 className="text-9xl font-heading font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-bold text-dark mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="btn btn-primary inline-flex items-center"
            >
              <Home size={18} className="mr-2" /> Voltar ao Início
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline inline-flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" /> Voltar
            </button>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default NotFound;
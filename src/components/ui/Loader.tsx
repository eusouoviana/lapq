import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <Loader2 size={40} className="animate-spin text-primary" />
      <span className="sr-only">Carregando...</span>
    </div>
  );
};

export default Loader;
import { NavLink } from 'react-router-dom';
import { BookOpen, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen size={28} className="text-secondary" />
              <span className="text-xl font-heading font-bold">LAPQ</span>
            </div>
            <p className="text-gray-300 mb-6">
              Laboratório de Avaliação e Pesquisa Qualitativa - um espaço coletivo Multi(inter)disciplinar vinculado aos Programas de Pós-graduação.
            </p>
            
            {/* Partner Institutions Logos */}
            <h4 className="text-sm uppercase font-medium text-gray-400 mb-4">Instituições Parceiras</h4>
            <div className="flex flex-wrap gap-4 mb-4">
              <a href="https://www.mackenzie.br" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg flex items-center justify-center">
                <img src="/logo_mackenzie.png" alt="Logo Mackenzie" className="h-8" />
              </a>
              <a href="https://www.ufpe.br" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg flex items-center justify-center">
                <img src="/logo_ufpe.png" alt="Logo UFPE" className="h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg flex items-center justify-center">
                <img src="/logo_ipg.png" alt="Logo IPG" className="h-8" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-heading text-lg font-bold mb-6 relative inline-block after:content-[''] after:w-1/2 after:h-0.5 after:bg-secondary after:absolute after:-bottom-2 after:left-0">
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Início
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/sobre" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Sobre Nós
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/pesquisas" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Pesquisas
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/pesquisadores" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Pesquisadores
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/artigos" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Artigos Qualitativos
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/livros" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Livros
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/duvidas" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Dúvidas
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/eventos" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Eventos
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Universities */}
          <div className="col-span-1">
            <h3 className="font-heading text-lg font-bold mb-6 relative inline-block after:content-[''] after:w-1/2 after:h-0.5 after:bg-secondary after:absolute after:-bottom-2 after:left-0">
              Instituições
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.mackenzie.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" /> Universidade Presbiteriana Mackenzie
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ufpe.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" /> Universidade Federal de Pernambuco
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-heading text-lg font-bold mb-6 relative inline-block after:content-[''] after:w-1/2 after:h-0.5 after:bg-secondary after:absolute after:-bottom-2 after:left-0">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Rua Maria Antônia, 163, 1° Andar, São Paulo - SP.
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-secondary mr-3 flex-shrink-0" />
                <a 
                  href="mailto:contato@qualitativeresearch.com.br" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  contato@qualitativeresearch.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">© {currentYear} LAPQ - Laboratório de Avaliação e Pesquisa Qualitativa. Todos os direitos reservados.</p>
          <p className="text-center text-[#808080] text-[12px] mt-2">
            Desenvolvido por <a href="https://www.grupomeza.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Meza Tecnologias</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
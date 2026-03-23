import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronDown, Users } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Check if we're on the homepage for transparent navbar
  const isHomePage = location.pathname === '/';

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHomePage ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const linkClasses = `relative font-medium transition-colors duration-300 hover:text-primary 
                      after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
                      after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 
                      hover:after:scale-x-100`;

  const activeLinkClasses = `text-primary after:scale-x-100`;

  return (
    <nav className={navClasses}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <BookOpen 
            size={28} 
            className={`transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-primary' : 'text-white'
            }`} 
          />
          <span 
            className={`text-xl font-heading font-bold transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-dark' : 'text-white'
            }`}
          >
            LAPQ
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `${linkClasses} ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              } ${isActive ? activeLinkClasses : ''}`
            }
          >
            Início
          </NavLink>
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => 
              `${linkClasses} ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              } ${isActive ? activeLinkClasses : ''}`
            }
          >
            Sobre Nós
          </NavLink>
          <NavLink 
            to="/pesquisas" 
            className={({ isActive }) => 
              `${linkClasses} ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              } ${isActive ? activeLinkClasses : ''}`
            }
          >
            Pesquisas
          </NavLink>
          <NavLink 
            to="/pesquisadores" 
            className={({ isActive }) => 
              `${linkClasses} ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              } ${isActive ? activeLinkClasses : ''}`
            }
          >
            Pesquisadores
          </NavLink>
          <NavLink 
            to="/artigos" 
            className={({ isActive }) => 
              `${linkClasses} ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              } ${isActive ? activeLinkClasses : ''}`
            }
          >
            Artigos Qualitativos
          </NavLink>
          <NavLink 
            to="/livros" 
            className={({ isActive }) => 
              `${linkClasses} ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              } ${isActive ? activeLinkClasses : ''}`
            }
          >
            Livros
          </NavLink>
          <NavLink
            to="/duvidas"
            className={({ isActive }) =>
              `${linkClasses} ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              } ${isActive ? activeLinkClasses : ''}`
            }
          >
            Dúvidas
          </NavLink>
          <div className="relative group">
            <button
              className={`${linkClasses} ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              } flex items-center`}
              onClick={toggleDropdown}
            >
              Subcoordenações
              <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <NavLink
                to="/subcoordenacoes"
                className="block px-4 py-2 text-dark hover:bg-primary/10 rounded-t-lg first:rounded-t-lg"
                onClick={closeMenu}
              >
                Visão Geral
              </NavLink>
              <NavLink
                to="/subcoordenacoes/interlapq"
                className="block px-4 py-2 text-dark hover:bg-primary/10"
                onClick={closeMenu}
              >
                Formação (INTERLAPQ)
              </NavLink>
              <NavLink
                to="/subcoordenacoes/publicacoes"
                className="block px-4 py-2 text-dark hover:bg-primary/10"
                onClick={closeMenu}
              >
                Publicações
              </NavLink>
              <NavLink
                to="/subcoordenacoes/projetos"
                className="block px-4 py-2 text-dark hover:bg-primary/10"
                onClick={closeMenu}
              >
                Projetos
              </NavLink>
              <NavLink
                to="/subcoordenacoes/graduacao"
                className="block px-4 py-2 text-dark hover:bg-primary/10"
                onClick={closeMenu}
              >
                Graduação
              </NavLink>
              <NavLink
                to="/subcoordenacoes/curadores"
                className="block px-4 py-2 text-dark hover:bg-primary/10"
                onClick={closeMenu}
              >
                Curadoria Científica
              </NavLink>
              <NavLink
                to="/subcoordenacoes/disposicoes"
                className="block px-4 py-2 text-dark hover:bg-primary/10 rounded-b-lg"
                onClick={closeMenu}
              >
                Disposições Gerais
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/eventos"
            className={({ isActive }) =>
              `${linkClasses} ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              } ${isActive ? activeLinkClasses : ''}`
            }
          >
            Eventos
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className={`md:hidden z-50 transition-colors duration-300 ${
            isScrolled || !isHomePage ? 'text-dark' : 'text-white'
          }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden transform ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-8 text-lg">
            <NavLink to="/" className="font-medium" onClick={closeMenu}>
              Início
            </NavLink>
            <NavLink to="/sobre" className="font-medium" onClick={closeMenu}>
              Sobre Nós
            </NavLink>
            <NavLink to="/pesquisas" className="font-medium" onClick={closeMenu}>
              Pesquisas
            </NavLink>
            <NavLink to="/pesquisadores" className="font-medium" onClick={closeMenu}>
              Pesquisadores
            </NavLink>
            <NavLink to="/artigos" className="font-medium" onClick={closeMenu}>
              Artigos Qualitativos
            </NavLink>
            <NavLink to="/livros" className="font-medium" onClick={closeMenu}>
              Livros
            </NavLink>
            <NavLink to="/duvidas" className="font-medium" onClick={closeMenu}>
              Dúvidas
            </NavLink>
            <div className="flex flex-col items-center space-y-4 border-t border-gray-200 pt-4">
              <button
                onClick={toggleDropdown}
                className="font-medium flex items-center text-primary"
              >
                Subcoordenações
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isDropdownOpen && (
                <div className="flex flex-col items-center space-y-2 w-full">
                  <NavLink to="/subcoordenacoes" className="text-sm" onClick={closeMenu}>
                    Visão Geral
                  </NavLink>
                  <NavLink to="/subcoordenacoes/interlapq" className="text-sm" onClick={closeMenu}>
                    Formação
                  </NavLink>
                  <NavLink to="/subcoordenacoes/publicacoes" className="text-sm" onClick={closeMenu}>
                    Publicações
                  </NavLink>
                  <NavLink to="/subcoordenacoes/projetos" className="text-sm" onClick={closeMenu}>
                    Projetos
                  </NavLink>
                  <NavLink to="/subcoordenacoes/graduacao" className="text-sm" onClick={closeMenu}>
                    Graduação
                  </NavLink>
                  <NavLink to="/subcoordenacoes/curadores" className="text-sm" onClick={closeMenu}>
                    Curadoria
                  </NavLink>
                  <NavLink to="/subcoordenacoes/disposicoes" className="text-sm" onClick={closeMenu}>
                    Disposições
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/eventos" className="font-medium" onClick={closeMenu}>
              Eventos
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
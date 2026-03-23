import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, LineChart, Users, Calendar, ChevronRight } from 'lucide-react';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  coordinator: string;
  year: string;
  image: string;
}

const Research = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Abordagens Qualitativas em Contabilidade Gerencial",
      description: "Análise dos métodos qualitativos utilizados nas pesquisas em contabilidade gerencial no Brasil",
      category: "Metodologia",
      coordinator: "Prof. Dr. Cláudio de Araújo Wanderley",
      year: "2023",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Sistemas de Controle Gerencial em PMEs",
      description: "Estudo sobre as práticas de controle gerencial adotadas por pequenas e médias empresas",
      category: "Contabilidade Gerencial",
      coordinator: "Prof. Dra. Ana Lúcia Fontes de Souza Vasconcelos",
      year: "2022",
      image: "https://images.pexels.com/photos/6693657/pexels-photo-6693657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Governança em Organizações do Terceiro Setor",
      description: "Análise qualitativa dos mecanismos de governança em organizações sem fins lucrativos",
      category: "Governança",
      coordinator: "Prof. Dr. Davi Jônatas Cunha Araújo",
      year: "2023",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Contabilidade Pública e Transparência",
      description: "Estudo sobre a transparência das informações contábeis em entidades públicas",
      category: "Contabilidade Pública",
      coordinator: "Prof. Dra. Rossana Guerra de Sousa",
      year: "2022",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      title: "Análise de Relatórios de Sustentabilidade",
      description: "Pesquisa qualitativa sobre a qualidade dos relatórios de sustentabilidade de empresas brasileiras",
      category: "Sustentabilidade",
      coordinator: "Prof. Dra. Raquel da Silva Pereira",
      year: "2023",
      image: "https://images.pexels.com/photos/3846822/pexels-photo-3846822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 6,
      title: "Controladoria em Empresas Familiares",
      description: "Estudo sobre as práticas de controladoria em empresas de gestão familiar",
      category: "Controladoria",
      coordinator: "Prof. Dr. Eduardo Lavarda",
      year: "2024",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 7,
      title: "Auditoria Interna e Gerenciamento de Riscos",
      description: "Análise qualitativa das práticas de auditoria interna e gerenciamento de riscos",
      category: "Auditoria",
      coordinator: "Prof. Dr. Joshua Onome Imoniana",
      year: "2024",
      image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 8,
      title: "Ensino da Contabilidade: Abordagens Qualitativas",
      description: "Pesquisa sobre métodos qualitativos no ensino da contabilidade",
      category: "Educação",
      coordinator: "Prof. Dra. Vilma Geni Slomski",
      year: "2023",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 9,
      title: "Controle Gerencial em Startups",
      description: "Estudo sobre as práticas de controle gerencial em empresas startups",
      category: "Contabilidade Gerencial",
      coordinator: "Prof. Dr. Leonardo Fabris Lugoboni",
      year: "2024",
      image: "https://images.pexels.com/photos/7438104/pexels-photo-7438104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  const categories = [...new Set(projects.map(p => p.category))];
  const years = [...new Set(projects.map(p => p.year))];

  const filteredProjects = projects.filter(project => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === '' || project.category === categoryFilter) &&
      (yearFilter === '' || project.year === yearFilter)
    );
  });

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
              Pesquisas
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
              Conheça nossos projetos de pesquisa qualitativa
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

      {/* Research Areas Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Áreas de Pesquisa"
              subtitle="Nossas principais linhas de investigação qualitativa"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedElement animation="slide-up">
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <BookOpen size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-dark">Metodologias Qualitativas</h3>
                <p className="text-gray-700 mb-4">
                  Desenvolvimento e aperfeiçoamento de métodos qualitativos de pesquisa em contabilidade, com foco em entrevistas, estudos de caso, análise documental e observação participante.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={100}>
              <div className="bg-secondary/5 border border-secondary/20 p-8 rounded-xl h-full">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <LineChart size={28} className="text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-dark">Contabilidade Gerencial</h3>
                <p className="text-gray-700 mb-4">
                  Investigações sobre sistemas de controle gerencial, tomada de decisão, orçamento, mensuração de desempenho e outras práticas de contabilidade gerencial em diferentes contextos organizacionais.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={200}>
              <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl h-full">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Users size={28} className="text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-dark">Governança e Controladoria</h3>
                <p className="text-gray-700 mb-4">
                  Estudos sobre governança corporativa, controles internos, compliance, auditoria, gestão de riscos e outros mecanismos de governança em organizações públicas e privadas.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Projetos de Pesquisa"
              subtitle="Conheça os projetos em desenvolvimento no LAPQ"
              center
            />
          </AnimatedElement>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <AnimatedElement className="col-span-1 md:col-span-2" animation="slide-up">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar projeto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={100}>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-white"
              >
                <option value="">Todas as categorias</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={200}>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-white"
              >
                <option value="">Todos os anos</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </AnimatedElement>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedElement key={project.id} animation="scale-in" delay={index % 6 * 100}>
                <div className="card card-hover h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" /> {project.year}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3 text-dark">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      <strong>Coordenador:</strong> {project.coordinator}
                    </p>
                    <button className="text-primary hover:text-secondary transition-colors inline-flex items-center">
                      Ver mais detalhes <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Nenhum projeto encontrado com os filtros selecionados.</p>
              <button 
                onClick={() => {setSearchTerm(''); setCategoryFilter(''); setYearFilter('');}}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Research Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Nosso Processo de Pesquisa"
              subtitle="Como desenvolvemos nossas pesquisas qualitativas"
              center
            />
          </AnimatedElement>

          <div className="relative mt-16">
            {/* Timeline center line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/20 transform -translate-x-1/2 md:block hidden"></div>
            
            {/* Timeline events */}
            <div className="relative">
              {[
                {
                  title: "Definição do Problema",
                  desc: "Identificação e delimitação clara do problema de pesquisa, com base em gaps teóricos ou práticos",
                  icon: <BookOpen size={24} />
                },
                {
                  title: "Revisão da Literatura",
                  desc: "Mapeamento sistemático da literatura existente para fundamentar teoricamente a pesquisa",
                  icon: <BookOpen size={24} />
                },
                {
                  title: "Definição Metodológica",
                  desc: "Escolha da abordagem qualitativa mais adequada para responder ao problema de pesquisa",
                  icon: <LineChart size={24} />
                },
                {
                  title: "Coleta de Dados",
                  desc: "Realização de entrevistas, observações, análise documental ou outras técnicas qualitativas",
                  icon: <LineChart size={24} />
                },
                {
                  title: "Análise dos Dados",
                  desc: "Interpretação dos dados coletados, buscando padrões, temas e significados",
                  icon: <Users size={24} />
                },
                {
                  title: "Divulgação dos Resultados",
                  desc: "Publicação em periódicos científicos e apresentação em eventos acadêmicos",
                  icon: <Users size={24} />
                }
              ].map((step, index) => (
                <AnimatedElement 
                  key={index} 
                  animation={index % 2 === 0 ? "slide-in-right" : "slide-up"}
                  delay={index * 150}
                  className="mb-12 md:flex block"
                >
                  <div className={`md:w-1/2 w-full ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-6 md:mb-0`}>
                    <div className={`inline-block p-3 rounded-lg ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} font-medium mb-3`}>
                      {step.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                  <div className="md:block hidden absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-4 ${index % 2 === 0 ? 'border-primary bg-white' : 'border-secondary bg-white'} flex items-center justify-center`}>
                      {index + 1}
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full"></div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Interesse em participar de nossas pesquisas?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Entre em contato conosco para saber como você ou sua organização podem contribuir para nossos projetos de pesquisa qualitativa.
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

export default Research;
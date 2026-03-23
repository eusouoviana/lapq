import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink, BookOpen, Mail, Users } from 'lucide-react';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';

interface Researcher {
  id: number;
  name: string;
  institution: string;
  lattes: string;
}

interface Coordinator {
  id: number;
  name: string;
  title: string;
  area: string;
  institution: string;
  email: string;
  imageUrl: string;
}

const Researchers = () => {
  // Coordinators data
  const coordinators: Coordinator[] = [
    {
      id: 1,
      name: "Profa. Dra. Ana Lucia Fontes S. Vasconcelos",
      title: "Coordenadora do LAPQ",
      area: "Finanças, Regulação Contábil e Tributária",
      institution: "Universidade Federal de Pernambuco (UFPE)",
      email: "anafontes_ufpe@yahoo.com.br",
      imageUrl: "/coord_analucia.jpg"
    },
    {
      id: 2,
      name: "Profa. Dra. Liliane Cristina Segura",
      title: "Coordenadora do LAPQ",
      area: "Finanças, Regulação Contábil e Tributária",
      institution: "Universidade Presbiteriana Mackenzie (UPM)",
      email: "liliane.segura@mackenzie.br",
      imageUrl: "/coord_liliane.jpg"
    }
  ];

  const researchers: Researcher[] = [
    {
      id: 1,
      name: "Prof. Dra. Aline Bento Ambrósio Avelar",
      institution: "Universidade Municipal de São Caetano do Sul",
      lattes: "lattes.cnpq.br/2517996433256239"
    },
    {
      id: 2,
      name: "Prof. Dra. Ana Lúcia Fontes de Souza Vasconcelos",
      institution: "Universidade Federal de Pernambuco (UFPE)",
      lattes: "http://lattes.cnpq.br/6786196161894864"
    },
    {
      id: 3,
      name: "Prof. Dr. Cláudio de Araújo Wanderley",
      institution: "Universidade Federal de Pernambuco (UFPE)",
      lattes: "http://lattes.cnpq.br/0634283724256002"
    },
    {
      id: 4,
      name: "Prof. Dr. Davi Jônatas Cunha Araújo",
      institution: "Universidade Presbiteriana Mackenzie (UPM)",
      lattes: "http://lattes.cnpq.br/6065443356879996"
    },
    {
      id: 5,
      name: "Prof. Dr. Eduardo Lavarda",
      institution: "Universidade Federal de Santa Catarina (UFSC)",
      lattes: "http://lattes.cnpq.br/0990433322587449"
    },
    {
      id: 6,
      name: "Prof. Dra. Erika Borges Ferreira",
      institution: "Universidade Presbiteriana Mackenzie (UPM)",
      lattes: "lattes.cnpq.br/0436994713475440"
    },
    {
      id: 7,
      name: "Prof. Dra. Janette Brunstein",
      institution: "Universidade Presbiteriana Mackenzie (UPM)",
      lattes: "http://lattes.cnpq.br/8568710701792092"
    },
    {
      id: 8,
      name: "Prof. Dr. Joshua Onome Imoniana",
      institution: "Universidade São Paulo (USP)",
      lattes: "lattes.cnpq.br/2383282388193527"
    },
    {
      id: 9,
      name: "Prof. Dra. Karla Katiuscia Nobrega de Almeida",
      institution: "Universidade Federal da Paraíba (UFPB)",
      lattes: "http://lattes.cnpq.br/4681256181843777"
    },
    {
      id: 10,
      name: "Prof. Dra. Katherine Elizabeth Horton",
      institution: "Universidade Federal de Pernambuco (UFPE)",
      lattes: "http://lattes.cnpq.br/3550575542070145"
    },
    {
      id: 11,
      name: "Prof. Dr. Leonardo Fabris Lugoboni",
      institution: "Universidade Federal de São Paulo (Unifesp)",
      lattes: "http://lattes.cnpq.br/3762938281211058"
    },
    {
      id: 12,
      name: "Prof. Me. Maria Campos Lage",
      institution: "Universidade Presbiteriana Mackenzie (UPM)",
      lattes: "http://lattes.cnpq.br/1795009502156626"
    },
    {
      id: 13,
      name: "Prof. Dr. Maurício Assuero Lima de Freitas",
      institution: "Universidade Federal de Pernambuco (UFPE)",
      lattes: "http://lattes.cnpq.br/6395847929002275"
    },
    {
      id: 14,
      name: "Prof. Dra. Raquel da Silva Pereira",
      institution: "Universidade Municipal de São Caetano do Sul",
      lattes: "http://lattes.cnpq.br/8196522386086079"
    },
    {
      id: 15,
      name: "Prof. Dra. Rossana Guerra de Sousa",
      institution: "Universidade Federal da Paraíba (UFPB)",
      lattes: "http://lattes.cnpq.br/7912167437653317"
    },
    {
      id: 16,
      name: "Prof. Dra. Umbelina Cravo Teixeira Lagioia",
      institution: "Universidade Federal de Pernambuco (UFPE)",
      lattes: "http://lattes.cnpq.br/3533446028459118"
    },
    {
      id: 17,
      name: "Prof. Dra. Vilma Geni Slomski",
      institution: "Centro Universitário da Escola de Comércio Álvares Penteado – (UNIFECAP)",
      lattes: "http://lattes.cnpq.br/4037547425398159"
    },
    {
      id: 18,
      name: "Prof. Dra. Viviane da Costa Freitag",
      institution: "Universidade Federal da Paraíba (UFPB)",
      lattes: "http://lattes.cnpq.br/1745284136250079"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [institutionFilter, setInstitutionFilter] = useState('');

  const institutions = [...new Set(researchers.map(r => r.institution))];

  const filteredResearchers = researchers.filter(researcher => {
    return (
      researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (institutionFilter === '' || researcher.institution === institutionFilter)
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
              Pesquisadores
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
              Conheça nossa equipe de pesquisadores
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

      {/* Coordinators Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Coordenação do LAPQ"
              subtitle="Conheça as professoras coordenadoras do Laboratório de Avaliação e Pesquisa Qualitativa"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {coordinators.map((coordinator, index) => (
              <AnimatedElement key={coordinator.id} animation="slide-up" delay={index * 200}>
                <div className="bg-primary/5 border border-primary/20 rounded-xl overflow-hidden shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Container */}
                    <div className="w-full md:w-1/3 bg-primary/10 flex items-center justify-center p-6 h-64 md:h-auto">
                      <div className="w-40 h-40 rounded-full bg-white border-4 border-white overflow-hidden">
                        <img 
                          src={coordinator.imageUrl} 
                          alt={coordinator.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="w-full md:w-2/3 p-6 md:p-8">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                        {coordinator.title}
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-2 text-dark">
                        {coordinator.name}
                      </h3>
                      <p className="text-gray-800 font-medium mb-1">{coordinator.area}</p>
                      <p className="text-gray-600 mb-4">{coordinator.institution}</p>
                      
                      <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <Mail size={18} className="mr-2" />
                        <a href={`mailto:${coordinator.email}`} className="text-primary hover:underline">
                          {coordinator.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Researchers Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Equipe de Pesquisadores"
              subtitle="Conheça os acadêmicos que fazem parte do LAPQ"
              center
            />
          </AnimatedElement>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <AnimatedElement className="col-span-1 md:col-span-2" animation="slide-up">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar pesquisador..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={100}>
              <select
                value={institutionFilter}
                onChange={(e) => setInstitutionFilter(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-white"
              >
                <option value="">Todas as instituições</option>
                {institutions.map((institution, index) => (
                  <option key={index} value={institution}>
                    {institution}
                  </option>
                ))}
              </select>
            </AnimatedElement>
          </div>

          {/* Researchers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResearchers.map((researcher, index) => (
              <AnimatedElement key={researcher.id} animation="scale-in" delay={index % 6 * 100}>
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-heading text-xl font-bold mb-2 text-dark">{researcher.name}</h3>
                    <p className="text-gray-600 mb-4">{researcher.institution}</p>
                    <a 
                      href={`http://${researcher.lattes}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-secondary transition-colors inline-flex items-center"
                    >
                      Currículo Lattes <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* No Results */}
          {filteredResearchers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Nenhum pesquisador encontrado com os filtros selecionados.</p>
              <button 
                onClick={() => {setSearchTerm(''); setInstitutionFilter('');}}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedElement animation="slide-up">
              <div className="bg-light p-8 rounded-xl shadow-md">
                <div className="text-5xl font-heading font-bold text-primary mb-2">18</div>
                <p className="text-xl text-gray-600">Pesquisadores</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="slide-up" delay={100}>
              <div className="bg-light p-8 rounded-xl shadow-md">
                <div className="text-5xl font-heading font-bold text-secondary mb-2">9</div>
                <p className="text-xl text-gray-600">Instituições</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="slide-up" delay={200}>
              <div className="bg-light p-8 rounded-xl shadow-md">
                <div className="text-5xl font-heading font-bold text-accent mb-2">5</div>
                <p className="text-xl text-gray-600">Estados Brasileiros</p>
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
                Interesse em se juntar ao nosso time?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Estamos sempre abertos a novos pesquisadores que compartilham nossa paixão pela pesquisa qualitativa.
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

export default Researchers;
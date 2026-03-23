import { motion } from 'framer-motion';
import { BookMarked, Database, Search, Zap, CheckCircle, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';
import CandidaturasForm from '../components/forms/CandidaturasForm';

const SubcoordenacaoCuradores = () => {
  const atribuicoes = [
    'Mapeamento de artigos de alto impacto em bases de dados indexadas',
    'Seleção de produções Q1 e Q2 no Scopus e Web of Science',
    'Organização e curadoria de repositório qualitativo',
    'Coordenação com bolsistas para manutenção de banco de dados',
    'Análise temática e categorização de artigos',
    'Disseminação de conhecimento através de relatórios temáticos'
  ];

  const etapas = [
    { title: 'Pesquisa', desc: 'Busca sistemática em bases de dados científicas internacionais', icon: Search },
    { title: 'Seleção', desc: 'Critérios rigorosos para identificação de artigos relevantes', icon: Zap },
    { title: 'Armazenamento', desc: 'Organização em repositório estruturado e acessível', icon: Database },
    { title: 'Disseminação', desc: 'Distribuição de conteúdo para comunidade LAPQ', icon: BookMarked }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Curadoria Científica e Benchmarking
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
              className="text-xl font-light text-white/90"
            >
              Repositório de Artigos de Alto Impacto Qualitativo
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
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <div className="max-w-3xl mx-auto p-8 rounded-xl bg-indigo-50 border-l-4 border-indigo-600">
              <div className="flex items-start">
                <Database size={32} className="text-indigo-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-3 text-dark">
                    Responsável: A Definir
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta subcoordenação é responsável por construir e manter um repositório de literatura de alto impacto.
                    Procuramos por coordenadores e bolsistas com expertise em bases de dados científicas e organização de conhecimento.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Objetivo Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Objetivo da Subcoordenação"
              subtitle="Construir repositório de referências científicas qualitativas"
              center
            />
          </AnimatedElement>

          <div className="max-w-3xl mx-auto mt-12">
            <AnimatedElement
              className="p-8 rounded-xl bg-white border-l-4 border-indigo-600 shadow-md"
              animation="slide-up"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Coletar, organizar e disseminar artigos de alto impacto (Q1 e Q2) em bases indexadas internacionais,
                criando um repositório estruturado e acessível para pesquisadores do LAPQ. A subcoordenação funciona como
                referência bibliográfica e instrumento de benchmarking para pesquisa qualitativa.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Processo de Curadoria"
              subtitle="Como funciona o mapeamento e organização"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {etapas.map((etapa, index) => {
              const Icon = etapa.icon;
              return (
                <AnimatedElement
                  key={index}
                  className="p-6 rounded-xl bg-indigo-50 border border-indigo-200 hover:shadow-lg transition-all"
                  animation="scale-in"
                  delay={index * 100}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-indigo-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-dark mb-2">{etapa.title}</h3>
                      <p className="text-gray-700 text-sm">{etapa.desc}</p>
                    </div>
                  </div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atribuicoes Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Atribuições da Subcoordenação"
              subtitle="Responsabilidades e atividades principais"
              center
            />
          </AnimatedElement>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-4">
              {atribuicoes.map((atrib, index) => (
                <AnimatedElement
                  key={index}
                  className="p-4 rounded-lg bg-white border-l-4 border-indigo-600 flex items-start"
                  animation="slide-up"
                  delay={index * 50}
                >
                  <CheckCircle size={24} className="text-indigo-600 mr-4 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{atrib}</p>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Candidaturas Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Candidaturas Abertas"
              subtitle="Construa nossa base de conhecimento qualitativo"
              center
            />
          </AnimatedElement>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <AnimatedElement
                className="p-6 rounded-xl bg-indigo-50 border border-indigo-200"
                animation="slide-up"
              >
                <div className="flex items-center mb-4">
                  <Search size={28} className="text-indigo-600 mr-3" />
                  <h3 className="font-heading text-xl font-bold text-dark">Coordenador/Equipe</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Buscamos profissionais com experiência em:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Pesquisa em bases de dados científicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Gestão de repositórios digitais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Análise bibliométrica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Organização de conhecimento</span>
                  </li>
                </ul>
              </AnimatedElement>

              <AnimatedElement
                className="p-6 rounded-xl bg-indigo-100 border border-indigo-300"
                animation="slide-up"
                delay={100}
              >
                <div className="flex items-center mb-4">
                  <Award size={28} className="text-indigo-700 mr-3" />
                  <h3 className="font-heading text-xl font-bold text-dark">Status: A Definir</h3>
                </div>
                <p className="text-gray-800 mb-4">
                  Estamos formando a equipe responsável por este importante repositório científico.
                </p>
                <p className="text-sm text-gray-700">
                  Coordenador e equipe de bolsistas a serem definidos. Bibliógrafos, dados scientists e pesquisadores são bem-vindos!
                </p>
              </AnimatedElement>
            </div>

            <div className="max-w-2xl mx-auto">
              <CandidaturasForm subcoordenacaoNome="Coordenação Adjunta de Curadoria Científica" />
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 bg-light">
        <div className="container-custom">
          <Link
            to="/subcoordenacoes"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronRight size={18} className="mr-2 rotate-180" />
            Voltar às Subcoordenações
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SubcoordenacaoCuradores;

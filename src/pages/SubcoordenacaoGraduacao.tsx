import { motion } from 'framer-motion';
import { GraduationCap, Users, BookMarked, Lightbulb, CheckCircle, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';
import CandidaturasForm from '../components/forms/CandidaturasForm';

const SubcoordenacaoGraduacao = () => {
  const atribuicoes = [
    'Integração de disciplinas com oficinas e mentorias em pesquisa qualitativa',
    'Conexão de estudantes com trabalhos de conclusão de curso (TCCs) no LAPQ',
    'Promoção de projetos de pesquisa com participação estudantil',
    'Organização de grupos de estudo para graduandos',
    'Desenvolvimento de materiais didáticos para nível de graduação',
    'Acompanhamento do protagonismo discente em atividades do LAPQ'
  ];

  const iniciativas = [
    { title: 'Oficinas nos Cursos', desc: 'Sessões temáticas sobre métodos qualitativos em disciplinas' },
    { title: 'Mentorias', desc: 'Acompanhamento de estudantes interessados em pesquisa' },
    { title: 'TCCs Orientados', desc: 'Orientação de trabalhos de conclusão com abordagem qualitativa' },
    { title: 'Grupos de Estudo', desc: 'Grupos permanentes para aprofundamento em metodologia' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-purple-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Integração com a Graduação
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
              Protagonismo Discente e Participação Estudantil
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
            <div className="max-w-3xl mx-auto p-8 rounded-xl bg-purple-50 border-l-4 border-purple-600">
              <div className="flex items-start">
                <GraduationCap size={32} className="text-purple-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-3 text-dark">
                    Responsável: A Definir
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta subcoordenação busca aproximar o LAPQ da comunidade de graduandos. Buscamos coordenadores e equipe
                    com experiência em formação de alunos e vontade de estimular o protagonismo estudantil em pesquisa qualitativa.
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
              subtitle="Aproximar LAPQ da graduação promovendo pesquisa qualitativa"
              center
            />
          </AnimatedElement>

          <div className="max-w-3xl mx-auto mt-12">
            <AnimatedElement
              className="p-8 rounded-xl bg-white border-l-4 border-purple-600 shadow-md"
              animation="slide-up"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Integrar e promover a participação de estudantes de graduação nas atividades do LAPQ, desenvolvendo
                competências em pesquisa qualitativa desde o nível undergraduate. A subcoordenação estimula o protagonismo
                discente, oferecendo oportunidades de pesquisa, mentorias e formação metodológica contínua.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Iniciativas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Principais Iniciativas"
              subtitle="Programas e atividades para estudantes"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {iniciativas.map((init, index) => (
              <AnimatedElement
                key={index}
                className="p-6 rounded-xl bg-purple-50 border border-purple-200 hover:shadow-lg transition-all"
                animation="scale-in"
                delay={index * 100}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-purple-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <BookMarked size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-dark mb-2">{init.title}</h3>
                    <p className="text-gray-700 text-sm">{init.desc}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
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
                  className="p-4 rounded-lg bg-white border-l-4 border-purple-600 flex items-start"
                  animation="slide-up"
                  delay={index * 50}
                >
                  <CheckCircle size={24} className="text-purple-600 mr-4 mt-0.5 flex-shrink-0" />
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
              subtitle="Inspire a próxima geração de pesquisadores"
              center
            />
          </AnimatedElement>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <AnimatedElement
                className="p-6 rounded-xl bg-purple-50 border border-purple-200"
                animation="slide-up"
              >
                <div className="flex items-center mb-4">
                  <Users size={28} className="text-purple-600 mr-3" />
                  <h3 className="font-heading text-xl font-bold text-dark">Coordenador/Equipe</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Buscamos profissionais com experiência em:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Orientação de estudantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Ensino de metodologia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Desenvolvimento discente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Mentoria e coaching</span>
                  </li>
                </ul>
              </AnimatedElement>

              <AnimatedElement
                className="p-6 rounded-xl bg-purple-100 border border-purple-300"
                animation="slide-up"
                delay={100}
              >
                <div className="flex items-center mb-4">
                  <Award size={28} className="text-purple-700 mr-3" />
                  <h3 className="font-heading text-xl font-bold text-dark">Status: A Definir</h3>
                </div>
                <p className="text-gray-800 mb-4">
                  Estamos buscando coordenadores e equipe apaixonados por educação e pesquisa.
                </p>
                <p className="text-sm text-gray-700">
                  Coordenador e equipe a serem definidos. Docentes e pesquisadores com experiência em graduação são bem-vindos!
                </p>
              </AnimatedElement>
            </div>

            <div className="max-w-2xl mx-auto">
              <CandidaturasForm subcoordenacaoNome="Coordenação Adjunta de Integração com a Graduação" />
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

export default SubcoordenacaoGraduacao;

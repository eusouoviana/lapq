import { motion } from 'framer-motion';
import { Globe, Share2, Megaphone, MessageSquare, CheckCircle, Award, ChevronRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';
import TeamMemberCard from '../components/ui/TeamMemberCard';
import CandidaturasForm from '../components/forms/CandidaturasForm';

const SubcoordenacaoPublicacoes = () => {
  const atribuicoes = [
    'Gestão dos canais de comunicação do LAPQ (site, redes sociais, boletins)',
    'Divulgação de eventos, pesquisas e produções científicas',
    'Desenvolvimento de estratégias de comunicação científica',
    'Colaboração na promoção institucional junto a universidades parceiras',
    'Produção de conteúdo para visibilidade do laboratório',
    'Articulação com mídias e canais de disseminação científica'
  ];

  const canais = [
    { title: 'Website LAPQ', desc: 'Portal principal com informações sobre pesquisas e pesquisadores', icon: Globe },
    { title: 'Redes Sociais', desc: 'Instagram, LinkedIn e Facebook para engajamento com comunidade', icon: Share2 },
    { title: 'Boletim Informativo', desc: 'Newsletter mensal com destaques de pesquisas e eventos', icon: MessageSquare },
    { title: 'Divulgação Científica', desc: 'Artigos, infográficos e conteúdo para público geral', icon: Megaphone }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-green-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Coordenação de Publicações e Visibilidade
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
              Comunicação Científica e Visibilidade do LAPQ
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

      {/* Coordenadora Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Coordenadora"
              subtitle="Conheca a responsável por esta subcoordenação"
              center
            />
          </AnimatedElement>

          <div className="max-w-md mx-auto mt-12">
            <TeamMemberCard
              nome="Profa. Dra. Erika Borges Ferreira"
              titulo="Professora e Pesquisadora"
              instituicao="Universidade Presbiteriana Mackenzie (UPM)"
              email="erika.ferreira@mackenzie.br"
              lattes="http://lattes.cnpq.br"
              tipo="coordenador"
            />
          </div>
        </div>
      </section>

      {/* Objetivo Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Objetivo da Subcoordenação"
              subtitle="Amplificar a visibilidade científica do LAPQ"
              center
            />
          </AnimatedElement>

          <div className="max-w-3xl mx-auto mt-12">
            <AnimatedElement
              className="p-8 rounded-xl bg-white border-l-4 border-green-600 shadow-md"
              animation="slide-up"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Gerenciar a comunicação científica do LAPQ, promovendo a visibilidade de suas atividades, pesquisas
                e pesquisadores através de múltiplos canais. A subcoordenação trabalha para posicionar o laboratório
                como referência em pesquisa qualitativa, facilitando o diálogo entre a comunidade científica e o público geral.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Canais de Comunicacao */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Canais de Comunicação"
              subtitle="Plataformas utilizadas para divulgação"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {canais.map((canal, index) => {
              const Icon = canal.icon;
              return (
                <AnimatedElement
                  key={index}
                  className="p-6 rounded-xl bg-green-50 border border-green-200 hover:shadow-lg transition-all"
                  animation="scale-in"
                  delay={index * 100}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-dark mb-2">{canal.title}</h3>
                      <p className="text-gray-700 text-sm">{canal.desc}</p>
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
                  className="p-4 rounded-lg bg-white border-l-4 border-green-600 flex items-start"
                  animation="slide-up"
                  delay={index * 50}
                >
                  <CheckCircle size={24} className="text-green-600 mr-4 mt-0.5 flex-shrink-0" />
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
              subtitle="Junte-se à equipe de comunicação do LAPQ"
              center
            />
          </AnimatedElement>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <AnimatedElement
                className="p-6 rounded-xl bg-green-50 border border-green-200"
                animation="slide-up"
              >
                <div className="flex items-center mb-4">
                  <Share2 size={28} className="text-green-600 mr-3" />
                  <h3 className="font-heading text-xl font-bold text-dark">Equipe</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Buscamos profissionais com experiência em:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Comunicação científica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Gestão de redes sociais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Marketing digital e conteúdo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Design e produção audiovisual</span>
                  </li>
                </ul>
              </AnimatedElement>

              <AnimatedElement
                className="p-6 rounded-xl bg-green-100 border border-green-300"
                animation="slide-up"
                delay={100}
              >
                <div className="flex items-center mb-4">
                  <Award size={28} className="text-green-700 mr-3" />
                  <h3 className="font-heading text-xl font-bold text-dark">Status: A Definir</h3>
                </div>
                <p className="text-gray-800 mb-4">
                  A equipe desta subcoordenação está sendo formada através de candidaturas abertas.
                </p>
                <p className="text-sm text-gray-700">
                  Pesquisadores do LAPQ vinculados às IES parceiras podem se candidatar como coordenadores ou membros da equipe.
                </p>
              </AnimatedElement>
            </div>

            <div className="max-w-2xl mx-auto">
              <CandidaturasForm subcoordenacaoNome="Coordenação Adjunta de Publicações e Visibilidade" />
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

export default SubcoordenacaoPublicacoes;

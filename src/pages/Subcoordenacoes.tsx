import { motion } from 'framer-motion';
import { Users, Zap, BookOpen, GraduationCap, Award, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';
import SubcoordenacaoCard from '../components/ui/SubcoordenacaoCard';

const Subcoordenacoes = () => {
  const subcoordenacoes = [
    {
      id: '1',
      nome: 'Coordenação Adjunta de Formação - INTERLAPQ',
      slug: 'interlapq',
      descricao: 'Coordenadora: Profa. Dra. Umbelina Lagioia. Capacitação em métodos qualitativos via oficinas.',
      coordenador: {
        nome: 'Profa. Dra. Umbelina Lagioia',
        instituicao: 'UFPE'
      },
      icon: Zap,
      background: 'bg-blue-50'
    },
    {
      id: '2',
      nome: 'Coordenação Adjunta de Publicações e Visibilidade',
      slug: 'publicacoes',
      descricao: 'Coordenadora: Profa. Dra. Erika Borges Ferreira. Comunicação científica e visibilidade.',
      coordenador: {
        nome: 'Profa. Dra. Erika Borges Ferreira',
        instituicao: 'UPM'
      },
      icon: BookOpen,
      background: 'bg-green-50'
    },
    {
      id: '3',
      nome: 'Coordenação Adjunta de Projetos e Parcerias Interinstitucionais',
      slug: 'projetos',
      descricao: 'Responsável a definir. Articular redes e parcerias para sustentabilidade.',
      coordenador: undefined,
      icon: Briefcase,
      background: 'bg-orange-50'
    },
    {
      id: '4',
      nome: 'Coordenação Adjunta de Integração com a Graduação',
      slug: 'graduacao',
      descricao: 'Responsável a definir. Protagonismo discente e participação estudantil em pesquisa.',
      coordenador: undefined,
      icon: GraduationCap,
      background: 'bg-purple-50'
    },
    {
      id: '5',
      nome: 'Coordenação Adjunta de Curadoria Científica e Benchmarking',
      slug: 'curadores',
      descricao: 'Responsável a definir. Repositório de artigos de alto impacto qualitativo.',
      coordenador: undefined,
      icon: Award,
      background: 'bg-indigo-50'
    }
  ];

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
              Subcoordenações do LAPQ
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
              Estrutura de subcoordenações para melhorar gestão, formação e divulgação do LAPQ
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

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement className="max-w-3xl mx-auto">
            <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
              <h2 className="font-heading text-2xl font-bold mb-4 text-dark flex items-center">
                <Users size={28} className="text-primary mr-3" />
                O que são as Subcoordenações?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As subcoordenações são estruturas adjuntas à Coordenação Geral do LAPQ, criadas para melhorar a gestão,
                formação continuada, visibilidade científica e integração com a graduação. Cada subcoordenação possui
                objetivos e atribuições específicas, funcionando de forma integrada com a coordenação principal.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Todas as subcoordenações atuam com relatórios semestrais e estão abertas para candidaturas de pesquisadores
                do LAPQ. As designações são realizadas via declaração das instituições parceiras.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Subcoordenacoes Grid */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Nossas Subcoordenações"
              subtitle="Conheça as principais estruturas que compõem o LAPQ"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {subcoordenacoes.map((sub, index) => (
              <SubcoordenacaoCard
                key={sub.id}
                id={sub.id}
                nome={sub.nome}
                slug={sub.slug}
                descricao={sub.descricao}
                coordenador={sub.coordenador}
                delay={index}
                background={sub.background}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Candidaturas Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Oportunidades de Participação"
              subtitle="Todas as subcoordenações estão com candidaturas abertas"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <AnimatedElement
              className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
              animation="slide-up"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary mb-4">
                <Zap size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-dark">
                Coordenador ou Membro
              </h3>
              <p className="text-gray-700 mb-6">
                Pesquisadores vinculados ao LAPQ podem se candidatar para coordenar ou integrar qualquer uma das subcoordenações.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Aberta para pesquisadores de todas as IES</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Designação via declaração institucional</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Relatórios semestrais obrigatórios</span>
                </li>
              </ul>
            </AnimatedElement>

            <AnimatedElement
              className="p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
              animation="slide-up"
              delay={100}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/20 text-secondary mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-dark">
                Próximos Passos
              </h3>
              <p className="text-gray-700 mb-6">
                Explore cada subcoordenação em detalhes e conheça seus objetivos, atribuições e coordenadores.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Clique em qualquer subcoordenação para detalhes</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Preencha o formulário de candidatura</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Análise será realizada pela coordenação</span>
                </li>
              </ul>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Pronto para fazer parte do LAPQ?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Explore as subcoordenações e descubra como você pode contribuir para o avanço da pesquisa qualitativa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/sobre"
                  className="btn bg-white text-dark hover:bg-white/90"
                >
                  Sobre o LAPQ <ChevronRight size={18} className="ml-2" />
                </Link>
                <a
                  href="mailto:contato@lapq.org.br"
                  className="btn btn-outline border-white text-white hover:bg-white/10"
                >
                  Entre em Contato <ChevronRight size={18} className="ml-2" />
                </a>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subcoordenacoes;

import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Users, Calendar, Award, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';

const DisposicoesGerais = () => {
  const disposicoes = [
    {
      title: 'Funcionamento das Subcoordenações',
      items: [
        'As subcoordenações funcionam de forma integrada com a Coordenação Geral do LAPQ',
        'Cada subcoordenação possui autonomia para desenvolvimento de suas atividades',
        'Reuniões de integração são realizadas regularmente para sincronização de ações',
        'Decisões estratégicas envolvem a Coordenação Geral e representantes das subcoordenações'
      ]
    },
    {
      title: 'Relatórios e Avaliação',
      items: [
        'Relatórios semestrais obrigatórios sobre atividades e resultados',
        'Avaliação contínua do desempenho e impacto das subcoordenações',
        'Apresentação de resultados em reuniões gerais do LAPQ',
        'Preenchimento de formulários padronizados de monitoramento'
      ]
    },
    {
      title: 'Designações e Autoridade',
      items: [
        'Designações de coordenadores realizadas via declaração institucional das universidades parceiras',
        'Autorização para uso de logomarcas do LAPQ em publicações e atividades',
        'Reconhecimento oficial do coordenador e equipe em documentos do laboratório',
        'Validade das designações por período a ser definido pela Coordenação Geral'
      ]
    },
    {
      title: 'Elegibilidade e Candidaturas',
      items: [
        'Todos os pesquisadores vinculados ao LAPQ podem se candidatar',
        'Pesquisadores de qualquer instituição parceira são bem-vindos',
        'Não há restrições de área de conhecimento para candidaturas',
        'Processo de seleção transparente e baseado em critérios pré-estabelecidos'
      ]
    }
  ];

  const principios = [
    { title: 'Colaboração', desc: 'Trabalho integrado entre subcoordenações e com a coordenação principal' },
    { title: 'Transparência', desc: 'Comunicação clara de objetivos, atividades e resultados' },
    { title: 'Inclusão', desc: 'Acesso aberto para pesquisadores de diferentes instituições e áreas' },
    { title: 'Excelência', desc: 'Compromisso com qualidade nas atividades desenvolvidas' },
    { title: 'Inovação', desc: 'Estímulo a novas abordagens e iniciativas científicas' },
    { title: 'Sustentabilidade', desc: 'Construção de estruturas duráveis e de longo prazo' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Disposições Gerais
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
              Normas e procedimentos das Subcoordenações do LAPQ
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

      {/* Princípios */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Princípios Norteadores"
              subtitle="Valores que guiam as subcoordenações"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {principios.map((principio, index) => (
              <AnimatedElement
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all"
                animation="scale-in"
                delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <Award size={24} />
                </div>
                <h3 className="font-heading font-bold text-dark mb-2">{principio.title}</h3>
                <p className="text-gray-700 text-sm">{principio.desc}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Disposições */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Normas e Procedimentos"
              subtitle="Regulamentação das subcoordenações"
              center
            />
          </AnimatedElement>

          <div className="max-w-4xl mx-auto mt-12 space-y-8">
            {disposicoes.map((secao, index) => (
              <AnimatedElement
                key={index}
                className="p-8 rounded-xl bg-light border border-gray-200"
                animation="slide-up"
                delay={index * 100}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-4 text-dark">
                      {index + 1}. {secao.title}
                    </h3>
                    <ul className="space-y-3">
                      {secao.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-700">
                          <CheckCircle size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Candidaturas */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Processo de Candidatura"
              subtitle="Como se candidatar para as subcoordenações"
              center
            />
          </AnimatedElement>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Explorar as Subcoordenações',
                  desc: 'Conheça os objetivos, atribuições e estrutura de cada subcoordenação disponível'
                },
                {
                  step: 2,
                  title: 'Preencher Formulário',
                  desc: 'Complete o formulário de candidatura com informações sobre sua experiência e motivações'
                },
                {
                  step: 3,
                  title: 'Submeter Candidatura',
                  desc: 'Envie seu formulário através da plataforma ou diretamente à Coordenação Geral'
                },
                {
                  step: 4,
                  title: 'Análise e Seleção',
                  desc: 'A Coordenação Geral analisará as candidaturas e realizará contato para discussão'
                },
                {
                  step: 5,
                  title: 'Designação Oficial',
                  desc: 'Após aprovação, será emitida declaração oficial da instituição parceira designando você'
                }
              ].map((step) => (
                <AnimatedElement
                  key={step.step}
                  className="p-6 rounded-xl bg-white border border-gray-200 flex items-start"
                  animation="slide-up"
                  delay={(step.step - 1) * 100}
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-dark mb-1">{step.title}</h4>
                    <p className="text-gray-700 text-sm">{step.desc}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <div className="max-w-3xl mx-auto p-8 rounded-xl bg-primary/5 border border-primary/20 text-center">
              <h3 className="font-heading text-2xl font-bold mb-4 text-dark">
                Dúvidas sobre as Subcoordenações?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Entre em contato com a Coordenação Geral do LAPQ para esclarecimentos sobre as subcoordenações,
                processo de candidatura ou qualquer outra informação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contato@lapq.org.br"
                  className="btn btn-primary inline-flex items-center justify-center"
                >
                  <BookOpen size={18} className="mr-2" />
                  Enviar Email
                </a>
                <Link
                  to="/subcoordenacoes"
                  className="btn btn-outline border-primary text-primary inline-flex items-center justify-center"
                >
                  Voltar às Subcoordenações <ChevronRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default DisposicoesGerais;

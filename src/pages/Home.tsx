import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, ChevronRight, LineChart, BookOpen as BookOpenIcon, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';

const stats = [
  { icon: 'book', number: "50+", label: "Artigos Publicados" },
  { icon: 'users', number: "18", label: "Pesquisadores" },
  { icon: 'award', number: "12", label: "Instituições Parceiras" },
  { icon: 'chart', number: "25+", label: "Projetos de Pesquisa" },
];

const researchAreas = [
  { title: "Contabilidade Gerencial", desc: "Pesquisas qualitativas sobre sistemas de controle gerencial e tomada de decisão", bg: "bg-primary/20" },
  { title: "Controladoria Empresarial", desc: "Estudos sobre práticas de controladoria e seu impacto nas organizações", bg: "bg-secondary/20" },
  { title: "Governança Corporativa", desc: "Análise de mecanismos de governança e transparência empresarial", bg: "bg-accent/20" },
  { title: "Contabilidade Pública", desc: "Investigações sobre gestão e controle de recursos públicos", bg: "bg-green-500/20" },
  { title: "Finanças Empresariais", desc: "Pesquisas sobre estratégias financeiras e criação de valor", bg: "bg-yellow-500/20" },
  { title: "Metodologias Qualitativas", desc: "Desenvolvimento e aprimoramento de métodos qualitativos de pesquisa", bg: "bg-purple-500/20" },
];

const featuredResearchers = [
  { name: "Prof. Dra. Ana Lúcia Fontes de Souza Vasconcelos", institution: "Universidade Federal de Pernambuco (UFPE)", lattes: "http://lattes.cnpq.br/6786196161894864" },
  { name: "Prof. Dr. Cláudio de Araújo Wanderley", institution: "Universidade Federal de Pernambuco (UFPE)", lattes: "http://lattes.cnpq.br/0634283724256002" },
  { name: "Prof. Dr. Davi Jônatas Cunha Araújo", institution: "Universidade Presbiteriana Mackenzie (UPM)", lattes: "http://lattes.cnpq.br/6065443356879996" },
];

const statIcons: Record<string, React.ReactNode> = {
  book: <BookOpenIcon size={30} />,
  users: <Users size={30} />,
  award: <Award size={30} />,
  chart: <LineChart size={30} />,
};

const missionItems = [
  { icon: <BookOpen size={20} />, text: "Promover pesquisas qualitativas de alta qualidade" },
  { icon: <Users size={20} />, text: "Integrar pesquisadores de diversas instituições" },
  { icon: <LineChart size={20} />, text: "Desenvolver metodologias inovadoras de pesquisa" },
  { icon: <Award size={20} />, text: "Contribuir para o avanço do conhecimento em Contabilidade" },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-dark/75"></div>
        <div className="container-custom relative z-10 text-white py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
              Laboratório de Avaliação e Pesquisa Qualitativa
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xl md:text-2xl font-light mb-8 text-gray-200"
            >
              Um espaço coletivo multi(inter)disciplinar dedicado à pesquisa qualitativa em Controladoria e Finanças Empresariais
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/sobre" className="btn btn-primary">
                Conheça o LAPQ
              </Link>
              <Link to="/pesquisas" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
                Nossas Pesquisas
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <div className="animate-bounce">
            <ChevronRight size={30} className="text-white rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Sobre o LAPQ"
              subtitle="Conheça nosso laboratório dedicado à excelência em pesquisa qualitativa na área de Controladoria e Finanças Empresariais"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <AnimatedElement className="lg:col-span-3" animation="slide-up">
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                O Laboratório de Avaliação e Pesquisa Qualitativa (LAPQ) é um espaço coletivo Multi(inter)disciplinar vinculado aos Programas de Pós-graduação em Controladoria e Finanças Empresarias – PPGCFE, como proponentes, e formado por: acadêmicos, pesquisadores, estudantes de graduação e pós-graduação de várias Instituições de Ensino Superior (IES) nacionais e internacionais.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Nosso laboratório também integra Universidades Corporativas que queiram estudar o tema de forma prática com interesse na abordagem qualitativa fundamentadas no enfoque crítico-qualitativo, articulando-se com redes de pesquisa.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Coordenado por dois professores das Universidades: Universidade Presbiteriana Mackenzie (UPM) e a Universidade Federal de Pernambuco (UFPE), pelo convênio de cooperação técnica No 216/2022 – GR (11.01).
              </p>
              <div className="mt-8">
                <Link to="/sobre" className="btn btn-primary inline-flex items-center">
                  Saiba Mais <ChevronRight size={18} className="ml-2" />
                </Link>
              </div>
            </AnimatedElement>
            
            <AnimatedElement className="lg:col-span-2" animation="slide-in-right" delay={200}>
              <div className="rounded-xl overflow-hidden h-full relative bg-primary/5 p-8 border border-primary/20 shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-primary">Nossa Missão</h3>
                <ul className="space-y-4">
                  {missionItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-4 text-primary">
                        {item.icon}
                      </div>
                      <div className="text-gray-700">{item.text}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedElement 
                key={index} 
                animation="scale-in" 
                delay={index * 100}
                className="text-center p-8 rounded-xl border border-gray-100 shadow-md bg-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {statIcons[stat.icon]}
                </div>
                <h3 className="text-4xl font-heading font-bold text-dark mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <AnimatedElement>
            <SectionTitle 
              title="Áreas de Pesquisa"
              subtitle="Conheça nossas principais áreas de atuação em pesquisa qualitativa"
              center
              light
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <AnimatedElement key={index} animation="fade-in" delay={index * 100}>
                <div className={`p-8 rounded-xl ${area.bg} h-full border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
                  <h3 className="text-xl font-heading font-bold mb-4">{area.title}</h3>
                  <p className="text-gray-300 mb-4">{area.desc}</p>
                  <Link to="/pesquisas" className="text-secondary hover:text-white transition-colors inline-flex items-center">
                    Saiba mais <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Researchers */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Nossos Pesquisadores"
              subtitle="Conheça os principais pesquisadores que compõem o LAPQ"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResearchers.map((researcher, index) => (
              <AnimatedElement key={index} animation="slide-up" delay={index * 100}>
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
                      href={researcher.lattes} 
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

          <div className="text-center mt-12">
            <Link to="/pesquisadores" className="btn btn-primary">
              Ver Todos os Pesquisadores
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedElement>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Interessado em colaborar com nossas pesquisas?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Junte-se a nós em nosso laboratório e contribua para o avanço do conhecimento em pesquisa qualitativa.
              </p>
              <a 
                href="mailto:contato@lapq.org.br" 
                className="btn bg-white text-primary hover:bg-white/90 shadow-xl"
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

export default Home;
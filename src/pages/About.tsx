import { motion } from 'framer-motion';
import { BookOpen, Award, Users, ChevronRight, Check, BookOpen as BookOpenIcon } from 'lucide-react';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';

const missionPoints = [
  "Promover a pesquisa qualitativa de alta qualidade",
  "Desenvolver metodologias inovadoras",
  "Formar pesquisadores qualificados",
  "Integrar diferentes perspectivas acadêmicas",
];

const visionPoints = [
  "Ser referência nacional em pesquisa qualitativa",
  "Alcançar reconhecimento internacional",
  "Influenciar práticas profissionais e políticas públicas",
  "Criar uma rede colaborativa de excelência",
];

const values = [
  { title: "Rigor Científico", desc: "Compromisso com a qualidade e rigor metodológico em todas as pesquisas desenvolvidas", icon: <BookOpen size={30} />, color: "primary" },
  { title: "Integridade", desc: "Condução ética e responsável de todos os processos de pesquisa", icon: <Award size={30} />, color: "secondary" },
  { title: "Colaboração", desc: "Valorização do trabalho em equipe e das parcerias inter-institucionais", icon: <Users size={30} />, color: "accent" },
  { title: "Inovação", desc: "Busca contínua por abordagens metodológicas inovadoras", icon: <BookOpenIcon size={30} />, color: "green-500" },
  { title: "Relevância", desc: "Desenvolvimento de pesquisas com impacto acadêmico e prático", icon: <Award size={30} />, color: "yellow-500" },
  { title: "Inclusão", desc: "Valorização da diversidade de perspectivas e backgrounds", icon: <Users size={30} />, color: "purple-500" },
];

const timelineEvents = [
  { year: "2022", title: "Fundação do LAPQ", desc: "Assinatura do convênio de cooperação técnica No 216/2022 – GR (11.01) entre a UPM e a UFPE" },
  { year: "2022", title: "Primeiros Projetos", desc: "Início dos primeiros projetos de pesquisa qualitativa em Controladoria" },
  { year: "2023", title: "Expansão da Rede", desc: "Integração de pesquisadores de diversas instituições nacionais" },
  { year: "2024", title: "Internacionalização", desc: "Estabelecimento de parcerias com instituições internacionais" },
  { year: "2025", title: "Visão Futura", desc: "Consolidação como centro de referência em pesquisa qualitativa no Brasil" },
];

const partnerUniversities = ["UNIFESP", "UFPB", "UFSC", "USP", "USCS", "UNIFECAP"];

const About = () => {
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
              Sobre o LAPQ
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
              Conheça nossa história, missão e visão
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

      {/* Main About Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <AnimatedElement className="lg:col-span-2" animation="slide-up">
              <h2 className="font-heading text-3xl font-bold mb-6 text-dark">Laboratório de Avaliação e Pesquisa Qualitativa</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                O Laboratório de Avaliação e Pesquisa Qualitativa (LAPQ) é um espaço coletivo Multi(inter)disciplinar vinculado aos Programas de Pós-graduação em Controladoria e Finanças Empresarias – PPGCFE, como proponentes, e formado por: acadêmicos, pesquisadores, estudantes de graduação e pós-graduação de várias Instituições de Ensino Superior (IES) nacionais e internacionais.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Nosso laboratório também integra Universidades Corporativas que queiram estudar o tema de forma prática com interesse na abordagem qualitativa fundamentadas no enfoque crítico-qualitativo, articulando-se com redes de pesquisa.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Coordenado por dois professores das Universidades: Universidade Presbiteriana Mackenzie (UPM) e a Universidade Federal de Pernambuco (UFPE), pelo convênio de cooperação técnica No 216/2022 – GR (11.01).
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-in-right" delay={200}>
              <div className="h-full w-full rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Laboratório de Pesquisa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Nossa Missão e Visão"
              subtitle="Compromisso com a excelência em pesquisa qualitativa"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <AnimatedElement animation="slide-up">
              <div className="bg-white h-full p-8 rounded-xl shadow-md border-t-4 border-primary">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <BookOpenIcon size={30} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-dark">Missão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Promover e desenvolver pesquisas qualitativas de excelência na área de Controladoria e Finanças Empresariais, integrando diferentes perspectivas metodológicas e formando pesquisadores capacitados para contribuir com o avanço do conhecimento científico e prático.
                </p>
                <ul className="mt-6 space-y-3">
                  {missionPoints.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={200}>
              <div className="bg-white h-full p-8 rounded-xl shadow-md border-t-4 border-secondary">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                  <Users size={30} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-dark">Visão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecido nacional e internacionalmente como um centro de referência em pesquisa qualitativa na área de Controladoria e Finanças Empresariais, contribuindo para o desenvolvimento teórico e prático do campo e formando líderes acadêmicos e profissionais.
                </p>
                <ul className="mt-6 space-y-3">
                  {visionPoints.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Nossos Valores"
              subtitle="Princípios que guiam nossa atuação acadêmica e científica"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <AnimatedElement key={index} animation="scale-in" delay={index * 100}>
                <div className={`p-8 rounded-xl bg-${value.color}/5 border border-${value.color}/20 h-full transition-all duration-300 hover:shadow-lg`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${value.color}/10 text-${value.color} mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-dark">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Instituições Parceiras"
              subtitle="Conheça as instituições que colaboram com o LAPQ"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimatedElement animation="slide-up">
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <BookOpenIcon size={30} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dark">Universidade Presbiteriana Mackenzie (UPM)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Instituição privada de ensino superior brasileira, mantida pelo Instituto Presbiteriano Mackenzie. Fundada em 1870, é uma das mais tradicionais e reconhecidas universidades do Brasil.
                </p>
                <div className="flex items-center justify-between mt-6">
                  <a 
                    href="https://www.mackenzie.br" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                  >
                    Visitar website <ChevronRight size={16} className="ml-1" />
                  </a>
                  <div className="bg-white p-2 rounded-lg border border-gray-100">
                    <img src="/logo_mackenzie.png" alt="Logo Mackenzie" className="h-10" />
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <BookOpenIcon size={30} className="text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dark">Universidade Federal de Pernambuco (UFPE)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Uma das mais importantes universidades públicas do Brasil, a UFPE destaca-se por sua excelência em pesquisa e ensino, especialmente nas áreas de ciências sociais aplicadas.
                </p>
                <div className="flex items-center justify-between mt-6">
                  <a 
                    href="https://www.ufpe.br" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center"
                  >
                    Visitar website <ChevronRight size={16} className="ml-1" />
                  </a>
                  <div className="bg-white p-2 rounded-lg border border-gray-100">
                    <img src="/logo_ufpe.png" alt="Logo UFPE" className="h-10" />
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div className="mt-12">
            <AnimatedElement animation="slide-up" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <BookOpenIcon size={30} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dark">Instituto Politécnico da Guarda (IPG)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  O Instituto Politécnico da Guarda é uma instituição de ensino superior pública portuguesa que oferece formação de qualidade nas áreas de tecnologia, gestão, educação, saúde e turismo.
                </p>
                <div className="flex items-center justify-between mt-6">
                  <a 
                    href="https://www.ipg.pt" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:text-accent/80 transition-colors inline-flex items-center"
                  >
                    Visitar website <ChevronRight size={16} className="ml-1" />
                  </a>
                  <div className="bg-white p-2 rounded-lg border border-gray-100">
                    <img src="/logo_ipg.png" alt="Logo IPG" className="h-10" />
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Além destas, contamos com a colaboração de diversas outras instituições nacionais e internacionais</p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {partnerUniversities.map((uni, index) => (
                <AnimatedElement key={index} animation="fade-in" delay={index * 100}>
                  <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                    <span className="font-medium text-gray-800">{uni}</span>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Nossa História"
              subtitle="Uma linha do tempo com os principais marcos do LAPQ"
              center
            />
          </AnimatedElement>

          <div className="mt-16 relative">
            {/* Timeline center line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/20 transform -translate-x-1/2"></div>
            
            {/* Timeline events */}
            <div className="relative">
              {timelineEvents.map((event, index) => (
                <AnimatedElement 
                  key={index} 
                  animation={index % 2 === 0 ? "slide-in-right" : "slide-up"}
                  delay={index * 150}
                  className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className={`inline-block px-4 py-2 rounded-lg ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} font-medium mb-3`}>
                      {event.year}
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.desc}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-5 h-5 rounded-full border-4 ${index % 2 === 0 ? 'border-primary bg-white' : 'border-secondary bg-white'}`}></div>
                  </div>
                  <div className="w-1/2"></div>
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
                Faça parte do LAPQ
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Estamos sempre abertos a novas colaborações e parcerias. Entre em contato e saiba como participar.
              </p>
              <a 
                href="mailto:contato@qualitativeresearch.com.br" 
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

export default About;
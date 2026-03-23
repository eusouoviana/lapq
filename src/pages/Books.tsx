import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';

const Books = () => {
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
              Livros
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
              Referências essenciais em pesquisa qualitativa
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

      {/* Books Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Referências Bibliográficas"
              subtitle="Livros essenciais para pesquisa qualitativa em negócios"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Book 1 */}
            <AnimatedElement animation="slide-up">
              <div className="bg-light rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-primary/10 flex items-center justify-center p-8">
                  <BookOpen size={80} className="text-primary" />
                </div>
                <div className="p-8">
                  <a 
                    href="https://www.igi-global.com/book/exploring-qualitative-research-business/349235#table-of-contents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
                  >
                    <h3 className="font-heading text-2xl font-bold">
                      Exploring Qualitative Research in Business: Approaches, Strategies, And Methods
                    </h3>
                    <ExternalLink size={20} className="ml-2 flex-shrink-0" />
                  </a>
                  
                  <p className="text-gray-700 mb-6">
                    Uma obra fundamental que explora abordagens, estratégias e métodos de pesquisa qualitativa aplicados ao contexto empresarial. O livro oferece insights valiosos sobre como conduzir pesquisas qualitativas eficazes em ambientes organizacionais, apresentando metodologias contemporâneas e casos práticos.
                  </p>
                  
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Editora:</strong> IGI Global</p>
                    <p><strong>Relevância:</strong> Material essencial para pesquisadores que buscam compreender e aplicar métodos qualitativos em estudos organizacionais e empresariais.</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Book 2 */}
            <AnimatedElement animation="slide-up" delay={200}>
              <div className="bg-light rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-secondary/10 flex items-center justify-center p-8">
                  <BookOpen size={80} className="text-secondary" />
                </div>
                <div className="p-8">
                  <a 
                    href="https://www.igi-global.com/book/evolving-designs-applications-technological-advances/377834#table-of-contents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors mb-4"
                  >
                    <h3 className="font-heading text-2xl font-bold">
                      Evolving Designs, Applications, Technological Advances, and the Future of Qualitative Research
                    </h3>
                    <ExternalLink size={20} className="ml-2 flex-shrink-0" />
                  </a>
                  
                  <p className="text-gray-700 mb-6">
                    Este livro aborda as tendências emergentes e avanços tecnológicos na pesquisa qualitativa, explorando como as novas ferramentas e métodos estão transformando a maneira como conduzimos investigações qualitativas. A obra é especialmente relevante no contexto atual de rápida evolução tecnológica.
                  </p>
                  
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Editora:</strong> IGI Global</p>
                    <p><strong>Relevância:</strong> Fundamental para pesquisadores interessados em métodos inovadores e no futuro da pesquisa qualitativa, especialmente em contextos digitais e tecnológicos.</p>
                  </div>
                </div>
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
                Quer sugerir outras referências?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Entre em contato conosco para sugerir livros e materiais relevantes para nossa biblioteca de referências.
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

export default Books;
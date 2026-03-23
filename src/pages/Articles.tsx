import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, ExternalLink, Calendar, Users, BookOpen, Filter } from 'lucide-react';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';

interface Article {
  id: number;
  title: string;
  link: string;
}

const Articles = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "Alsharari (2019) Management accounting and organizational change - alternative perspectives",
      link: "https://mackenzie.br/fileadmin/user_upload/Alsharari__2019__Management_accounting_and_organizational_change_-_alternative_perspectives.pdf"
    },
    {
      id: 2,
      title: "Basu (2012) How Can Accounting Researchers Become More Innovative",
      link: "https://mackenzie.br/fileadmin/user_upload/Basu__2012__How_Can_Accounting_Researchers_Become_More_Innovative.pdf"
    },
    {
      id: 3,
      title: "Bispo & Gherardi (2019) Flesh-and-blood knowing - Interpreting qualitative data through embodied practice-based research",
      link: "https://mackenzie.br/fileadmin/user_upload/Bispo___Gherardi__2019__Flesh-and-blood_knowing_-_Interpreting_qualitative_data_through_embodied_practice-based_research.pdf"
    },
    {
      id: 4,
      title: "Bradley et al. (2007) Qualitative Data Analysis for Health Services Research",
      link: "https://mackenzie.br/fileadmin/user_upload/Bradley_et_al.__2007__Qualitative_Data_Analysis_for_Health_Services_Research.pdf"
    },
    {
      id: 5,
      title: "Breton & Taffler (2001) Accounting information and analyst stock recommendation decisions-a content analysis",
      link: "https://mackenzie.br/fileadmin/user_upload/Breton___Taffler__2001__Accounting_information_and_analyst_stock_recommendation_decisions-a_content_analysis.pdf"
    },
    {
      id: 6,
      title: "Busetto et al. (2020) How to use and assess qualitative research methods",
      link: "https://mackenzie.br/fileadmin/user_upload/Busetto_et_al.__2020__How_to_use_and_assess_qualitative_research_methods.pdf"
    },
    {
      id: 7,
      title: "Cepellos & Tonelli (2020) Grounded theory - passo a passo e questões metodologicas na pratica",
      link: "https://mackenzie.br/fileadmin/user_upload/Cepellos___Tonelli__2020__Grounded_theory_-_passo_a_passo_e_quest%C3%B5es_metodologicas_na_pratica.pdf"
    },
    {
      id: 8,
      title: "Gurd (2008) Remaining consistent with method - an analysis of grounded theory research in accounting",
      link: "https://mackenzie.br/fileadmin/user_upload/Gurd__2008__Remaining_consistent_with_method_-_an_analysis_of_grounded_theory_research_in_accounting.pdf"
    },
    {
      id: 9,
      title: "Sousa (2014) Validation in Qualitative Research",
      link: "https://mackenzie.br/fileadmin/user_upload/Sousa__2014__Validation_in_Qualitative_Research.pdf"
    },
    {
      id: 10,
      title: "Santos et al. (2021) A Qualitative Method Proposal for the Study of Strategy as Practice",
      link: "https://mackenzie.br/fileadmin/user_upload/Santos_et_al.__2021__A_Qualitative_Method_Proposal_for_the_Study_of_Strategy_as_Practice.pdf"
    },
    {
      id: 11,
      title: "Lukka & Suomala (2014) Relevant Intervencionist Research Balancing Intellectual Virtues",
      link: "https://mackenzie.br/fileadmin/user_upload/Lukka___Suomala__2014__Relevant_Intervencionist_Research_Balancing_Intellectual_Virtues.pdf"
    },
    {
      id: 12,
      title: "Hoque et al. (2013) Theoretical triangulation and pluralism in research methods in organizational and accounting",
      link: "https://mackenzie.br/fileadmin/user_upload/Hoque_et_al.__2013__Theoretical_triangulation_and_pluralism_in_research_methods_in_organizational_and_accounting.pdf"
    },
    {
      id: 13,
      title: "Liu & Pan (2007) The implementation of ABC in China - An innovation action research approach",
      link: "https://mackenzie.br/fileadmin/user_upload/Liu___Pan__2007__The_implementation_of_ABC_in_China_-_An_innovation_action_research_approach.pdf"
    },
    {
      id: 14,
      title: "Oyadomari et al. (2023) Relationships among strategically aligned performance indicators, controls, and performance",
      link: "https://mackenzie.br/fileadmin/user_upload/Oyadomari_et_al.__2023__Relationships_among_strategically_aligned_performance_indicators__controls__and_performance.pdf"
    },
    {
      id: 15,
      title: "Lukka & Wouters (2022) Towards interventionist research with theoretical ambition",
      link: "https://mackenzie.br/fileadmin/user_upload/Lukka___Wouters__2022__Towards_interventionist_research_with_theoretical_ambition.pdf"
    },
    {
      id: 16,
      title: "Bluhm et al. (2011) Qualitative Research in Management - A Decade of Progress",
      link: "https://mackenzie.br/fileadmin/user_upload/Bluhm_et_al.__2011__Qualitative_Research_in_Management_-_A_Decade_of_Progress.pdf"
    },
    {
      id: 17,
      title: "Clifford (1983) On Ethnographic Authority",
      link: "https://mackenzie.br/fileadmin/user_upload/Clifford__1983__On_Ethnographic_Authority.pdf"
    },
    {
      id: 18,
      title: "Jemielniak & Kostera (2010) Narratives of Irony and Failure in Ethnographic Work",
      link: "https://mackenzie.br/fileadmin/user_upload/Jemielniak___Kostera__2010__Narratives_of_Irony_and_Failure_in_Ethnographic_Work.pdf"
    },
    {
      id: 19,
      title: "Eisenhardt (1989) Building Theories From Cases Studies",
      link: "https://mackenzie.br/fileadmin/user_upload/Eisenhardt__1989__Building_Theories_From_Cases_Studies.pdf"
    },
    {
      id: 20,
      title: "Eisenhardt (2021) What is the Eisenhardt Method, really",
      link: "https://mackenzie.br/fileadmin/user_upload/Eisenhardt__2021__What_is_the_Eisenhardt_Method__really.pdf"
    },
    {
      id: 21,
      title: "Decoene & Bruggeman (2006) Strategic alignment and middle-level managers' motivation in a balanced scorecard setting",
      link: "https://mackenzie.br/fileadmin/user_upload/Decoene___Bruggeman__2006__Strategic_alignment_and_middle-level_managers%E2%80%99_motivation_in_a_balanced_scorecard_setting.pdf"
    },
    {
      id: 22,
      title: "Mohajan (2018) Qualitative Research Methodology in Social Sciences and Related Subjects",
      link: "https://mackenzie.br/fileadmin/user_upload/Mohajan__2018__Qualitative_Research_Methodology_in_Social_Sciences_and_Related_Subjects.pdf"
    },
    {
      id: 23,
      title: "Paula et al. (SN) CAQDAS e analise textual discursiva",
      link: "https://mackenzie.br/fileadmin/user_upload/Paula_et_al.__SN__CAQDAS_e_analise_textual_discursiva.pdf"
    },
    {
      id: 24,
      title: "Koppmana & Leahey (2019) Who moves to the methodological edge",
      link: "https://mackenzie.br/fileadmin/user_upload/Koppmana___Leahey__2019__Who_moves_to_the_methodological_edge.pdf"
    },
    {
      id: 25,
      title: "Mendes & Miskulin (2017) A analise de conteudo como uma metodologia",
      link: "https://mackenzie.br/fileadmin/user_upload/Mendes___Miskulin__2017__A_analise_de_conteudo_como_uma_metodologia.pdf"
    },
    {
      id: 26,
      title: "Suomala & Lyly-Yrjänäinen (2010) Interventionist management accounting research - lessons learned",
      link: "https://mackenzie.br/fileadmin/user_upload/Suomala___Lyly-Yrj%C3%A4n%C3%A4inen__2010__Interventionist_management_accounting_research_-_lessons_learned.pdf"
    },
    {
      id: 27,
      title: "Reis & Pereira (2014) Uma analise do modelo discursivo de institucionalizacao",
      link: "https://mackenzie.br/fileadmin/user_upload/Reis___Pereira__2014__Uma_analise_do_modelo_discursivo_de_institucionalizacao.pdf"
    },
    {
      id: 28,
      title: "Sutton & Arnold (2013) Focus group methods - explore emerging technology-driven",
      link: "https://mackenzie.br/fileadmin/user_upload/Sutton___Arnold__2013__Focus_group_methods_-_explore_emerging_technology-driven.pdf"
    },
    {
      id: 29,
      title: "Sonnenberg & vom Brocke (2014) The missing link between BPM and accounting",
      link: "https://mackenzie.br/fileadmin/user_upload/Sonnenberg___vom_Brocke__2014__The_missing_link_between_BPM_and_accounting.pdf"
    },
    {
      id: 30,
      title: "Kirk & van Staden (2008) The use of grounded theory in accounting research",
      link: "https://mackenzie.br/fileadmin/user_upload/Kirk___van_Staden__2008__The_use_of_grounded_theory_in_accounting_research.pdf"
    },
    {
      id: 31,
      title: "Hiebl (2023) Literature reviews of qualitative accounting research",
      link: "https://mackenzie.br/fileadmin/user_upload/Hiebl__2023__Literature_reviews_of_qualitative_accounting_research.pdf"
    },
    {
      id: 32,
      title: "Suomala et al. (2014) Battlefield around interventions",
      link: "https://mackenzie.br/fileadmin/user_upload/Suomala_et_al.__2014__Battlefield_around_interventions.pdf"
    },
    {
      id: 33,
      title: "Parente & Federo (2019) Qualitative comparative analysis - justifying a neo-configurational approach",
      link: "https://mackenzie.br/fileadmin/user_upload/Parente___Federo__2019__Qualitative_comparative_analysis_-_justifying_a_neo-configurational_approach.pdf"
    },
    {
      id: 34,
      title: "Lanka et al. (2021) Why We Need Qualitative Research in Management Studies",
      link: "https://mackenzie.br/fileadmin/user_upload/Lanka_et_al.__2021__Why_We_Need_Qualitative_Research_in_Management_Studies.pdf"
    },
    {
      id: 35,
      title: "Elharidy et al. (2008) Using grounded theory in interpretive management",
      link: "https://mackenzie.br/fileadmin/user_upload/Elharidy_et_al.__2008__Using_grounded_theory_in_interpretive_management.pdf"
    },
    {
      id: 36,
      title: "Timmermans & Tavory (2012) Theory Construction in Qualitative Research From Grounded Theory",
      link: "https://mackenzie.br/fileadmin/user_upload/Timmermans___Tavory__2012__Theory_Construction_in_Qualitative_Research_From_Grounded_Theory.pdf"
    },
    {
      id: 37,
      title: "Van de Ven (1989) Nothing is quite so practical as a good theory",
      link: "https://mackenzie.br/fileadmin/user_upload/Van_de_Ven__1989__Nothing_is_quite_so_practical_as_a_good_theory.pdf"
    },
    {
      id: 38,
      title: "Van de Ven & Johnson (2006) Knowledge for theory and practice",
      link: "https://mackenzie.br/fileadmin/user_upload/Van_de_Ven___Johnson__2006__Knowledge_for_theory_and_practice.pdf"
    },
    {
      id: 39,
      title: "Van Maanen (2011) Ethnography as Work - Some Rules of Engagement",
      link: "https://mackenzie.br/fileadmin/user_upload/Van_Maanen__2011__Ethnography_as_Work_-_Some_Rules_of_Engagement.pdf"
    },
    {
      id: 40,
      title: "Weitzman (1999) Analyzing Qualitative Data with Computer Software",
      link: "https://mackenzie.br/fileadmin/user_upload/Weitzman__1999__Analyzing_Qualitative_Data_with_Computer_Software.pdf"
    },
    {
      id: 41,
      title: "Wheeldon & Faubert (2009) Framing Experience - Concept Maps, Mind Maps in Qqualitative Research",
      link: "https://mackenzie.br/fileadmin/user_upload/Wheeldon___Faubert__2009__Framing_Experience_-_Concept_Maps__Mind_Maps_in_Qqualitative_Research.pdf"
    },
    {
      id: 42,
      title: "Yilmaz (2013) Comparison of Quantitative and Qualitative Research Traditions",
      link: "https://mackenzie.br/fileadmin/user_upload/Yilmaz__2013__Comparison_of_Quantitative_and_Qualitative_Research_Traditions.pdf"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredArticles = articles.filter(article => {
    return (
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
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
              Artigos Qualitativos
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
              Referências de artigos em pesquisa qualitativa
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

      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle 
              title="Referências Bibliográficas"
              subtitle="Artigos recomendados sobre metodologia de pesquisa qualitativa"
              center
            />
          </AnimatedElement>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Buscar artigos por título..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {filteredArticles.map((article, index) => (
              <AnimatedElement key={article.id} animation="slide-up" delay={index % 10 * 50}>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="font-heading text-lg font-bold mb-3 text-dark">
                    {article.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" /> Ver artigo
                    </a>
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Download size={16} className="mr-1" /> Download PDF
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <BookOpen size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-lg text-gray-600 mb-4">Nenhum artigo encontrado com o termo pesquisado.</p>
              <button 
                onClick={() => {setSearchTerm('');}}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Limpar pesquisa
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedElement animation="slide-up">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-5xl font-heading font-bold text-primary mb-2">{articles.length}</div>
                <p className="text-xl text-gray-600">Artigos Disponíveis</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="slide-up" delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-5xl font-heading font-bold text-secondary mb-2">20+</div>
                <p className="text-xl text-gray-600">Periódicos Representados</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="slide-up" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-5xl font-heading font-bold text-accent mb-2">30+</div>
                <p className="text-xl text-gray-600">Metodologias Abordadas</p>
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
                Deseja sugerir artigos para nossa coleção?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Entre em contato conosco para sugerir novos artigos e contribuir com a divulgação da pesquisa qualitativa.
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

export default Articles;
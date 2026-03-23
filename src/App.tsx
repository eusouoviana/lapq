import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import Loader from './components/ui/Loader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Research = lazy(() => import('./pages/Research'));
const Researchers = lazy(() => import('./pages/Researchers'));
const Articles = lazy(() => import('./pages/Articles'));
const Books = lazy(() => import('./pages/Books'));
const Questions = lazy(() => import('./pages/Questions'));
const Events = lazy(() => import('./pages/Events'));
const NotFound = lazy(() => import('./pages/NotFound'));
const RegistrationList = lazy(() => import('./pages/RegistrationList'));
const Subcoordenacoes = lazy(() => import('./pages/Subcoordenacoes'));
const SubcoordenacaoFormacao = lazy(() => import('./pages/SubcoordenacaoFormacao'));
const SubcoordenacaoPublicacoes = lazy(() => import('./pages/SubcoordenacaoPublicacoes'));
const SubcoordenacaoProjetos = lazy(() => import('./pages/SubcoordenacaoProjetos'));
const SubcoordenacaoGraduacao = lazy(() => import('./pages/SubcoordenacaoGraduacao'));
const SubcoordenacaoCuradores = lazy(() => import('./pages/SubcoordenacaoCuradores'));
const DisposicoesGerais = lazy(() => import('./pages/DisposicoesGerais'));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/pesquisas" element={<Research />} />
            <Route path="/pesquisadores" element={<Researchers />} />
            <Route path="/artigos" element={<Articles />} />
            <Route path="/livros" element={<Books />} />
            <Route path="/duvidas" element={<Questions />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/inscritos" element={<RegistrationList />} />
            <Route path="/subcoordenacoes" element={<Subcoordenacoes />} />
            <Route path="/subcoordenacoes/interlapq" element={<SubcoordenacaoFormacao />} />
            <Route path="/subcoordenacoes/publicacoes" element={<SubcoordenacaoPublicacoes />} />
            <Route path="/subcoordenacoes/projetos" element={<SubcoordenacaoProjetos />} />
            <Route path="/subcoordenacoes/graduacao" element={<SubcoordenacaoGraduacao />} />
            <Route path="/subcoordenacoes/curadores" element={<SubcoordenacaoCuradores />} />
            <Route path="/subcoordenacoes/disposicoes" element={<DisposicoesGerais />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
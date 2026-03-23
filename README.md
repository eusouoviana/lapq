<div align="center">

# LAPQ - Laboratório de Avaliação e Pesquisa Qualitativa

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-2.39-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com)
[![Licença](https://img.shields.io/badge/Licença-Privado-red)](#licença)

Website institucional do Laboratório de Avaliação e Pesquisa Qualitativa — um espaço coletivo multi(inter)disciplinar vinculado aos Programas de Pós-graduação em Controladoria e Finanças Empresariais (PPGCFE), com sede na Universidade Presbiteriana Mackenzie (UPM) e Universidade Federal de Pernambuco (UFPE).

[Funcionalidades](#funcionalidades) · [Tecnologias](#tecnologias) · [Primeiros Passos](#primeiros-passos) · [Estrutura do Projeto](#estrutura-do-projeto) · [Variáveis de Ambiente](#variáveis-de-ambiente)

</div>

---

## Funcionalidades

- **Página Institucional** — apresentação do laboratório, missão, áreas de pesquisa e estatísticas
- **Pesquisadores** — listagem dos membros com links para o Currículo Lattes
- **Publicações** — artigos qualitativos e livros publicados pelo grupo
- **Subcoordenações** — 6 subcoordenações com páginas dedicadas (Formação/INTERLAPQ, Publicações, Projetos, Graduação, Curadoria Científica, Disposições Gerais) e formulário de candidatura
- **Eventos** — divulgação de eventos com formulário de inscrição integrado ao banco de dados
- **Dúvidas** — formulário para envio de perguntas por alunos com rate limiting (5/dia por e-mail)
- **Animações** — transições suaves com Framer Motion e scroll reveal via IntersectionObserver
- **Responsivo** — layout adaptável com menu mobile completo

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Framework | [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org) |
| Bundler | [Vite 5](https://vitejs.dev) |
| Estilização | [Tailwind CSS 3](https://tailwindcss.com) |
| Roteamento | [React Router v6](https://reactrouter.com) |
| Formulários | [React Hook Form](https://react-hook-form.com) + [React Input Mask](https://github.com/sanniassin/react-input-mask) |
| Animações | [Framer Motion](https://www.framer.com/motion) |
| Ícones | [Lucide React](https://lucide.dev) |
| Backend | [Supabase](https://supabase.com) (PostgreSQL + Edge Functions/Deno) |

## Primeiros Passos

### Pré-requisitos

- [Node.js](https://nodejs.org) 18+ ou [Bun](https://bun.sh)
- Conta no [Supabase](https://supabase.com) com projeto configurado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lapq.git
cd lapq

# Instale as dependências
bun install
# ou
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais do Supabase

# Inicie o servidor de desenvolvimento
bun run dev
# ou
npm run dev
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `bun run dev` | Inicia o servidor de desenvolvimento |
| `bun run build` | Gera o build de produção em `dist/` |
| `bun run preview` | Pré-visualiza o build de produção localmente |
| `bun run lint` | Executa o ESLint no projeto |

## Estrutura do Projeto

```
lapq/
├── public/                     # Arquivos estáticos
├── src/
│   ├── components/
│   │   ├── forms/              # Formulários (CandidaturasForm)
│   │   ├── layout/             # Navbar, Footer
│   │   ├── ui/                 # Componentes reutilizáveis (Loader, SectionTitle, Cards)
│   │   └── utils/              # AnimatedElement, ScrollToTop
│   ├── lib/
│   │   └── supabase.ts         # Cliente Supabase (singleton)
│   ├── pages/                  # Páginas (lazy-loaded)
│   ├── App.tsx                 # Definição de rotas
│   ├── main.tsx                # Ponto de entrada
│   └── index.css               # Tailwind + design tokens + animações
├── supabase/
│   ├── functions/
│   │   ├── get-registrations/  # Edge Function: listar inscrições (GET)
│   │   └── lapq-submit-question/ # Edge Function: enviar dúvida (POST)
│   └── migrations/             # Migrações SQL
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

> **Nota:** As Edge Functions do Supabase utilizam `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`, que são provisionadas automaticamente pelo ambiente do Supabase.

## Banco de Dados

O projeto utiliza duas tabelas principais com Row Level Security (RLS):

| Tabela | Descrição | Políticas RLS |
|--------|-----------|---------------|
| `lapq_event_registrations` | Inscrições em eventos (nome, WhatsApp, e-mail, CPF, universidade, curso) | Inserção anônima, leitura autenticada |
| `lapq_student_questions` | Perguntas de alunos com status (`pending`/`answered`) | Inserção anônima, leitura autenticada |

As migrações estão em `supabase/migrations/`.

## Rotas

| Rota | Página |
|------|--------|
| `/` | Página inicial |
| `/sobre` | Sobre o LAPQ |
| `/pesquisas` | Áreas de pesquisa |
| `/pesquisadores` | Membros pesquisadores |
| `/artigos` | Artigos qualitativos |
| `/livros` | Livros publicados |
| `/duvidas` | Formulário de dúvidas |
| `/eventos` | Eventos e inscrição |
| `/inscritos` | Lista de inscritos (protegida) |
| `/subcoordenacoes` | Visão geral das subcoordenações |
| `/subcoordenacoes/interlapq` | Formação (INTERLAPQ) |
| `/subcoordenacoes/publicacoes` | Publicações |
| `/subcoordenacoes/projetos` | Projetos |
| `/subcoordenacoes/graduacao` | Graduação |
| `/subcoordenacoes/curadores` | Curadoria Científica |
| `/subcoordenacoes/disposicoes` | Disposições Gerais |

## Design System

- **Cores:** Definidas como triplas RGB em variáveis CSS e consumidas pelo Tailwind
  - `primary` (azul: 34 64 153) · `secondary` (azul: 22 119 255) · `accent` (laranja: 255 95 31) · `light` · `dark`
- **Tipografia:** Playfair Display (títulos) · Raleway (corpo)
- **Componentes utilitários:** `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.card`, `.card-hover`, `.container-custom`, `.section-padding`

## Licença

Projeto privado. Todos os direitos reservados.

---

<div align="center">

Desenvolvido com dedicação para o **LAPQ** — Laboratório de Avaliação e Pesquisa Qualitativa

**UPM** · **UFPE**

</div>

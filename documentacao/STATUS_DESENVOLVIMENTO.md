# Status Atual do Desenvolvimento — Site Institucional Avance

## Estrutura do Projeto

- **Stack:** Next.js, TypeScript, Tailwind, Supabase
- **UI:** shadcn@latest (CLI) adotado para padronização e agilidade na criação de componentes
- **Analytics:** PostHog adotado para monitoramento de uso e métricas de produto
- **Testes:** Jest configurado, pasta de testes presente
- **Lint/Format:** ESLint e Prettier configurados

---

### Novas ferramentas adotadas

- **shadcn@latest:** CLI moderna para geração de componentes React/Next.js, baseada em Radix UI e TailwindCSS.  
  - *Benefícios:* Agilidade no desenvolvimento, consistência visual, acessibilidade, fácil customização.
  - *Próximos passos:* Padronizar novos componentes e migrar gradualmente a UI utilizando a CLI shadcn@latest.

- **PostHog:** Plataforma open source de analytics e product analytics.
  - *Benefícios:* Monitoramento de uso, métricas de produto, eventos customizados, privacidade (LGPD), decisões baseadas em dados.
  - *Próximos passos:* Instrumentar páginas e eventos principais, analisar dados para priorizar melhorias.

---

## Funcionalidades/Áreas já implementadas

- **Páginas principais:**
  - Página inicial (`landing-page.tsx`, `page.tsx`)
  - Layout global (`layout.tsx`)
  - Página protegida (`protected/page.tsx`)
- **Autenticação:**
  - Páginas de login, cadastro e recuperação de senha
  - Middleware de autenticação
- **APIs:**
  - Endpoints para integrantes, serviços, setores, usuários (`src/app/api/`)
- **Componentes:**
  - Header, Footer, Hero, Theme Switcher, Formulários, Botões, Tipografia, etc.
  - Componentes de UI reutilizáveis em `src/components/ui/`
- **Estilos:**
  - Tailwind configurado
  - CSS global
- **Utilitários e tipos:**
  - Helpers em `src/lib/` e `src/utils/`
  - Tipos globais em `src/types/`
- **Testes:**
  - Estrutura de testes unitários criada

---

## Funcionalidades em andamento ou pendentes

- **Conteúdo dinâmico:**
  - Integração real com dados de Supabase para setores, membros, serviços
  - Exibição dinâmica de integrantes e setores
- **Blog/Notícias:**
  - Implementação de área de blog/publicação de notícias
- **Banco de Talentos:**
  - Ainda não iniciado (estruturação futura)
- **Área restrita para membros:**
  - Autenticação básica presente, mas funcionalidades internas a definir
- **Portfólio de projetos, feedback de clientes, animações, SEO avançado:**
  - Não iniciado
- **Documentação detalhada:**
  - README e CONTRIBUTING presentes, mas documentação técnica pode ser expandida

---

## Resumo

O projeto já possui:
- Estrutura base sólida (Next.js, Tailwind, Supabase, autenticação)
- APIs e componentes principais implementados
- Páginas de autenticação e área protegida
- Estrutura para testes e boas práticas de código

**Principais próximos passos:**
- Integrar dados reais do Supabase nas páginas
- Implementar área de blog/notícias
- Iniciar desenvolvimento do Banco de Talentos
- Expandir funcionalidades da área restrita
- Avançar em páginas de portfólio, contato, feedback e SEO

---

**Changelog 24/05**

Adicionado documentaçao do projeto, sprints, tutoriais e backlog na raiz do projeto.

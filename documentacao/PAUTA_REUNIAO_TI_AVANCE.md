# Pauta e Organização do Projeto — Reunião TI Avance

> **Nota:** A lista de responsáveis foi atualizada conforme o arquivo `membros ativos.md` (última versão).

---

## 1. Funcionalidades Gerais do Site

- Apresentação institucional (home)
- Exibição dos membros e setores
- Divulgação de serviços
- Publicação de blog/notícias
- Layout com identidade visual (cores Avance)
- Divulgação de eventos e projetos
- Exibição de projetos por setor
- Contatos dos responsáveis
- Área restrita para membros
- Banco de Talentos Avance (TI)
- Portfólio de projetos
- Página de contato
- Feedback de clientes
- Animações e interatividade
- SEO e desempenho
- Planejamento financeiro exposto
- Integração com GitHub institucional

---

## 2. Funcionalidades Mínimas para o MVP (Prioridade Máxima)

- Página inicial institucional
- Apresentação dos membros e setores
- Divulgação de serviços
- Publicação de blog/notícias
- Layout com identidade visual (cores Avance)

---

## 3. Backlog Organizado por Prioridade

### **Prioridade 1 — MVP**
- [ ] Página inicial institucional (Pedro Mezadre)
- [ ] Exibição dos setores e membros (Pedro Mezadre)
- [ ] Página de serviços (Pedro Mezadre)
- [ ] Blog/notícias (Pedro Mezadre)
- [ ] Layout e identidade visual (Pedro Mezadre)
- [ ] Estrutura base do projeto (Next.js, Tailwind, Supabase) (Pedro Henrique)
- [ ] Documentação inicial e convenções (João Guilherme)

### **Prioridade 2 — Pós-MVP**
- [ ] Divulgação de eventos e projetos
- [ ] Exibição de projetos por setor
- [ ] Contatos dos responsáveis
- [ ] Área restrita para membros (autenticação)
- [ ] Banco de Talentos (estruturação inicial)
- [ ] Portfólio de projetos
- [ ] Página de contato

### **Prioridade 3 — Desejável**
- [ ] Feedback de clientes
- [ ] Animações e interatividade
- [ ] SEO e desempenho avançado
- [ ] Planejamento financeiro exposto
- [ ] Integração com GitHub institucional

---

## 3.1. Organização das Sprints e Atribuição de Tarefas

O desenvolvimento será organizado em sprints semanais, com dedicação de 1-2h/dia por membro. As tarefas e responsáveis seguem o plano de sprints:

### Sprint 1 — Kickoff e Fundamentos
- **Objetivo:** Configuração de base, padronização de UI, início do analytics e integração inicial.
- **Tarefas:**
- [Pedro Mezadre, Myke Matos] Instalar e configurar shadcn@latest (`npx shadcn@latest init`); criar primeiro componente padrão (`npx shadcn@latest add <componente>`); documentar padrão de uso
  - [Pedro Henrique] Instalar e configurar PostHog; criar conta/workspace; instrumentar páginas principais
  - [João Guilherme] Apoiar documentação dos padrões (shadcn-ui, Supabase); checklist de setup do projeto
  - [Myke Matos] Revisão técnica, desbloqueio de impedimentos, apoio na configuração e no front end

### Sprint 2 — Integração de Dados e Estrutura MVP
- **Objetivo:** Exibir dados reais de setores, membros e serviços; estruturar páginas principais do MVP.
- **Tarefas:**
  - [Pedro Henrique] Mapear endpoints no Supabase; implementar fetch de dados; tratar loading/erros
  - [Pedro Mezadre, Myke Matos] Criar páginas: inicial, setores, membros, serviços; usar componentes shadcn-ui
  - [João Guilherme] Validar dados exibidos; apoiar testes e revisão de conteúdo
  - [Myke Matos] Revisão técnica, apoio em integrações, acompanhamento do progresso e no front end

### Sprint 3 — Blog/Notícias e Área Restrita
- **Objetivo:** Implementar área de blog/notícias e expandir funcionalidades da área restrita para membros.
- **Tarefas:**
  - [Pedro Mezadre, Myke Matos] Criar página de listagem e post individual do blog; implementar CRUD (mock ou real)
  - [Pedro Henrique] Apoiar integração do blog com Supabase; iniciar controle de acesso da área restrita
  - [João Guilherme] Levantar necessidades dos membros; apoiar documentação e testes da área restrita
  - [Myke Matos] Revisão técnica, apoio em autenticação, acompanhamento e no front end

### Sprint 4 — Prototipagem Banco de Talentos e Melhoria Contínua
- **Objetivo:** Iniciar prototipagem do Banco de Talentos, portfólio de projetos e ajustes finos no MVP.
- **Tarefas:**
  - [João Guilherme] Definir campos do perfil de talento; criar formulário e listagem (mock)
  - [Pedro Mezadre, Myke Matos] Criar página de portfólio de projetos; revisar layout e responsividade
  - [Pedro Henrique] Apoiar integração do Banco de Talentos e portfólio com Supabase
  - [Myke Matos] Revisão técnica, acompanhamento, planejamento de próximos passos e apoio no front end

**Observações:**
- O plano pode ser ajustado conforme o ritmo do time e surgimento de novas prioridades.
- Sempre priorizar comunicação ativa, revisão técnica e documentação.
- Checkpoints semanais para revisão de progresso e replanejamento.

---

## 4. Pauta da Reunião de Hoje

1. **Status do desenvolvimento**
   - Estrutura base (Next.js, Tailwind, Supabase, autenticação) — já implementada
   - APIs e componentes principais — já implementados
   - Páginas de autenticação e área protegida — já implementadas
   - Testes e boas práticas — configurados

2. **Adoção de novas ferramentas**
   - Proposta de inclusão do shadcn@latest (CLI de componentes UI) para acelerar e padronizar a criação de interfaces.
   - Proposta de inclusão do PostHog (analytics) para monitoramento de uso, métricas de produto e tomada de decisão baseada em dados.
   - Benefícios: agilidade, consistência visual, acessibilidade, instrumentação de analytics, decisões baseadas em dados.
   - Próximos passos: aprovar inclusão, definir responsáveis pela configuração inicial, planejar padronização dos novos componentes e instrumentação básica de analytics.

3. **O que falta para o MVP**
   - Integração real com dados do Supabase nas páginas (setores, membros, serviços)
   - Exibição dinâmica de integrantes e setores
   - Implementação da área de blog/notícias
   - Expansão da área restrita para membros

4. **Planejamento dos próximos passos**
   - Definir responsáveis e microtarefas para:
     - Integração de dados reais do Supabase
     - Blog/notícias
     - Início do Banco de Talentos (prototipagem)
     - Portfólio de projetos, página de contato, feedback, SEO

5. **Bloqueios e dúvidas técnicas**
   - Levantar dificuldades atuais para destravar o progresso

6. **Acompanhamento e comunicação**
   - Checkpoints semanais e atualização do board/Trello
   - Reporte de bloqueios e dúvidas ao gestor (Myke)

7. **Dúvidas, sugestões e alinhamento final**

---

## 5. Próximos Passos para o Time

- Integrar dados reais do Supabase nas páginas
- Implementar área de blog/notícias
- Iniciar desenvolvimento do Banco de Talentos
- Expandir funcionalidades da área restrita
- Avançar em páginas de portfólio, contato, feedback e SEO
- Atualizar o Trello/board com microtarefas e responsáveis
- Realizar checkpoints de progresso no grupo (WhatsApp/Discord)
- Reportar bloqueios imediatamente ao gestor (Myke)
- Manter documentação e convenções atualizadas (incluindo uso do shadcn@latest)
- Preparar demonstração do MVP para a próxima reunião

---

## 6. Sugestão de Responsáveis (atualizado)

- **Líder Técnico:** Myke Matos
- **Back-end:** Pedro Henrique
- **Front-end:** Pedro Mezadre
- **Júnior:** João Guilherme

---

**Obs:** O Banco de Talentos é estratégico, mas pode ser iniciado como protótipo após o MVP.

---

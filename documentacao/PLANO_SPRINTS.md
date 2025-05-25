# Plano de Desenvolvimento em Sprints — Site Institucional Avance

## Premissas
- Time: Myke Matos (Líder Técnico), Pedro Henrique (Backend), Pedro Mezadre (Frontend), João Guilherme (Júnior)
- Dedicação: 1-2h/dia por membro (5-10h semanais)
- Sprints de 1 semana (ajustável conforme andamento)
- Priorização: tarefas [URGENTE] e [ALTA] primeiro, respeitando dependências

---

## Sprint 1 — Kickoff e Fundamentos

**Objetivo:**  
Configuração de base, padronização de UI, início do analytics e integração inicial.

**Tarefas:**
- [Pedro Mezadre, Myke Matos] Instalar e configurar shadcn@latest; criar primeiro componente padrão; documentar padrão de uso
- [Pedro Henrique] Instalar e configurar Supabase; Adicionar funcionalidades internas para membros autenticados (documentos, recursos, etc).
- [João Guilherme] Apoiar documentação dos padrões (shadcn, Supabase); checklist de setup do projeto
- [Myke Matos] Revisão técnica, desbloqueio de impedimentos, apoio na configuração e no front end

**Critérios de conclusão:**
- shadcn@latest e Supabase funcionando no projeto
- Documentação básica dos padrões criada
- Time alinhado com o fluxo de trabalho

---

## Sprint 2 — Integração de Dados e Estrutura MVP

**Objetivo:**  
Exibir dados reais de setores, membros e serviços; estruturar páginas principais do MVP.

**Tarefas:**
- [Pedro Henrique] Mapear endpoints no Supabase; implementar fetch de dados; tratar loading/erros
- [Pedro Mezadre, Myke Matos] Criar páginas: inicial, setores, membros, serviços; usar componentes shadcn@latest
- [João Guilherme] Validar dados exibidos; apoiar testes e revisão de conteúdo
- [Myke Matos] Revisão técnica, apoio em integrações, acompanhamento do progresso e no front end

**Critérios de conclusão:**
- Dados reais exibidos nas páginas principais
- Layout padronizado com shadcn@latest
- Erros e estados de loading tratados

---

## Sprint 3 — Blog/Notícias e Área Restrita

**Objetivo:**  
Implementar área de blog/notícias e expandir funcionalidades da área restrita para membros.

**Tarefas:**
- [Pedro Mezadre, Myke Matos] Criar página de listagem e post individual do blog; implementar CRUD (mock ou real)
- [Pedro Henrique] Apoiar integração do blog com Supabase; iniciar controle de acesso da área restrita
- [João Guilherme] Levantar necessidades dos membros; apoiar documentação e testes da área restrita
- [Myke Matos] Revisão técnica, apoio em autenticação, acompanhamento e no front end

**Critérios de conclusão:**
- Blog funcional (mock ou real)
- Área restrita com controle de acesso básico
- Documentação atualizada

---

## Sprint 4 — Prototipagem Banco de Talentos e Melhoria Contínua

**Objetivo:**  
Iniciar prototipagem do Banco de Talentos, portfólio de projetos e ajustes finos no MVP.

**Tarefas:**
- [João Guilherme] Definir campos do perfil de talento; criar formulário e listagem (mock)
- [Pedro Mezadre, Myke Matos] Criar página de portfólio de projetos; revisar layout e responsividade
- [Pedro Henrique] Apoiar integração do Banco de Talentos e portfólio com Supabase
- [Myke Matos] Revisão técnica, acompanhamento, planejamento de próximos passos e apoio no front end

**Critérios de conclusão:**
- Protótipo funcional do Banco de Talentos (mock)
- Página de portfólio criada
- MVP pronto para validação

---

## Sprints seguintes — Pós-MVP e Otimizações

- Página de contato, feedback de clientes, animações, SEO, planejamento financeiro exposto, integração com GitHub institucional, melhorias contínuas.

---

**Observações:**
- O plano pode ser ajustado conforme o ritmo do time e surgimento de novas prioridades.
- Sempre priorizar comunicação ativa, revisão técnica e documentação.
- Checkpoints semanais para revisão de progresso e replanejamento.

---

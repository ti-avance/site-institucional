# Backlog — Descrição, Prioridade, Dependência e Tasklist

---

## [URGENTE] Adotar shadcn@latest no projeto  
**Depende de:** nada  
**Descrição:**  
Padronizar e acelerar a criação de componentes de interface usando a CLI shadcn@latest.

**Tasklist:**
- [ ] Instalar shadcn@latest e dependências (`npx shadcn@latest init`)
- [ ] Configurar integração com Tailwind
- [ ] Criar primeiro componente usando shadcn@latest (`npx shadcn@latest add <componente>`)
- [ ] Documentar padrão de uso para o time
- [ ] Migrar gradualmente componentes existentes

---

## [URGENTE] Adotar PostHog para analytics  
**Depende de:** nada  
**Descrição:**  
Implementar analytics para monitorar uso, eventos e métricas do site, garantindo conformidade com LGPD.

**Tasklist:**
- [ ] Instalar PostHog e dependências
- [ ] Criar conta/workspace no PostHog
- [ ] Configurar chave de API e ambiente
- [ ] Instrumentar páginas principais (pageview)
- [ ] Instrumentar eventos relevantes (cliques, formulários)
- [ ] Documentar boas práticas de analytics

---

## [ALTA] Integração real com Supabase nas páginas  
**Depende de:** Estrutura base do projeto pronta  
**Descrição:**  
Exibir dados reais de setores, membros e serviços consumindo a API do Supabase.

**Tasklist:**
- [ ] Mapear endpoints necessários no Supabase
- [ ] Implementar fetch de dados nas páginas
- [ ] Exibir setores, membros e serviços dinamicamente
- [ ] Tratar loading e erros
- [ ] Validar dados exibidos com o time

---

## [ALTA] Implementar área de blog/notícias  
**Depende de:** Integração com Supabase  
**Descrição:**  
Permitir publicação e exibição de notícias e posts institucionais.

**Tasklist:**
- [ ] Definir estrutura de dados para posts
- [ ] Criar página de listagem de notícias
- [ ] Criar página de post individual
- [ ] Implementar CRUD (mock ou real)
- [ ] Adicionar posts de exemplo para testes

---

## [ALTA] Expansão da área restrita para membros  
**Depende de:** Autenticação básica pronta  
**Descrição:**  
Adicionar funcionalidades internas para membros autenticados (documentos, recursos, etc).

**Tasklist:**
- [ ] Levantar necessidades dos membros
- [ ] Definir funcionalidades prioritárias
- [ ] Implementar controle de acesso
- [ ] Criar página inicial da área restrita
- [ ] Adicionar primeiro recurso/documento

---

## [MÉDIA] Iniciar prototipagem do Banco de Talentos  
**Depende de:** Integração com Supabase  
**Descrição:**  
Criar protótipo funcional para cadastro e busca de talentos da Avance.

**Tasklist:**
- [ ] Definir campos do perfil de talento
- [ ] Criar formulário de cadastro (mock)
- [ ] Listar perfis cadastrados (mock)
- [ ] Implementar busca por palavra-chave
- [ ] Validar fluxo com o time

---

## [MÉDIA] Portfólio de projetos  
**Depende de:** Integração com Supabase  
**Descrição:**  
Exibir projetos realizados pela Avance, destacando tecnologias e resultados.

**Tasklist:**
- [ ] Levantar projetos a serem exibidos
- [ ] Definir estrutura de dados do portfólio
- [ ] Criar página de listagem de projetos
- [ ] Adicionar cards de projeto (mock)
- [ ] Revisar layout e responsividade

---

## [MÉDIA] Página de contato  
**Depende de:** nada  
**Descrição:**  
Facilitar contato institucional e captação de leads.

**Tasklist:**
- [ ] Criar formulário de contato (mock)
- [ ] Exibir informações institucionais (email, telefone)
- [ ] Validar envio de mensagens (mock)
- [ ] Adicionar mensagem de sucesso/erro

---

## [BAIXA] Feedback de clientes  
**Depende de:** Página de contato  
**Descrição:**  
Coletar e exibir depoimentos de clientes e parceiros.

**Tasklist:**
- [ ] Definir formato do depoimento
- [ ] Criar formulário para submissão (mock)
- [ ] Exibir depoimentos na home ou página dedicada
- [ ] Adicionar depoimentos de exemplo

---

## [BAIXA] Animações e interatividade  
**Depende de:** UI padronizada (shadcn@latest)  
**Descrição:**  
Melhorar a experiência visual do site com animações e microinterações.

**Tasklist:**
- [ ] Mapear pontos de interação no site
- [ ] Implementar animações em botões e cards
- [ ] Adicionar transições de página
- [ ] Testar performance e acessibilidade

---

## [BAIXA] SEO e desempenho avançado  
**Depende de:** Estrutura do site estável  
**Descrição:**  
Otimizar o site para buscadores e melhorar performance.

**Tasklist:**
- [ ] Configurar metatags e títulos dinâmicos
- [ ] Implementar sitemap.xml e robots.txt
- [ ] Otimizar imagens e assets
- [ ] Medir performance com Lighthouse
- [ ] Corrigir pontos críticos identificados

---

## [BAIXA] Planejamento financeiro exposto  
**Depende de:** Definição da diretoria  
**Descrição:**  
Exibir informações financeiras públicas da Avance (transparência).

**Tasklist:**
- [ ] Definir quais dados financeiros serão exibidos
- [ ] Criar página ou seção dedicada
- [ ] Adicionar dados mockados para testes
- [ ] Validar apresentação com diretoria

---

## [BAIXA] Integração com GitHub institucional  
**Depende de:** nada  
**Descrição:**  
Exibir repositórios e contribuições públicas da Avance.

**Tasklist:**
- [ ] Listar repositórios públicos relevantes
- [ ] Integrar com API do GitHub (mock ou real)
- [ ] Exibir cards de repositório
- [ ] Adicionar links para contribuições

---

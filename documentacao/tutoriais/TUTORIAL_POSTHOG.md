# Tutorial PostHog — Analytics para o Projeto Avance

## 1. O que é o PostHog?

O PostHog é uma plataforma open source de analytics e product analytics, ideal para monitorar o uso do site, eventos e métricas de produto, com foco em privacidade e conformidade com a LGPD.

---

## 2. Como instalar e configurar o PostHog

**Pré-requisitos:**  
- Projeto Next.js ou React já criado

**Passos:**

1. **Criar uma conta gratuita no PostHog:**
   - Acesse https://app.posthog.com/signup e crie sua conta/workspace.

2. **Instalar o pacote no projeto:**
   No terminal, execute:
   ```bash
   npm install posthog-js
   ```
   ou, se usar pnpm:
   ```bash
   pnpm add posthog-js
   ```

3. **Configurar o PostHog no seu projeto:**
   No arquivo principal do app (ex: `src/pages/_app.tsx` ou `src/app/layout.tsx`), adicione:
   ```tsx
   import posthog from 'posthog-js';

   if (typeof window !== 'undefined' && !posthog.__initialized) {
     posthog.init('SUA_CHAVE_API', {
       api_host: 'https://app.posthog.com',
     });
     posthog.__initialized = true;
   }
   ```
   - Substitua `'SUA_CHAVE_API'` pela chave do seu projeto (encontrada no dashboard do PostHog, em "Project Settings" > "Project API Key").

4. **(Opcional) Configurar variáveis de ambiente:**
   - Para segurança, armazene a chave em `.env.local`:
     ```
     NEXT_PUBLIC_POSTHOG_KEY=chave_aqui
     ```
   - E use:
     ```tsx
     posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, { api_host: 'https://app.posthog.com' });
     ```

---

## 3. Como rastrear pageviews e eventos

- **Pageviews:**  
  O PostHog já rastreia pageviews automaticamente após a configuração.

- **Eventos customizados:**  
  Para rastrear ações específicas (ex: clique em botão):
  ```tsx
  <button onClick={() => posthog.capture('clique_botao', { label: 'Botão CTA' })}>
    Clique aqui
  </button>
  ```

- **Exemplo de evento:**  
  ```tsx
  posthog.capture('formulario_enviado', { email: 'usuario@exemplo.com' });
  ```

---

## 4. Dicas de privacidade e LGPD

- Não envie dados sensíveis (ex: CPF, senha) para o PostHog.
- Use variáveis de ambiente para proteger a chave de API.
- Se necessário, configure o PostHog para anonimizar IPs e limitar coleta de dados.

---

## 5. Referências úteis

- Documentação oficial: https://posthog.com/docs
- Exemplos de integração: https://posthog.com/docs/libraries/js

---

**Resumo:**  
Com o PostHog, você pode monitorar o uso do site, identificar gargalos, medir engajamento e tomar decisões baseadas em dados reais, tudo de forma simples e rápida.

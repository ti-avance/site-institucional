# site-institucional

Repositório para criação do site institucional da Avance.

## Visão Geral
Este projeto é um site institucional moderno, construído com Next.js, TypeScript e Supabase para autenticação e backend.

## Estrutura do Projeto
```
src/
  app/            # Páginas e rotas Next.js
  components/     # Componentes reutilizáveis
  lib/            # Lógica de domínio e integrações
  types/          # Tipos TypeScript globais
  utils/          # Utilitários e helpers
  __tests__/      # Testes unitários
```

## Pré-requisitos
- Node.js (v18+)
- pnpm (recomendado)

## Instalação
```bash
pnpm install
```

## Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Scripts Disponíveis
- `pnpm dev` — Inicia o servidor de desenvolvimento
- `pnpm build` — Gera build de produção
- `pnpm start` — Inicia o servidor em produção
- `pnpm lint` — Checa qualidade do código com ESLint
- `pnpm format` — Formata o código com Prettier
- `pnpm test` — Executa testes unitários com Jest

## Testes
Os testes ficam em `src/__tests__/`. Para rodar:
```bash
pnpm test
```

## Contribuição
1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -am 'feat: nova feature'`)
4. Push para o branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

Consulte o arquivo `CONTRIBUTORS.md` para ver quem já contribuiu.

## Licença
Este projeto é privado e de uso exclusivo da Avance.

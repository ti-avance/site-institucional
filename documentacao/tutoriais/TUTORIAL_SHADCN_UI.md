# Tutorial shadcn — Guia Prático para o Projeto Avance

## 1. Instalar e configurar shadcn

**Pré-requisitos:**  
- Projeto Next.js já criado  
- Tailwind CSS já configurado

**Passos:**
1. No terminal, acesse a pasta do projeto e execute:
   ```bash
   npx shadcn@latest init
   ```
2. Siga as instruções do CLI para integrar o shadcn ao seu projeto.
   - O comando irá criar a pasta `components/ui` e configurar os arquivos necessários.
3. Se solicitado, escolha as opções compatíveis com Tailwind e Next.js.
4. Pronto! O shadcn está instalado e pronto para uso.

**Dicas:**
- Se der erro de permissão, tente rodar o terminal como administrador.
- Consulte a documentação oficial: https://ui.shadcn.com/docs/installation

---

## 2. Padronizar novos componentes usando shadcn

**Como usar:**
1. Para adicionar um novo componente, rode:
   ```bash
   npx shadcn@latest add button
   ```
   (Troque "button" pelo nome do componente desejado, ex: input, card, etc.)

2. O componente será criado em `components/ui/` já pronto para uso.

3. Importe e utilize no seu código:
   ```tsx
   import { Button } from "@/components/ui/button";

   export default function Example() {
     return <Button>Meu botão</Button>;
   }
   ```

**Boas práticas:**
- Sempre use os componentes do shadcn para garantir padronização visual.
- Customize as cores e fontes no `tailwind.config.ts` para seguir a identidade Avance.
- Consulte a lista de componentes disponíveis: https://ui.shadcn.com/docs/components

---

## 3. Migrar gradualmente componentes existentes

**Estratégia:**
- Priorize migrar componentes mais usados (botões, inputs, cards).
- Substitua o componente antigo pelo equivalente do shadcn, adaptando props e estilos conforme necessário.
- Teste o layout após cada migração para garantir que nada quebrou.

**Checklist de migração:**
- [ ] Identifique o componente antigo a ser migrado
- [ ] Adicione o equivalente do shadcn com `npx shadcn@latest add <componente>`
- [ ] Substitua as importações e uso no código
- [ ] Ajuste estilos e props para manter a funcionalidade
- [ ] Teste visual e funcional
- [ ] Remova o componente antigo se não for mais usado

**Dica:**  
Faça a migração aos poucos, priorizando as telas do MVP. Não é necessário migrar tudo de uma vez.

---

**Referências úteis:**  
- Documentação oficial: https://ui.shadcn.com/docs
- Exemplos de uso: https://ui.shadcn.com/examples

---

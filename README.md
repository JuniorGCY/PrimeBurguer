PrimeBurguer — Delivery App

Status: Em Desenvolvimento - Fase 2 (2/3)

**link do site**: https://prime-burguer-ten.vercel.app/

Este projeto nasceu de uma necessidade real: um amigo que gerenciava todo o seu negócio via WhatsApp e Stories do Instagram. A PrimeBurguer é um site simples de delivery de hambúrgueres artesanais, o foco principal é automatizar o fluxo que hoje depende exclusivamente de interações manuais, proporcionando uma experiência fluida tanto para o cliente quanto para o administrador, ganhar mais profissionalismo como vendedor de lanches e espaço no mercado local.

## Contexto e Desafio


**O Problema**: Dependência total de atendimento manual pelo WhatsApp, golpes com falsos pagamentos, poluição visual com prints de comprovantes de PIX e falta de um catálogo dinâmico.

**A Solução**: Um site completo para o cliente, checkout integrado e, futuramente, um painel administrativo para controle de pedidos.

**O Objetivo Pessoal**: Praticar a stack moderna do Next.js 15 e a integração com serviços de Backend-as-a-Service (Firebase).

## Tecnologias & Ferramentas
**Frontend**: Next.js 15 (App Router), React, TypeScript.

**Estilização**: Tailwind CSS.

**Gerenciamento de Estado**: Zustand.

**Formulários & Validação**: React Hook Form + Zod.

**Backend & Banco de Dados**: Firebase (Authentication e Firestore).

**Pagamentos**: Integração via API com AbacatePay (PIX dinâmico com webhooks/callbacks).




## Arquitetura
Para garantir que o código seja limpo e fácil de manter, utilizei a Feature-Based Architecture:

**src/app**: Gerenciamento de rotas e layouts globais.

**src/features**: Lógica isolada por domínio (ex: /auth contém seus próprios hooks, componentes e serviços).

**src/libs**: Centralização de instâncias externas (Firebase Config).

**src/components**: Componentes de UI atômicos e reutilizáveis.

## Screenshots (Módulo Auth)
<div align="center">
<img src="https://github.com/user-attachments/assets/207bd470-e68d-4780-94bf-453f8f0279aa" alt="Login PrimeBurguer" width="400px" style="border-radius: 10px; margin: 10px;"/>
<img src="https://github.com/user-attachments/assets/5957a032-17e9-4baf-8fc7-915f96e0cf61" alt="Cadastro PrimeBurguer" width="400px" style="border-radius: 10px; margin: 10px;"/>
</div>

## Funcionalidades Principais (Até o momento)
[x] Autenticação de usuários (Login/Cadastro com Firebase).

[x] Catálogo de produtos dinâmico.

[x] Carrinho de compras persistente (Zustand).

[x] Checkout transparente com geração de código PIX (AbacatePay).

[x] Atualização de perfil do usuário.

## Atualmente na Fase 2
[ ] Desenvolvimento da Tela Inicial/Boas-vindas.

[ ] Dashboard administrativo (Protegido por Role "admin") para o dono da hamburgueria.

[ ] Refatorar e componentizar.




## Como rodar o projeto localmente

# 1. Clone o repositório
git clone https://github.com/JuniorGCY/PrimeBurguer.git

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
**Crie um arquivo .env.local na raiz e adicione suas chaves do Firebase e AbacatePay**

NEXT_PUBLIC_URL=http://localhost:3000

ABACATE_PAY_KEY=sua_chave_aqui


**... adicione as chaves do Firebase ...**

# 4. Rode o servidor de desenvolvimento
npm run dev

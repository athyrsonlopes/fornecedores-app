# Fornecedores App

Frontend para cadastro e visualização de fornecedores, desenvolvido com Next.js e Tailwind CSS. Consome a API REST [fornecedores-api](https://github.com/athyrsonlopes/fornecedores-api).

## Tecnologias

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev -- --port 3001
```

> A API Rails precisa estar rodando em `http://localhost:3000`

## Funcionalidades

- Listagem de fornecedores com nome, CNPJ, categoria e status
- Cadastro de novos fornecedores via formulário
- Status ativo exibido em verde, inativo em vermelho
- Dados buscados via SSR (Server Side Rendering)
- Navegação entre páginas com Next.js App Router

## Relacionado

- [fornecedores-api](https://github.com/athyrsonlopes/fornecedores-api) — backend Rails + PostgreSQL

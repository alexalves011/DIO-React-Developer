# 📱 DIO User Feed - Sistema de Feed de Usuários

Um projeto completo de uma aplicação web que simula um feed social de usuários com autenticação, roteamento e consumo de API REST.

## 🎯 Objetivo do Projeto

Este desafio tem como objetivo praticar e consolidar conhecimentos em:

- ✅ Roteamento com **React Router v6**
- ✅ Autenticação de usuários (Login/Home/Feed)
- ✅ Consumo de **API REST com Axios**
- ✅ Gerenciamento de estado com **Hooks (useState)**
- ✅ Estilização com **Styled Components**
- ✅ Validação de formulários com **React Hook Form**
- ✅ Integração com **JSON Server** como backend simulado
- ✅ Componentização e separação de responsabilidades

## 🛠️ Tecnologias Utilizadas

| Tecnologia        | Versão | Descrição                                  |
| ----------------- | ------ | ------------------------------------------ |
| React             | 18.2.0 | Biblioteca principal para construção da UI |
| React Router DOM  | 6.3.0  | Roteamento entre páginas                   |
| Axios             | 0.27.2 | Consumo de APIs REST                       |
| Styled Components | 5.3.5  | Estilização CSS-in-JS                      |
| React Hook Form   | 7.33.1 | Gerenciamento de formulários               |
| React Icons       | 4.4.0  | Ícones reutilizáveis                       |
| JSON Server       | 0.17.0 | Servidor mock para dados                   |

## 📂 Estrutura do Projeto

```
desafio-03-dio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── Card/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── Header/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── Input/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   └── UserInfo/
│   │       ├── index.jsx
│   │       └── styles.js
│   ├── pages/
│   │   ├── home/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── login/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   └── feed/
│   │       ├── index.jsx
│   │       └── styles.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── global.js
│   ├── App.js
│   └── index.js
├── db.json          # Base de dados simulada (JSON Server)
├── package.json
└── README.md
```

## 🚀 Como Usar

### 1. Instalação

```bash
# Instale as dependências
npm install
```

### 2. Inicie o JSON Server (em um terminal separado)

```bash
npm run api
```

O servidor estará rodando em `http://localhost:8001`

### 3. Inicie a Aplicação (em outro terminal)

```bash
npm start
```

A aplicação abrirá em `http://localhost:3000`

## 📋 Fluxo da Aplicação

```
┌─────────────┐
│   Usuário   │
└──────┬──────┘
       │
       ▼
┌──────────────────┐
│  Página Login    │
│ (Autenticação)   │
└────────┬─────────┘
         │ ✓ Login bem-sucedido
         ▼
┌──────────────────┐
│  Página Home     │
│ (Boas-vindas)    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Página Feed     │
│ (Feed do usuário)│
└──────────────────┘
```

## 🔑 Funcionalidades Principais

### 1. **Página de Login**

- Formulário de autenticação com validação
- Armazenamento de dados do usuário
- Redirecionamento automático após login

### 2. **Página Home**

- Boas-vindas ao usuário autenticado
- Exibição de informações do perfil
- Botão para acessar o feed

### 3. **Página Feed**

- Exibição de cartões com informações de usuários
- Consumo de dados da API (JSON Server)
- Componentes reutilizáveis (Card, UserInfo)

### 4. **Componentes Reutilizáveis**

- **Button**: Botão estilizado
- **Input**: Campo de entrada com validação
- **Card**: Container para exibição de dados
- **Header**: Cabeçalho da aplicação
- **UserInfo**: Exibição de informações do usuário

## 🔌 Integração com API

### Arquivo: `src/services/api.js`

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001",
});

export default api;
```

### Endpoints Utilizados

```
GET  /users      - Listar todos os usuários
POST /users      - Criar novo usuário
GET  /users/:id  - Obter usuário específico
```

## 📊 Base de Dados (db.json)

```json
{
  "users": [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao@exemplo.com",
      "followers": 1250,
      "following": 380,
      "avatar": "url-da-imagem"
    }
  ]
}
```

## 🎨 Estilização

O projeto utiliza **Styled Components** para estilização CSS-in-JS:

```javascript
import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #0066ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0052cc;
  }
`;
```

## 🧠 Conceitos Aprendidos

- **Roteamento Dinâmico**: Navegação entre páginas com React Router
- **Autenticação Básica**: Simulação de login e armazenamento de sessão
- **Requisições HTTP**: Consumo de API com Axios
- **Estado Local**: Gerenciamento com useState
- **Validação de Formulários**: Integração com React Hook Form
- **Componentes Funcionais**: Uso de Functional Components e Hooks
- **Estilização Avançada**: Styled Components para CSS dinâmico

## 💡 Melhorias Sugeridas

- [ ] Implementar autenticação real com JWT
- [ ] Adicionar Redux ou Context API para estado global
- [ ] Criar testes unitários com Jest
- [ ] Implementar tratamento de erros mais robusto
- [ ] Adicionar loading states durante requisições
- [ ] Otimizar imagens e performance
- [ ] Adicionar responsividade mobile

## 🐛 Troubleshooting

### Erro: "Cannot GET /api/users"

- Certifique-se de que o JSON Server está rodando (`npm run api`)
- Verifique a porta 8001 está disponível

### Erro: "Module not found"

- Rode `npm install` novamente
- Limpe o cache com `npm cache clean --force`

## 📚 Recursos Adicionais

- [Documentação React Router v6](https://reactrouter.com)
- [Guia Axios](https://axios-http.com/docs/intro)
- [Styled Components Docs](https://styled-components.com/docs)
- [React Hook Form](https://react-hook-form.com)

---

**Projeto desenvolvido durante o Bootcamp React Developer - DIO** 🚀

Bom aprendizado! 💻✨

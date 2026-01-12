# 🔍 GitFind - Busca de Repositórios GitHub

Uma aplicação React que permite buscar e explorar repositórios GitHub em tempo real. Projeto desenvolvido para aprender a consumir APIs externas e exibir dados dinâmicos.

## 🎯 Objetivo do Projeto

Este projeto tem como objetivo consolidar conhecimentos em:

- ✅ Consumo de **API REST (GitHub API)**
- ✅ Renderização dinâmica de dados
- ✅ Gerenciamento de estado com **Hooks (useState)**
- ✅ Manipulação de eventos em React
- ✅ Estilização com CSS puro
- ✅ Buscas e filtros de dados
- ✅ Exibição de informações em componentes reutilizáveis

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição                                  |
| ---------- | ------ | ------------------------------------------ |
| React      | 19.2.0 | Biblioteca principal para construção da UI |
| JavaScript | ES6+   | Linguagem de programação                   |
| CSS        | 3      | Estilização de componentes                 |
| GitHub API | v3     | API para busca de repositórios             |

## 📂 Estrutura do Projeto

```
gitfind/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── style.css
│   ├── assets/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── index.js
│   │   │   └── syles.css
│   │   └── itemList/
│   │       ├── index.jsx
│   │       └── style.css
│   └── pages/
│       └── Home/
│           ├── index.js
│           └── style.css
├── package.json
└── README.md
```

## 🚀 Como Usar

### 1. Instalação

```bash
# Instale as dependências
npm install
```

### 2. Inicie a Aplicação

```bash
npm start
```

A aplicação abrirá em `http://localhost:3000`

## 🔑 Funcionalidades Principais

### 1. **Busca de Repositórios**

- Campo de entrada para buscar repositórios
- Requisição em tempo real para a GitHub API
- Exibição de resultados dinâmica

### 2. **Exibição de Informações**

- Nome do repositório
- Descrição
- Linguagem de programação
- Número de stars
- Link para o repositório

### 3. **Interface Intuitiva**

- Header com branding
- Lista de repositórios encontrados
- Cards informativos com dados do repositório
- Design limpo e responsivo

## 🔌 Integração com GitHub API

```javascript
// Exemplo de busca
const buscarRepositorio = async (nomeRepo) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${nomeRepo}`
  );
  const data = await response.json();
  return data.items;
};
```

### Endpoints Utilizados

```
GET https://api.github.com/search/repositories?q={query}
  - Buscar repositórios por nome/tópico

GET https://api.github.com/repos/{owner}/{repo}
  - Obter informações detalhadas de um repositório
```

## 📊 Estrutura de Dados

```javascript
// Objeto do repositório retornado pela API
{
  id: 12345,
  name: "react-app",
  full_name: "user/react-app",
  description: "Uma aplicação React incrível",
  html_url: "https://github.com/user/react-app",
  stargazers_count: 150,
  language: "JavaScript",
  updated_at: "2024-01-12"
}
```

## 🎨 Estilização

O projeto utiliza **CSS puro** para estilização:

```css
.repository-card {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.3s ease;
}

.repository-card:hover {
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}
```

## 🧠 Conceitos Aprendidos

- **Requisições HTTP**: Consumo de API com Fetch API
- **Estado Dinâmico**: Gerenciamento com useState
- **Renderização Condicional**: Exibição baseada em estado
- **Mapeamento de Dados**: Exibição de listas com `.map()`
- **Eventos do DOM**: Manipulação de eventos (onClick, onChange)
- **Props**: Passagem de dados entre componentes

## 💡 Melhorias Sugeridas

- [ ] Implementar paginação dos resultados
- [ ] Adicionar filtros (por linguagem, data, stars)
- [ ] Salvar repositórios favoritos (localStorage)
- [ ] Implementar loading states
- [ ] Adicionar tratamento de erros robusto
- [ ] Criar visualização de perfil do usuário
- [ ] Otimizar performance com memoization
- [ ] Adicionar temas dark/light

## 🐛 Troubleshooting

### Erro: API Rate Limit Exceeded

- A GitHub API tem limite de requisições anônimas
- Solução: Autentique-se com um token pessoal do GitHub

```javascript
const headers = {
  Authorization: "token seu_token_aqui",
};
```

### Erro: CORS

- Se receber erro de CORS, use um proxy ou configure corretamente
- Alguns servidores proxy: cors-anywhere.herokuapp.com

## 📚 Recursos Adicionais

- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Documentação oficial React](https://react.dev)
- [Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [REST API Basics](https://restfulapi.net/)

---

**Projeto desenvolvido durante o Bootcamp React Developer - DIO** 🚀

Bom aprendizado! 💻✨

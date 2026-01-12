# 📚 Wiki de Repositórios - Enciclopédia GitHub

Uma aplicação completa que permite buscar, explorar e gerenciar repositórios GitHub em um formato de wiki/enciclopédia. Projeto avançado que consolida múltiplos conceitos de React.

## 🎯 Objetivo do Projeto

Este desafio tem como objetivo praticar e consolidar conhecimentos em:

- ✅ Consumo avançado de **API REST (GitHub API)**
- ✅ **Axios** para requisições HTTP
- ✅ **Styled Components** para estilização avançada
- ✅ Gerenciamento de estado com **Hooks (useState)**
- ✅ Efeitos colaterais com **useEffect**
- ✅ Renderização condicional e listas
- ✅ Tratamento de erros e loading states
- ✅ Componentização profissional

## 🛠️ Tecnologias Utilizadas

| Tecnologia        | Versão | Descrição                                  |
| ----------------- | ------ | ------------------------------------------ |
| React             | 19.2.0 | Biblioteca principal para construção da UI |
| Axios             | 1.13.2 | Cliente HTTP para requisições              |
| Styled Components | 6.1.19 | Estilização CSS-in-JS avançada             |
| GitHub API        | v3     | API para busca detalhada de repositórios   |
| JavaScript        | ES6+   | Linguagem de programação                   |

## 📂 Estrutura do Projeto

```
desafio02-wiki/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── index.js
│   ├── assets/
│   │   └── Logo.png
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Input/
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   └── ItemRepo/
│   │       ├── index.js
│   │       └── style.js
│   ├── pages/
│   │   ├── App.js
│   │   └── style.js
│   └── service/
│       └── api.js
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

## 📋 Fluxo da Aplicação

```
┌─────────────────────────┐
│   Usuário digita nome   │
│      do repositório     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  Clica no botão buscar  │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Requisição à GitHub API │
└────────────┬────────────┘
             │
             ▼
    ┌────────────────┐
    │ Encontrado?    │
    └────┬───────────┘
         │
    ┌────┴─────┐
   SIM        NÃO
    │           │
    ▼           ▼
 Exibe    Mostra erro
 Repo
```

## 🔑 Funcionalidades Principais

### 1. **Busca de Repositórios**

- Campo de entrada controlado com validação
- Botão para iniciar busca
- Suporte a Enter para buscar
- Feedback visual durante busca

### 2. **Exibição de Resultados**

- Cartão informativo com dados do repositório
- Informações completas:
  - Nome e descrição
  - Linguagem de programação
  - Número de stars
  - Forks e watchers
  - Link direto para o repositório

### 3. **Gerenciamento de Lista**

- Adicionar múltiplos repositórios à lista
- Evitar duplicatas
- Limpar campo de entrada após adição
- Remover repositórios da lista

### 4. **Interface Responsiva**

- Design moderno e profissional
- Estilizado com Styled Components
- Logo do GitHub
- Transições suaves

## 🔌 Integração com GitHub API

### Arquivo: `src/service/api.js`

```javascript
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
});
```

### Endpoints Utilizados

```
GET /repos/{owner}/{repo}
  - Obter informações detalhadas de um repositório

GET /search/repositories?q={query}
  - Buscar repositórios por nome/tópico
```

## 📊 Estrutura de Dados

```javascript
// Objeto do repositório armazenado na aplicação
{
  id: 12345,
  name: "react-app",
  full_name: "user/react-app",
  description: "Uma aplicação React incrível",
  html_url: "https://github.com/user/react-app",
  stargazers_count: 150,
  forks_count: 45,
  watchers_count: 20,
  language: "JavaScript",
  owner: {
    login: "username",
    avatar_url: "url-do-avatar"
  }
}
```

## 🎨 Estilização com Styled Components

```javascript
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  .repository {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    margin: 10px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
  }
`;
```

## 🧠 Conceitos Aprendidos

- **Axios vs Fetch**: Comparação e uso de Axios para requisições
- **Estados Complexos**: Gerenciamento de múltiplos estados
- **Efeitos Colaterais**: Sincronização com dados externos
- **Tratamento de Erros**: Try/catch e alert de feedback
- **Evitação de Duplicatas**: Verificação de existência
- **CSS-in-JS Avançado**: Styled Components com props e temas
- **Performance**: Otimização de renderizações

## 💡 Melhorias Sugeridas

- [ ] Implementar histórico de buscas (localStorage)
- [ ] Adicionar filtros avançados (por linguagem, data, stars)
- [ ] Salvar repositórios favoritos
- [ ] Paginação de resultados
- [ ] Busca em tempo real com debounce
- [ ] Perfil do usuário/desenvolvedor
- [ ] Temas dark/light
- [ ] Autenticação para aumentar rate limit
- [ ] Gráficos de estatísticas
- [ ] Testes unitários com Jest

## 🐛 Troubleshooting

### Erro: "Repositório não encontrado"

- Verifique se o nome do repositório está correto
- Use formato: `proprietario/nome-repo`
- Exemplo: `facebook/react`

### Erro: API Rate Limit

- Limite de 60 requisições por hora sem autenticação
- Solução: Configure token pessoal do GitHub

```javascript
const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "token seu_token_aqui",
  },
});
```

### Erro: CORS

- GitHub API pode ter restrições CORS em alguns contextos
- Use proxy ou configure headers apropriados

## 📚 Recursos Adicionais

- [GitHub REST API Docs](https://docs.github.com/en/rest)
- [Axios Documentation](https://axios-http.com)
- [Styled Components Guide](https://styled-components.com/docs)
- [React Hooks API](https://react.dev/reference/react/hooks)
- [ES6+ Features](https://javascript.info/)

---

**Projeto desenvolvido durante o Bootcamp React Developer - DIO** 🚀

Bom aprendizado! 💻✨

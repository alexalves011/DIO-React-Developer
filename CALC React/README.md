# 🧮 CALC React - Calculadora Interativa

Uma aplicação simples e educativa de uma calculadora construída com React. Projeto perfeito para aprender os fundamentos de componentes React, gerenciamento de estado e manipulação de eventos.

## 🎯 Objetivo do Projeto

Este projeto tem como objetivo aprender e praticar:

- ✅ Componentes React (Functional Components)
- ✅ Gerenciamento de estado com **Hooks (useState)**
- ✅ Manipulação de eventos do DOM
- ✅ Renderização condicional e lógica
- ✅ Estilização com CSS
- ✅ Props e passagem de dados entre componentes
- ✅ Boas práticas de componentização

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição                                  |
| ---------- | ------ | ------------------------------------------ |
| React      | 18.x+  | Biblioteca principal para construção da UI |
| JavaScript | ES6+   | Linguagem de programação                   |
| CSS        | 3      | Estilização de componentes                 |

## 📂 Estrutura do Projeto

```
CALC React/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── App.js
│   ├── App.css
│   ├── components/
│   │   ├── Display.js (ou similar)
│   │   ├── Button.js
│   │   └── styles/
│   └── assets/
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

### 1. **Operações Básicas**

- Adição (+)
- Subtração (-)
- Multiplicação (×)
- Divisão (÷)

### 2. **Visor Display**

- Exibição do número digitado
- Exibição do resultado
- Formatação clara dos números

### 3. **Botões da Calculadora**

- Botões numéricos (0-9)
- Operadores matemáticos
- Botão de igual (=)
- Botão de limpar (C)

### 4. **Interface Amigável**

- Layout intuitivo
- Design simples e focado
- Feedback visual dos cliques

## 🧠 Conceitos Aprendidos

### Estado e Props

```javascript
// Exemplo: gerenciamento de estado
const [display, setDisplay] = useState("0");
const [previousValue, setPreviousValue] = useState(null);
const [operation, setOperation] = useState(null);
```

### Manipulação de Eventos

```javascript
const handleNumberClick = (num) => {
  setDisplay(display === "0" ? num : display + num);
};

const handleOperation = (op) => {
  setPreviousValue(display);
  setOperation(op);
  setDisplay("0");
};
```

### Lógica de Cálculo

```javascript
const handleEquals = () => {
  if (previousValue && operation && display) {
    const result = calculate(previousValue, display, operation);
    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
  }
};

function calculate(prev, current, operation) {
  const a = parseFloat(prev);
  const b = parseFloat(current);

  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return b;
  }
}
```

## 🎨 Estilização

Exemplo de estilos CSS para a calculadora:

```css
.calculator {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 50px auto;
  border: 2px solid #333;
  border-radius: 10px;
  padding: 10px;
  background-color: #222;
}

.display {
  background-color: #111;
  color: #fff;
  font-size: 24px;
  padding: 20px;
  text-align: right;
  margin-bottom: 10px;
  border-radius: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.button {
  padding: 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
}

.button:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.operator {
  background-color: #ff9500;
  color: white;
}

.equals {
  background-color: #4caf50;
  color: white;
  grid-column: span 2;
}

.clear {
  background-color: #f44336;
  color: white;
  grid-column: span 2;
}
```

## 📋 Fluxo de Uso

```
┌─────────────────┐
│ Usuário digita  │
│     número      │
└────────┬────────┘
         │
         ▼
┌─────────────────────┐
│ Exibe no display    │
│ o número digitado   │
└────────┬────────────┘
         │
         ▼
┌──────────────────────┐
│ Usuário clica em     │
│ operador (+, -, etc) │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│ Digita 2º número     │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│ Clica em "="         │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│ Exibe resultado      │
└──────────────────────┘
```

## 💡 Melhorias Sugeridas

- [ ] Adicionar histórico de cálculos
- [ ] Implementar cálculos percentuais
- [ ] Adicionar teclas de teclado
- [ ] Suportar números decimais com mais precisão
- [ ] Tema dark/light
- [ ] Responsividade mobile
- [ ] Testes unitários
- [ ] Animações e transições
- [ ] Suporte a cálculos científicos
- [ ] Localização para múltiplos idiomas

## 🐛 Troubleshooting

### Erro: "Cannot find module"

```bash
npm install
npm cache clean --force
```

### Problema: Botões não respondem

- Verifique se os event handlers estão corretos
- Revise os console logs para mensagens de erro

### Problema: Cálculos incorretos

- Verifique a lógica de conversão de strings para números
- Teste com `parseFloat()` e `parseInt()`

## 📚 Recursos Adicionais

- [Documentação oficial React](https://react.dev)
- [MDN: Manipulação de Números em JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [React Hooks Guide](https://react.dev/reference/react/hooks)

## 🎓 Lições Aprendidas

Este projeto é excelente para aprender:

1. **Como estruturar um componente React** - Separar lógica, apresentação e estilos
2. **Gerenciamento de estado** - useState e suas regras
3. **Event Handling** - Responder a interações do usuário
4. **Lógica condicional** - Tomar decisões baseadas no estado
5. **Reutilização de componentes** - Criar botões reutilizáveis
6. **Props** - Passar configurações para componentes filhos

---

**Projeto desenvolvido durante o Bootcamp React Developer - DIO** 🚀

Bom aprendizado! 💻✨

# 📚 Livros App

Uma aplicação web desenvolvida como atividade de pós-graduação para gerenciar um clube do livro.

## 🚀 Tecnologias Utilizadas

- **React 19** com **TypeScript**
- **React Router** para navegação entre páginas
- **Vite** como bundler
- **Styled Components** para estilização com CSS-in-JS
- **Sistema de Temas** (Light/Dark mode)

## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── layout/            # Layout principal (Header/Footer)
│   └── theme-toggle/      # Botão de alternância de tema
├── context/           # Context API (gerenciamento de tema)
├── hooks/             # Custom hooks (useLivros, useCategorias, etc)
├── pages/             # Páginas da aplicação
│   ├── home/             # Página inicial
│   ├── livros/           # Lista de livros com filtros
│   ├── detalhar-livros/  # Detalhes de um livro específico
│   └── sugerir-livros/   # Formulário de sugestão
├── routers/           # Configuração de rotas
├── styles/            # Temas e estilos globais
└── types/             # Definições de tipos TypeScript
```

## ✨ Funcionalidades

### 📖 Páginas
- **Home**: Apresentação do clube e livro do mês
- **Livros**: Lista completa com filtros e ordenação
- **Detalhes**: Informações detalhadas de cada livro
- **Sugerir Livros**: Formulário para envio de sugestões

### 🎨 Recursos Implementados
- ✅ **Two-way Data Binding** em formulários
- ✅ **Validação de Formulários** com controle de estado
- ✅ **Requisições HTTP** (fetch API)
- ✅ **Rotas Dinâmicas** com React Router
- ✅ **Hooks Personalizados** para lógica reutilizável
- ✅ **Styled Components** com temas dinâmicos
- ✅ **Sistema de Temas** (claro/escuro)
- ✅ **Filtros e Ordenação** de livros
- ✅ **Tratamento de Erros** e validações

## 🎨 Sistema de Temas

O projeto implementa um sistema completo de temas com:
- **Dark Theme** (padrão)
- **Light Theme**
- Alternância via botão no header
- Estilos globais com Styled Components
- Context API para gerenciamento de estado

## 🛠️ Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📝 Conceitos Aplicados

Este projeto demonstra conhecimento em:
- JavaScript/TypeScript moderno (ES6+)
- Componentes React e composição
- Hooks (useState, useEffect, useCallback, useMemo, useContext)
- Ciclo de vida de componentes
- Gestão de estado local e global
- Roteamento SPA
- CSS-in-JS e Styled Components
- Formulários controlados
- TypeScript com tipagem forte
- Organização de código e boas práticas

---

**Desenvolvido como projeto acadêmico de pós-graduação** 🎓
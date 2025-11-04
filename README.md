# 🐾 SuperPet - Painel Administrativo

Painel administrativo moderno desenvolvido com React, TypeScript, Material-UI, Tailwind CSS e React Router.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Material-UI (MUI)** - Biblioteca de componentes React
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento para aplicações React
- **Vite** - Build tool e dev server ultra-rápido

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎨 Design System

O projeto segue o Design System SuperPet com cores específicas:

- **Primary (Teal)**: `#0E6A6B`
- **Secondary (Laranja)**: `#E47B24`
- **Background Claro**: `#F2EBDD`
- **Background Escuro**: `#0D1117`

Veja o design system completo na documentação do projeto.

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Header.tsx    # Header com navegação, notificações e usuário
│   ├── Sidebar.tsx   # Sidebar de navegação
│   └── Layout.tsx    # Layout principal
├── context/          # Contextos React
│   └── ThemeContext.tsx  # Contexto de tema claro/escuro
├── pages/            # Páginas da aplicação
│   ├── Home.tsx
│   ├── Dashboard.tsx
│   ├── Reports.tsx
│   └── Settings.tsx
├── App.tsx           # Componente principal com rotas
└── main.tsx          # Entry point
```

## ✨ Funcionalidades

- ✅ Header responsivo com logo e navegação
- ✅ Menu de navegação (Home, Dashboard, Reports, Settings)
- ✅ Sistema de notificações
- ✅ Toggle de tema claro/escuro
- ✅ Menu do usuário
- ✅ Sidebar condicional (não aparece na Home)
- ✅ Design totalmente responsivo
- ✅ Seguindo o Design System SuperPet

## 🎯 Rotas

- `/` - Home (sem sidebar)
- `/dashboard` - Dashboard (com sidebar)
- `/reports` - Relatórios (com sidebar)
- `/settings` - Configurações (com sidebar)

## 📱 Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter

## 📝 Licença

Este projeto é privado e desenvolvido para SuperPet Store.


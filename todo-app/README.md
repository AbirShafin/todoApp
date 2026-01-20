# 📝 Todo App

A beautiful, modern todo application built with React, TypeScript, and Vite.

## ✨ Features

- ✅ Add, complete, and delete todos
- 💾 Persistent storage using localStorage
- 🎨 Beautiful gradient UI with dark/light mode support
- ⚡ Fast and responsive
- 🔒 Type-safe with TypeScript
- 🏗️ Clean architecture with React Context API

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/       # React components
│   ├── AddTodo.tsx  # Form to add new todos
│   ├── TodoItem.tsx # Individual todo item
│   └── TodoList.tsx # List of all todos
├── context/         # React Context
│   └── TodoContext.tsx
├── hooks/           # Custom React hooks
│   └── useTodos.ts
├── pages/           # Page components
│   └── Home.tsx
├── types/           # TypeScript type definitions
│   └── index.ts
├── utils/           # Utility functions
│   └── storage.ts
├── App.tsx          # Main app component
├── App.css          # App-specific styles
└── index.css        # Global styles
```

## 🛠️ Built With

- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vite.dev/) - Build tool and dev server
- CSS3 - Styling with modern gradients and animations

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features in Detail

### Context API Architecture
The app uses React Context API for state management, eliminating prop drilling and making the code cleaner and more maintainable.

### Local Storage Persistence
All todos are automatically saved to localStorage, so your tasks persist even after closing the browser.

### Responsive Design
The app works seamlessly on desktop, tablet, and mobile devices.

## 🤝 Contributing

Feel free to fork this project and make your own modifications!

## 📄 License

This project is open source and available under the MIT License.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

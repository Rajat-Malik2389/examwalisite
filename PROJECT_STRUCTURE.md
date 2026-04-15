# Project Structure Documentation

## Overview
ExamwaliSite is a React + Vite web application for exam preparation. The codebase follows industrial standards for scalability, maintainability, and team collaboration.

## Directory Tree

```
examwalisite/
├── config/                    # Build and runtime configurations
├── public/                    # Static files (favicon, etc.)
├── src/                       # Source code
│   ├── assets/               # Images, fonts, media files
│   ├── components/           # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── ...
│   ├── pages/                # Page-level components
│   │   ├── Home.jsx
│   │   ├── ExamTracks.jsx
│   │   └── ...
│   ├── hooks/                # Custom React hooks
│   │   ├── useExamTrack.js
│   │   └── ...
│   ├── context/              # React Context providers
│   │   ├── ExamContext.jsx
│   │   └── ...
│   ├── utils/                # Utility functions
│   │   ├── api.js           # API calls
│   │   ├── helpers.js       # Helper functions
│   │   └── ...
│   ├── constants/            # Application constants
│   │   ├── examTracks.js
│   │   └── ...
│   ├── styles/               # Global styles
│   │   ├── variables.css
│   │   ├── globals.css
│   │   └── ...
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── dist/                     # Production build output
├── node_modules/             # Dependencies
├── .editorconfig             # Editor configuration
├── .env.example              # Environment template
├── .eslintrc.js              # ESLint configuration
├── .gitignore                # Git ignore rules
├── .prettierrc                # Prettier configuration
├── CONTRIBUTING.md           # Contribution guidelines
├── DESIGN_NOTES.md           # Design documentation
├── eslint.config.js          # ESLint config file
├── index.html                # HTML entry point
├── jsconfig.json             # JavaScript config
├── package.json              # Dependencies & scripts
├── package-lock.json         # Dependency lock file
├── PROJECT_STRUCTURE.md      # This file
├── README.md                 # Project overview
└── vite.config.js            # Vite configuration
```

## Key Directories

### `/src/components`
Reusable, self-contained React components. Each component should:
- Be focused on a single responsibility
- Include its own styles
- Have clear props documentation
- Be testable in isolation

Example:
```
components/
├── Button/
│   ├── Button.jsx
│   ├── Button.css
│   └── Button.test.jsx
└── Card/
    ├── Card.jsx
    ├── Card.css
    └── Card.test.jsx
```

### `/src/pages`
Page-level components that represent routes. These typically:
- Combine multiple components
- Handle page-specific logic
- Manage page state if needed

### `/src/hooks`
Custom React hooks for shared logic across components:
- `useExamTrack()` - Exam track management
- `useAuth()` - Authentication logic
- `useApi()` - API calls with loading/error states

### `/src/context`
React Context for global state management:
- `ExamContext` - Exam track selection
- `UserContext` - User data

### `/src/utils`
Pure utility functions with no side effects:
- API wrappers
- Data transformers
- Validators
- Formatters

### `/src/constants`
Application-wide constants:
- Exam tracks
- API endpoints
- Theme colors
- Feature flags

### `/src/styles`
Global styles and design tokens:
- CSS variables
- Base element styles
- Utility classes
- Theme definitions

## Import Aliases

To improve code readability, path aliases are configured in `jsconfig.json`:

```javascript
// Instead of: import Button from '../../../components/Button'
// Use: import Button from '@components/Button'

import { useExamTrack } from '@hooks/useExamTrack';
import { API_BASE_URL } from '@constants/api';
import { formatDate } from '@utils/formatters';
```

## Configuration Files

### `vite.config.js`
Vite build and dev server configuration

### `eslint.config.js`
Code quality linting rules

### `.prettierrc`
Code formatting configuration

### `jsconfig.json`
JavaScript compiler options and path aliases

### `.editorconfig`
Editor consistency settings

### `.env.example`
Template for environment variables

## Development Workflow

1. **Feature Development**: Create feature in `/src`
2. **Code Quality**: Run `npm run lint` and fix issues
3. **Testing**: Write tests alongside features
4. **Build**: Run `npm run build` to verify production build
5. **Review**: Ensure changes follow project structure

## Performance Considerations

- Keep components small and focused
- Use lazy loading for large components
- Optimize images in `/assets`
- Use code splitting for pages
- Monitor bundle size with Vite's build analyzer

## Scalability Notes

This structure supports:
- **Large teams**: Clear separation of concerns
- **Many features**: Easy to add new pages, components, hooks
- **Complex state**: Context API with potential for Redux/Zustand later
- **Code reuse**: Centralized hooks and utilities
- **Maintenance**: Predictable file locations

## Future Enhancements

- Add `/tests` directory for integration tests
- Add `/services` for backend service classes
- Add `/types` when migrating to TypeScript
- Add `/lib` for third-party integrations
- Add `/middleware` for API middleware

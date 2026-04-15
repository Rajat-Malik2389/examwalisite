# Contributing to ExamwaliSite

## Development Setup

### Prerequisites
- Node.js v24.14.1 or higher
- npm v11.11.0 or higher

### Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd examwalisite/examwalisite/examwalisite
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173/ in your browser

## Project Structure

```
src/
├── components/      # Reusable React components
├── pages/          # Page-level components (routes)
├── hooks/          # Custom React hooks
├── context/        # React Context providers
├── utils/          # Utility functions
├── constants/      # Application constants
├── styles/         # Global styles
├── assets/         # Static assets (images, fonts)
├── App.jsx         # Main App component
└── main.jsx        # Entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## Code Standards

### Naming Conventions
- Components: PascalCase (e.g., `UserProfile.jsx`)
- Utilities/Hooks: camelCase (e.g., `useAuth.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- CSS files: kebab-case (e.g., `user-profile.css`)

### File Organization
- One component per file
- Related styles in same directory
- Utility functions grouped by feature
- Keep files under 300 lines when possible

### ESLint & Formatting
- Code is automatically formatted on save (Prettier integration recommended)
- Run `npm run lint` to check for issues
- Run `npm run lint:fix` to auto-fix issues

## Git Workflow

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Make your changes
3. Commit with clear messages: `git commit -m "feat: add new feature"`
4. Push to branch: `git push origin feature/feature-name`
5. Open a Pull Request

### Commit Message Format
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test updates
- `chore:` Maintenance

## Testing

(To be added when test framework is set up)

## Deployment

(To be documented)

## Getting Help

- Check existing issues and discussions
- Review documentation in DESIGN_NOTES.md
- Ask questions in pull requests or issues

# NextJS With Stenciljs Sample

My sample demo web components made by [Stenciljs](https://stenciljs.com/) integrate to [Nextjs](https://nextjs.org/) project

### Tech stack

- [Turborepo](https://turbo.build/repo/docs) for scaling monorepos and codebases
- [Stenciljs](https://stenciljs.com/) for shadow DOM web components (Design System)
- [Nextjs](https://nextjs.org/) for SSR web pages

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `tiny-design-system`: a small design system made by [Stenciljs](https://stenciljs.com/)
- `react-tiny-design-system`: a React wrapper for `tiny-design-system`

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

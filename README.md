# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # FlowSync

  Landing page SaaS conçue comme une vitrine portfolio pour un produit de collaboration de projets en temps réel.

  Le projet est construit avec React, TypeScript, Vite et Tailwind CSS. Il propose un contenu en français par défaut, un mode sombre, des animations discrètes et un déploiement prêt pour GitHub Pages.

  ## Aperçu

  FlowSync présente :

  - une hero section avec illustration personnalisée
  - une grille de fonctionnalités orientée produit
  - une section expliquant le workflow
  - un aperçu de dashboard
  - des tarifs
  - des témoignages
  - un appel à l’action clair
  - un footer avec liens et indicateurs de projet

  ## Stack technique

  - React 19
  - TypeScript
  - Vite 8
  - Tailwind CSS 4
  - Framer Motion
  - Lucide React

  ## Fonctionnalités

  - Mode clair / sombre avec toggle dans le header
  - Interface responsive pensée mobile-first
  - Styles entièrement gérés avec Tailwind CSS
  - Animations légères pour les sections et les cartes
  - Branding et contenu en français
  - Préparation GitHub Pages avec base Vite configurée

  ## Installation

  ```bash
  pnpm install
  ```

  ## Scripts disponibles

  ```bash
  pnpm dev
  pnpm build
  pnpm lint
  pnpm preview
  ```

  - `pnpm dev` lance le serveur de développement
  - `pnpm build` génère la version de production
  - `pnpm lint` vérifie la qualité du code
  - `pnpm preview` sert localement le build de production

  ## Développement local

  ```bash
  pnpm dev
  ```

  Le site est ensuite disponible en local via l’URL affichée par Vite.

  ## Déploiement GitHub Pages

  Le projet est configuré pour GitHub Pages avec :

  - `base` défini dans [vite.config.ts](vite.config.ts)
  - un workflow de déploiement dans [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

  Le déploiement se déclenche automatiquement à chaque push sur `main`.

  ## Structure utile

  - [src/App.tsx](src/App.tsx) : point d’entrée React
  - [src/FlowSyncLanding.tsx](src/FlowSyncLanding.tsx) : page principale
  - [src/index.css](src/index.css) : base Tailwind et tokens globaux
  - [src/assets/hero-flowsync.svg](src/assets/hero-flowsync.svg) : illustration hero
  - [vite.config.ts](vite.config.ts) : config Vite et base Pages

  ## Notes de conception

  - Palette principale inspirée de `#E63946`, `#F1FAEE`, `#A8DADC`, `#457B9D` et `#1D3557`
  - Direction visuelle lumineuse avec surfaces claires et contrastes nets
  - Pas de dégradés sur les textes, boutons et icônes
  - Interface pensée pour une lecture rapide et une présentation portfolio

  ## Vérification

  Le projet a été validé avec :

  - `pnpm build`
  - `pnpm lint`

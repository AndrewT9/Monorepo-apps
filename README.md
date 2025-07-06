# Monorepo Project

This repository contains two front-end applications and a set of shared UI components in a single Nx monorepo:

1. **Angular App** (`angular-app`)
2. **Plain HTML App** (`plain-html`)
3. **Shared Components Library** (`shared-component`)

# 🗂️ Project Structure

<details> <summary>Example</summary>
├── apps                                             <br/>
│ ├── angular-app # Angular 19 application           <br/>
│ └── plain-html # Static HTML/JS app (Vite)         <br/>
│                                                    <br/>
├── libs                                             <br/>
│ └── shared-component # Reusable UI library (Lit/Web Components)<br/>
│                                                    <br/>
├── node_modules                                     <br/>
├── nx.json                                          <br/>
├── package.json                                     <br/>
├── tsconfig.base.json                               <br/>
└── workspace.json                                   <br/>
</details>

- apps/angular-app – full Angular project (uses @angular-devkit, Router, RxJS, etc.).
- apps/plain-html – lightweight HTML + JavaScript, built with Vite (uses Lit for web-components).
- libs/shared-component – a package of custom elements or JS modules shared by both apps. Built with Rollup under Nx.

# 🧰 Technologies & Tooling

Monorepo: Nx (v21.1.2)
Angular: v19.x, Angular CLI, RxJS
Web: Vite (via @nx/web), Lit (for Web Components)
Build: Rollup (for shared-component), TypeScript
Lint & Format: ESLint (with @nx/eslint-plugin), Prettier

Install node_modules

```sh
npm i
```

Build shared components:

```sh
nx build shared-component
```

Run Angular app:

```sh
nx serve angular-app
```

Run HTML app

```sh
nx serve plain-html
```

-->

<p align="right">
  <a href="README.md">English</a> | <a href="README_CN.md">中文</a>
</p>

<p align="center">
  <img src="public/logo.svg" alt="TermHub" width="520" />
</p>

<p align="center">
  <strong>Your Resume In. Portfolio Out.</strong><br/>
  <sub>Terminal-themed portfolio for developers, researchers, and creatives. Modernized with a high-performance stack.</sub>
</p>

<p align="center">
  <a href="https://github.com/asckaya/TermHub"><img src="https://img.shields.io/badge/License-GPL_v3-a3be8c?style=flat-square" alt="License" /></a>
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Chakra_UI-v3-319795?style=flat-square&logo=chakraui&logoColor=white" alt="Chakra UI" />
  <a href="#ai-integration--supports-mcp"><img src="https://img.shields.io/badge/NEW-Supports_MCP-bf616a?style=flat-square&logo=openai&logoColor=white" alt="Supports MCP" /></a>
</p>

---

## ⚡ Modernized Refactoring (v2.0)

This version represents a significant technical overhaul focusing on performance, reliability, and developer experience:

- **Framework Upgrade**: Migrated to **React 19**, **Vite 8**, and **TypeScript 6**.
- **Chakra UI v3**: Full migration to the latest Chakra UI, leveraging its new styling engine and theme system.
- **Pure CSS Responsiveness**: Eliminated JavaScript-based mobile detection. Layouts now use declarative Chakra UI responsive props, ensuring zero layout shift and standard media query behavior.
- **Reactive i18n**: Redesigned the localization logic to be fully reactive. No more mixed-language initialization; content updates instantly across the entire site.
- **Mocha by Default**: The terminal now defaults to the vibrant **Catppuccin Mocha** palette.

<br/>

## Features

- Terminal aesthetic with multiple themes (Mocha, Nord, Macchiato, Frappé)
- Fully **responsive** (mobile → desktop) using pure CSS logic
- **No code needed** — just edit text files in `content/`
- **MCP-powered** — resume → AI → portfolio in minutes
- **Bilingual i18n** — English / Chinese with reactive language switching

**Content types:** Publications · Projects · Experience · Articles · Awards · News

<br/>

## Quick Start

```bash
# 1. Clone
git clone https://github.com/asckaya/TermHub.git
cd TermHub && pnpm install

# 2. Run the setup wizard — generates your config
pnpm setup

# 3. Start dev server
pnpm dev
```

> Open **http://localhost:5173** — your site is running.
> Edit files in `content/`, save, and the browser refreshes automatically.

<br/>

## Tech Stack

React 19 · TypeScript 6 · Vite 8 · Chakra UI v3 · Framer Motion · Catppuccin · i18next

<br/>

## License

**GPL-3.0-only** · Copyright © 2026 [Yaoyao (Freax) Qian](https://h-freax.github.io/) & [asckaya](https://github.com/asckaya)

-->

<p align="right">
  <a href="README.md">English</a> | <a href="README_CN.md">中文</a>
</p>

<p align="center">
  <img src="public/logo.svg" alt="TermHub" width="520" />
</p>

<p align="center">
  <strong>上传简历，生成主页。</strong><br/>
  <sub>面向开发者、研究者和创作者的终端风格个人作品集。经过现代化重构，性能更强。</sub>
</p>

<p align="center">
  <a href="https://github.com/asckaya/TermHub"><img src="https://img.shields.io/badge/许可证-GPL_v3-a3be8c?style=flat-square" alt="License" /></a>
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Chakra_UI-v3-319795?style=flat-square&logo=chakraui&logoColor=white" alt="Chakra UI" />
  <a href="#ai-集成--支持-mcp"><img src="https://img.shields.io/badge/NEW-支持_MCP-bf616a?style=flat-square&logo=openai&logoColor=white" alt="支持 MCP" /></a>
</p>

---

## ⚡ 现代化重构 (v2.0)

本项目已完成大规模的技术重构，重点在于提升性能、稳定性及移动端体验：

- **框架全面升级**：迁移至 **React 19**、**Vite 8** 和 **TypeScript 6**。
- **Chakra UI v3**：完整迁移至最新的 Chakra UI，利用其全新的样式引擎和主题系统。
- **纯 CSS 响应式**：彻底剔除了基于 JavaScript 的移动端断点判断。布局现在完全由 Chakra UI 的响应式属性驱动，确保零布局抖动。
- **响应式国际化**：重新设计了国际化逻辑，实现全站数据的实时响应切换，彻底解决启动时中英文混杂的问题。
- **默认 Mocha 主题**：终端默认配色已更新为更具动感的 **Catppuccin Mocha**。

<br/>

## 功能特性

- 终端美学设计，支持多种配色方案 (Mocha, Nord, Macchiato, Frappé)
- 完全**响应式**（手机 → 桌面），基于纯 CSS 的布局逻辑
- **无需编码** — 只需编辑 `content/` 中的文本文件
- **MCP 驱动** — 简历 → AI → 作品集，分钟级完成
- **智能 i18n** — 中英文双语支持，实时语言响应

**内容类型：** 论文 · 项目 · 经历 · 文章 · 获奖 · 动态

<br/>

## 快速开始

```bash
# 1. 克隆
git clone https://github.com/asckaya/TermHub.git
cd TermHub && pnpm install

# 2. 运行设置向导 — 生成你的配置
pnpm setup

# 3. 启动开发服务器
pnpm dev
```

> 打开 **http://localhost:5173** —— 你的网站已经运行。
> 编辑 `content/` 中的文件，保存后浏览器会自动刷新。

<br/>

## 技术栈

React 19 · TypeScript 6 · Vite 8 · Chakra UI v3 · Framer Motion · Catppuccin · i18next

<br/>

## 许可证

**GPL-3.0-only** · 版权所有 © 2026 [Yaoyao (Freax) Qian](https://h-freax.github.io/) & [asckaya](https://github.com/asckaya)

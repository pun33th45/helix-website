# Helix Website

Production landing page for **Helix**, an AI-native desktop code editor built with Electron, Monaco Editor, integrated terminal support, and flexible AI provider configuration.

Live site: [https://helix-ide.vercel.app](https://helix-ide.vercel.app)

## Overview

Helix is designed for developers who want a fast desktop editor with streaming AI chat, inline completions, terminal access, and bring-your-own-key AI providers. This repository contains the static marketing website used for the public launch page.

## Features

- Premium dark landing page with Helix branding
- Responsive hero section with editor mockup
- Feature grid for AI chat, Monaco, terminal, command palette, completions, and BYOK providers
- Tech stack strip, setup flow, AI provider section, and final download CTA
- Optimized logo icon for favicon, nav, and footer usage
- Vercel-ready static deployment

## Tech Stack

- HTML
- CSS
- Static assets
- Vercel hosting

## Local Development

Open `index.html` directly in a browser, or serve the folder locally:

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Deployment

This site is configured for Vercel as a static project.

Recommended Vercel settings:

- Framework preset: `Other`
- Build command: empty or `npm run build`
- Output directory: `.`
- Install command: empty or default
- Environment variables: none required

## Project Structure

```text
.
├── index.html
├── helix-logo.png
├── helix-icon.png
├── helix_logo_final.svg
├── helix_logo_web.svg
├── helix_mark_web.svg
├── package.json
├── vercel.json
└── README.md
```

## License

MIT

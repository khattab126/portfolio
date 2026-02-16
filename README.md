# Alpha Software Solutions Portfolio

A stunning, modern, high-conversion landing page for Alpha Software Solutions - built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark Mode Glassmorphism Design** - Deep charcoal with neon blue accents
- ✨ **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎯 **Multi-step Contact Form** - Beautiful, user-friendly form
- 🖼️ **Interactive Portfolio Gallery** - Hover effects and micro-interactions
- 🚀 **Performance Optimized** - Fast loading and smooth scrolling

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd Alpha-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
Alpha-portfolio/
├── public/
│   └── alpha-icon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── ParticleBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Sections

1. **Hero** - Eye-catching headline with animated particle background and floating Alpha symbol
2. **Services** - Three service cards (Web, Mobile, Desktop) with hover effects
3. **Portfolio** - Project showcase featuring the Alpha Marketplace project
4. **Contact Form** - Multi-step form for client inquiries
5. **Footer** - Clean footer with branding and social links

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```js
colors: {
  'alpha-dark': '#0a0a0f',
  'alpha-neon': '#00d4ff',
  'alpha-purple': '#8b5cf6',
  'alpha-pink': '#ec4899',
}
```

### Animations
Framer Motion animations can be customized in each component. Key animation configs are in `tailwind.config.js` under `animation` and `keyframes`.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## License

MIT License - feel free to use for your own projects!

---

Built with ❤️ by Alpha Software Solutions

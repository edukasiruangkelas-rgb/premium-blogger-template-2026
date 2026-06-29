# Project Structure Documentation

## 📁 Directory Overview

```
premium-blogger-template-2026/
├── src/                          # Source files
│   ├── html/
│   │   ├── index.html            # Homepage template
│   │   ├── article.html          # Article/Post template
│   │   ├── tools.html            # Tools directory
│   │   ├── category.html         # Category page
│   │   └── contact.html          # Contact page
│   ├── css/
│   │   ├── variables.css         # CSS custom properties (colors, fonts, spacing)
│   │   ├── base.css              # Global styles & typography
│   │   ├── components.css        # Reusable UI components
│   │   ├── header.css            # Header & navigation styles
│   │   ├── layout.css            # Grid & flexbox utilities
│   │   ├── responsive.css        # Media queries & breakpoints
│   │   └── main.css              # Compiled CSS (generated)
│   ├── js/
│   │   ├── header.js             # Header scroll behavior module
│   │   ├── navigation.js         # Menu interactions (planned)
│   │   ├── search.js             # Search functionality (planned)
│   │   ├── toc.js                # Table of contents generator (planned)
│   │   ├── theme.js              # Dark mode toggle (planned)
│   │   ├── analytics.js          # Analytics tracking (planned)
│   │   └── main.js               # Entry point & app initialization
│   └── assets/
│       ├── images/               # PNG, JPG, WebP images
│       ├── icons/                # SVG icons
│       └── fonts/                # Custom fonts (WOFF2)
├── blogger/
│   ├── template.xml              # Blogger XML template (generated)
│   └── theme-config.json         # Theme configuration
├── docs/
│   ├── INSTALLATION.md           # Setup & installation guide
│   ├── CUSTOMIZATION.md          # Customization reference
│   ├── STRUCTURE.md              # This file - project structure
│   └── TROUBLESHOOTING.md        # Common issues & solutions
├── tests/
│   ├── html.test.js              # HTML structure tests (planned)
│   ├── css.test.js               # CSS tests (planned)
│   └── accessibility.test.js     # Accessibility tests (planned)
├── scripts/
│   ├── build.js                  # Build script (planned)
│   ├── minify.js                 # CSS/JS minification (planned)
│   ├── optimize.js               # Image optimization (planned)
│   └── build-blogger.js          # Generate Blogger template (planned)
├── dist/                         # Build output (generated)
├── node_modules/                 # Dependencies (generated)
├── PRD.md                         # Product Requirements Document
├── README.md                      # Project overview
├── package.json                   # NPM dependencies & scripts
├── package-lock.json             # Dependency lock file (generated)
├── webpack.config.js             # Webpack build configuration
├── .eslintrc.json                # ESLint code quality rules
├── .gitignore                    # Git ignore patterns
└── .editorconfig                 # Editor configuration (planned)
```

## 📋 File Descriptions

### Source Files (`src/`)

#### HTML Files (`src/html/`)

**index.html**
- Entry point / Homepage
- Contains: Header, hero section, featured articles, tools grid, newsletter, footer
- Semantic HTML5 structure
- Accessibility-first markup

**article.html** (planned)
- Single post/article template
- Contains: Header, article content, sidebar (TOC, author bio, related posts), comments
- Template untuk setiap blog post

**tools.html** (planned)
- Tools directory / listing page
- Contains: Header, filter options, tools grid, pagination
- Showcase untuk tools & resources

**category.html** (planned)
- Category/tag archive page
- Contains: Header, category description, posts grid, filter/sort
- Listing halaman untuk kategori tertentu

**contact.html** (planned)
- Contact form page
- Contains: Header, contact form, map, social links
- Customer communication page

#### CSS Files (`src/css/`)

**variables.css**
- CSS Custom Properties (CSS Variables)
- Defines: Colors, fonts, spacing, shadows, transitions, breakpoints
- Single source of truth untuk design system
- Easy to maintain & customize

```css
:root {
  --color-primary: #7B3FF2;
  --font-primary: 'Raleway';
  --spacing-lg: 24px;
  /* ... */
}
```

**base.css**
- Global styles & reset
- Typography (headings, paragraphs, links)
- HTML element defaults
- Focus & accessibility styles
- Scrollbar styling

**components.css**
- Reusable UI components
- Buttons (primary, secondary, sizes)
- Cards dengan hover effects
- Forms & form controls
- Alerts & badges
- Breadcrumbs & tooltips

**header.css**
- Header container styling
- Navigation menu styles
- Logo & branding
- Search bar
- Social icons
- Mobile hamburger menu
- Sticky behavior

**layout.css**
- Grid system (12-column inspired)
- Flexbox utilities
- Container sizing
- Padding/margin utilities
- Sidebar layouts
- Section spacing

**responsive.css**
- Media query breakpoints
- Mobile-first design
- Responsive typography
- Adaptive layouts
- Dark mode styles
- Print media styles
- Reduced motion preferences

#### JavaScript Files (`src/js/`)

**main.js**
- Application entry point
- Import semua CSS & modules
- Global app initialization
- Module loader

```javascript
import './header.js';
import '../css/base.css';

const App = (() => {
  const init = () => { /* ... */ };
  return { init };
})();
```

**header.js**
- Header scroll behavior
- Sticky header dengan compact state
- Mobile menu toggle
- Navigation active state
- Smooth transitions
- RequestAnimationFrame optimization

**navigation.js** (planned)
- Dropdown menu interactions
- Menu keyboard navigation (accessibility)
- Mobile menu handling
- Link highlighting

**search.js** (planned)
- Search input handling
- Search suggestions
- Results display
- Search analytics

**toc.js** (planned)
- Table of Contents generator
- Auto-generate dari article headings
- Smooth scrolling to sections
- Active section highlighting

**theme.js** (planned)
- Dark mode toggle
- Theme persistence (localStorage)
- System preference detection
- Theme switching animation

**analytics.js** (planned)
- Google Analytics integration
- Event tracking
- Page view tracking
- Performance metrics

### Configuration Files

**package.json**
```json
{
  "name": "premium-blogger-template-2026",
  "version": "1.0.0",
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production",
    "build:blogger": "node scripts/build-blogger.js"
  },
  "devDependencies": { /* ... */ },
  "dependencies": { /* ... */ }
}
```

**webpack.config.js**
- Build configuration
- Entry/output setup
- Loaders (Babel, CSS, image)
- Plugins (extraction, minification)
- Dev server config
- Source maps

**.eslintrc.json**
- Code quality rules
- Indentation: 2 spaces
- Quotes: single
- Semicolons: required
- Variable naming: camelCase

### Documentation Files (`docs/`)

**INSTALLATION.md**
- Prerequisites
- Quick start guide
- Build & deployment
- Blogger setup instructions
- Available scripts
- Troubleshooting

**CUSTOMIZATION.md**
- Design customization (colors, fonts)
- Component styling
- Responsive breakpoints
- JavaScript customization
- Performance optimization

**STRUCTURE.md** (This file)
- Project organization
- File descriptions
- Technology decisions
- Workflow guide

**TROUBLESHOOTING.md** (planned)
- Common issues
- Solutions
- Debug techniques
- Performance issues

### Build Output (`dist/`)

Generated setelah `npm run build`:

```
dist/
├── main.min.js          # Minified JavaScript
├── main.min.css         # Minified CSS
├── images/              # Optimized images
├── fonts/               # Font files
└── [other assets]/
```

## 🏗️ Architecture Decisions

### CSS Architecture (ITCSS-inspired)

```
variables.css    ← Settings (design tokens)
base.css         ← Base rules (resets, typography)
components.css   ← Components (buttons, cards, forms)
header.css       ← Specific components
layout.css       ← Layout patterns
responsive.css   ← Media queries (last)
```

**Benefits:**
- Low specificity
- Easy to maintain
- Minimal cascading
- Reusable utilities

### JavaScript Module Pattern

```javascript
const Module = (() => {
  const privateVar = 'private';
  
  const privateMethod = () => { /* ... */ };
  
  const init = () => {
    privateMethod();
  };
  
  return {
    init
  };
})();

export default Module;
```

**Benefits:**
- Encapsulation
- No global pollution
- Easy to test
- Clear API

### Build System (Webpack)

**Reasons:**
- Module bundling
- Asset optimization
- Development server
- CSS/JS minification
- Source maps
- ES6+ transpilation

## 🔄 Development Workflow

### Local Development

1. **Run dev server**: `npm run dev`
2. **Edit files** dalam `src/`
3. **Webpack watches** dan hot reload
4. **Browser updates** automatically

### Building for Production

1. **Run build**: `npm run build`
2. **Output generated** di `dist/`
3. **Assets minified** dan optimized
4. **Ready for deployment**

### Building for Blogger

1. **Run blogger build**: `npm run build:blogger`
2. **XML template generated** di `blogger/`
3. **Copy & paste** ke Blogger dashboard
4. **Customize** tema settings

## 📊 Technologies & Dependencies

### Core Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling (Grid, Flexbox, Custom Properties)
- **JavaScript (ES6+)** - Modern JavaScript
- **Webpack** - Module bundler

### Build Tools
- **Babel** - JS transpilation
- **PostCSS** - CSS processing
- **ESLint** - Code quality
- **Prettier** - Code formatting

### Libraries (Minimal Dependencies)
- **core-js** - Polyfills untuk older browsers

## 🚀 Future Enhancements

- [ ] Testing suite (Jest)
- [ ] Performance monitoring
- [ ] PWA support
- [ ] Multi-language support (i18n)
- [ ] Admin dashboard
- [ ] Comment system
- [ ] Search engine
- [ ] Analytics dashboard

---

**Last Updated**: June 29, 2026
**Version**: 1.0.0

# Customization Guide

## 🎨 Design Customization

### Color Scheme

Edit `src/css/variables.css` untuk mengubah warna:

```css
:root {
  /* Primary Colors */
  --color-primary: #7B3FF2;          /* Purple */
  --color-primary-light: #9D6CFF;    /* Light Purple */
  --color-primary-dark: #6A2FB8;     /* Dark Purple */
  
  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-dark: #2C2C2C;
  --color-border: #E5E5E5;
  
  /* Semantic Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}
```

### Typography

#### Ubah Font Family

Edit di `src/css/base.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap');

:root {
  --font-primary: 'Your Font Name', sans-serif;  /* Untuk heading */
  --font-body: 'Your Font Name', sans-serif;     /* Untuk body text */
  --font-mono: 'Your Mono Font', monospace;      /* Untuk code */
}
```

#### Ubah Font Size

```css
:root {
  --font-size-base: 16px;  /* Default: 1rem = 16px */
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 30px;
  --font-size-4xl: 36px;
  --font-size-5xl: 48px;
}
```

### Spacing & Layout

```css
:root {
  /* Padding/Margin Scale */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;    /* Default */
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  
  /* Container Widths */
  --container-desktop: 1200px;
  --container-wide: 1400px;
}
```

### Border Radius

```css
:root {
  --radius-sm: 6px;
  --radius-md: 8px;      /* Default untuk cards */
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px; /* Untuk buttons, pills */
}
```

## 🎯 Component Customization

### Buttons

#### Primary Button

Edit `src/css/components.css`:

```css
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  /* Customize hover, active states */
}
```

#### Tambah Button Variant

```css
.btn-success {
  background-color: var(--color-success);
  color: var(--color-white);
}

.btn-success:hover {
  background-color: #059669;  /* Darker shade */
}
```

### Cards

```css
.card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  /* Customize appearance */
}
```

### Forms

Edit form styling di `src/css/components.css`:

```css
.form-control {
  height: 44px;  /* Input height */
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.form-control:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(123, 63, 242, 0.1);
}
```

## 📱 Responsive Breakpoints

Edit `src/css/responsive.css`:

```css
/* Mobile (< 576px) */
@media (max-width: 575px) {
  /* Mobile styles */
}

/* Tablet (576px - 767px) */
@media (min-width: 576px) and (max-width: 767px) {
  /* Tablet styles */
}

/* Desktop (768px - 1199px) */
@media (min-width: 768px) and (max-width: 1199px) {
  /* Desktop styles */
}

/* Large Desktop (1200px+) */
@media (min-width: 1200px) {
  /* Large screen styles */
}
```

## 🎬 Animations & Transitions

### Add Custom Animation

```css
/* src/css/components.css */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 600ms ease-out;
}
```

### Customize Transition Speed

```css
:root {
  --transition-fast: 150ms ease-out;
  --transition-base: 200ms ease-out;     /* Default */
  --transition-slow: 300ms ease-in-out;
}
```

## 🌙 Dark Mode

Template sudah support dark mode via prefers-color-scheme:

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0F172A;
    color: #F1F5F9;
  }
  /* Dark mode styles */
}
```

Untuk custom dark mode toggle, tambahkan:

```javascript
// src/js/theme.js
const ThemeModule = (() => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', 
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  };
  
  return { toggleTheme };
})();
```

## 📄 Header Customization

### Edit Header Logo

`src/html/index.html`:

```html
<div class="logo">
  <a href="/">
    <img src="/your-logo.svg" alt="Your Logo" loading="lazy">
    <span>Your Site Name</span>
  </a>
</div>
```

### Ubah Navigation Menu

```html
<ul class="nav-menu">
  <li class="nav-item">
    <a href="/" class="nav-link">Home</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Your Item</a>
    <ul class="dropdown-menu">
      <li><a href="#" class="dropdown-item">Sub Item 1</a></li>
      <li><a href="#" class="dropdown-item">Sub Item 2</a></li>
    </ul>
  </li>
</ul>
```

## 🔧 JavaScript Customization

### Add Custom Script

`src/js/custom.js`:

```javascript
const CustomModule = (() => {
  const init = () => {
    console.log('Custom module initialized');
    // Your code here
  };
  
  return { init };
})();

export default CustomModule;
```

### Import di Main

Edit `src/js/main.js`:

```javascript
import './header.js';
import './custom.js';
```

## 📝 Footer Customization

### Edit Footer Content

`src/html/index.html`:

```html
<footer>
  <div class="container">
    <div class="footer-content grid grid-cols-4">
      <!-- Your sections -->
    </div>
    <hr>
    <div class="footer-bottom">
      <p>&copy; 2026 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>
```

## 🎨 Homepage Hero Section

### Customize Hero

```html
<section class="hero">
  <div class="container container-wide">
    <div class="hero-content flex flex-center flex-col">
      <h1>Your Custom Title</h1>
      <p class="hero-subtitle">Your custom subtitle</p>
      <div class="hero-buttons">
        <button class="btn btn-primary btn-lg">Action</button>
        <button class="btn btn-secondary btn-lg">Learn</button>
      </div>
    </div>
  </div>
</section>
```

### Hero Background Image

```css
.hero {
  background: url('/hero-bg.jpg') center/cover;
  padding: 100px 0;
  color: white;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(123, 63, 242, 0.3);  /* Purple overlay */
}
```

## 🔐 Security Best Practices

1. **Sanitize User Input**
   ```javascript
   const sanitize = (str) => {
     const div = document.createElement('div');
     div.textContent = str;
     return div.innerHTML;
   };
   ```

2. **Use Content Security Policy**
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
   ```

3. **Keep Dependencies Updated**
   ```bash
   npm update
   npm audit fix
   ```

## 📊 Performance Tips

1. **Lazy Load Images**
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

2. **Minify CSS & JS**
   ```bash
   npm run minify
   ```

3. **Optimize Images**
   ```bash
   npm run optimize
   ```

4. **Use CSS Custom Properties**
   - Lebih mudah maintenance
   - Reduce CSS size

## 🚀 Advanced Customization

### Add Third-Party Library

```bash
npm install library-name
```

```javascript
// src/js/main.js
import LibraryName from 'library-name';
```

### Custom Webpack Config

Edit `webpack.config.js` untuk add plugins atau loaders

### Build Custom Components

Tambahkan di `src/css/components.css` dan gunakan di HTML

---

**Butuh bantuan? Check dokumentasi atau buat issue di GitHub!** 💬

# Troubleshooting Guide

## 🔴 Common Issues & Solutions

### Build & Installation

#### ❌ "npm: command not found"

**Cause**: Node.js atau npm belum terinstall

**Solution**:
```bash
# Download dari https://nodejs.org/
# Download LTS version (16+)

# Verify installation
node --version
npm --version
```

#### ❌ "Port 3000 already in use"

**Cause**: Port 3000 sudah dipakai aplikasi lain

**Solution 1**: Gunakan port berbeda
```javascript
// webpack.config.js
devServer: {
  port: 3001  // Ubah ke port lain
}
```

**Solution 2**: Kill proses di port 3000
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### ❌ "Module not found" error

**Cause**: Dependencies belum terinstall atau corrupted

**Solution**:
```bash
# Clear cache
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Verify
npm list
```

#### ❌ "webpack command not found"

**Cause**: webpack-cli belum terinstall globally

**Solution**:
```bash
# Install local webpack-cli
npm install --save-dev webpack-cli

# atau gunakan npm script
npm run build
```

### Development Server

#### ❌ "ENOENT: no such file or directory"

**Cause**: File atau directory tidak ditemukan

**Solution**:
```bash
# Check path di webpack.config.js
# Pastikan entry file exists
ls -la src/js/main.js
```

#### ❌ Hot reload tidak bekerja

**Cause**: Webpack dev server tidak running atau cache issue

**Solution**:
```bash
# Stop server (Ctrl+C)
# Clear cache
rm -rf dist

# Start ulang
npm run dev

# Force browser refresh: Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)
```

#### ❌ CSS tidak ter-load di browser

**Cause**: CSS file belum ter-compile atau path salah

**Solution**:
```bash
# Check console untuk CSS error
# Ensure CSS imported di main.js
cat src/js/main.js | grep import.*css

# Rebuild
npm run dev

# Check Network tab di DevTools
```

### CSS Issues

#### ❌ Colors tidak sesuai PRD

**Cause**: CSS variables tidak di-update

**Solution**:
```css
/* src/css/variables.css */
:root {
  --color-primary: #7B3FF2;  /* Verify color code */
  --color-primary-light: #9D6CFF;
}
```

**Debug**:
```javascript
// Browser console
getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary')
```

#### ❌ Responsive design tidak bekerja

**Cause**: Media queries tidak aktif atau viewport meta tag hilang

**Solution**:
```html
<!-- index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Verify media queries:
```css
/* src/css/responsive.css */
@media (max-width: 768px) {
  /* Mobile styles */
}
```

#### ❌ Font tidak ter-load

**Cause**: Google Fonts URL salah atau CORS issue

**Solution**:
```css
/* src/css/base.css */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

:root {
  --font-primary: 'Raleway', sans-serif;  /* Fallback font */
}
```

Test di browser:
```javascript
// Check loaded fonts
document.fonts.ready.then(() => {
  console.log('Fonts loaded');
});
```

### JavaScript Issues

#### ❌ Header scroll tidak bekerja

**Cause**: header.js tidak di-load atau selector salah

**Solution**:
```javascript
// src/js/main.js
import './header.js';  // Pastikan import

// Check di console
console.log(document.querySelector('header'));  // Should not be null
```

Verify selector:
```html
<!-- index.html -->
<header>  <!-- Class atau attribute harus match -->
```

#### ❌ Console errors

**Common**: "Uncaught TypeError: Cannot read property 'addEventListener' of null"

**Cause**: Element tidak ditemukan di DOM

**Solution**:
```javascript
// Check existence sebelum access
const element = document.querySelector('selector');
if (element) {
  element.addEventListener('click', handler);
} else {
  console.warn('Element not found');
}
```

#### ❌ Event listeners tidak bekerja

**Cause**: DOM belum fully loaded saat script execute

**Solution**:
```javascript
// Gunakan DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
```

### Performance Issues

#### ❌ Website slow di mobile

**Cause**: Large images, unoptimized CSS/JS, render blocking

**Solution**:
```bash
# Optimize images
npm run optimize

# Minify assets
npm run minify

# Check PageSpeed
# https://pagespeed.web.dev/
```

#### ❌ High Cumulative Layout Shift (CLS)

**Cause**: Images tanpa width/height, dynamic content, fonts

**Solution**:
```html
<!-- Specify image dimensions -->
<img src="image.jpg" width="800" height="600" alt="">

<!-- Use font-display: swap -->
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
```

#### ❌ Large JavaScript bundle

**Cause**: Unused dependencies, no code splitting

**Solution**:
```bash
# Analyze bundle
npm install --save-dev webpack-bundle-analyzer

# Check sizes
npm run build
ls -lh dist/
```

### Blogger Integration

#### ❌ Template XML invalid

**Cause**: Malformed XML atau missing required tags

**Solution**:
```bash
# Validate XML
# https://www.xmlvalidation.com/

# Check blogger template structure
cat blogger/template.xml | head -20
```

#### ❌ Styles tidak apply di Blogger

**Cause**: CSS selectors tidak match Blogger HTML struktur

**Solution**:
```css
/* Use Blogger-specific selectors */
.post-body {
  /* Blogger post container */
}

.post-title {
  /* Blogger post title */
}
```

#### ❌ Widget tidak muncul di Blogger

**Cause**: Widget XML tidak properly formatted

**Solution**:
```xml
<!-- Check widget structure -->
<b:widget id='....' type='....'>
  <b:property name='...' default='...'>
    <!-- Widget content -->
  </b:property>
</b:widget>
```

### Testing Issues

#### ❌ Tests failing

**Cause**: Test files corrupted atau Jest tidak configured

**Solution**:
```bash
# Clear Jest cache
jest --clearCache

# Run tests dengan verbose
npm test -- --verbose
```

#### ❌ Accessibility tests failing

**Cause**: HTML tidak semantic atau missing ARIA labels

**Solution**:
```html
<!-- Use semantic HTML -->
<button aria-label="Search">🔍</button>

<!-- Provide alt text -->
<img src="image.jpg" alt="Descriptive text">

<!-- Focus styles -->
:focus-visible {
  outline: 2px solid var(--color-primary);
}
```

### Git Issues

#### ❌ "Already up to date" tapi changes tidak appear

**Cause**: Cached files, branch mismatch

**Solution**:
```bash
# Check current branch
git branch

# Switch to develop
git checkout develop

# Pull latest
git pull origin develop

# Check status
git status
```

#### ❌ "Refusing to merge unrelated histories"

**Cause**: Histories tidak compatible

**Solution**:
```bash
git pull --allow-unrelated-histories
```

## 🔧 Debug Techniques

### Browser DevTools

**Console Tab**:
```javascript
// Check element
console.log(document.querySelector('header'));

// Check computed styles
console.log(getComputedStyle(element));

// Check events
getEventListeners(element)
```

**Network Tab**:
- Check CSS/JS loading
- Monitor fetch requests
- Check response times
- Verify image loading

**Performance Tab**:
- Record performance
- Analyze FCP, LCP, TTI
- Check rendering issues
- Profile memory usage

### Command Line Debugging

```bash
# Check file structure
tree -L 2 src/

# Check CSS/JS syntax
node -e "require('fs').readFileSync('src/css/main.css', 'utf8')"

# Monitor build
watch "npm run build"

# Check dependencies
npm outdated
npm audit
```

## 📞 Getting Help

1. **Check this guide** untuk common issues
2. **Search GitHub Issues** untuk similar problems
3. **Create detailed issue** dengan:
   - Node.js version: `node --version`
   - npm version: `npm --version`
   - Error message lengkap
   - Steps untuk reproduce
   - Expected vs actual behavior
4. **Provide example code** jika relevant

## 📝 Useful Resources

- [Webpack Docs](https://webpack.js.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Blogger Help](https://support.google.com/blogger)
- [CSS-Tricks](https://css-tricks.com/)
- [Stack Overflow](https://stackoverflow.com/)

---

**Still stuck? Create an issue on GitHub or reach out for support!** 💬

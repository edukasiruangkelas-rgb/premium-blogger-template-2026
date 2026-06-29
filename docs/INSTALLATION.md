# Installation Guide

## 📋 Prerequisites

- Node.js 16+ ([Download](https://nodejs.org/))
- npm 7+ atau yarn 1.22+
- Git
- Text editor (VS Code recommended)
- Blogger account (untuk testing di Blogger)

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/edukasiruangkelas-rgb/premium-blogger-template-2026.git
cd premium-blogger-template-2026
```

### 2. Checkout Develop Branch

```bash
git checkout develop
```

### 3. Install Dependencies

```bash
npm install
# atau jika menggunakan yarn
yarn install
```

### 4. Development Server

Jalankan development server dengan hot reload:

```bash
npm run dev
# atau
yarn dev
```

Server akan berjalan di `http://localhost:3000`

### 5. Build untuk Production

```bash
npm run build
# atau
yarn build
```

Output akan tersimpan di folder `dist/`

## 📦 Build untuk Blogger

Untuk membuat Blogger XML template:

```bash
npm run build:blogger
```

File template akan tersimpan di `blogger/template.xml`

## 📁 Project Structure

```
premium-blogger-template-2026/
├── src/
│   ├── html/              # HTML templates
│   ├── css/               # CSS files
│   └── js/                # JavaScript files
├── blogger/               # Blogger template files
├── docs/                  # Documentation
├── dist/                  # Build output (generated)
├── package.json           # Dependencies
├── webpack.config.js      # Build configuration
└── PRD.md                 # Product Requirements
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:blogger` | Generate Blogger XML template |
| `npm run minify` | Minify CSS & JS |
| `npm run optimize` | Optimize images & assets |
| `npm test` | Run test suite |
| `npm run test:accessibility` | Accessibility tests |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🌐 Deploying to Blogger

### Step 1: Generate Template

```bash
npm run build:blogger
```

### Step 2: Copy Template Content

Buka file `blogger/template.xml` dan copy seluruh isinya

### Step 3: Upload ke Blogger

1. Login ke [Blogger Dashboard](https://www.blogger.com)
2. Pilih blog Anda
3. Buka menu **Theme** → **Edit HTML**
4. Delete existing code
5. Paste template code
6. Click **Save theme**

### Step 4: Customize

1. Buka **Theme** → **Customize**
2. Edit:
   - Font & colors
   - Header image
   - Sidebar widgets
   - Footer text

## 🔧 Customization

### Mengubah Warna Utama

Edit `src/css/variables.css`:

```css
:root {
  --color-primary: #7B3FF2;        /* Ubah ke warna Anda */
  --color-primary-light: #9D6CFF;
  --color-primary-dark: #6A2FB8;
  /* ... */
}
```

### Mengubah Font

Edit `src/css/base.css`:

```css
:root {
  --font-primary: 'Your Font Name';  /* Font untuk heading */
  --font-body: 'Your Font Name';     /* Font untuk body */
}
```

### Menambah Halaman Baru

1. Buat file baru di `src/html/`
2. Copy struktur dari `index.html`
3. Customize content
4. Build: `npm run build`

## 🧪 Testing

### Run All Tests

```bash
npm test
```

### Accessibility Testing

```bash
npm run test:accessibility
```

### Manual Testing Checklist

- [ ] Header scrolling pada mobile & desktop
- [ ] Responsive design di berbagai ukuran screen
- [ ] Search functionality
- [ ] Mobile menu toggle
- [ ] Link navigation working
- [ ] Forms submitting correctly
- [ ] Images loading properly
- [ ] Keyboard navigation (Tab key)
- [ ] Screen reader compatibility

## 📊 Performance Optimization

### Minify Assets

```bash
npm run minify
```

### Optimize Images

```bash
npm run optimize
```

### Check Performance

Gunakan [Google PageSpeed Insights](https://pagespeed.web.dev/)

## ❓ Troubleshooting

### Port 3000 sudah terpakai

```bash
# Ubah port di webpack.config.js
devServer: {
  port: 3001  // Ubah ke port lain
}
```

### Module not found error

```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### CSS tidak ter-load

```bash
# Pastikan webpack running
npm run dev

# Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
```

### Build gagal

```bash
# Check Node version
node --version  # Harus 16+

# Update npm
npm update -g npm

# Try rebuild
rm -rf dist
npm run build
```

## 📚 Resources

- [Webpack Documentation](https://webpack.js.org/)
- [Blogger Help Center](https://support.google.com/blogger)
- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG Accessibility Guide](https://www.w3.org/WAI/WCAG21/quickref/)

## 💬 Support

Jika mengalami masalah:

1. Check [troubleshooting section](#troubleshooting)
2. Search di GitHub Issues
3. Create new issue dengan detail error
4. Provide: Node version, npm version, error message

## 📝 License

MIT License - bebas untuk personal dan commercial use

---

**Happy coding! 🚀**

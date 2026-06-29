/**
 * Minification Script - Minifies CSS and JS
 */

const fs = require('fs');
const path = require('path');
const cssnano = require('cssnano');
const postcss = require('postcss');
const terser = require('terser');

const minifyCSS = async () => {
  console.log('📦 Minifying CSS...');
  
  const cssFile = path.join(__dirname, '../dist/main.css');
  
  if (!fs.existsSync(cssFile)) {
    console.error('❌ CSS file not found');
    return;
  }
  
  const css = fs.readFileSync(cssFile, 'utf8');
  
  try {
    const result = await postcss([cssnano]).process(css, { from: cssFile });
    fs.writeFileSync(path.join(__dirname, '../dist/main.min.css'), result.css);
    console.log('✅ CSS minified');
  } catch (error) {
    console.error('❌ CSS minification failed:', error.message);
  }
};

const minifyJS = () => {
  console.log('📦 Minifying JavaScript...');
  
  const jsFile = path.join(__dirname, '../dist/main.js');
  
  if (!fs.existsSync(jsFile)) {
    console.error('❌ JS file not found');
    return;
  }
  
  const code = fs.readFileSync(jsFile, 'utf8');
  
  try {
    const result = terser.minify(code);
    if (result.error) throw result.error;
    fs.writeFileSync(path.join(__dirname, '../dist/main.min.js'), result.code);
    console.log('✅ JavaScript minified');
  } catch (error) {
    console.error('❌ JS minification failed:', error.message);
  }
};

const minify = async () => {
  console.log('🔨 Starting minification...');
  await minifyCSS();
  minifyJS();
  console.log('✅ Minification completed!');
};

minify();

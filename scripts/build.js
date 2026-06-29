/**
 * Build Script - Handles project compilation
 */

const webpack = require('webpack');
const config = require('../webpack.config.js');

const build = () => {
  console.log('🔨 Building project...');
  
  webpack(config({}, { mode: 'production' }), (err, stats) => {
    if (err) {
      console.error('❌ Build failed:', err.message);
      process.exit(1);
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error('❌ Build errors:');
      info.errors.forEach(err => console.error(err));
      process.exit(1);
    }

    if (stats.hasWarnings()) {
      console.warn('⚠️  Build warnings:');
      info.warnings.forEach(warn => console.warn(warn));
    }

    console.log('✅ Build completed successfully!');
    console.log(`📦 Output: ${stats.compilation.outputOptions.path}`);
  });
};

build();

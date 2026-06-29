/**
 * Main Application Entry Point
 */

import '../css/base.css';
import '../css/variables.css';
import '../css/components.css';
import '../css/header.css';
import '../css/layout.css';
import '../css/responsive.css';
import './header.js';

// Global App initialization
const App = (() => {
  const init = () => {
    console.log('Premium Blogger Template initialized');
    initializeModules();
  };

  const initializeModules = () => {
    // Header module is auto-initialized
    // More modules can be added here
  };

  return {
    init
  };
})();

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App.init);
} else {
  App.init();
}

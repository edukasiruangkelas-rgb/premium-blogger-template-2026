/**
 * Blogger Template Builder
 * Converts HTML/CSS/JS to Blogger XML template format
 */

const fs = require('fs');
const path = require('path');

const buildBloggerTemplate = () => {
  console.log('🔨 Building Blogger template...');

  try {
    // Read source files
    const htmlContent = fs.readFileSync(path.join(__dirname, '../src/html/index.html'), 'utf8');
    const cssContent = fs.readFileSync(path.join(__dirname, '../dist/main.min.css'), 'utf8');
    const jsContent = fs.readFileSync(path.join(__dirname, '../dist/main.min.js'), 'utf8');

    // Create Blogger XML template
    const bloggerTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='utf-8'/>
  <meta content='width=device-width, initial-scale=1' name='viewport'/>
  <b:include data='blog' name='all-head-content'/>
  <title><data:blog.pageTitle/></title>
  <style>
    ${cssContent}
  </style>
</head>
<body>
  <header>
    <div class="header-container">
      <div class="logo">
        <a href="/">
          <span><data:blog.title/></span>
        </a>
      </div>
      <nav class="nav">
        <ul class="nav-menu">
          <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Articles</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
      </nav>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <main>
    <b:section class='main' id='main' showaddelement='no'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'>
        <b:includable id='main'>
          <div class='posts'>
            <b:loop values='data:posts' var='post'>
              <article class='post'>
                <h2><data:post.title/></h2>
                <p><data:post.summary/></p>
                <a expr:href='data:post.url' class='btn btn-primary'>Read More</a>
              </article>
            </b:loop>
          </div>
        </b:includable>
      </b:widget>
    </b:section>
  </main>

  <footer>
    <div class="container">
      <p>&copy; <data:blog.title/>. All rights reserved.</p>
    </div>
  </footer>

  <script>
    ${jsContent}
  </script>
</body>
</html>`;

    // Ensure blogger directory exists
    const bloggerDir = path.join(__dirname, '../blogger');
    if (!fs.existsSync(bloggerDir)) {
      fs.mkdirSync(bloggerDir, { recursive: true });
    }

    // Write template
    fs.writeFileSync(
      path.join(bloggerDir, 'template.xml'),
      bloggerTemplate,
      'utf8'
    );

    console.log('✅ Blogger template created successfully!');
    console.log('📍 Location: blogger/template.xml');
    console.log('📝 Next step: Copy content to Blogger dashboard');
  } catch (error) {
    console.error('❌ Error building Blogger template:', error.message);
    process.exit(1);
  }
};

buildBloggerTemplate();

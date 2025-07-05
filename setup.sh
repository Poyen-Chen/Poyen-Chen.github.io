#!/bin/bash

# Portfolio Website Setup Script
echo "🚀 Setting up your GitHub Pages portfolio website..."

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "❌ Ruby is not installed. Please install Ruby first:"
    echo "   macOS: brew install ruby"
    echo "   Ubuntu: sudo apt install ruby ruby-dev"
    echo "   Windows: Download from https://rubyinstaller.org/"
    exit 1
fi

# Check if Bundler is installed
if ! command -v bundle &> /dev/null; then
    echo "📦 Installing Bundler..."
    gem install bundler
fi

# Install dependencies
echo "📦 Installing Jekyll dependencies..."
bundle install

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p _posts _projects _publications _talks images files

# Create sample content
echo "📝 Creating sample content..."

# Sample blog post
cat > _posts/2024-01-01-welcome.md << 'EOF'
---
layout: post
title: "Welcome to My Portfolio"
date: 2024-01-01
categories: [general]
tags: [welcome, portfolio]
---

Welcome to my portfolio website! This is where I'll be sharing my thoughts, projects, and experiences in the world of technology.

## What to Expect

- **Project showcases**: Detailed looks at my recent work
- **Technical articles**: Insights and tutorials
- **Career updates**: My journey in tech
- **Thoughts and ideas**: Random musings about technology

Stay tuned for more content!
EOF

# Sample project
cat > _projects/sample-project.md << 'EOF'
---
layout: single
title: "Sample Project"
excerpt: "A sample project to demonstrate the portfolio structure"
header:
  teaser: /images/project-thumbnail.jpg
---

This is a sample project to show how projects are structured in this portfolio.

## Project Overview

This project demonstrates the capabilities of the portfolio template and serves as an example for how to add your own projects.

## Technologies Used

- HTML/CSS
- JavaScript
- Jekyll
- GitHub Pages

## Key Features

- Responsive design
- Modern UI/UX
- Fast loading
- SEO optimized

## Links

- [Live Demo](#)
- [GitHub Repository](#)
EOF

echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Edit _config.yml with your personal information"
echo "2. Replace placeholder images in the images/ directory"
echo "3. Update the content in index.html with your information"
echo "4. Run 'bundle exec jekyll serve' to preview locally"
echo "5. Push to GitHub and enable GitHub Pages"
echo ""
echo "📚 For more information, check the README.md file"
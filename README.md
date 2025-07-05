# Personal Portfolio Website

A personal portfolio and academic website built with Jekyll and GitHub Pages, based on the Academic Pages template.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Blog Support**: Write and publish blog posts
- **Project Showcase**: Display your projects with descriptions and links
- **Publications**: Showcase academic publications and research
- **Talks & Presentations**: Archive your speaking engagements
- **Contact Information**: Easy ways for visitors to get in touch
- **Social Media Integration**: Links to your professional profiles

## Getting Started

### Prerequisites

- Ruby (version 2.4 or higher)
- Bundler
- Git

### Installation

1. **Clone or fork this repository**
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Configure your site**
   - Edit `_config.yml` with your personal information
   - Update the URL to match your GitHub username
   - Add your social media links

4. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```
   Your site will be available at `http://localhost:4000`

5. **Deploy to GitHub Pages**
   - Push your changes to the `main` branch
   - Go to your repository settings
   - Enable GitHub Pages in the "Pages" section
   - Your site will be available at `https://yourusername.github.io`

## Customization

### Personal Information
Edit `_config.yml` to update:
- Your name and bio
- Contact information
- Social media links
- Site title and description

### Adding Content

#### Blog Posts
Create new files in `_posts/` with the format `YYYY-MM-DD-title.md`:
```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-01
categories: [category1, category2]
tags: [tag1, tag2]
---

Your post content here...
```

#### Projects
Create new files in `_projects/` with the format `project-name.md`:
```markdown
---
layout: single
title: "Project Name"
excerpt: "Brief project description"
header:
  teaser: /images/project-thumbnail.jpg
---

Detailed project description...
```

#### Publications
Create new files in `_publications/` with the format `publication-name.md`:
```markdown
---
layout: single
title: "Publication Title"
excerpt: "Brief description"
header:
  teaser: /images/publication-thumbnail.jpg
---

Publication details...
```

### Styling
- Edit `_sass/` files to customize the appearance
- Modify `_layouts/` for layout changes
- Update `_includes/` for component modifications

## File Structure

```
├── _config.yml          # Site configuration
├── _data/               # Data files
├── _drafts/             # Draft posts
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _pages/              # Static pages
├── _posts/              # Blog posts
├── _projects/           # Project showcases
├── _publications/       # Academic publications
├── _talks/              # Presentations and talks
├── _sass/               # Stylesheets
├── assets/              # CSS, JS, and other assets
├── images/              # Image files
└── files/               # Downloadable files
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template
- Built with [Jekyll](https://jekyllrb.com/)
- Styled with [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme

## Support

If you encounter any issues or have questions:
1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Review the [GitHub Pages documentation](https://pages.github.com/)
3. Open an issue in this repository

---

**Note**: Remember to replace `yourusername` with your actual GitHub username throughout the configuration files.
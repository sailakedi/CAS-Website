# LayersOfTime

## Overview

Layers of Time is a premium website template built with Vite, Three.js, and modern web technologies. It is designed to showcase immersive audiovisual portfolios with smooth interactions and high-performance rendering.

---

## Installation

This template is distributed as a downloadable package. You do not need to clone the repository.

### Steps

1. Download the project archive
2. Extract the files
3. Make sure Node.js 18+ is installed (Node.js 18 or higher is recommended)

### Install dependencies

Inside the project folder, run:

```bash
npm install
```

---

## Development

To start the local development server:

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

---

## Build for Production

Generate the production version with:

```bash
npm run build
```

The optimized output will be placed inside the `dist/` folder.

---

## Preview Production Build

You can preview the build locally:

```bash
npm run preview
```

---

## Deployment

### Vercel

1. Upload your project files to GitHub (optional)
2. Connect repository to Vercel
3. Select Vite as framework preset
4. Deploy

### Netlify

Build command:

```bash
npm run build
```

Publish directory:

```
dist
```

---

## Template Customization

### Change Website Content

You can edit website content in two ways.

#### HTML Templates

Inside the `pages/` directory you will find HTML template files. Edit these files to modify structure, headings, and static markup.

Typical template locations:

```
public/pages/home.html
public/pages/about.html
public/pages/projects.html
public/pages/article.html
```

#### Data Configuration File

Dynamic portfolio content is stored in:

```
src/data.json
```

You can modify project information, descriptions, and media references there.

After editing data, always rebuild the project:

```bash
npm run build
```

Then redeploy the `dist/` folder.

---

## Assets

All static images and media must be placed inside:

```
static/images/
```

Example usage:

```
/images/about/live/1.png
```

Do not import static assets from the `src` folder.

---

## Important Notes

- This template is distributed as a downloadable product.
- You do not need to access the source repository.
- Always rebuild the project after modifying data or template content.
- Ensure Node.js is installed before running the project.

---

## Requirements

- Node.js 18+
- Modern browser with WebGL support

---

## Support

If you encounter any issue or need customization, please contact the template author.

---

## License

This template is a premium template and is not open-source.

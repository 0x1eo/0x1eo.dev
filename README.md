# Portfolio

A modern, responsive portfolio website showcasing cybersecurity and systems engineering projects. Built with Nuxt 3, Vue.js, and Tailwind CSS.

## 🚀 Live Site

Visit the live portfolio at [0x1eo.dev](https://0x1eo.dev)

## 📋 About

This portfolio showcases my work as a cybersecurity specialist and systems engineer, featuring:

- **Academic Projects**: University coursework including penetration testing, high-availability systems, and programming paradigms
- **Freelance Work**: Professional web development projects and client solutions
- **Technical Skills**: Cybersecurity, systems engineering, full-stack development
- **Interactive Design**: Modern UI/UX with smooth animations and responsive layout

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) - The Intuitive Vue Framework
- **Frontend**: [Vue.js 3](https://vuejs.org/) - The Progressive JavaScript Framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- **Language**: TypeScript for type safety
- **Build Tool**: Vite for fast development and building
- **Deployment**: Static site generation (SSG) ready

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── components/          # Reusable Vue components
│   │   ├── ProjectCard.vue  # Individual project display
│   │   ├── TheHeader.vue    # Navigation header
│   │   └── TheFooter.vue    # Site footer
│   ├── data/
│   │   └── projects.js      # Project data and metadata
│   ├── pages/              # Route pages
│   │   ├── index.vue       # Homepage
│   │   ├── about.vue       # About page
│   │   └── projects/       # Projects section
│   └── app.vue            # Root application component
├── public/                 # Static assets
└── nuxt.config.ts         # Nuxt configuration
```

## 🎨 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Project Filtering**: Filter projects by Academic/Freelance categories
- **Dark Theme**: Modern dark mode design with gradient accents
- **Smooth Animations**: Engaging CSS animations and transitions
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Fast loading with static site generation
- **Accessibility**: WCAG compliant with proper focus management

## 📁 Projects Included

### Academic Projects
- **Penetration Testing & Vulnerability Exploitation** - Ethical hacking and security assessment
- **High-Availability Web Cluster** - Fault-tolerant infrastructure design
- **Football Simulator** - Java-based game simulation with OOP design patterns
- **Diet Platform Pro** - Full-stack web application with Angular and Node.js
- **Order Management System** - C programming with dynamic memory management

### Freelance Projects
- **Playlix Website** - Vue.js website development for gaming startup

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, pnpm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # npm
   npm install

   # pnpm
   pnpm install

   # yarn
   yarn install

   # bun
   bun install
   ```

### Development

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Production Build

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

### Preview Production Build

Locally preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## 📝 Adding New Projects

To add a new project to the portfolio:

1. **Edit the projects data**
   ```javascript
   // app/data/projects.js
   export const projects = [
     {
       slug: 'project-slug',
       group: 'Academic' | 'Freelance',
       title: 'Project Title',
       category: 'Course/Client Name',
       date: 'YYYY – YYYY',
       link: 'https://github.com/username/repo' | null,
       description_points: [
         'Key achievement or feature',
         'Technical implementation detail',
         'Impact or learning outcome'
       ],
       tags: ['Technology', 'Skill', 'Concept'],
       files: [ // Optional
         {
           name: 'Document Name',
           filename: 'document.pdf',
           type: 'pdf',
           description: 'Document description'
         }
       ]
     }
   ]
   ```

2. **Add project files (if any)**
   Place PDF documents in `public/data/files/`

3. **Test the changes**
   The new project will automatically appear in the portfolio

## 🌐 Deployment

This project is configured for static site generation and can be deployed to any static hosting service:

- **Netlify**: Connect your repository and deploy automatically
- **Vercel**: Import your project and deploy with zero configuration
- **GitHub Pages**: Use the `nuxt generate` command and deploy the `dist` folder
- **Cloudflare Pages**: Connect your repository for automatic builds

For more deployment options, check the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## 📄 License

This portfolio is a personal project. Feel free to use the code structure as inspiration for your own portfolio, but please don't copy the content or design exactly.

## 📧 Contact

- **Email**: [leo@0x1eo.dev](mailto:leo@0x1eo.dev)
- **LinkedIn**: [Leandro Afonso](https://linkedin.com/in/0x1eo)
- **GitHub**: [0x1eo](https://github.com/0x1eo)

---

Built with ❤️ using Nuxt, Vue.js, and Tailwind CSS

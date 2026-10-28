# Prince Patel - Portfolio

A responsive personal portfolio showcasing my work and experience as a full-stack web developer. The site includes an introduction, skills, projects, education, certifications, and contact information.

## Features

- Responsive layout with a mobile navigation menu
- Light and dark themes, with the selected theme saved in browser storage
- Sections for about, skills, projects, education, certifications, and contact
- Project cards with technology tags and optional GitHub and live-demo links
- Contact form that opens a prefilled email in the visitor's default mail app
- Downloadable resume

## Built with

- React 19
- Vite
- Tailwind CSS 4
- React Icons

## Project structure
```text
public/                 Static files served from the site root
  profile.jpeg          Profile photo
  resume.pdf            Resume download (see note below)
src/
  components/           Shared UI components, including the navbar
  data/portfolioData.js Portfolio content: profile, skills, projects, and more
  pages/                 Portfolio sections
  App.jsx                Page composition and theme persistence
  index.css              Global styles, theme variables, and Tailwind CSS
```
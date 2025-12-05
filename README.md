# Mehul Andani - React Native Developer Portfolio

A modern, responsive portfolio website built with Next.js, TailwindCSS, and Framer Motion. Features a beautiful dark theme with space-inspired design and smooth animations throughout.

## 🚀 Features

- **Modern Design**: Clean, minimalist UI with purple and blue color scheme
- **Dark Theme**: Beautiful dark mode with space-inspired background and twinkling stars
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Ready**: Proper meta tags and Open Graph support
- **Interactive Navigation**: Scroll spy navigation with active section highlighting

## 📱 Sections

1. **Hero Section**: Fullscreen intro with space-themed background, profile image, and CTA buttons
2. **About Me**: Professional summary with resume download and LinkedIn connection
3. **Projects**: Showcase of 6 real mobile applications with Play Store and App Store links
4. **Skills**: Modern tech stack with colored icons from DevIcons CDN
5. **Experience**: Timeline layout of work experience with company icons
6. **Education**: Academic background and achievements
7. **Contact**: Contact form with pre-filled template messages for WhatsApp and Email
8. **Footer**: Clean footer with social links and copyright

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom color scheme
- **Animations**: Framer Motion
- **Icons**: Lucide React + DevIcons CDN for tech stack
- **Theme**: Dark mode only with space-inspired design
- **Language**: TypeScript
- **Icons**: Custom SVG icons for Play Store and App Store

## 🎨 Color Scheme

- **Primary**: Blue (#6366f1)
- **Secondary**: Purple (#a855f7)
- **Accent**: Light Blue (#0ea5e9)
- **Background**: Dark gradient with space theme
- **Surface**: Dark cards with subtle borders
- **Text**: White and light gray for contrast

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Mehul175/mehul-portfolio.git
cd mehul-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── contexts/
    └── ThemeContext.tsx
```

## 🎯 Customization

### Adding New Projects
Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 7,
    title: "Your New Project",
    description: "Project description...",
    tech: ["React Native", "JavaScript"],
    playStore: "play-store-link",
    appStore: "app-store-link",
    image: "/project-image.jpg"
  }
];
```

### Updating Personal Information
- **Hero Section**: Edit `src/components/Hero.tsx` for profile image and CTA buttons
- **About Section**: Edit `src/components/About.tsx` for professional summary
- **Contact Info**: Edit `src/components/Contact.tsx` for contact details and social links
- **Experience**: Edit `src/components/Experience.tsx` for work history
- **Education**: Edit `src/components/Education.tsx` for academic background
- **Projects**: Edit `src/components/Projects.tsx` for project showcase
- **Skills**: Edit `src/components/Skills.tsx` for tech stack

### Changing Colors
Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

**Mehul Andani**
- Email: mehulandani7@gmail.com
- LinkedIn: [linkedin.com/in/mehul-andani](https://www.linkedin.com/in/mehul-andani/)
- WhatsApp: +91 92659 33537
- Location: Surat, Gujarat, India

## 🌟 Live Demo

Visit the live portfolio: [https://mehulandani.me](https://mehulandani.me)

---

Made with ❤️ using Next.js, TailwindCSS, and Framer Motion

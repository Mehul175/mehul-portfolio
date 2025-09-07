# Mehul Andani - React Native Developer Portfolio

A modern, responsive portfolio website built with Next.js, TailwindCSS, and Framer Motion. Features a beautiful dark/light theme toggle and smooth animations throughout.

## 🚀 Features

- **Modern Design**: Clean, minimalist UI with purple and blue color scheme
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Ready**: Proper meta tags and Open Graph support

## 📱 Sections

1. **Hero Section**: Fullscreen intro with animated background and profile image
2. **About Me**: Professional summary with resume download and contact info
3. **Projects**: Showcase of 6 mobile applications with store links
4. **Skills**: Animated tech stack icons and expertise areas
5. **Experience**: Timeline layout of work experience
6. **Education**: Academic background and achievements
7. **Contact**: Contact form and social links
8. **Footer**: Theme toggle and additional links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom color scheme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Custom theme system with localStorage persistence
- **Language**: TypeScript

## 🎨 Color Scheme

- **Primary**: Blue (#6366f1)
- **Secondary**: Purple (#a855f7)
- **Accent**: Light Blue (#0ea5e9)
- **Background**: White (light) / Dark Blue (dark)
- **Surface**: Light Gray (light) / Dark Gray (dark)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-app
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
│   ├── Skills.tsx
│   └── ThemeToggle.tsx
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
- **Hero Section**: Edit `src/components/Hero.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Education**: Edit `src/components/Education.tsx`

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
- Location: Surat, Gujarat, India

---

Made with ❤️ using Next.js, TailwindCSS, and Framer Motion

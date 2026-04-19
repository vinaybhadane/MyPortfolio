# Vinay Bhadane — Portfolio

A premium Next.js portfolio built with:
- **Next.js 15** (App Router)
- **Tailwind CSS** (custom design system)
- **Framer Motion** (animations)
- **Lenis** (smooth scrolling)
- **Lucide React** (icons)
- **Google Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Add Your Assets

### Profile Photo
Place your passport photo at:
```
/public/images/profile.jpg
```

Then in `components/Hero.tsx`, replace the placeholder `<div>` inside the image frame with:
```tsx
import Image from 'next/image';

<Image
  src="/images/profile.jpg"
  alt="Vinay Bhadane"
  fill
  className="object-cover"
  priority
/>
```

### Project Videos
Add project demo videos at:
```
/public/videos/project1.mp4
/public/videos/project2.mp4
/public/videos/project3.mp4
/public/videos/project4.mp4
```

In `components/Projects.tsx`, inside the modal replace the placeholder with:
```tsx
<video src={project.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
```

### Resume PDF
Replace the placeholder with your actual resume:
```
/public/resume.pdf
```

---

## 🔗 Update Social Links

In `components/Footer.tsx`, update the `socials` array:
```ts
const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/YOUR_USERNAME' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_PROFILE' },
  { icon: Mail, label: 'Email', href: 'mailto:vinaybhadane06@gmail.com' },
];
```

---

## 📧 Enable Contact Form

The contact form currently simulates sending. To make it real, integrate one of:

**Option A — EmailJS (frontend-only, no backend needed):**
```bash
npm install @emailjs/browser
```

**Option B — Resend (via Next.js API route):**
```bash
npm install resend
```

Create `/app/api/contact/route.ts` and update the form's `handleSubmit` to POST to `/api/contact`.

---

## 🎨 Customization

### Colors (`tailwind.config.js`)
```js
colors: {
  accent: '#00d4ff',   // cyan — primary accent
  accent2: '#7b2fff',  // purple — secondary
  accent3: '#ff3d6e',  // red-pink — tertiary
}
```

### Fonts (`app/globals.css`)
Currently using:
- `Syne` — Display/headings (bold, modern)
- `DM Sans` — Body text (clean, readable)
- `JetBrains Mono` — Code/mono elements

---

## 📦 Build for Production

```bash
npm run build
npm start
```

Or deploy to **Vercel** in one click:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🗂 Project Structure

```
/app
  layout.tsx        — root layout, fonts, metadata
  page.tsx          — main page, Lenis init
  globals.css       — design system, utilities

/components
  LoadingScreen.tsx — animated loader with progress
  Cursor.tsx        — custom cursor + trail
  Navbar.tsx        — sticky nav, mobile drawer
  Hero.tsx          — fullscreen hero, typewriter, floating UI
  About.tsx         — bio, code window, highlights
  Projects.tsx      — project grid + detail modal
  Skills.tsx        — animated skill bars + tech badges
  Resume.tsx        — download/view CTA section
  Contact.tsx       — form with animated states
  Footer.tsx        — links, socials, back-to-top
  SectionHeader.tsx — reusable animated section heading

/hooks
  useInView.ts      — IntersectionObserver hook

/public
  /images/          — profile.jpg
  /videos/          — project1-4.mp4
  resume.pdf
```

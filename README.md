<div align="center">

# 🚀 Pham Trung Nghia — 3D Interactive Portfolio

**A modern, interactive 3D developer portfolio showcasing fullstack expertise, creative engineering, and high-performance web applications.**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19.2-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

[📄 View CV](https://drive.google.com/file/d/15pnUQ6_fmNiuUqGhwlW1lCKd5FenuFJe/view?usp=sharing) •
[💼 LinkedIn](https://www.linkedin.com/in/trung-nghĩa-phạm-2695423b3) •
[💬 Zalo](https://zalo.me/0335766722) •
[✉️ Email](mailto:phamtrungnghia15082003@gmail.com)

</div>

---

## 👨‍💻 About Me

Hi, I'm **Phạm Trung Nghĩa** — a **Fullstack Web Developer** specializing in architecting and delivering production-ready web applications with **Laravel** and **Next.js**.

- 💡 **Backend Expertise**: PHP, Laravel (MVC, Eloquent ORM, FilamentPHP), RESTful APIs, MySQL, PostgreSQL, Redis in-memory caching.
- 🎨 **Frontend Engineering**: Next.js (App Router, SSR), React, TypeScript, Tailwind CSS, shadcn/ui, GSAP & Motion animations.
- ⚙️ **Integrations & DevOps**: Payment gateways (VNPay, MoMo), Docker containerization, Linux VPS administration, Nginx, Git workflows.

---

## ✨ Features

- ⌨️ **Interactive 3D Keyboard**: Programmatically rendered 3D keyboard via `@chibi3d/runtime` & Three.js. Each keycap represents a tech skill, dynamically displaying capabilities on hover or keyboard press.
- 📱 **Mobile-Optimized Accordion**: Responsive vertical accordion on mobile devices, allowing seamless vertical scrolling and single-tap expansion for skill details.
- 📂 **Featured Projects Showcase**: Project dialogs with architecture breakdowns, technology badges, live preview links, and source code repositories.
- 🎭 **Smooth Scroll & Micro-Interactions**: Fluid page scrolling powered by Lenis, combined with GSAP ScrollTrigger and Motion reveal effects.
- 🌓 **Dynamic Theme Switching**: Smooth Dark & Light mode toggle with view transitions.
- 📬 **Direct Contact Form**: Production-ready contact form integrated via Resend email service.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui |
| **Backend & APIs** | Laravel, PHP 8+, FilamentPHP, RESTful API |
| **Databases & Cache** | MySQL, PostgreSQL, Redis |
| **3D & Graphics** | `@chibi3d/runtime`, Three.js, Canvas Particles |
| **Animations** | GSAP, ScrollTrigger, Motion (Framer Motion), Lenis Smooth Scroll |
| **DevOps & Tools** | Docker, Linux, Nginx, Git, Postman, Vercel |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20.9+ or higher
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pham-trung-nghia-dev/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory:

   ```bash
   cp .env.example .env
   ```

   Fill in your configuration:

   ```env
   # Email service for contact form
   RESEND_API_KEY=your_resend_api_key

   # Optional realtime WebSocket & analytics
   NEXT_PUBLIC_WS_URL=
   UMAMI_DOMAIN=
   UMAMI_SITE_ID=
   ```

4. **Start the development server:**

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 📁 Project Structure

```text
portfolio-nextjs/
├── public/                 # Static assets (icons, images, logos, previews)
│   └── assets/
├── src/
│   ├── app/                # Next.js App Router (pages & global layouts)
│   ├── components/         # Reusable UI & section components
│   │   ├── chibi/          # 3D chibi scene components
│   │   ├── footer/         # Footer & social links
│   │   ├── header/         # Sticky header & navigation drawer
│   │   ├── keyboard/       # 3D interactive keyboard engine
│   │   ├── sections/       # Hero, About, Skills, Experience, Projects, Contact
│   │   ├── theme/          # Theme provider & toggle
│   │   └── ui/             # shadcn/ui & Radix primitive components
│   ├── data/               # Personal info, skills constant, and project data
│   ├── hooks/              # Custom React hooks (media query, perf profile)
│   └── lib/                # Utility helpers & scene health handlers
├── .gitignore
├── package.json
└── README.md
```

---

## 📬 Contact & Connect

- **Full Name**: Phạm Trung Nghĩa
- **Email**: [phamtrungnghia15082003@gmail.com](mailto:phamtrungnghia15082003@gmail.com)
- **LinkedIn**: [trung-nghĩa-phạm](https://www.linkedin.com/in/trung-nghĩa-phạm-2695423b3)
- **Zalo**: [0335766722](https://zalo.me/0335766722)
- **GitHub**: [@pham-trung-nghia-dev](https://github.com/pham-trung-nghia-dev)
- **Curriculum Vitae**: [View CV on Google Drive](https://drive.google.com/file/d/15pnUQ6_fmNiuUqGhwlW1lCKd5FenuFJe/view?usp=sharing)

---

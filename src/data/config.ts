const config = {
  title: "Phạm Trung Nghĩa | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Phạm Trung Nghĩa, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Let's build something amazing together!",
    short:
      "Discover the portfolio of Phạm Trung Nghĩa, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Phạm Trung Nghĩa",
    "Nghĩa",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Laravel",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Three.js",
    "GSAP",
    "Framer Motion",
  ],
  author: "Phạm Trung Nghĩa",
  email: "phamtrungnghia15082003@gmail.com",
  site: "https://phamtrungnghia-fullstack-dev.vercel.app",
  resume: "https://drive.google.com/file/d/1JlvjmwbT2E4hzZsn4vO4IkjhLAUeIK2l/view?usp=sharing",

  get ogImg() {
    return this.site + "/assets/seo/og-preview.png";
  },
  social: {
    zalo: "https://zalo.me/0335766722",
    linkedin: "https://www.linkedin.com/in/trung-nghĩa-phạm-2695423b3",
    github: "https://github.com/pham-trung-nghia-dev",
  },
};
export { config };

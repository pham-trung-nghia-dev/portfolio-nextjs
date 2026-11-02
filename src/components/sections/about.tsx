"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  Database,
  CreditCard,
  Server,
} from "lucide-react";
import { config } from "@/data/config";

const stats = [
  {
    value: "1+",
    label: "Years of Experience",
    sub: "Building web apps & APIs",
  },
  {
    value: "5+",
    label: "Projects Delivered",
    sub: "E-Commerce & Enterprise Systems",
  },
  {
    value: "IUH",
    label: "University of Industry",
    sub: "Information Systems (2021 - 2025)",
  },
  {
    value: "100%",
    label: "Dedication",
    sub: "Clean Code & Query Optimization",
  },
];

const highlights = [
  {
    icon: Server,
    title: "Backend Engineering",
    desc: "Architecting clean, scalable backends using PHP, Laravel (MVC, Eloquent ORM), RESTful APIs, GraphQL, and Redis caching.",
  },
  {
    icon: Layers,
    title: "Modern Frontend",
    desc: "Crafting fast, responsive user interfaces with Next.js, React, Vue.js, Tailwind CSS, and TypeScript.",
  },
  {
    icon: Database,
    title: "Database Optimization",
    desc: "Designing and tuning relational databases (MySQL, PostgreSQL), optimizing complex queries, and indexing for peak performance.",
  },
  {
    icon: CreditCard,
    title: "Integrations & DevOps",
    desc: "Integrating secure payment gateways (VNPay, MoMo), ERP modules, Docker containers, and managing Linux server environments.",
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="py-20 md:py-28 min-h-screen">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto pointer-events-auto">
        <SectionHeader
          id="about"
          title="About Me"
          desc="Precision in every single line • Dedicated Fullstack Engineer"
          className="mb-12 md:mb-16 static"
        />

        {/* Hero Tagline & Main Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8"
        >
          <Card className="bg-card/75 dark:bg-zinc-950/70 border-border/70 backdrop-blur-md shadow-lg overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-foreground mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Precision in every single line</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
                Hi, I&apos;m {config.author} — a Fullstack Developer specializing in Laravel &amp; Next.js.
              </h3>

              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  I am a passionate software engineer with hands-on experience building scalable, production-ready web applications. My expertise spans across <strong className="text-foreground">E-Commerce</strong>, <strong className="text-foreground">ERP Systems</strong>, and <strong className="text-foreground">Administrative Management Platforms</strong>.
                </p>
                <p>
                  I have honed my skills in professional enterprise environments, including fullstack development at <strong className="text-foreground">BIN Corporation Group</strong> and web development at <strong className="text-foreground">FPT Telecom</strong>. I take pride in designing clean RESTful APIs, customizing business workflow modules with FilamentPHP, and optimizing relational databases for high concurrency.
                </p>
                <p>
                  Beyond code structure, performance and reliability matter to me. I actively integrate secure payment gateways (VNPay, MoMo), configure Redis caching for fast response times, and containerize applications with Docker for seamless deployments.
                </p>
              </div>

              {/* Personal Quick Info Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary shrink-0" />
                  <span>Junior Fullstack Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                  <span>IUH (B.S. in Info Systems)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>Ho Chi Minh City, VN</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Available for Opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Numbers & Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <Card className="h-full bg-card/60 dark:bg-zinc-950/60 border-border/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-5 flex flex-col justify-center items-center text-center">
                  <span className="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-foreground mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-0.5">
                    {stat.sub}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies / What I Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <Card className="h-full bg-card/60 dark:bg-zinc-950/60 border-border/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-base text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;


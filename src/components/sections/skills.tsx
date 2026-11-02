"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, type Skill } from "@/data/constants";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";
import { useSceneStatus } from "@/lib/scene-health";
import { skillStore } from "@/lib/skill-store";
import { SKILL_CAPABILITIES } from "@/data/skill-capabilities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "motion/react";
import {
  Keyboard,
  CheckCircle2,
  Terminal,
  MousePointerClick,
} from "lucide-react";
import type { KeyboardSkill } from "@/components/keyboard/scene";

const SkillsSection = () => {
  const { disable3D, ready } = usePerfProfile();
  const sceneStatus = useSceneStatus();
  const showGrid = !ready || disable3D || sceneStatus !== "ready";
  const [selectedSkill, setSelectedSkill] = useState<KeyboardSkill | null>(null);

  useEffect(() => {
    return skillStore.subscribe((skill) => {
      setSelectedSkill(skill);
    });
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [showGrid]);

  const activeCapability = selectedSkill
    ? SKILL_CAPABILITIES[selectedSkill.name] ?? {
        title: selectedSkill.label,
        category: "Technology",
        capabilities: [selectedSkill.shortDescription],
      }
    : null;

  return (
    <SectionWrapper
      id="skills"
      className={
        showGrid
          ? "flex w-full min-h-screen flex-col justify-center py-24"
          : "w-full min-h-screen flex flex-col justify-center py-16 md:py-20 pointer-events-none"
      }
    >
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        {/* Giữ nguyên SectionHeader và Title cũ */}
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc={showGrid ? "Tools I build with" : "(hint: press a key)"}
          className="static mb-8 md:mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center min-h-[60vh]">
          {/* Left Column: Interactive Capability Frame */}
          <div className="flex flex-col justify-center z-10 pointer-events-auto max-w-md lg:max-w-lg w-full">
            <Card className="bg-card/80 dark:bg-zinc-950/75 border-border/80 backdrop-blur-md shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-between transition-all duration-300">
              <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full">
                <AnimatePresence mode="wait">
                  {selectedSkill && activeCapability ? (
                    <motion.div
                      key={selectedSkill.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-border/60 pb-4">
                        <div className="flex items-center gap-3">
                          {selectedSkill.icon && (
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                              style={{ backgroundColor: selectedSkill.keyboardColor ?? selectedSkill.color }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={selectedSkill.icon}
                                alt={selectedSkill.label}
                                className="w-7 h-7 object-contain"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">
                              {activeCapability.title}
                            </h3>
                            <Badge
                              variant="secondary"
                              className="text-[11px] font-normal mt-0.5"
                              style={{
                                borderColor: selectedSkill.color,
                                color: selectedSkill.color,
                              }}
                            >
                              {activeCapability.category}
                            </Badge>
                          </div>
                        </div>

                        {selectedSkill.shortcut && (
                          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary/50 border border-border text-xs text-muted-foreground font-mono">
                            <span>Key:</span>
                            <strong className="text-foreground">
                              {selectedSkill.shortcut.replace("Key", "")}
                            </strong>
                          </div>
                        )}
                      </div>

                      <div className="pt-2">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                          <Terminal className="w-4 h-4 text-primary" />
                          <span>What Nghia can do:</span>
                        </div>
                        <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
                          {activeCapability.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="leading-relaxed text-foreground/90">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default-prompt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit text-xs font-medium text-foreground">
                        <Keyboard className="w-3.5 h-3.5 text-primary" />
                        <span>Select a key on the keyboard</span>
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">
                          Select a stack to see what Nghia can build
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                          Hover or press the corresponding key on the 3D keyboard to explore Nghia&apos;s hands-on expertise with each technology.
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-2 border-t border-border/60">
                        <div className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Fullstack Developer specializing in <strong>Laravel (MVC, Eloquent, FilamentPHP)</strong> &amp; <strong>Next.js (App Router, SSR)</strong>.
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Designing &amp; optimizing relational databases (<strong>MySQL, PostgreSQL</strong>) and in-memory caching with <strong>Redis</strong>.
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Integrating online payment gateways (<strong>VNPay, MoMo</strong>) and deploying production systems with <strong>Docker &amp; Linux</strong>.
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-4 mt-6 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MousePointerClick className="w-3.5 h-3.5 text-primary" />
                    <span>Hover or press a key to view details</span>
                  </span>
                  {selectedSkill && (
                    <button
                      onClick={() => skillStore.setSkill(null)}
                      className="text-primary hover:underline cursor-pointer"
                    >
                      Deselect
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Space reserved for 3D Keyboard */}
          <div className="hidden md:flex justify-center items-center h-[500px] pointer-events-none">
            {/* The 3D Chibi Scene keyboard renders fixed in the background and is placed here by motion.ts */}
          </div>
        </div>

        {/* Fallback Grid when 3D is disabled or WebGL fails */}
        {showGrid && (
          <ul className="mt-12 mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 pointer-events-auto">
            {Object.values(SKILLS).map((skill) => (
              <li
                key={skill.name}
                onClick={() => skillStore.setSkill(skill as unknown as KeyboardSkill)}
                style={{ "--skill": skill.color } as CSSProperties}
                className={cn(
                  "cursor-pointer group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl p-5",
                  "border border-border/60 bg-secondary/20 backdrop-blur-sm",
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:border-[var(--skill)] hover:bg-secondary/40",
                  selectedSkill?.name === skill.name && "border-primary bg-secondary/50 shadow-md"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.icon}
                  alt={skill.label}
                  width={36}
                  height={36}
                  loading="lazy"
                  className="size-8 object-contain drop-shadow transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-center text-xs font-medium text-foreground">
                  {skill.label}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;

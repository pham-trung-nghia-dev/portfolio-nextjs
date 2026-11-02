"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePerfProfile } from "@/hooks/use-perf-profile";

gsap.registerPlugin(ScrollTrigger);

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

const SECTION_IDS = ["hero", "about", "skills", "experience", "projects", "contact"];

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const { reducedMotion } = usePerfProfile();
  const lenis = useLenis(() => ScrollTrigger.update());
  const isSnappingRef = useRef(false);

  useEffect(() => {
    if (!lenis) return;
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(raf);
  }, [lenis]);

  // Tự động căn chỉnh chính xác vào section khi người dùng cuộn đến gần
  useEffect(() => {
    if (!lenis || reducedMotion) return;

    let timeout: NodeJS.Timeout;

    const onScroll = () => {
      if (isSnappingRef.current) return;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const windowHeight = window.innerHeight;
        let closestSection: HTMLElement | null = null;
        let minDistance = Infinity;

        for (const id of SECTION_IDS) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top);

          // Khi mép trên section nằm trong khoảng 38% màn hình và lệch trên 15px
          if (dist < windowHeight * 0.38 && dist > 15 && dist < minDistance) {
            minDistance = dist;
            closestSection = el;
          }
        }

        if (closestSection) {
          isSnappingRef.current = true;
          lenis.scrollTo(closestSection, {
            offset: 0,
            duration: 0.7,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            onComplete: () => {
              isSnappingRef.current = false;
            },
          });
        }
      }, 140);
    };

    lenis.on("scroll", onScroll);

    // Căn chính xác tuyệt đối khi click vào bất kỳ liên kết điều hướng nào
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("/#")) {
        const targetId = href.replace("/#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          isSnappingRef.current = true;
          lenis.scrollTo(targetEl, {
            offset: 0,
            duration: 1.0,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            onComplete: () => {
              isSnappingRef.current = false;
              window.history.replaceState(null, "", href);
            },
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      clearTimeout(timeout);
      lenis.off("scroll", onScroll);
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, [lenis, reducedMotion]);

  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        duration: reducedMotion ? 0 : 1.2,
        smoothWheel: !reducedMotion,
        prevent: (node) => {
          if (isInsideModal) return true;
          const modalOpen = node.classList.contains("modall");
          return modalOpen;
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;

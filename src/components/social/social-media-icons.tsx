"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";
import Image from "next/image";

const BUTTONS = [
  {
    name: "Zalo",
    href: config.social.zalo,
    icon: (
      <Image
        src="/assets/icon/zalo.png"
        alt="Zalo"
        width={24}
        height={24}
        className="dark:invert w-6 h-6 object-contain"
      />
    ),
  },
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex items-center gap-1">
      {show &&
        BUTTONS.map((button) => (
          <Link
            href={button.href}
            key={button.name}
            target="_blank"
            className="cursor-can-hover"
          >
            <Button variant={"ghost"} size={"icon"}>
              {button.icon}
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;

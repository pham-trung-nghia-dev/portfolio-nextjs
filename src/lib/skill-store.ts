import { KeyboardSkill } from "@/components/keyboard/scene";

type SkillListener = (skill: KeyboardSkill | null) => void;

let activeSkill: KeyboardSkill | null = null;
const listeners = new Set<SkillListener>();

export const skillStore = {
  getSkill: () => activeSkill,
  setSkill: (skill: KeyboardSkill | null) => {
    activeSkill = skill;
    listeners.forEach((listener) => listener(skill));
  },
  subscribe: (listener: SkillListener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};


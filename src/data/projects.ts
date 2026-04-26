import { TrendingUp, Cpu, Plane, Sparkles, Share2 } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  tag: string;
  icon: any;
  colSpan: string;
  bg: string;
  textColor: string;
  accentColor: string;
};

export const projects: Project[] = [
  {
    id: "trading",
    title: "Trading Tools. Engineered for the human edge.",
    description: "From algorithmic models to refined execution. High-precision tools for those who value logic above noise.",
    category: "Precision Trading",
    tag: "Market Logic",
    icon: TrendingUp,
    colSpan: "md:col-span-8",
    bg: "bg-white",
    textColor: "text-professional-fg",
    accentColor: "text-[#FF4400]"
  },
  {
    id: "ai-opc",
    title: "AI & OPC",
    description: "One Person Company to solve everyday complexities.",
    category: "Industrial Precision",
    tag: "AI Systems",
    icon: Cpu,
    colSpan: "md:col-span-4",
    bg: "bg-professional-fg",
    textColor: "text-white",
    accentColor: "text-[#FF4400]"
  },
  {
    id: "travel",
    title: "Nomadic Assistant",
    description: "A smart travel tool that handles the mess so you can focus on the journey.",
    category: "Travel",
    tag: "Nomadic Flow",
    icon: Plane,
    colSpan: "md:col-span-4",
    bg: "bg-[#f5f5f5]",
    textColor: "text-professional-fg",
    accentColor: "text-[#999]"
  },
  {
    id: "life",
    title: "Life. Simplified.",
    description: "Tools are means to an end. We build for a real, present, and better existence.",
    category: "Simplicity First",
    tag: "Philosophy",
    icon: Sparkles,
    colSpan: "md:col-span-4",
    bg: "bg-white",
    textColor: "text-professional-fg",
    accentColor: "text-[#FF4400]"
  },
  {
    id: "share",
    title: "Open Logic",
    description: "Sharing code and methodology. Innovation is a collaborative evolution.",
    category: "Sharing Progress",
    tag: "Open Source",
    icon: Share2,
    colSpan: "md:col-span-4",
    bg: "bg-[#f9f9f9]",
    textColor: "text-professional-fg",
    accentColor: "text-[#999]"
  }
];

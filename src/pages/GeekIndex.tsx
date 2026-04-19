import { motion } from "motion/react";
import { Terminal as TerminalIcon, ShieldCheck } from "lucide-react";

// --- QUICK EDIT SECTION ---
const AGE = 38;
const BIO_INTRO = "I am a factory data science and automation lead at Intel, good at solving problems with data and smart manufacturing automation solutions.";
const BIO_SPARE_TIME = "In my spare time, I enjoy reading and trading (Futures and Forex).";

const COMMANDS = [
  { cmd: "bio.txt", res: "Engineer | Strategist | One Person Company (OPC) enthusiast. Building bridges between raw data and human experience." },
  { cmd: "stack.sh", res: "React, Next.js, Python, R, SQL, Edge Computing, and a dangerous amount of coffee." },
  { cmd: "mission.md", res: "Simplify life through high-precision innovation. Share everything. Change the world, one dot at a time." },
  { cmd: "up_time", res: `${AGE}y 2m 14d` },
];

const CORE_VALUES = [
  "Build tools that solve real problems.",
  "Automate the mundane to live the extraordinary.",
  "Share the logic, keep the passion."
];
// --------------------------

export default function GeekIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
      <div className="border border-geek-fg/30 rounded-lg overflow-hidden shadow-2xl shadow-geek-fg/5">
        <div className="bg-geek-muted px-4 py-3 flex items-center justify-between border-b border-geek-border">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[#888]">visitor@lessdot: ~</span>
          <div className="w-12" />
        </div>
        
        <div className="p-8 bg-geek-bg min-h-[500px] relative">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4 flex items-center space-x-4 text-white uppercase tracking-tight font-sans">
              <TerminalIcon size={24} className="text-geek-fg" />
              <span>About Me</span>
            </h1>
            <p className="text-[#888] text-sm opacity-60">System initialized. Displaying history and values...</p>
          </div>

          <div className="space-y-8">
            {/* Intro Section */}
            <div className="border border-geek-border p-6 rounded-lg bg-geek-muted/20">
               <h3 className="text-white text-lg font-bold mb-4 flex items-center">
                 <span className="text-geek-fg mr-2">$</span> Intro
               </h3>
               <div className="text-sm space-y-4 text-[#aaa] leading-relaxed">
                 <p>{BIO_INTRO}</p>
                 <p>{BIO_SPARE_TIME}</p>
               </div>
            </div>

            <div className="border border-geek-border p-6 rounded-lg bg-geek-muted/30">
               <h3 className="text-white text-lg font-bold mb-4 flex items-center">
                 <ShieldCheck size={18} className="mr-2 text-geek-fg" />
                 Core Values
               </h3>
               <ul className="text-sm space-y-2 opacity-70">
                 {CORE_VALUES.map((v, i) => (
                   <li key={i}>- {v}</li>
                 ))}
               </ul>
            </div>

            {COMMANDS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center space-x-2 text-white">
                  <span className="text-[#888] font-bold">visitor@lessdot:~$</span>
                  <span className="text-geek-fg">cat {item.cmd}</span>
                </div>
                <div className="pl-4 mt-2 text-[#888] text-sm leading-relaxed border-l border-geek-border ml-4 whitespace-pre-wrap">{item.res}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-xs text-[#888]">
             <span className="text-geek-fg font-bold mr-2">visitor@lessdot:~$</span>
             <span className="text-white">./init_handshake.sh</span>
             <span className="inline-block w-2 h-4 bg-geek-fg ml-2 animate-pulse align-middle" />
          </div>

          <div className="absolute bottom-8 right-8 border border-geek-fg px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-geek-fg">
            Mode: Admin / Root
          </div>
        </div>
      </div>
    </div>
  );
}

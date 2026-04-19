import { Link, useLocation } from "react-router-dom";
import { Terminal, Github, Facebook, Instagram, Linkedin, Twitter, Mail, Fingerprint, Database } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isGeek = location.pathname.startsWith("/geek") || location.pathname.startsWith("/me");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isGeek ? "geek" : "professional");
  }, [isGeek]);

  return (
    <div className="min-h-screen">
      <header className={`border-b sticky top-0 bg-[var(--background)] z-50 transition-colors ${isGeek ? "border-geek-border" : "border-professional-border"}`}>
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-center h-[60px]">
            <Link to="/" className="flex items-center group">
              <span className={`text-xl font-extrabold tracking-tighter transition-colors uppercase ${isGeek ? "text-geek-fg" : "text-professional-fg"}`}>
                LessDot<span className="text-brand-accent transition-colors">.</span>
              </span>
            </Link>
            
            <nav className="flex space-x-8 items-center">
              <Link 
                to="/" 
                className={`text-[13px] font-medium uppercase tracking-[0.05em] hover:opacity-70 transition-opacity ${location.pathname === "/" ? "text-brand-accent font-bold" : (isGeek ? "text-geek-fg" : "text-professional-fg")}`}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className={`text-[13px] font-medium uppercase tracking-[0.05em] hover:opacity-70 transition-opacity ${location.pathname === "/projects" ? "text-brand-accent font-bold" : (isGeek ? "text-geek-fg" : "text-professional-fg")}`}
              >
                Projects
              </Link>
              <Link 
                to="/collection" 
                className={`text-[13px] font-medium uppercase tracking-[0.05em] hover:opacity-70 transition-opacity ${location.pathname === "/collection" ? "text-brand-accent font-bold" : (isGeek ? "text-geek-fg" : "text-professional-fg")}`}
              >
                Collection
              </Link>
              <Link 
                to="/blog" 
                className={`text-[13px] font-medium uppercase tracking-[0.05em] hover:opacity-70 transition-opacity ${location.pathname.startsWith("/blog") ? "text-brand-accent font-bold" : (isGeek ? "text-geek-fg" : "text-professional-fg")}`}
              >
                Blog
              </Link>
              <Link 
                to="/geek" 
                className={`flex items-center space-x-1 px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.05em] transition-all ${
                  isGeek 
                    ? "bg-geek-fg text-geek-bg border border-geek-fg hover:bg-geek-bg hover:text-geek-fg" 
                    : "bg-professional-fg text-professional-bg hover:bg-opacity-90"
                }`}
              >
                <Terminal size={14} />
                <span>About Me</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main>
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           key={location.pathname}
           transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className={`border-t py-20 mt-20 ${isGeek ? "border-geek-border bg-geek-bg text-geek-fg" : "border-professional-border bg-[#f9f9f8] text-professional-fg"}`}>
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
             <div>
                <span className="text-xl font-extrabold tracking-tighter uppercase mb-4 block">
                  LessDot<span className="text-brand-accent">.</span>
                </span>
                <p className="text-sm opacity-50 max-w-sm leading-relaxed mb-8">
                  Innovation for global impact and a better life. Crafted with precision for a world that values clarity and purpose.
                </p>
                {/* Social Icons */}
                <div className="flex items-center space-x-6 text-[#999]">
                   <a href="#" className="hover:text-professional-fg transition-colors"><Github size={20} /></a>
                   <a href="#" className="hover:text-professional-fg transition-colors"><Facebook size={20} /></a>
                   <a href="#" className="hover:text-professional-fg transition-colors"><Instagram size={20} /></a>
                   <a href="#" className="hover:text-professional-fg transition-colors"><Linkedin size={20} /></a>
                   <a href="#" className="hover:text-professional-fg transition-colors"><Fingerprint size={20} /></a>
                   <a href="#" className="hover:text-professional-fg transition-colors"><Twitter size={20} /></a>
                   <a href="#" className="hover:text-professional-fg transition-colors"><Mail size={20} /></a>
                </div>
             </div>
             <div className="flex md:justify-end space-x-12 text-[10px] uppercase font-bold tracking-widest opacity-40 pt-2">
                <Link to="/" className="hover:text-brand-accent transition-colors">Innovate</Link>
                <Link to="/blog" className="hover:text-brand-accent transition-colors">Share</Link>
                <Link to="/me" className="hover:text-brand-accent transition-colors">Evolve</Link>
             </div>
          </div>
          
          <div className="pt-10 border-t border-professional-border/50">
             <p className="text-[12px] font-medium uppercase tracking-[0.4em] text-[#999] flex items-center justify-center md:justify-start">
               <span className="mr-4">© ZHENG WEE</span>
               <span className="opacity-40 tracking-normal border-b border-dotted border-[#999] pb-0.5">LESSDOT.COM.</span>
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { ArrowRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProfessionalIndex() {
  const location = useLocation();
  const activeTab = location.pathname === "/projects" ? "projects" : "home";

  return (
    <div className="max-w-7xl mx-auto px-4 pb-32">
      <AnimatePresence mode="wait">
        {activeTab === "home" ? (
          <motion.section 
            key="home"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center pt-32 pb-32"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#f0f0f0] border border-professional-border text-[10px] uppercase font-bold tracking-[0.2em] mb-10 text-professional-fg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4400]" />
              <span>Less is More</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-display font-bold tracking-tighter mb-12 leading-[0.85] text-professional-fg">
              Pure <br /> <span className="text-[#FF4400]">Simplicity.</span>
            </h1>
            <p className="text-2xl text-[#666] max-w-2xl mx-auto leading-relaxed mb-16 font-light">
              Crafting tools for <span className="text-professional-fg font-medium">Trading</span>, <span className="text-professional-fg font-medium">AI</span>, and <span className="text-professional-fg font-medium">Life</span>. Guided by logic, inspired by evolvement.
            </p>
            <div className="flex flex-col items-center space-y-16">
              <Link 
                to="/projects"
                className="bg-professional-fg text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FF4400] transition-colors flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </Link>
              <div className="flex flex-col items-center">
                <div className="w-px h-16 bg-gradient-to-b from-professional-border to-transparent" />
                <span className="mt-4 text-[10px] uppercase font-bold tracking-[0.3em] text-[#888]">Scroll to Innovate</span>
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.div 
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-32"
          >
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`${project.colSpan} min-h-[440px] ${project.bg} ${project.textColor} rounded-[2.5rem] p-12 border border-professional-border flex flex-col justify-between group overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-500`}
              >
                <div className="relative z-10">
                   <div className={`text-[11px] font-bold uppercase ${project.accentColor} mb-6 tracking-widest`}>
                     {project.category}
                   </div>
                   <h3 className="text-3xl md:text-4xl font-display font-medium mb-6 leading-tight max-w-md">
                     {project.title}
                   </h3>
                   <p className="text-base md:text-lg opacity-70 max-w-sm">
                     {project.description}
                   </p>
                </div>
                <div className="relative z-10 flex items-center justify-between">
                   <span className="flex items-center text-xs font-bold uppercase tracking-widest opacity-40">
                     <project.icon size={18} className="mr-3" />
                     {project.tag}
                   </span>
                   {project.id === "travel" && (
                     <Compass size={24} className="group-hover:rotate-45 transition-transform duration-500 text-[#999]" />
                   )}
                </div>
                {/* Visual accents for certain cards */}
                {project.id === "trading" && (
                   <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-[#f9f9f9] rounded-full group-hover:scale-110 transition-transform duration-700 -z-0 border border-professional-border" />
                )}
                {project.id === "share" && (
                   <div className="absolute -bottom-10 left-0 w-full px-12 z-10">
                      <div className="h-1 w-full bg-professional-border/20 rounded-full overflow-hidden">
                         <div className="h-full bg-[#FF4400] w-[90%]" />
                      </div>
                   </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

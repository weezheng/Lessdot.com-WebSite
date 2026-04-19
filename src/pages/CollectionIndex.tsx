import { motion } from "motion/react";
import { ExternalLink, Database, Link as LinkIcon, Compass } from "lucide-react";
import { collections } from "../data/collections";

export default function CollectionIndex() {
  return (
    <div className="max-w-7xl mx-auto px-10 pt-32 pb-32">
      <div className="mb-20">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f0f0f0] border border-professional-border text-[10px] uppercase font-bold tracking-[0.2em] mb-6 text-professional-fg">
          <Database size={12} className="text-brand-accent" />
          <span>Curated Intelligence</span>
        </div>
        <h1 className="text-6xl font-display font-bold tracking-tighter text-professional-fg mb-6">
          My <span className="text-brand-accent">Collection.</span>
        </h1>
        <p className="text-xl text-[#666] max-w-2xl leading-relaxed font-light">
          A structured repository of tools, frameworks, and wisdom that influence my workflow and philosophy. From algorithmic trading to nomadic living.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((category, idx) => (
          <motion.div 
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white border border-professional-border rounded-[2rem] p-8 hover:shadow-xl transition-all duration-500 group"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#f9f9f8] border border-professional-border flex items-center justify-center group-hover:bg-brand-accent transition-colors duration-500">
                <category.icon size={20} className="group-hover:text-white transition-colors duration-500" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight text-professional-fg">{category.name}</h2>
            </div>

            <div className="space-y-4">
              {category.items.map((item, itemIdx) => (
                <a 
                  key={itemIdx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl hover:bg-[#f9f9f8] border border-transparent hover:border-professional-border transition-all group/item"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-professional-fg group-hover/item:text-brand-accent transition-colors">{item.title}</h3>
                    <ExternalLink size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[#999]" />
                  </div>
                  <p className="text-xs text-[#888] leading-relaxed italic">{item.description}</p>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 p-12 bg-professional-fg rounded-[3rem] text-white overflow-hidden relative">
        <div className="relative z-10 max-w-xl">
          <h3 className="text-3xl font-display font-medium mb-4">Structured Repository</h3>
          <p className="opacity-60 mb-8 leading-relaxed">
            I am currently migrating these collections to a dedicated GitHub repository for better version control and community contribution.
          </p>
          <div className="flex items-center space-x-4">
            <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">COMING SOON</span>
            <span className="text-sm opacity-40">github.com/zhengwee/collections</span>
          </div>
        </div>
        <Compass size={200} className="absolute -right-20 -bottom-20 opacity-5 rotate-12" />
      </div>
    </div>
  );
}

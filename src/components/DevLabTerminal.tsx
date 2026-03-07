import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal as TerminalIcon } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const softwareProjects = [
  { name: "STB Studio Pro", status: "FROZEN", version: "v2.4.0", load: "0%" },
  { name: "PlayTime Pro", status: "ACTIVE", version: "v5.1.2", load: "84%" },
  { name: "NiceShoot", status: "ACTIVE", version: "v1.0.4", load: "12%" }
];

export const DevLabTerminal = ({ t }: { t: any }) => {
  return (
    <div className="w-full">
      {/* Prisma Prominent Project */}
      <div className="border-t border-white/10">
        <a 
          href="https://maxi000001.github.io/prisma-desktop/#roadmap"
          target="_blank"
          rel="noopener noreferrer"
          className="group/prisma block relative border-b border-white/10 overflow-hidden cursor-pointer bg-black"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between px-6 md:px-12 py-16 md:py-24">
            <div className="flex flex-col max-w-5xl">
              <div className="flex items-center gap-6 mb-8">
                <span className="font-mono text-xs px-3 py-1 border tracking-widest border-cyber-amber text-cyber-amber">
                  {t.prismaStatus}
                </span>
                <span className="font-mono text-xs text-white/20 tracking-[0.5em]">SYS_MODULE</span>
              </div>
              <h3 className="text-[12vw] md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8] text-white group-hover/prisma:text-cyber-amber transition-colors duration-500">
                PRISMA
              </h3>
              <p className="mt-12 font-mono text-lg md:text-2xl text-white/60 uppercase tracking-widest max-w-3xl leading-relaxed">
                {t.prismaDesc}
              </p>
            </div>

            <div className="mt-16 lg:mt-0 flex items-center gap-12 group-hover/prisma:translate-x-4 transition-transform duration-500">
              <div className="hidden md:flex flex-col items-end">
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/30 mb-2">Access_Node</span>
                <span className="text-2xl font-mono text-white font-light italic underline underline-offset-8">ROADMAP_URL</span>
              </div>
              <div className="w-24 h-24 border border-white/20 flex items-center justify-center bg-white/5 group-hover/prisma:bg-white group-hover/prisma:text-black transition-all duration-300">
                <ArrowRight className="w-10 h-10 -rotate-45 group-hover/prisma:rotate-0 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Software Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {softwareProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group/project relative border-b border-white/10 md:border-r overflow-hidden cursor-pointer p-8 md:p-10 bg-black hover:bg-white/[0.02] transition-colors"
          >
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-mono text-[10px] px-2 py-1 border tracking-widest",
                    project.status === "ACTIVE" ? "border-cyber-amber text-cyber-amber" : "border-white/20 text-white/20"
                  )}>
                    {project.status}
                  </span>
                  <span className="font-mono text-[10px] text-white/20 tracking-[0.3em]">{project.version}</span>
                </div>
                <h3 className="text-5xl font-black uppercase tracking-tighter leading-none text-white group-hover/project:text-cyber-amber transition-colors">
                  {project.name}
                </h3>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 mb-1">{t.load}</span>
                  <span className="text-4xl font-mono text-white font-light">{project.load}</span>
                </div>
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                  <TerminalIcon className="w-5 h-5 text-white/40" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

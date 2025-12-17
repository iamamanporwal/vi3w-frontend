"use client";

import Link from "next/link";

export default function NewProjectCard({ href }: { href: string }) {
  return (
    <Link 
      href={href}
      className="group relative flex flex-col items-center justify-center h-64 bg-white/5 border border-white/10 border-dashed rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex flex-col items-center gap-4 group-hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white">Create New</h3>
          <p className="text-sm text-white/50">Start a new project</p>
        </div>
      </div>
    </Link>
  );
}


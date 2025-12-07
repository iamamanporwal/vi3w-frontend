"use client";

import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

// Mock Data
const recentProjects = [
  {
    id: 1,
    title: "Cyberpunk City Block",
    type: "Text to 3D",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Modern Apartment Floorplan",
    type: "Floorplan 3D",
    date: "1 day ago",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Vintage Chair",
    type: "Text to 3D",
    date: "2 days ago",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Office Layout Level 2",
    type: "Floorplan 3D",
    date: "3 days ago",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=300&auto=format&fit=crop"
  }
];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-white/60">Welcome back{user?.displayName ? `, ${user.displayName}` : ''}, let's create something new.</p>
        </div>
        <div className="flex gap-3">
             <Link 
                href="/dashboard/text-to-3d"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
             >
                <Plus className="w-4 h-4" />
                <span>New Project</span>
             </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link href="/dashboard/text-to-3d" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 to-black border border-white/10 p-8 hover:border-purple-500/50 transition-all">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Text to 3D</h3>
            <p className="text-white/60 mb-6 max-w-sm">Generate high-quality 3D assets from text descriptions in seconds.</p>
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300">
              Start Generating <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-purple-600/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
        </Link>

        <Link href="/dashboard/floorplan-3d" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 to-black border border-white/10 p-8 hover:border-blue-500/50 transition-all">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Floorplan to 3D</h3>
            <p className="text-white/60 mb-6 max-w-sm">Convert 2D architectural blueprints into walkable 3D models.</p>
            <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300">
              Start Generating <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
           <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
        </Link>
      </div>

      {/* Recent Projects */}
      <h2 className="text-xl font-semibold mb-6">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all hover:scale-[1.02]"
          >
            <div className="aspect-square relative overflow-hidden bg-black/50">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
               <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-medium border border-white/10">
                 {project.type}
               </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold truncate text-white/90">{project.title}</h3>
              <p className="text-xs text-white/40 mt-1">{project.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


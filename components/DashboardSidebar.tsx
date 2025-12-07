"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutGrid, 
  Box, 
  Layers, 
  History, 
  CreditCard,
  Settings,
  ChevronRight
} from "lucide-react";

const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutGrid,
    variant: "default"
  },
  {
    title: "Text to 3D",
    href: "/dashboard/text-to-3d",
    icon: Box,
    variant: "workflow"
  },
  {
    title: "Floorplan to 3D",
    href: "/dashboard/floorplan-3d",
    icon: Layers,
    variant: "workflow"
  },
  {
    title: "Credits",
    href: "/dashboard/credits",
    icon: CreditCard,
    variant: "default"
  }
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 fixed left-0 top-[80px] bottom-0 border-r border-white/10 bg-black/50 backdrop-blur-xl hidden md:flex flex-col">
      <div className="p-4 flex flex-col gap-2">
        <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 px-3">
          Workflows
        </div>
        
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                isActive 
                  ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-purple-400" : "text-white/40 group-hover:text-white")} />
              <span className="font-medium text-sm">{item.title}</span>
              {isActive && <ChevronRight className="w-4 h-4 ml-auto text-purple-400/50" />}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-2 text-white/40 text-sm">
           <History className="w-4 h-4" />
           <span>Recent Activity</span>
        </div>
        {/* Placeholder for mini history or stats */}
        <div className="px-3 py-2">
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[75%]" />
            </div>
            <div className="flex justify-between text-xs text-white/30 mt-1">
                <span>Storage</span>
                <span>75%</span>
            </div>
        </div>
      </div>
    </aside>
  );
}


"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { GenerationProvider } from "@/contexts/GenerationContext";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Check if we are on one of the full-width pages
  const isFullWidthPage = pathname === "/dashboard/text-to-3d/new" || pathname === "/dashboard/floorplan-3d/new";
  
  // Initialize state based on the current path to prevent layout shift on refresh
  const [isCollapsed, setIsCollapsed] = useState(isFullWidthPage);

  // Sync state when navigating
  useEffect(() => {
    if (isFullWidthPage) {
      setIsCollapsed(true);
    }
  }, [pathname, isFullWidthPage]);

  return (
    <GenerationProvider>
      <div className="min-h-screen pt-[80px]">
        <DashboardSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main 
          className={cn(
            "transition-all duration-300 ease-in-out min-h-[calc(100vh-80px)]",
            isCollapsed ? "md:ml-20" : "md:ml-64",
            isFullWidthPage ? "p-0" : "p-6"
          )}
        >
          {children}
        </main>
      </div>
    </GenerationProvider>
  );
}

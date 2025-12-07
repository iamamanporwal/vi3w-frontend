import { DashboardSidebar } from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-[80px]">
      <DashboardSidebar />
      <main className="md:ml-64 p-6 min-h-[calc(100vh-80px)]">
        {children}
      </main>
    </div>
  );
}


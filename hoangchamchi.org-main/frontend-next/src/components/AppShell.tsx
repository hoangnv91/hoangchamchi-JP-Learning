"use client";

import { usePathname } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import Nav from "@/components/Nav";
import DashboardNav from "@/components/DashboardNav";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // The landing page (/) is a self-contained page with its own navbar/footer.
  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <div className="h-full grid lg:grid-cols-body overflow-auto">
      <Sidebar />
      <div className="flex flex-col h-full">
        <Nav />
        <DashboardNav />
        {children}
      </div>
    </div>
  );
}
"use client";

import { AppSidebar } from "@/app/components/app-sidebar";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
        </header>
        <main className="flex-1 bg-gray-50 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

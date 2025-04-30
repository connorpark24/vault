"use client";

// import { useSidebar } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

export default function Header() {
  //   const { toggleSidebar } = useSidebar();

  return (
    <div className="p-6 h-16 w-screen border-b border-neutral-300 flex items-center justify-between fixed top-0 bg-white z-10">
      <h1 className="tracking-tighter text-2xl font-medium ">Vault</h1>
      <div className="w-96">
        <Input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

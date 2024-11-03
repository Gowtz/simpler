"use client";
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./theme-toggler";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
export default function Header() {
  const params = usePathname();
  return (
    <header className="px-5 h-14 flex items-center justify-between w-full bg-sidebar">
      <div className="left flex items-center justify-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-8" />
        <h2>{params.split("/")[2]?.toUpperCase()}</h2>
      </div>

      <ModeToggle />
    </header>
  );
}

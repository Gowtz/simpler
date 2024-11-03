import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full ">
          <Header />
          <Separator />
          <div className="main px-5 py-5 h-[calc(100vh-3.6rem)] w-full">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}

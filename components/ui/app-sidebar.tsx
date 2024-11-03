import { Archive, CheckCheck, Home, Sheet, Timer } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Hello,world",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Pomodoro",
    url: "/dashboard/pomodoro",
    icon:Timer,
  },
  {
    title: "Todo list",
    url: "/dashboard/todo",
    icon: CheckCheck,
  },
  {
    title: "Flashcard",
    url: "/dashboard/flash-card",
    icon:Archive,
  },
  {
    title: "Sheets",
    url: "/dashboard/sheets",
    icon:Sheet,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 pt-3 cursor-pointer text-xl">
          Hello, Gowtz
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Small Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

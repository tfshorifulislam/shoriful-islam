"use client";

import Link from "next/link";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  BarChart3,
  Mail,
  X,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", href: "#home", icon: Home },
  { title: "About", href: "#about", icon: User },
  { title: "Skills", href: "#skills", icon: Code2 },
  { title: "Projects", href: "#projects", icon: FolderGit2 },
  { title: "GitHub Stats", href: "#github-stats", icon: BarChart3 },
  { title: "Contact", href: "#contact", icon: Mail },
];

export function MobileNavbar() {
  return (
    <>
      {/* Mobile Trigger */}
      <SidebarTrigger />

      
      <Sidebar
        side="right"
        className="border-l"
      >
        <SidebarContent className="flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-5">

            <Link
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              S<span className="text-muted-foreground">.</span>
            </Link>

            <SidebarTrigger className="h-9 w-9 rounded-full hover:bg-muted">
              <X className="h-5 w-5" />
            </SidebarTrigger>

          </div>

          {/* Navigation */}
          <SidebarGroup className="px-4 pt-8">

            <SidebarGroupLabel className="px-2 text-xs uppercase tracking-widest text-muted-foreground">
              Navigation
            </SidebarGroupLabel>

            <SidebarGroupContent className="mt-3">

              <SidebarMenu className="gap-2">

                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.title}>

                      <SidebarMenuButton
                        className="h-12 rounded-xl px-4 text-base transition-all hover:translate-x-1 hover:bg-muted"
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-4"
                        >
                          <Icon className="h-5 w-5 shrink-0" />

                          <span className="font-medium">
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>

                    </SidebarMenuItem>
                  );
                })}

              </SidebarMenu>

            </SidebarGroupContent>
          </SidebarGroup>

          {/* Bottom */}
          <div className="mt-auto border-t p-6">

            <p className="text-center text-xs text-muted-foreground">
              © 2026 Shoriful Islam
            </p>

          </div>

        </SidebarContent>

      </Sidebar>
    </>
  );
}
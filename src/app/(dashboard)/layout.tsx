import { AppSidebar } from "@/components/app-sidebar";
import AvatarComp from "@/components/avatar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="w-full h-full">
        <header className="bg-slate-400 flex justify-between items-center py-2 pr-2">
          <SidebarTrigger />
          <AvatarComp />
        </header>
        <article className="flex flex-col items-center p-4">
          {children}
        </article>
      </main>
    </SidebarProvider>
  );
}

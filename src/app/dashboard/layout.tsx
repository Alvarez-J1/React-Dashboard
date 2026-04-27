"use client";

import SideMenu from "@/components/SideMenu/SideMenu";
import { useSession } from "next-auth/react";

import Footer from "@/components/Footer/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  return (
    <main
//   style={{
//  padding: session ? "80px 24px 0 88px" : 0,
//   }}
>
  <div style={{ display: "flex", flexDirection: "column", gap: "5rem"  }}> <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
  {children}
</div>
    
    
  </div>

  {session && <SideMenu />}
</main>
  );
}
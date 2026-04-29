"use client";

import SideMenu from "@/components/SideMenu/SideMenu";
import Footer from "@/components/Footer/Footer";
import { useSession } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>
        {children}
      </div>

      {/* {session && <Footer />} */}
      {session && <SideMenu />}
    </main>
  );
}

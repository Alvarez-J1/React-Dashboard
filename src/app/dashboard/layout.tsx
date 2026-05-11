"use client";

import SideMenu from "@/components/SideMenu/SideMenu";
import { useSession } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            flex: 1,
            width: "100%",
            minWidth: 0,
            boxSizing: "border-box",
          }}
        >
          {children}
        </div>
      </main>
      {/* Permanent drawer is position:fixed; keeping it out of main avoids flex sizing quirks. */}
      {session && <SideMenu />}
    </>
  );
}

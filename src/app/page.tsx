"use client";

import Dashboard from "./dashboard/page";
import scss from "./Home.module.scss";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
      <main className={scss.main} style={{
            padding: session ? "80px 0 0 0" : 0,
          }}>
   <Dashboard />
   </main>
)
}
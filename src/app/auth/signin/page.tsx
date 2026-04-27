"use client";

import Login from "@/components/Login/login";
import SideMenu from "@/components/SideMenu/SideMenu";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  return (
    <>
    <SideMenu />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
      }}
    >
      <h2>{session ? "Thank you for logging in" : "Please log in"}</h2>
      <Login />
    </Box>
    </>
  );
}
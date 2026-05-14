"use client";

import Login from "@/components/Login/login";
import SideMenu from "@/components/SideMenu/SideMenu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  return (
    <>
      <SideMenu />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
          minHeight: "45vh",
          pt: { xs: "72px", sm: "80px" },
          // Collapsed SideMenu rail: spacing(7) + 1px (see SideMenu.tsx closedMixin)
          pl: `calc(${theme.spacing(7)} + 1px + ${theme.spacing(2)})`,
          pr: theme.spacing(2),
        })}
      >
        <Typography
          component="h2"
          variant="h5"
          sx={{
            textAlign: "center",
            alignSelf: "stretch",
            whiteSpace: "normal",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {session ? "Thank you for logging in" : "Please log in"}
        </Typography>
        <Login />
      </Box>
    </>
  );
}

"use client";

import Login from "@/components/Login/login";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";

import scss from "../Home.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon/dataRibbon";
 import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay/TransactionsPerDay";
 import TransactionsBottomRow from "@/components/Dashboard/TransactionsBottomRow/TransactionsBottomRow";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const { data: session } = useSession();

  return (

<Box
  component="main"
  className={scss.main}
  sx={{
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
    ...(session && {
      pt: { xs: "72px", sm: "80px" },
      pr: { xs: 1, sm: 2, md: "84px" },
      pb: 0,
      pl: { xs: 8, sm: 9, md: "88px" },
    }),
  }}
>
    <>
      {session ? (
        <>
          <DataRibbon />
    <TransactionsPerDay />
    <TransactionsBottomRow />
    <Footer />
         

          {/* <Button
            variant="contained"
            color="error"
            onClick={() => signOut()}
          >
            Sign out
          </Button> */}
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
    </Box>
  );
}



"use client";

import Login from "@/components/Login/login";
import SideMenu from "@/components/SideMenu/SideMenu";
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
    padding: session ? "80px 84px 0 88px" : 0,
    width: { xs: "900px", md: "100%" },
  }}
>
    <>
      {session ? (
        <>
          <SideMenu />
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



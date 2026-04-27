"use client";

import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Box, Typography } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import scss from "../../Home.module.scss";
import { useSession } from "next-auth/react";
 
const Data = () => {
    const { data: session } = useSession();
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  return (
     <main className={scss.main} style={{
            padding: session ? "80px 84px 0 88px" : 0,
          }}>
    <>
      <Typography variant="h4" gutterBottom>
        Data
      </Typography>

      <Typography sx={{ mb: 2 }}>
        The best data available here at your fingertips.
      </Typography>

      <Box sx={{ height: 900, width: "100%" }}>
        <DataGrid
          {...data}
          loading={loading}
          checkboxSelection
          disableRowSelectionOnClick
          pageSizeOptions={[10, 25, 50]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 25, page: 0 },
            },
          }}
         slots={{
  loadingOverlay: () => <LinearProgress />,
}}
 sx={{
    "& .MuiCheckbox-root": {
      color: "#555", // unchecked
    },
    "& .MuiCheckbox-root.Mui-checked": {
      color: "#1976d2", // checked (blue)
    },
  }}
        />
      </Box>
      <Footer />
      
    </>
    </main>
  );
};

export default Data;
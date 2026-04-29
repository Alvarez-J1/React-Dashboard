"use client";

import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Footer from "@/components/Footer/Footer";
import { useSession } from "next-auth/react";
import scss from "../../Home.module.scss";

  

export default function Settings() {
  const { data: session } = useSession();
  const [settings, setSettings] = useState({
    revenue: true,
    profit: true,
    orders: true,
    customers: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    console.log("Settings saved:", settings);
  };

  return (
    <Box component="main" className={scss.main} sx={{
    padding: session
      ? { xs: "80px 16px 0 88px", md: "245px 84px 0 88px" }
      : 0,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  }}
>
         

     <Box sx={{ flex: 1 }}>
    <Box sx={{ maxWidth: 1200, mx: "auto",   }}>
      <Typography variant="h4"  sx={{ mb: 3, fontWeight: 700 }}>
        Settings
      </Typography>

      <Typography variant="h5"  sx={{ mb: 2, fontWeight: 600 }}>
        Dashboard Features
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
        <FormControlLabel
          control={
            <Switch
              name="revenue"
              checked={settings.revenue}
              onChange={handleChange}
              color="error"
            />
          }
          label="Revenue"
        />

        <FormControlLabel
          control={
            <Switch
              name="profit"
              checked={settings.profit}
              onChange={handleChange}
              color="error"
            />
          }
          label="Profit"
        />

        <FormControlLabel
          control={
            <Switch
              name="orders"
              checked={settings.orders}
              onChange={handleChange}
              color="error"
            />
          }
          label="Orders"
        />

        <FormControlLabel
          control={
            <Switch
              name="customers"
              checked={settings.customers}
              onChange={handleChange}
              color="error"
            />
          }
          label="Customers"
        />
      </Box>

      <Button variant="contained" color="error" onClick={handleSubmit}>
        Save Settings
      </Button>
    
 

    </Box>
    </Box>
  <Box sx={{ display: { xs: "none", md: "block" } }}>
  <Footer />
</Box>
    </Box>
  );
}
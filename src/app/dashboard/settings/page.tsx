"use client";

import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Container } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import { useSession } from "next-auth/react";


  

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
    <main style={{
            padding: session ? "212px 84px 0 88px" : 0,
          }}>

    
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
    
  <Footer />

    </Box>
  
    </main>
  );
}
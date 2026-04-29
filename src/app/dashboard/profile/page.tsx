"use client";

import Footer from "@/components/Footer/Footer";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Profile() {
  const { data: session } = useSession();
  const names = session?.user?.name
  ? session.user.name.split(" ")
  : [];

const firstName = names[0] || "";
const lastName = names.length > 1 ? names[names.length - 1] : "";
const emailAddress = session?.user?.email || "";

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: emailAddress || "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
   <Box
  sx={{
    px: { xs: 0, md: 3 },
    pt: "80px",
    minHeight: "100dvh",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  }}
>
    
<Box
  sx={{
    maxWidth: 1200,
    mx: "auto",
    width: "100%",
    px: { xs: 2, md: "84px" },
    pt: { xs: 2, md: "80px" },
pl: { xs: "112px", md: "88px" },
    display: "flex",
    flexDirection: "column",
    alignItems:  "stretch",
  }}
>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700  }}>
        Profile
      </Typography>

      <Typography variant="h6" sx={{ mb: 3 }}>
        Hey {session?.user?.name || "User"}, welcome to your profile 👋
      </Typography>

     <Paper
  sx={{
    width: "100%",
    maxWidth: { xs: 360, sm: 520 },
    mx: "auto",
    p: { xs: 2, md: 5 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
        <Avatar
          src={session?.user?.image || ""}
          alt={session?.user?.name || "User"}
          sx={{
            width: 90,
            height: 90,
            mb: 3,
            border: "3px solid",
            borderColor: "primary.main",
          }}
        />

        <Box component="form" sx={{ width: "100%", pb: 3  }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                size="small"
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                size="small"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                size="small"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                size="small"
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                size="small"
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleFormChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="receiveEmails"
                    checked={formData.receiveEmails}
                    onChange={handleFormChange}
                    sx={{
                      color: "grey.600",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                }
                label="Receive sales analytics emails"
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button variant="contained" color="error" size="small">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      
      </Box>
      <Box sx={{ mt: "auto" }}>
   <Box sx={{ display: { xs: "none", md: "block" } }}>
  <Footer />
</Box>
</Box>
    </Box>
   
    
  );
}
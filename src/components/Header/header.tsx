"use client";
import { ColorModeContext } from "@/app/providers";
import AdbIcon from '@mui/icons-material/Adb';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMediaQuery from "@mui/material/useMediaQuery";
import { signIn, signOut, useSession } from "next-auth/react";
import * as React from 'react';
import { useContext } from "react";
import Link from "next/link";


const Header = () => {
   const { data: session } = useSession(); 
   const theme = useTheme();
  const tabletCheck = useMediaQuery("(min-width:768px)"); 
  const colorMode = useContext(ColorModeContext);  
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
return (
  <AppBar
  position="fixed"
  sx={{
    width: "100%",
    ml: 2,
  }}
  >
  <Container maxWidth="xl" disableGutters>
      <Toolbar disableGutters>
       <Box sx={{ display: "flex", alignItems: "center", pl: 6 }}>
  <AdbIcon sx={{ mr: 1 }} />

  <Typography
    variant="h6"
    noWrap
    sx={{
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
    }}
  >
   Datara
  </Typography>
</Box> 
<Box sx={{ flexGrow: 1 }} />
{/* Toggle (ALWAYS visible) */}
<Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
  <LightModeIcon fontSize="small" />
  <Switch onChange={colorMode.toggleColorMode} />
  <DarkModeIcon fontSize="small" />
</Box>

{/* Email (ONLY on bigger screens) */}
{tabletCheck && (
  <Box sx={{ pr: 5 }}>
    <Typography>Signed in as {session?.user?.email}</Typography>
  </Box>
)}

{/* Avatar (ALWAYS visible) */}
<Box sx={{ flexGrow: 0 }}>
  <Tooltip title="Open profile settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginRight: 1 }}>
      <Avatar
        alt={session?.user?.name ?? "User"}
        src={session?.user?.image ?? undefined}
      />
    </IconButton>
  </Tooltip>

  <Menu
    sx={{ mt: "45px" }}
    anchorEl={anchorElUser}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
  >
    {session && (
  <MenuItem onClick={handleCloseUserMenu}>
    <Typography
      component={Link}
      href="/dashboard/profile"
      sx={{
        textAlign: "center",
        textDecoration: "none",
        color: "text.primary",
        width: "100%",
      }}
    >
      Profile
    </Typography>
  </MenuItem>
)}
    <MenuItem onClick={() => (session ? signOut() : signIn("google"))}>
     <Typography sx={{ textAlign: "center" }}>
  {session ? "Logout" : "Login"}
</Typography>
    </MenuItem>
  </Menu>
</Box>
      </Toolbar>
    </Container>
  </AppBar>
);
  
}

export default Header;



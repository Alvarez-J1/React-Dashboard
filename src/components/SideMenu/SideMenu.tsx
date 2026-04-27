import * as React from 'react';


import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { CSSObject, Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { signOut } from "next-auth/react";
import Link from "next/link";
import scss from "./SideMenu.module.scss";
import HomeIcon from "@mui/icons-material/Home";


const drawerWidth = 240;
const Drawer = MuiDrawer;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const menuRouteList = ["", "data", "profile", "settings", "logout"];
const menuListTranslations = ["Home", "Data", "Profile", "Settings", "Sign Out"];

const menuListIcons = [
  <HomeIcon />,
  <EqualizerIcon key="home" />,
  <Person2Icon key="profile" />,
  <SettingsIcon key="settings" />,
  <ExitToAppIcon key="logout" />,
];






export default function SideMenu() {
  // const tabletCheck = useMediaQuery("(min-width:600px)"); 
    const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

const handleListItemButtonClick = (text: string) => {
  text === "Sign Out" ? signOut() : setOpen(false);
};
  return (
    
<MuiDrawer
  variant="permanent"
  anchor="left"
  open={open}
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
  "& .MuiDrawer-paper": {
  top: { xs: "56px", sm: "64px" },
  height: { xs: "calc(100% - 56px)", sm: "calc(100% - 64px)" },
  left: 0,
  boxSizing: "border-box",

  ...(open ? openedMixin(theme) : closedMixin(theme)),
},
  }}
>
        <div className={scss.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
       
        <Divider />
        <List>
          {menuListTranslations.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
      <ListItemButton
         component={text === "Sign Out" ? "button" : Link}
  href={text === "Sign Out" ? undefined : `/dashboard/${menuRouteList[index]}`}
  onClick={() => handleListItemButtonClick(text)}
  title={text}
  aria-label={text}
        sx={{
          minHeight: 48,
          px: 1.9,
          justifyContent: open ? "initial" : "center",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
            mr: open ? 3 : "auto",
          }}
        >
          {menuListIcons[index]}
        </ListItemIcon>

        <ListItemText
          primary={text}
          sx={{
            color: theme.palette.text.primary,
            opacity: open ? 1 : 0,
          }}
        />
      </ListItemButton>
    </ListItem>
          ))}
        </List>
      </MuiDrawer>

  )
}
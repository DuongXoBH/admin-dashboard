"use client";

import * as React from "react";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DASHBOARD, PAGE_DASHBOARD } from "@/constants/dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { userToken } from "@/state-management/user";
import { sidebarAtom } from "@/state-management";
import Link from "next/link";
import { Tooltip } from "@mui/material";

export default function Sidebar() {
  const [, setUser] = useAtom(userToken);
  const [open] = useAtom(sidebarAtom);
  const pathName = usePathname();

  return (
    <Drawer
      sx={{
        width: open ? 240 : 56,
        flexShrink: 0,
        borderColor: "rgba(213, 213, 213, 1)",
        borderWidth: "0.6px",
        borderStyle: "solid",
        "& .MuiDrawer-paper": {
          width: open ? 240 : 56,
          boxSizing: "border-box",
          position: "relative",
        },
      }}
      variant="permanent"
    >
      <Toolbar sx={{ pl: 2, py: 1 }}>
        {open && (
          <Image src="/Logo.svg" alt="Logo" width={256} height={256} priority></Image>
        )}
      </Toolbar>
      {/* <Divider /> */}
      <List>
        {DASHBOARD.map((element, index) => (
          <ListItem
            key={`dashboard-1-${index}`}
            sx={{
              color: pathName === element.href ? "white" : "black",
              backgroundColor:
                pathName === element.href ? "rgba(72, 128, 255, 1)" : "inherit",
              overflow: "hidden",
            }}
            disablePadding
          >
            <Tooltip title={open ? "" : `${element.text}`}>
              <Link className="w-[240px]" href={element.href}>
                <ListItemButton sx={{ overflow: "hidden" }}>
                  <ListItemIcon>
                    {React.createElement(element.icon, {
                      sx: {
                        color: pathName === element.href ? "white" : "black",
                      },
                    })}
                  </ListItemIcon>
                  {open && <ListItemText primary={element.text} />}
                </ListItemButton>
              </Link>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          {open && (
            <Typography
              sx={{ fontWeight: "600", fontSize: "0.75rem", color: "gray" }}
            >
              PAGES
            </Typography>
          )}
        </ListItem>
        {PAGE_DASHBOARD.map((element, index) => (
          <ListItem
            key={`dashboard-1-${index}`}
            sx={{
              color: pathName === element.href ? "white" : "black",
              backgroundColor:
                pathName === element.href ? "rgba(72, 128, 255, 1)" : "inherit",
              overflow: "hidden",
            }}
            disablePadding
          >
            <Tooltip title={open ? "" : `${element.text}`}>
              <Link className="w-[240px]" href={element.href}>
                <ListItemButton>
                  <ListItemIcon>
                    {React.createElement(element.icon,{
                      sx: {
                        color: pathName === element.href ? "white" : "black",
                      },
                    })}
                  </ListItemIcon>
                  {open && <ListItemText primary={element.text} />}
                </ListItemButton>
              </Link>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Tooltip title={open?"":"Settings"}>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon sx={{ color:"black" }} />
              </ListItemIcon>
              {open && <ListItemText primary="Settings" />}
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title={open?"":"Logout"}>
            <ListItemButton
              onClick={() => {
                setUser("");
              }}
            >
              <ListItemIcon>
                <PowerSettingsNewIcon sx={{ color:"black" }} />
              </ListItemIcon>
              {open && <ListItemText primary="Logout" />}
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
    </Drawer>
  );
}

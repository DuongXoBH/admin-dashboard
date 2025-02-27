"use client";

import { EMAILPAGES } from "@/constants/mail";
import useHash from "@/hooks/use-hash";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export default function EmailSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const hash = useHash();

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Drawer
        sx={{
          width: 286,
          flexShrink: 0,
          borderRadius: "8px",
          borderColor: "rgba(213, 213, 213, 1)",
          borderWidth: "0.6px",
          borderStyle: "solid",
          overflow: "hidden",
          "& .MuiDrawer-paper": {
            width: 286,
            boxSizing: "border-box",
            position: "relative",
          },
        }}
        variant="permanent"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              width: "238px",
              height: "43px",
              backgroundColor: "rgba(72, 128, 255, 1)",
              color: "white",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Compose
          </Button>
        </Toolbar>
        <List>
          <ListItem>
            <Typography
              sx={{ fontWeight: "600", fontSize: "1rem", color: "black" }}
            >
              My Email
            </Typography>
          </ListItem>
          {EMAILPAGES.map((element, index) => (
            <ListItem
              key={`mail-1-${index}`}
              sx={{
                overflow: "hidden",
              }}
              disablePadding
            >
              <Button className="w-[286px] " href={element.href}>
                <ListItemButton
                  sx={{ overflow: "hidden", textTransform: "none" }}
                >
                  <ListItemIcon>
                    {React.createElement(element.icon, {
                      sx: {
                        color:
                          `${hash}` === element.href
                            ? "rgba(72, 128, 255, 1)"
                            : "black",
                      },
                    })}
                  </ListItemIcon>
                  <ListItemText
                    primary={element.text}
                    sx={{
                      color:
                        `${hash}` === element.href
                          ? "rgba(72, 128, 255, 1)"
                          : "black",
                    }}
                  />
                </ListItemButton>
              </Button>
            </ListItem>
          ))}
        </List>

        <Divider />
      </Drawer>
      <Box
        sx={{
          width: "100%",
          minHeight: "screen",
          marginLeft: "21px",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "24px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

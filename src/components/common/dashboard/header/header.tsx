import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useAtom } from "jotai";
import { userToken } from "@/state-management/user";
import { sidebarAtom } from "@/state-management";
import { useFetchUserApiBySession } from "@/api-hook/user";

export default function Header() {
  const [token] = useAtom(userToken);
  const [dashboardOpen, setDashboardOpen] = useAtom(sidebarAtom);

  const { data: user } = useFetchUserApiBySession(token);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const settings = ["Profile", "Account", "Dashboard", "Log out"];

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: 64,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* Menu Button */}
        <Toolbar sx={{ padding: "0px !important" }}>
          <Tooltip title={dashboardOpen ? "Close menu" : "Open menu"}>
            <Button
              onClick={() => {
                setDashboardOpen(!dashboardOpen);
              }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </Button>
          </Tooltip>
        </Toolbar>

        {/* Search area */}
        <Toolbar sx={{ padding: "0px !important" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "gray" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </Box>

      {/* Sign in button */}
      {!token && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button component={Link} href="/login">
            Sign In
          </Button>
        </Box>
      )}

      {/* Setting button */}
      {user && (
        <Box
          sx={{
            flexGrow: 0,
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
          }}
        >
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Box sx={{ marginRight: "10px" }}>
                <Typography sx={{ color: "black", fontWeight: "600" }}>
                  {user?.name}
                </Typography>
                <Typography sx={{ color: "black", fontWeight: "500" }}>
                  {user?.role}
                </Typography>
              </Box>
              <Avatar alt="Remy Sharp" src={user?.avatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}
    </Box>
  );
}

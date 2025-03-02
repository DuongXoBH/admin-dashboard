import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
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
  const [searchValue, setSearchValue] = React.useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchValue(e.target.value);
  }
  console.log("🚀 ~ Header ~ searchValue:", searchValue)

  const { data: user } = useFetchUserApiBySession(token);

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
        <TextField
            placeholder="Search "
            variant="outlined"
            size="small"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="disabled" />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "50px",
                backgroundColor: "white",
                
              },
            }}
          />
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

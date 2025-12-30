import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Divider,
  Badge,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Link, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../client/CartContext";
import { AuthContext } from "../auth/AuthContext";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileAnchor, setProfileAnchor] = useState(null);

  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  /* ================= DARK MODE ================= */
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* ================= HELPERS ================= */
  const isActive = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/");

  /* ================= MOBILE DRAWER ================= */
  const drawerMenu = (
    <Box sx={{ width: 260 }} onClick={() => setDrawerOpen(false)}>
      <List>
        {[
          { text: "Home", path: "/" },
          { text: "Works", path: "/works" },
          { text: "Items", path: "/items" },
          { text: "Contact", path: "/contact" },
          { text: "About", path: "/about" },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={isActive(item.path)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* ================= TOP INFO BAR ================= */}
      <Box
        sx={{
          backgroundColor: darkMode ? "#020617" : "#0f172a",
          color: "white",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 0.8,
            }}
          >
            {/* EMAIL */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">
                blengineering@gmail.com
              </Typography>
            </Box>

            {/* ACTIONS */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton color="inherit" size="small">
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small">
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small">
                <YouTubeIcon fontSize="small" />
              </IconButton>

              <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

              {/* DARK / LIGHT TOGGLE */}
              <IconButton
                color="inherit"
                size="small"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              {/* CART */}
              <Button
                color="inherit"
                size="small"
                component={Link}
                to="/cart"
                startIcon={
                  <Badge badgeContent={cartItems?.length || 0} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                }
              >
                Cart
              </Button>

              {/* LOGIN / PROFILE */}
              {!user ? (
                <Button
                  color="inherit"
                  size="small"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
              ) : (
                <>
                <Button
                  color="inherit"
                  size="small"
                  startIcon={
                    <Avatar sx={{ width: 24, height: 24 }}>
                      {user.role?.[0].toUpperCase()}
                    </Avatar>
                  }
                  onClick={(e) => setProfileAnchor(e.currentTarget)}
                >
                  {user.role === "admin" ? "Admin" : "Client"}
                </Button>


                  <Menu
                    anchorEl={profileAnchor}
                    open={Boolean(profileAnchor)}
                    onClose={() => setProfileAnchor(null)}
                  >
                    <MenuItem component={Link} to="/profile">
                      <PersonIcon fontSize="small" sx={{ mr: 1, color: "#203a43" }} />
                      Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/orders">
                      My Orders
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={() => {
                        logout();
                        setProfileAnchor(null);
                      }}
                    >
                      <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= MAIN GLASS HEADER ================= */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: darkMode
            ? "rgba(2,6,23,0.8)"
            : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: darkMode
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between",py: 1 }}>
            {/* BRAND */}
            <Typography
  component={motion.div}
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  variant="h5"
  fontWeight={700}
  sx={{
    letterSpacing: "1px",
    textDecoration: "none",
  }}
>
  <Link
    to="/"
    style={{
      textDecoration: "none",
      color: darkMode ? "#e5e7eb" : "#0f172a",
    }}
  >
    BL Engineering Works
  </Link>
</Typography>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1}}>
              {[
                { text: "Home", path: "/" },
                { text: "Works", path: "/works" },
                { text: "Items", path: "/items" },
                { text: "Contact", path: "/contact" },
                { text: "About", path: "/about" },
              ].map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{
                    fontWeight: isActive(item.path) ? "bold" : "normal",
                    borderBottom: isActive(item.path)
                      ? "2px solid #1976d2"
                      : "2px solid transparent",
                    borderRadius: 0,
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* MOBILE MENU */}
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawerMenu}
      </Drawer>
    </>
  );
}

export default Header;

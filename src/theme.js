import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e2a4a",
    },
    secondary: {
      main: "#203a43",
    },

    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
      footer: "#1e2a4a",       // 👈 footer main
      footerBottom: "#0f172a", // 👈 footer bottom
    },

    text: {
      primary: "#0f172a",
      secondary: "#475569",
      footerPrimary: "#e5e7eb",
      footerSecondary: "#cbd5e1",
    },

    divider: "#e2e8f0",
  },
});

export default theme;

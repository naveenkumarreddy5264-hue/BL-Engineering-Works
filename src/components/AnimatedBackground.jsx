import { Box } from "@mui/material";

function AnimatedBackground({ darkMode }) {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,

        background: darkMode
          ? "linear-gradient(120deg, #020617, #020617, #0f172a)"
          : "linear-gradient(120deg, #f8fafc, #eef2ff, #f1f5f9)",

        backgroundSize: "400% 400%",
        animation: "gradientMove 18s ease infinite",

        "@keyframes gradientMove": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    />
  );
}

export default AnimatedBackground;

import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/* ================= IMAGE LIST ================= */
const images = [
  "/work-images/civil/civil1.jpg",
  "/work-images/rcc/rcc1.jpg",
  "/work-images/st/st1.jpg",
  "/work-images/electrical/electrical1.jpg",
];

function About() {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <>

       <Box
        sx={{
          py: 7,
          background: "#1e2a4a",
          color: "white",
          textAlign: "center",
        
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#e5e7eb",
          py: 6,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          About Us
        </Typography>
        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Learn more about BL Engineering Works and our expertise
        </Typography>
      </Box>
      {/* ================= IMAGE SECTION ================= */}
      <Box sx={{ py: { xs: 5, md: 7 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="md">
          <Box
            sx={{
              position: "relative",
              height: { xs: 220, md: 360 },
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
            }}
          >
            <motion.img
              key={index}
              src={images[index]}
              alt="BL Engineering Works"
              initial={{ opacity: 0.5, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <IconButton onClick={prev} sx={navStyle("left")}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton onClick={next} sx={navStyle("right")}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* ================= CONTENT SECTION ================= */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 2.5,
                color: "text.secondary",
              }}
            >
              ABOUT BL ENGINEERING WORKS
            </Typography>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ mt: 1.2, mb: 3 }}
            >
              Communities Empowered
            </Typography>

            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#444",
                textAlign: "justify",
                mb: 3,
              }}
            >
              BL Engineering Works is a professionally managed
              organization engaged in Railway Civil, S&T and
              Electrical infrastructure works across India.
              Our operations are driven by engineering excellence,
              disciplined execution, and strict safety compliance.
            </Typography>

            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#444",
                textAlign: "justify",
                mb: 4,
              }}
            >
              With an experienced workforce and modern execution
              practices, we deliver reliable and scalable
              infrastructure solutions for government and private
              sector clients, supporting long-term development
              and national growth.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.3,
                borderRadius: "8px",
                fontWeight: 500,
                
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#e5e7eb",
          py: 2,
              }}
            >
              Learn More About Our Work
            </Button>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}

/* ================= STYLES ================= */

const navStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: 12,
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0,0,0,0.45)",
  color: "#fff",
  width: 36,
  height: 36,
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.65)",
  },
});

export default About;

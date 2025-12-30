import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";

/* ================= WORK NAMES ================= */

const workNames = [
  "Civil Works",
  "Railway Cable Trenching",
  "RCC & Structural Works",
  "S&T Works",
  "OFC Laying & Termination",
  "Electrical & Earthing Works",
  "Track Crossing Works",
  "RCC Chambers & Foundations",
];

/* ================= COMPONENT ================= */

function Works() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <Box
        sx={{
          py: 9,
          background:
            "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Our Works
        </Typography>
        <Typography sx={{ mt: 2, maxWidth: 700, mx: "auto", opacity: 0.9 }}>
          A showcase of our completed and ongoing railway infrastructure
          projects executed with quality and precision.
        </Typography>
      </Box>

      {/* ================= SCROLLING WORK NAMES ================= */}
      <Box
        sx={{
          overflow: "hidden",
          backgroundColor: "#f8fafc",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          style={{
            display: "flex",
            whiteSpace: "nowrap",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...workNames, ...workNames].map((name, index) => (
            <Typography
              key={index}
              sx={{
                px: 4,
                py: 2,
                fontWeight: 600,
                color: "#374151",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              • {name}
            </Typography>
          ))}
        </motion.div>
      </Box>

      {/* ================= WORKS GRID ================= */}
      <AnimateOnScroll>
        <Box sx={{ py: 8, backgroundColor: "#f7f9fc" }}>
          <Container>
            <Grid container spacing={4}>
              {[
                {
                  title: "Railway Cable Trenching",
                  img: "/work-images/works/trenching.jpg",
                  desc: "Railway cable trenching and RCC protection works",
                  path: "/works/civil",
                },
                {
                  title: "OFC Laying & Termination",
                  img: "/work-images/works/ofc.jpg",
                  desc: "OFC laying, jointing and termination projects",
                  path: "/works/st",
                },
                {
                  title: "RCC Chambers & Foundations",
                  img: "/work-images/works/rcc.jpg",
                  desc: "RCC chambers, coil pits and foundations",
                  path: "/works/rcc",
                },
                {
                  title: "Electrical & Earthing Works",
                  img: "/work-images/works/earthing.jpg",
                  desc: "GI earthing, electrical installations & testing",
                  path: "/works/electrical",
                },
              ].map((work) => (
                <Grid item xs={12} sm={6} md={3} key={work.title}>
                  <motion.div whileHover={{ scale: 1.04 }}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: "14px",
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": {
                          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                        },
                      }}
                      onClick={() => navigate(work.path)}
                    >
                      <Box
                        component="img"
                        src={work.img}
                        alt={work.title}
                        sx={{
                          width: "100%",
                          height: 180,
                          objectFit: "cover",
                        }}
                        onError={(e) => (e.target.style.display = "none")}
                      />

                      <CardContent>
                        <Typography fontWeight="bold" gutterBottom>
                          {work.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {work.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </AnimateOnScroll>
    </>
  );
}

export default Works;

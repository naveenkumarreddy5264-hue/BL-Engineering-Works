import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateOnScroll from "../components/AnimateOnScroll";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "70vh", md: "80vh" },
          backgroundImage: "url('/work-images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 60%)",
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box maxWidth="650px">
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.2rem", md: "3.5rem" },
              }}
            >
              BL Engineering Works
            </Typography>

            <Typography sx={{ color: "#e0e0e0", mb: 4 }}>
              Trusted partner for Railway Civil, S&T and Electrical infrastructure
              works delivering quality, safety and reliability.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button component={Link} to="/contact" variant="contained">
                Contact Us
              </Button>
              <Button
                component={Link}
                to="/works"
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
              >
                Our Works
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ================= OUR SERVICES ================= */}
      <AnimateOnScroll>
        <Box sx={{ py: 8, backgroundColor: "#f7f9fc" }}>
          <Container>
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
              Our Services
            </Typography>

            <Typography
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: 650, mx: "auto" }}
            >
              End-to-end railway infrastructure solutions executed with precision.
            </Typography>

            {/* ================= IMAGE AUTO SCROLL (ADDED) ================= */}
            <Box
              sx={{
                overflow: "hidden",
                mb: 6,
                borderTop: "1px solid #e5e7eb",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f8fafc",
              }}
            >
              <motion.div
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                }}
              >
                {[
                  "/work-images/civil/civil1.jpg",
                  "/work-images/rcc/rcc1.jpg",
                  "/work-images/st/st1.jpg",
                  "/work-images/electrical/electrical1.jpg",
                  "/work-images/civil/civil2.jpg",
                  "/work-images/rcc/rcc2.jpg",
                  "/work-images/st/st2.jpg",
                  "/work-images/electrical/electrical2.jpg",
                ]
                  .concat([
                    "/work-images/civil/civil1.jpg",
                    "/work-images/rcc/rcc1.jpg",
                    "/work-images/st/st1.jpg",
                    "/work-images/electrical/electrical1.jpg",
                    "/work-images/civil/civil2.jpg",
                    "/work-images/rcc/rcc2.jpg",
                    "/work-images/st/st2.jpg",
                    "/work-images/electrical/electrical2.jpg",
                  ])
                  .map((img, index) => (
                    <Box
                      key={index}
                      sx={{
                        mx: 2,
                        my: 2,
                        minWidth: 240,
                        height: 160,
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        backgroundColor: "#fff",
                      }}
                    >
                      <Box
                        component="img"
                        src={img}
                        alt="Service Work"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </Box>
                  ))}
              </motion.div>
            </Box>

            {/* ================= SERVICE CARDS (UNCHANGED) ================= */}
            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  title: "Civil Works",
                  img: "/work-images/civil/civil1.jpg",
                  desc: "Trenching, foundations, RCC trenches & crossings",
                  path: "/services/civil",
                },
                {
                  title: "RCC & Structural",
                  img: "/work-images/rcc/rcc1.jpg",
                  desc: "RCC chambers, coil pits & structural foundations",
                  path: "/services/rcc",
                },
                {
                  title: "S&T Works",
                  img: "/work-images/st/st1.jpg",
                  desc: "OFC laying, cable routing & termination",
                  path: "/services/st",
                },
                {
                  title: "Electrical & Earthing",
                  img: "/work-images/electrical/electrical1.jpg",
                  desc: "GI earthing, electrical installations",
                  path: "/services/electrical",
                },
              ].map((service) => (
                <Grid item xs={12} sm={6} md={3} key={service.title}>
                  <motion.div whileHover={{ scale: 1.04 }}>
                    <Card
                      sx={{
                        ...imageCard,
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(service.path)}
                    >
                      <Box
                        component="img"
                        src={service.img}
                        alt={service.title}
                        sx={imageStyle}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                      <CardContent>
                        <Typography fontWeight="bold">
                          {service.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.desc}
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

      {/* ================= WHY CHOOSE US ================= */}
      <AnimateOnScroll>
        <Box sx={{ py: 8 }}>
          <Container>
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
              Why Choose Us
            </Typography>

            <Typography
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: 650, mx: "auto" }}
            >
              Strong focus on quality, safety and timely delivery.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  title: "Experienced Team",
                  img: "/why/experience.jpg",
                  desc: "Skilled manpower with railway project expertise",
                },
                {
                  title: "Quality Standards",
                  img: "/why/quality.jpg",
                  desc: "Strict adherence to railway specifications",
                },
                {
                  title: "Timely Delivery",
                  img: "/why/time.jpg",
                  desc: "Planned execution & on-time completion",
                },
                {
                  title: "Safety First",
                  img: "/why/safety.jpg",
                  desc: "Safety-compliant execution at all sites",
                },
              ].map((item) => (
                <Grid item xs={6} sm={4} md={3} key={item.title}>
                  <motion.div whileHover={{ y: -6 }}>
                    <Card sx={imageCard}>
                      <Box
                        component="img"
                        src={item.img}
                        alt={item.title}
                        sx={imageStyle}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                      <CardContent>
                        <Typography fontWeight="bold">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.desc}
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

      {/* ================= CLIENTS & PARTNERS ================= */}
      <AnimateOnScroll>
        <Box sx={{ py: 8, backgroundColor: "#f8fafc" }}>
          <Container>
            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
              gutterBottom
            >
              Our Clients & Partners
            </Typography>

            <Typography
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
            >
              We have worked with leading organizations in railway and
              infrastructure development.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {[
                { name: "Indian Railways", logo: "/client-logos/indian-railways.png" },
                { name: "IRCON", logo: "/client-logos/ircon.png" },
                { name: "RVNL", logo: "/client-logos/rvnl.png" },
                { name: "L&T", logo: "/client-logos/larsen-toubro.png" },
              ].map((client) => (
                <Grid item xs={6} sm={4} md={3} key={client.name}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      filter: "grayscale(100%)",
                      transition: "0.3s",
                      "&:hover": {
                        filter: "grayscale(0%)",
                        transform: "scale(1.08)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={client.logo}
                      alt={client.name}
                      sx={{ maxWidth: 160 }}
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </AnimateOnScroll>
    </>
  );
}

/* ================= STYLES ================= */

const imageCard = {
  height: "100%",
  borderRadius: "14px",
  overflow: "hidden",
  transition: "0.3s",
  "&:hover": {
    boxShadow: "0 10px 28px rgba(0,0,0,0.15)",
  },
};

const imageStyle = {
  width: "100%",
  height: 160,
  objectFit: "cover",
};

export default Home;

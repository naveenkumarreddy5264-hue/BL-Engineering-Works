import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Stack,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <>
      {/* ================= MAIN FOOTER ================= */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#e5e7eb",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* ================= COMPANY ================= */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                BL Engineering Works
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Trusted partner for Railway Civil, S&T and Electrical
                infrastructure works delivering quality, safety and reliability
                across India.
              </Typography>
            </Grid>

            {/* ================= SERVICES ================= */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Our Services
              </Typography>

              <Stack spacing={1}>
                <Typography variant="body2">Civil & Trenching Works</Typography>
                <Typography variant="body2">RCC & Structural Works</Typography>
                <Typography variant="body2">S&T / OFC Works</Typography>
                <Typography variant="body2">
                  Electrical & Earthing Works
                </Typography>
              </Stack>
            </Grid>

            {/* ================= CONTACT ================= */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contact Us
              </Typography>

              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2">
                    Vetapalem, Andhra Pradesh – 523155
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneIcon fontSize="small" />
                  <Typography variant="body2">
                    +91 88971 35264
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon fontSize="small" />
                  <Link
                    href="mailto:blengineeringworks@gmail.com"
                    underline="hover"
                    color="inherit"
                  >
                    blengineeringworks@gmail.com
                  </Link>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= COPYRIGHT ================= */}
      <Box sx={{ backgroundColor: "#08161d", py: 2 }}>
        <Container maxWidth="lg">
          <Divider sx={{ borderColor: "#263238", mb: 2 }} />
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "#94a3b8" }}
          >
            © {new Date().getFullYear()} BL Engineering Works. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Footer;

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  Stack,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
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
          Contact Us
        </Typography>
        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Get in touch with us for enquiries and project discussions
        </Typography>
      </Box>
      {/* ================= CONTACT SECTION ================= */}
      <Box sx={{ py: 8, backgroundColor: "#f5f7fb" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* ================= LEFT INFO ================= */}
            <Grid item xs={12} md={5}>
              <Card sx={{ height: "100%", borderRadius: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                  >
                    Get In Touch With Us Now!
                  </Typography>

                  <Divider sx={{ mb: 3 }} />

                  <Stack spacing={4}>
                    <Box display="flex" gap={2}>
                      <PhoneIcon color="#203a43" />
                      <Box>
                        <Typography fontWeight="bold">
                          Phone Number
                        </Typography>
                        <Typography>
                          +91 88971 35264
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" gap={2}>
                      <EmailIcon color="#203a43" />
                      <Box>
                        <Typography fontWeight="bold">
                          Email
                        </Typography>
                        <Typography>
                          blengineeringworks@gmail.com
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" gap={2}>
                      <LocationOnIcon color="#203a43" />
                      <Box>
                        <Typography fontWeight="bold">
                          Location
                        </Typography>
                        <Typography>
                          Vetapalem, Andhra Pradesh – 523155
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" gap={2}>
                      <AccessTimeIcon color="#203a43" />
                      <Box>
                        <Typography fontWeight="bold">
                          Working Hours
                        </Typography>
                        <Typography>
                          Monday – Saturday
                          <br />
                          09:00 AM – 06:00 PM
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            {/* ================= RIGHT FORM ================= */}
            <Grid item xs={12} md={7}>
              <Card sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                  >
                    Contact Us
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        required
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Mobile No"
                        required
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email ID"
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{ mt: 2,

                        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                        color: "#e5e7eb",
                        py: 2,
                 }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Contact;

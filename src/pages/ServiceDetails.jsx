import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const serviceData = {
  civil: {
    title: "Civil Works",
    description:
      "Railway civil works including trenching, foundations, RCC trenches, track crossings and related infrastructure.",
  },

  rcc: {
    title: "RCC & Structural Works",
    description:
      "Construction of RCC chambers, coil pits, foundations and structural works as per railway specifications.",
  },

  st: {
    title: "S&T Works",
    description:
      "Signal & Telecommunication works including OFC laying, cable routing, termination and testing.",
  },

  electrical: {
    title: "Electrical & Earthing Works",
    description:
      "Electrical installations, GI & copper earthing systems ensuring safety and compliance.",
  },
};


function ServiceDetails() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return <Typography variant="h5">Service not found</Typography>;
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          {service.title}
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: "800px" }}>
          {service.description}
        </Typography>
      </Container>
    </Box>
  );
}

export default ServiceDetails;

import { Stepper, Step, StepLabel, Box } from "@mui/material";

function OrderStatusStepper({ status }) {
  let steps = [];
  let activeStep = 0;

  // 🔴 REJECTED FLOW
  if (status === "Rejected") {
    steps = ["Placed", "Rejected"];
    activeStep = 1;
  }

  // 🟢 NORMAL FLOW
  else {
    steps = ["Placed", "Approved", "Delivered"];

    if (status === "Placed") activeStep = 0;
    if (status === "Approved") activeStep = 1;
    if (status === "Delivered") activeStep = 2;
  }

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  color: label === "Rejected" ? "error.main" : "inherit",
                  fontWeight: label === status ? "bold" : "normal",
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default OrderStatusStepper;

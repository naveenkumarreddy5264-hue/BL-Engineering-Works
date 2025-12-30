import {
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useLocation, useNavigate } from "react-router-dom";

function OrderSuccess() {
  const { state: order } = useLocation();
  const navigate = useNavigate();

  if (!order) {
    navigate("/items");
    return null;
  }

  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <CheckCircleIcon color="success" sx={{ fontSize: 80, mb: 2 }} />

      <Typography variant="h4" fontWeight="bold">
        Order Placed Successfully
      </Typography>

      <Card sx={{ maxWidth: 450, mx: "auto", mt: 4 }}>
        <CardContent>
          <Typography>Order ID: {order.orderId}</Typography>
          <Typography>Date: {order.date}</Typography>

          <Divider sx={{ my: 2 }} />

          <Typography>Subtotal: ₹ {order.subTotal.toLocaleString()}</Typography>
          <Typography>CGST (9%): ₹ {order.cgst.toFixed(2)}</Typography>
          <Typography>SGST (9%): ₹ {order.sgst.toFixed(2)}</Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" fontWeight="bold">
            Grand Total: ₹ {order.total.toLocaleString()}
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 4 }}>
        <Button variant="contained" onClick={() => navigate("/orders")}>
          View Orders
        </Button>
        <Button variant="outlined" onClick={() => navigate("/items")}>
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
}

export default OrderSuccess;

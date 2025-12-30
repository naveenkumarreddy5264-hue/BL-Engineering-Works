import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../client/CartContext";
import { AuthContext } from "../auth/AuthContext";
import { OrderContext } from "../order/OrderContext";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login", { state: { from: "/checkout" } });
  }, [user, navigate]);

  useEffect(() => {
    if (cartItems.length === 0) navigate("/cart");
  }, [cartItems, navigate]);

  if (!user || cartItems.length === 0) return null;

  // 💰 GST CALCULATION
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const cgst = subTotal * 0.09;
  const sgst = subTotal * 0.09;
  const grandTotal = subTotal + cgst + sgst;

  const handlePlaceOrder = () => {
    const order = {
      orderId: "ORD" + Date.now(),
      items: cartItems,
      subTotal,
      cgst,
      sgst,
      total: grandTotal,
      date: new Date().toLocaleString(),
      status: "Placed",
    };

    addOrder(order);
    clearCart();
    navigate("/order-success", { state: order });
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Checkout
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Order Summary</Typography>
          <Divider sx={{ my: 1 }} />

          {cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>
                {item.name} × {item.quantity}
              </Typography>
              <Typography>
                ₹ {(item.price * item.quantity).toLocaleString()}
              </Typography>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Subtotal</Typography>
            <Typography>₹ {subTotal.toLocaleString()}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>CGST (9%)</Typography>
            <Typography>₹ {cgst.toFixed(2)}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>SGST (9%)</Typography>
            <Typography>₹ {sgst.toFixed(2)}</Typography>
          </Box>

          <Divider sx={{ my: 1 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight="bold">
              Grand Total
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              ₹ {grandTotal.toLocaleString()}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Button
        fullWidth
        size="large"
        variant="contained"
        onClick={handlePlaceOrder}
      >
        Place Order
      </Button>
    </Container>
  );
}

export default Checkout;

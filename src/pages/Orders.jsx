import {
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderStatusStepper from "../components/OrderStatusStepper";

import { OrderContext } from "../order/OrderContext";
import { AuthContext } from "../auth/AuthContext";

function Orders() {
  const { orders } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login", { state: { from: "/orders" } });
  }, [user, navigate]);

  if (!user) return null;

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Your Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography>No orders placed yet.</Typography>
      ) : (
        orders.map((order) => (
          <Card key={order.orderId} sx={{ mb: 3 }}>
            <CardContent>
              <Typography fontWeight="bold">
                Order ID: {order.orderId}
              </Typography>
              <Typography>Date: {order.date}</Typography>

              <Divider sx={{ my: 2 }} />

              {order.items.map((item) => (
                <Box
                  key={item.id}
                  sx={{ display: "flex", justifyContent: "space-between" }}
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

              <Typography>Subtotal: ₹ {order.subTotal.toLocaleString()}</Typography>
              <Typography>CGST (9%): ₹ {order.cgst.toFixed(2)}</Typography>
              <Typography>SGST (9%): ₹ {order.sgst.toFixed(2)}</Typography>

              <Divider sx={{ my: 1 }} />

              <Typography fontWeight="bold">
                Grand Total: ₹ {order.total.toLocaleString()}
              </Typography>

              <OrderStatusStepper status={order.status} />
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Orders;

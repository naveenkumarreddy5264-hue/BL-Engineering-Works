import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { OrderContext } from "../order/OrderContext";
import { AuthContext } from "../auth/AuthContext";

function AdminOrders() {
  const { orders, updateOrderStatus } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "admin") return null;

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Admin – Manage Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography>No orders available</Typography>
      ) : (
        orders.map((order) => (
          <Card key={order.orderId} sx={{ mb: 3 }}>
            <CardContent>
              <Typography fontWeight="bold">
                Order ID: {order.orderId}
              </Typography>
              <Typography>Total: ₹ {order.total}</Typography>
              <Typography>Status: {order.status}</Typography>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {/* APPROVE */}
                {order.status === "Placed" && (
                  <>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() =>
                        updateOrderStatus(order.orderId, "Approved")
                      }
                    >
                      Approve
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() =>
                        updateOrderStatus(order.orderId, "Rejected")
                      }
                    >
                      Reject
                    </Button>
                  </>
                )}

                {/* DELIVER */}
                {order.status === "Approved" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      updateOrderStatus(order.orderId, "Delivered")
                    }
                  >
                    Mark Delivered
                  </Button>
                )}

                {/* REJECTED */}
                {order.status === "Rejected" && (
                  <Typography color="error">
                    Order Rejected ❌
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default AdminOrders;

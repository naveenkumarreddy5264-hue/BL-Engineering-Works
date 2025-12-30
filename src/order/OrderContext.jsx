import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.orderId === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, updateOrderStatus }}
    >
      {children}
    </OrderContext.Provider>
  );
}

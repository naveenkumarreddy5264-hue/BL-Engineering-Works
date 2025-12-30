import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

import Login from "./auth/Login";
import Cart from "./client/Cart";

import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import WorkDetails from "./pages/WorkDetails";
import Items from "./pages/Items";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import ServiceDetails from "./pages/ServiceDetails";

import Admin from "./pages/Admin";
import Dashboard from "./admin/Dashboard";        // ✅ FIX
import AdminOrders from "./admin/AdminOrders";   // ✅ FIX

function App() {
  const darkMode = localStorage.getItem("theme") === "dark";

  return (
    <>
      <AnimatedBackground darkMode={darkMode} />
      <Header />

      <main style={{ padding: "20px" }}>
        <Routes>
          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/orders" element={<AdminOrders />} />

          {/* CLIENT ROUTES */}
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:type" element={<WorkDetails />} />
          <Route path="/items" element={<Items />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

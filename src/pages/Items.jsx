import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Pagination from "@mui/material/Pagination";

import { CartContext } from "../client/CartContext";
import { AuthContext } from "../auth/AuthContext";
import itemsData from "../data/itemsData";

function Items() {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const ITEMS_PER_PAGE = 12;

  const [page, setPage] = useState(1);
  const [quantities, setQuantities] = useState({});
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  /* ✅ FILTER FIRST */
  const filteredItems = itemsData.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  /* ✅ RESET PAGE ON FILTER CHANGE */
  useEffect(() => {
    setPage(1);
  }, [search, category]);

  /* ✅ PAGINATION LOGIC */
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const increaseQty = (id) =>
    setQuantities((p) => ({ ...p, [id]: (p[id] || 1) + 1 }));

  const decreaseQty = (id) =>
    setQuantities((p) => ({
      ...p,
      [id]: p[id] > 1 ? p[id] - 1 : 1,
    }));

  const handleAddToCart = (item) => {
    if (user?.role !== "client") {
      navigate("/login", { state: { from: "/items" } });
      return;
    }

    addToCart({
      ...item,
      quantity: quantities[item.id] || 1,
    });
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Railway Materials Store
      </Typography>

      <TextField
        fullWidth
        placeholder="Search railway items..."
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CATEGORY FILTER */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 4 }}>
        {["All", "Cable", "Earthing", "Duct", "Signal", "Power", "Accessories"].map(
          (cat) => (
            <Button
              key={cat}
              variant={category === cat ? "contained" : "outlined"}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          )
        )}
      </Box>

      <Grid container spacing={4}>
        {paginatedItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                height="160"
                image={item.image}
                onError={(e) =>
                  (e.target.src = "/item-images/no-image.png")
                }
              />

              <CardContent>
                <Typography fontWeight={600} noWrap>
                  {item.name}
                </Typography>
                <Typography variant="h6" color="success.main">
                  ₹ {item.price.toLocaleString()}
                </Typography>
              </CardContent>

              <CardActions sx={{ flexDirection: "column", gap: 1 }}>
                <Box sx={qtyBox}>
                  <Button onClick={() => decreaseQty(item.id)}>
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Typography>
                    {quantities[item.id] || 1}
                  </Typography>
                  <Button onClick={() => increaseQty(item.id)}>
                    <AddIcon fontSize="small" />
                  </Button>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={5}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
            shape="rounded"
          />
        </Box>
      )}
    </Container>
  );
}

const cardStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "14px",
  transition: "0.3s",
  "&:hover": { transform: "translateY(-6px)" },
};

const qtyBox = {
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

export default Items;

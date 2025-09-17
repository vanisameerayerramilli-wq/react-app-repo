import React from "react";
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";

const products = [
  { id: 1, name: "Smart Watch", price: "$99", image: "https://source.unsplash.com/400x300/?watch" },
  { id: 2, name: "Headphones", price: "$149", image: "https://source.unsplash.com/400x300/?headphones" },
  { id: 3, name: "Sneakers", price: "$89", image: "https://source.unsplash.com/400x300/?shoes" },
];

const LandingPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage: "url('https://source.unsplash.com/1600x900/?shopping,ecommerce')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Box sx={{ backgroundColor: "rgba(0,0,0,0.5)", p: 4, borderRadius: 2 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to ShopEase
          </Typography>
          <Typography variant="h6" gutterBottom>
            Discover amazing products at unbeatable prices!
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            Start Shopping
          </Button>
        </Box>
      </Box>

      {/* Featured Products */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6, transform: "translateY(-5px)" } }}>
                <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {product.price}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      {/* <Box sx={{ py: 10, textAlign: "center", background: "linear-gradient(90deg, #1976d2, #2196f3)", color: "white" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Don’t Miss Out!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Sign up now and get exclusive deals on your favorite products.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Join Now
        </Button>
      </Box> */}
    </Box>
  );
};

export default LandingPage;

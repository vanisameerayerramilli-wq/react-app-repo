import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

const products = [
  {
    id: 1,
    title: "Stylish Shoes",
    image: "https://source.unsplash.com/400x300/?shoes,fashion",
  },
  {
    id: 2,
    title: "Trendy Watch",
    image: "https://source.unsplash.com/400x300/?watch,accessories",
  },
  {
    id: 3,
    title: "Modern Backpack",
    image: "https://source.unsplash.com/400x300/?backpack,bag",
  },
  {
    id: 4,
    title: "Smartphone",
    image: "https://source.unsplash.com/400x300/?smartphone,gadgets",
  },
];

const Gallery = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        fontWeight={700}
        color="primary"
      >
        Our Gallery
      </Typography>
      <Grid container spacing={4}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                height="200"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  fontWeight={600}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;

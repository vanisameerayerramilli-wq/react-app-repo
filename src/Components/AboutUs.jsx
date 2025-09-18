import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" paragraph>
          Welcome to ShopEase — your trusted online shopping partner.  
          We bring you high-quality products at unbeatable prices,  
          delivered right to your doorstep.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To provide an exceptional online shopping experience by offering 
                  affordable, trendy, and reliable products to customers worldwide.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To become the most loved and trusted e-commerce platform,  
                  empowering millions of people to shop smarter every day.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Why Choose Us
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We offer fast delivery, secure payments, excellent customer 
                  support, and the latest trends in one seamless shopping experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", mt: 5, py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              ShopEase
            </Typography>
            <Typography variant="body2">
              Your one-stop destination for amazing deals on top products. Shop
              smarter with us.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              display="block"
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              color="inherit"
              underline="hover"
              display="block"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              display="block"
            >
              Contact Us
            </Link>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Customer Service
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">
              FAQ
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Shipping & Returns
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Terms & Conditions
            </Link>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          textAlign="center"
          pt={4}
          mt={3}
          borderTop={1}
          borderColor="rgba(255,255,255,0.2)"
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

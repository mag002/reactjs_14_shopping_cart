import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { ShoppingCart } from "@material-ui/icons";
import { Button, Box, Badge } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="static" className="nav">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Shopping Cart ReactJS 14
        </Typography>
        <Box ml="auto">
          <Button>Home</Button>
          <Button>Products</Button>
          <Button>Cart</Button>

          <IconButton edge="start" color="inherit" aria-label="menu">
            <Badge badgeContent={5} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

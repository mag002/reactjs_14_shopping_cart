import React from "react";
import { Grid, Container } from "@material-ui/core";
import Product from "./Product";

export default function ProductList(props) {
  const { products } = props;
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item md={2} xs={12}>
          <div style={{ backgroundColor: "lightcoral" }}>col-2</div>
        </Grid>
        <Grid item md={10} xs={12}>
          <Grid container spacing={3}>
            {products.map(product => {
              return (
                <Product
                  name={product.name}
                  price={product.price}
                  key={product.id}
                  img={product.img}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

import React, { Component } from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";

export default class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: 0,
        name: "san pham thu 0",
        price: 13,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/82767838-1066698930389230-6581701518972420096-n.jpg?v=1579830522000"
      },
      {
        id: 1,
        name: "san pham thu 1",
        price: 10,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/o1cn01sfxnjk1nptchzm8ie-77341563.jpg?v=1578544551000"
      },
      {
        id: 2,
        name: "san pham thu 2",
        price: 3,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/o1cn01regi8e2b8hxncbzby-3941668294.jpg?v=1578036373000"
      },
      {
        id: 3,
        name: "san pham thu 3",
        price: 17,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/76188704-573162650114911-8538891461192581120-n.jpg?v=1573551725000"
      },
      {
        id: 4,
        name: "san pham thu 4",
        price: 12,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/71854008-1158446411028364-4078206245100584960-n.jpg?v=1570432648000"
      },
      {
        id: 5,
        name: "san pham thu 5",
        price: 14,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/89665665-1574693899352953-4204620975301459968-o.jpg?v=1584088759000"
      },
      {
        id: 6,
        name: "san pham thu 6",
        price: 12,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/gggg.jpg?v=1566381342000"
      },
      {
        id: 7,
        name: "san pham thu 7",
        price: 9,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/48405962-2169723786603280-4476955853584334848-o.jpg?v=1554535833000"
      },
      {
        id: 8,
        name: "san pham thu 8",
        price: 17,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/3e7cd4ef4c2eae70f73f-de0ec9b7-0caf-4496-8fb8-2136d4540aec.jpg?v=1555826198000"
      },
      {
        id: 9,
        name: "san pham thu 9",
        price: 7,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/57649286-2353172948038994-3518302213766119424-n.jpg?v=1555944041000"
      },
      {
        id: 10,
        name: "san pham thu 10",
        price: 16,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/0l6a1592-67f76b2b-615c-43c7-aab1-e49a845a29a0.jpg?v=1554990780000"
      },
      {
        id: 11,
        name: "san pham thu 11",
        price: 1,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/70963776-977908959214433-3507129586490015744-n.jpg?v=1576223909000"
      }
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <ProductList products={this.state.products} />
        {/* //ProductDetail
        //Cart
        //Home */}
        <Footer />
      </div>
    );
  }
}

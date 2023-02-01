import React, { useEffect, useState } from "react";
import Card from "../Card";
import Footer from "../Footer";
import Header from "../Header";

import { Container } from "./styles";
function Home() {
  useEffect(() => {
    const init = async () => {
      const response = await fetch(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      ).then((data) => data.json());
      setProducts(response.products);
    };
    init();
  }, []);

  const [products, setProducts] = useState([]);
  console.log(products);

  return (
    <Container>
      <Header />
      <Card products={products} />
      <Footer />
    </Container>
  );
}

export default Home;

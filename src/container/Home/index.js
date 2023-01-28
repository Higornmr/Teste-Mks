import React from "react";
import Card from "../Card";
import Footer from "../Footer";
import Header from "../Header";
import { Container } from "./styles";
function Home() {
  return (
    <Container>
      <Header />
      <Card />
      <Footer />
    </Container>
  );
}

export default Home;

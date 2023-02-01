import React from "react";
import CardItems from "../../Components/CardItems";
import { Container } from "./styles";

function Card({ products }) {
  return (
    <Container>
      {products.map((item) => (
        <CardItems item={item} />
      ))}
    </Container>
  );
}

export default Card;

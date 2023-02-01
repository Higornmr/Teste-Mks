import React from "react";
import Bag from "../../assets/bag.svg";
import {
  Container,
  Img,
  Information,
  Description,
  IconBag,
  Button,
  Price,
  Name,
  Brand,
  InformationProduct,
} from "./styles";

function CardItems({ item }) {
  return (
    <Container>
      <Img src={item.photo} />
      <Information>
        <InformationProduct>
          <Name>{item.name}</Name>
          <div></div>
          <Brand>{item.brand}</Brand>
        </InformationProduct>
        <Price>
          <h2>{item.price}</h2>
        </Price>
      </Information>

      <Description>
        <p>{item.description}</p>
      </Description>

      <Button>
        <IconBag src={Bag} alt="icone da sacola no botão de compra" />
        <p>COMPRAR</p>
      </Button>
    </Container>
  );
}

export default CardItems;

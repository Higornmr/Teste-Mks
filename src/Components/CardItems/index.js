import React from "react";
import Bag from "../../assets/bag.svg";
import {
  Container,
  Img,
  NameInformation,
  Description,
  IconBag,
  Button,
  Price,
} from "./styles";

function CardItems() {
  return (
    <Container>
      <Img></Img>

      <NameInformation>
        <h3>Nome do produtoproduto</h3>
        <Price>
          <h2>R$ 399</h2>
        </Price>
      </NameInformation>

      <Description>
        <p> Descrição do produtoDescrição do produtoDescrição do produto</p>
      </Description>

      <Button>
        <IconBag src={Bag} alt="icone da sacola no botão de compra" />
        <p>COMPRAR</p>
      </Button>
    </Container>
  );
}

export default CardItems;

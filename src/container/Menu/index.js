import React from "react";

import {
  Container,
  Img,
  ContainerHeader,
  ContainerItem,
  Name,
  Quantity,
  Price,
  Valor,
  Button,
} from "./styles";

function Menu() {
  return (
    <Container>
      <ContainerHeader>
        <h2>Carrinho de Compras</h2>
        <button>X</button>
      </ContainerHeader>
      <ContainerItem>
        <Img></Img>
        <Name>
          <p>Nome do produtoproduto</p>
        </Name>
        <Quantity>
          <button className="left">+</button>
          <p>1</p>
          <button className="right">-</button>
        </Quantity>
        <Price>
          <h2>R$ 399</h2>
        </Price>
      </ContainerItem>
      <Valor>
        <p>Total:</p>
        <p>R$ 800</p>
      </Valor>
      <Button>Finalizar Compra</Button>
    </Container>
  );
}

export default Menu;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 101px;
  width: 100%;
  background: #0f52ba;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: #ffffff;
  gap: 10px;

  h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
  }

  h3 {
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
  }
`;

export const Vector = styled.div`
  width: 90px;
  height: 45px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }
`;

export const Cart = styled.img`
  cursor: pointer;
`;

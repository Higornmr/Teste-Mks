import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  min-width: 40%;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  z-index: 2;
  position: absolute;
  margin-left: 60%;
`;
export const ContainerItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 130px;
  gap: 10px;
  margin-top: 30px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  gap: 8px;
`;

export const Img = styled.img`
  border: 1px solid black;
  width: 80px;
  height: 87px;
`;
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 50px;

  h2 {
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    color: #ffffff;
    width: 200px;
    height: 80px;
  }

  button {
    height: 50px;
    width: 50px;
    background: #000000;
    border-radius: 50%;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 28px;
    line-height: 15px;

    color: #ffffff;
  }
`;

export const Name = styled.div`
  height: 35px;
  width: 113px;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: #2c2c2c;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 55px;
  height: 20px;
  gap: 10px;
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;

  font-weight: 400;
  font-size: 8px;
  line-height: 10px;

  color: #000000;

  button {
    cursor: pointer;
    width: 15px;
    height: 15px;
    background: transparent;
    border: none;
    font-size: 8px;
    line-height: 10px;
    color: #000000;
  }

  .left {
    border-right: 0.2px solid #bfbfbf;
  }

  .right {
    border-left: 0.2px solid #bfbfbf;
  }
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;
export const Valor = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  color: white;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  margin-top: 50px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #000000;

  font-weight: 700;
  font-size: 28px;
  line-height: 15px;

  color: #ffffff;
  cursor: pointer;
`;

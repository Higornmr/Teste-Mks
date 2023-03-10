import styled from "styled-components";

export const Container = styled.div`
  min-height: 380px;
  width: auto;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: grid;
  justify-content: center;
  margin-bottom: 45px;
`;

export const Img = styled.img`
  width: auto;
  height: 180px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
`;

export const InformationProduct = styled.div`
  max-width: 100px;
  margin-top: 5px;

  div {
    width: 100%;
    border: 1px solid #2c2c2c;
  }
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 5px;
  gap: 5px;
`;

export const Name = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
  margin-bottom: 10px;
`;

export const Brand = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
`;
export const Price = styled.div`
  background: #373737;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  min-width: 70px;

  cursor: pointer;

  h2 {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;

    color: #ffffff;
  }
`;
export const Description = styled.div`
  height: 25px;
  width: 100%;
  display: flex;
  padding: 5px;
  margin: 12px 0px;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;

  color: #2c2c2c;
`;

export const IconBag = styled.img``;

export const Button = styled.div`
  display: flex;
  width: 100%;
  min-height: 32px;

  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;

    color: #ffffff;
  }
`;

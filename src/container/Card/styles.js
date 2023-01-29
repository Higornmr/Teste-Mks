import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 72px);
  width: 100%;
  padding: 100px 200px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`;

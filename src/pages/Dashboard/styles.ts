import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: var(--background);
`;

export const CardContainer = styled.div`
  padding: 20px 50px;

  display: grid;
  grid-template-columns: repeat(10, 1fr);

  /* align-items: center;
  justify-content: center; */
  gap: 50px;

  overflow-x: scroll;
`;

export const Card = styled.div`
  flex: 1;
  background-color: #fff;

  width: 300px;
  height: 200px;

  box-shadow: 0px 0px 23px -1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    opacity: 0.5;
    box-shadow: 0px 0px 10px -1px var(--background-purple);
  }
`;

export const IconArea = styled.div``;

export const CardName = styled.div``;

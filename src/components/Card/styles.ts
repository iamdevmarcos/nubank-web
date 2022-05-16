import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #fff;

  width: 250px;
  height: 200px;

  box-shadow: 0px 0px 23px -1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
    box-shadow: 0px 0px 10px -1px var(--background-purple);
  }
`;

export const IconArea = styled.div`
  width: 80px;
  height: 80px;

  background: var(--background);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 25px;
`;

export const CardName = styled.div`
  font-size: 18px;
  text-align: center;
`;

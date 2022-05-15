import styled from "styled-components";

export const Container = styled.div`
  background: var(--background-purple);

  height: 150px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 40px;
  padding: 0px 50px;

  @media (max-width: 1120px) {
    gap: 30px;
  }
`;

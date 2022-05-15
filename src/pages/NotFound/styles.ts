import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: var(--background);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  flex: 1;
  margin: 0;
  padding: 0;

  color: var(--text-color);
  margin-bottom: 40px;
`;

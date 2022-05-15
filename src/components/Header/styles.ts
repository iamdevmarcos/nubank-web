import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 20px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const AboutLink = styled.div`
  &:hover {
    svg {
      color: var(--background-purple);
    }
  }
`;

export const Author = styled.div`
  background: var(--background-secondary);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 240px;
  height: 40px;

  border-radius: 18px;

  &:hover {
    opacity: 0.7;
  }
`;

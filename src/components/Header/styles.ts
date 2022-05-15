import styled from "styled-components";

export const Header = styled.div`
  background: #fff;
  padding: 20px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

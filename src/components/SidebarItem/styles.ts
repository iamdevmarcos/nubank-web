import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #e8e8f0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: var(--background-purple);
    border-radius: 10px;
    color: #fff;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  /* background: red; */
`;

export const RightSide = styled.div``;

export const Title = styled.p``;

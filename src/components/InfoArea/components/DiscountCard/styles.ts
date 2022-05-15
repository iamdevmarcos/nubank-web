import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding: 0px 20px;

  width: 300px;
  height: 90px;

  background: var(--background-secondary);
  color: var(--text-color);

  font-size: 14px;
  text-align: left;
  line-height: 24px;

  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 1120px) {
    width: 200px;

    font-size: 12px;
    line-height: 18px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

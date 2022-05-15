import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 20px;

  width: 300px;
  height: 90px;

  background: var(--background);
  color: var(--text-color);

  font-size: 14px;
  text-align: left;
  line-height: 24px;

  border-radius: 10px;

  @media (max-width: 1120px) {
    width: 200px;

    font-size: 12px;
    line-height: 18px;
  }
`;

export const Flex = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  strong {
    font-size: 20px;
  }
`;

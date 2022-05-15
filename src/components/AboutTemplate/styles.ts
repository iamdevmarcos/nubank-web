import styled from "styled-components";

export const Container = styled.div`
  min-height: var(--height);
  background: var(--background-secondary);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Area = styled.div`
  max-width: 980px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0px 20px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;

  text-align: center;
  font-size: 25px;
  line-height: 40px;
  font-weight: 600;

  margin-top: 30px;
  margin-bottom: 20px;

  a {
    color: var(--background-purple);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const CloseArea = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;

  cursor: pointer;

  &:hover {
    svg {
      color: var(--background-purple);
    }
  }
`;

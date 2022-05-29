import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  background-color: var(--background);
  color: var(--text-color);

  width: 350px;
  height: 100%;

  padding: 40px;

  border-radius: 10px;
  box-shadow: 0px 0px 23px -1px rgba(0, 0, 0, 0.1);
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

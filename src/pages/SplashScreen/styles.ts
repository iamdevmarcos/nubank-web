import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: var(--height);
  background: var(--background);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Start = styled(motion.div)`
  background: var(--background-secondary);
  color: var(--text-color);

  margin-top: 100px;

  width: 300px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: bold;

  border-radius: 22px;
  cursor: pointer;
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: 100vh;
  background: var(--background);
`;

export const CardContainer = styled(motion.div)`
  padding: 20px 50px;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 30px;

  overflow-x: scroll;
`;

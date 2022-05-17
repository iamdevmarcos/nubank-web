import * as S from "./styles";
import { motion } from "framer-motion";

import { AnimatedPage, Card, Header, InfoArea } from "../../components";

import mock from "./mock";

// framer motion variables for animate cards
const parent = {
  show: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const stat = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Dashboard = () => {
  return (
    <AnimatedPage>
      <S.Container>
        <Header />

        <InfoArea />

        <S.CardContainer variants={parent} initial="hidden" animate="show">
          {mock.map((item, index) => (
            <motion.div key={index} variants={stat}>
              <Card {...item} />
            </motion.div>
          ))}
        </S.CardContainer>
      </S.Container>
    </AnimatedPage>
  );
};

export default Dashboard;

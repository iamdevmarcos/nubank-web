import * as S from "./styles";
import { motion } from "framer-motion";

import DiscountCard from "./components/DiscountCard";
import FinancialCard from "./components/FinancialCard";

// framer motion variables
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

const InfoArea = () => (
  <S.Container>
    <S.Flex variants={parent} initial="hidden" animate="show">
      <motion.div variants={stat}>
        <FinancialCard />
      </motion.div>

      <motion.div variants={stat}>
        <DiscountCard>
          <p>
            Veja os descontos que preparamos para voce no{" "}
            <span>Shopping Nubank</span>
          </p>
        </DiscountCard>
      </motion.div>

      <motion.div variants={stat}>
        <DiscountCard>
          <p>
            <span>25% de desconto</span> em empréstimo com portabilidade de
            salário
          </p>
        </DiscountCard>
      </motion.div>
    </S.Flex>
  </S.Container>
);

export default InfoArea;

import * as S from "./styles";

import DiscountCard from "./components/DiscountCard";
import FinancialCard from "./components/FinancialCard";

const InfoArea = () => (
  <S.Container>
    <S.Flex>
      <FinancialCard />

      <DiscountCard>
        <p>
          Veja os descontos que preparamos para voce no{" "}
          <span>Shopping Nubank</span>
        </p>
      </DiscountCard>

      <DiscountCard>
        <p>
          <span>25% de desconto</span> em empréstimo com portabilidade de
          salário
        </p>
      </DiscountCard>
    </S.Flex>
  </S.Container>
);

export default InfoArea;

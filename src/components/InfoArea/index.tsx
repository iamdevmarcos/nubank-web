import * as S from "./styles";

import DiscountCard from "./components/DiscountCard";
import FinancialCard from "./components/FinancialCard";

const InfoArea = () => (
  <S.Container>
    <S.Flex>
      <FinancialCard />

      <DiscountCard>
        Veja os descontos que preparamos para voce no Shopping Nubank
      </DiscountCard>

      <DiscountCard>
        25% de desconto em empréstimo com portabilidade de salário
      </DiscountCard>
    </S.Flex>
  </S.Container>
);

export default InfoArea;

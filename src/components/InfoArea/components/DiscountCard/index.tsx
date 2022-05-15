import * as S from "./styles";

interface DiscountCardProps {
  children: React.ReactElement | string;
}

const DiscountCard = ({ children }: DiscountCardProps) => (
  <S.Container>{children}</S.Container>
);

export default DiscountCard;

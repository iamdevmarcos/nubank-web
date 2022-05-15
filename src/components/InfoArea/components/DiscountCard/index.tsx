import * as S from "./styles";

interface DiscountCardProps {
  children: string;
}

const DiscountCard = ({ children }: DiscountCardProps) => (
  <S.Container>{children}</S.Container>
);

export default DiscountCard;

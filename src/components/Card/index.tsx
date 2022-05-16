import * as S from "./styles";

interface CardProps {
  icon: string;
  title: string;
}

const Card = ({ icon, title }: CardProps) => (
  <S.Container>
    <S.IconArea>
      <img src={`/images/icons/icon-${icon}.svg`} alt={title} />
    </S.IconArea>
    <S.CardName>{title}</S.CardName>
  </S.Container>
);

export default Card;

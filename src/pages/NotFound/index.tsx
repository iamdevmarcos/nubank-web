import * as S from "./styles";

import { ReactComponent as NotFoundIcon } from "../../assets/images/not-found.svg";

const NotFound = () => (
  <S.Container>
    <S.Flex>
      <S.Title>Página não encontrada.</S.Title>
      <NotFoundIcon />
    </S.Flex>
  </S.Container>
);

export default NotFound;

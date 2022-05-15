import * as S from "./styles";
import { ReactComponent as NubankLogo } from "../../assets/images/logo.svg";

const Header = () => (
  <S.Container>
    <NubankLogo />

    <a href="https://github.com/iamdevmarcos" target="_blank" rel="noreferrer">
      <S.Author>@iamdevmarcos</S.Author>
    </a>
  </S.Container>
);

export default Header;
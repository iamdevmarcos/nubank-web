import * as S from "./styles";

import { ReactComponent as NubankLogo } from "../../assets/images/logo.svg";
import { InfoOutline } from "@styled-icons/evaicons-outline";

import { Link } from "react-router-dom";

const Header = () => (
  <S.Container>
    <S.LogoArea>
      <NubankLogo />
    </S.LogoArea>

    <S.Info>
      <a
        href="https://github.com/iamdevmarcos"
        target="_blank"
        rel="noreferrer"
      >
        <S.Author>@iamdevmarcos</S.Author>
      </a>

      <S.AboutLink>
        <Link to="/about">
          <InfoOutline size={32} aria-label="About" />
        </Link>
      </S.AboutLink>
    </S.Info>
  </S.Container>
);

export default Header;

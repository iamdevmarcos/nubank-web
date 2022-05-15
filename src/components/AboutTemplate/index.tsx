import AnimatedPage from "../AnimatedPage";
import { Link } from "react-router-dom";

import * as S from "./styles";

import { ReactComponent as AboutIcon } from "../../assets/images/not-found.svg";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

const AboutTemplate = () => {
  return (
    <AnimatedPage>
      <S.Container>
        <S.CloseArea>
          <Link to="/dashboard">
            <CloseOutline size={40} />
          </Link>
        </S.CloseArea>

        <S.Area>
          <AboutIcon width={500} height={500} />
          <S.Title>
            Olá pessoal, eu sou Marcos Andre e esse é um projeto que eu
            desenvolvi usando <span>React</span> e{" "}
            <span>Styled Components</span>, e mais algumas coisinhas.
            <br />
            <br /> Além de ser um projeto open source, eu também gosto muito
            criar <span>projetos pessoais</span>, você pode ver alguns deles no
            meu{" "}
            <a
              href="https://github.com/iamdevmarcos"
              target="_blank"
              rel="noreferrer"
            >
              GitHub.
            </a>
          </S.Title>
        </S.Area>
      </S.Container>
    </AnimatedPage>
  );
};

export default AboutTemplate;

import * as S from "./styles";

import { AnimatedPage, Card, Header, InfoArea } from "../../components";

import mock from "./mock";

const Dashboard = () => {
  return (
    <AnimatedPage>
      <S.Container>
        <Header />

        <InfoArea />

        <S.CardContainer>
          {mock.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </S.CardContainer>
      </S.Container>
    </AnimatedPage>
  );
};

export default Dashboard;

import * as S from "./styles";

import { AnimatedPage, Header, InfoArea } from "../../components";

const Dashboard = () => {
  return (
    <AnimatedPage>
      <S.Container>
        <Header />

        <InfoArea />
      </S.Container>
    </AnimatedPage>
  );
};

export default Dashboard;

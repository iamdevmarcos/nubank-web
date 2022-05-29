import * as S from "./styles";

const SidebarItem = () => (
  <S.Container>
    <S.LeftSide>
      <img src={`/images/icons/icon-pix.svg`} alt="icon" />

      <S.Title>Me ajuda</S.Title>
    </S.LeftSide>
    <S.RightSide>
      <img src={`/images/icons/icon-click-menu.svg`} alt="icon" />
    </S.RightSide>
  </S.Container>
);

export default SidebarItem;

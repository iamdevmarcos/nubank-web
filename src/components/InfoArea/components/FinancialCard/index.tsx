import { useState } from "react";
import * as S from "./styles";

import { ReactComponent as EyeIcon } from "../../../../assets/images/eye.svg";
import { ReactComponent as EyeSlashIcon } from "../../../../assets/images/eye-slash.svg";

const FinancialCard = () => {
  const [showWallet, setShowWallet] = useState(false);

  return (
    <S.Container>
      <S.Flex>
        <div>
          Conta: <br />
          {showWallet && <strong>R$ 150.356,99</strong>}
          {!showWallet && <strong>************</strong>}
        </div>
        <div
          onClick={() => setShowWallet((prevState) => !prevState)}
          className="EyeIcon"
        >
          {!showWallet && <EyeIcon />}
          {showWallet && <EyeSlashIcon />}
        </div>
      </S.Flex>
    </S.Container>
  );
};

export default FinancialCard;

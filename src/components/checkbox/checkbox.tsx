import React, { useState } from "react";
import { Wrapper } from "./checkboxStyle";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  id: string;
};

export const CheckBox: React.FC<Props> = ({ id }) => {
  const [onCheck, setOnCheck] = useState<boolean>(false);

  const handleClick = (): void => {
    setOnCheck(!onCheck);
  };

  return (
    <Wrapper active={onCheck} onClick={handleClick}>
      <AiOutlineCheck className="check-icon" />
    </Wrapper>
  );
};

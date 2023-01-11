import React, { useState } from "react";
import { Wrapper } from "./checkboxStyle";
import { AiOutlineCheck } from "react-icons/ai";
export const CheckBox: React.FC = () => {
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

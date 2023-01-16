import React, { useState } from "react";
import { Wrapper } from "./morebtnStyle";
import { AiOutlineMore } from "react-icons/ai";
import { MoreBtnModal } from "./morebtnModal";

interface Props {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

export const MoreBtn: React.FC<Props> = ({ edit, setEdit, id }) => {
  const [moreModal, setMoreModal] = useState(true);

  const handleModal = (): void => {
    setMoreModal(!moreModal);
  };

  return (
    <Wrapper>
      <AiOutlineMore className="more-icon" onClick={handleModal} />
      {moreModal ? (
        <MoreBtnModal edit={edit} setEdit={setEdit} id={id} />
      ) : null}
    </Wrapper>
  );
};

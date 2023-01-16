import React, { useEffect } from "react";
import { ModalWrapper } from "./morebtnStyle";
import { FiDelete } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";

interface Props {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}
export const MoreBtnModal: React.FC<Props> = ({ edit, setEdit, id }) => {
  const handleEdit = (): void => {
    if (id) {
      setEdit(!edit);
    }
  };

  useEffect(() => {}, [edit]);

  return (
    <ModalWrapper>
      <div className="row">
        <FiDelete />
      </div>
      <div className="row" onClick={handleEdit}>
        <AiOutlineEdit />
      </div>
    </ModalWrapper>
  );
};

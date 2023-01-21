import React, { useEffect } from "react";
import { ModalWrapper } from "./style";
import { FiDelete } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { Props } from "./types";

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

import React, { useEffect } from "react";
import { ModalWrapper } from "./style";
import { FiDelete } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { Props } from "./types";

export const MoreBtnModal: React.FC<Props> = ({
  edit,
  setEdit,
  id,
  todoList,
  setTodoList,
}) => {
  const handleEdit = (): void => {
    if (id) {
      setEdit(!edit);
    }
  };

  const removeTask = (id: string): void => {
    let newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  useEffect(() => {}, [edit]);

  return (
    <ModalWrapper>
      <div className="row" onClick={() => removeTask(id)}>
        <FiDelete />
      </div>
      <div className="row" onClick={handleEdit}>
        <AiOutlineEdit />
      </div>
    </ModalWrapper>
  );
};

import React, { useEffect, useRef } from "react";
import { ModalWrapper } from "./style";
import { ModalProps } from "./types";

export const MoreBtnModal: React.FC<ModalProps> = ({
  edit,
  setEdit,
  id,
  todoList,
  setTodoList,
  moreModal,
  setMoreModal,
}) => {
  let modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const handleEdit = (): void => {
    setEdit(!edit);
  };

  const removeTask = (id: string): void => {
    let newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  useEffect(() => {}, [edit]);

  useEffect(() => {
    let clickModal = (e: any) => {
      if (moreModal && !modalRef.current.contains(e.target)) {
        setMoreModal(false);
      }
    };
    document.addEventListener("mousedown", clickModal);

    return () => document.removeEventListener("mousedown", clickModal);
  }, []);

  return (
    <ModalWrapper ref={modalRef}>
      <div className="row" onClick={() => removeTask(id)}>
        Delete
      </div>
      <div className="row">Comment</div>
      <div className="row" onClick={handleEdit}>
        Edit
      </div>
    </ModalWrapper>
  );
};

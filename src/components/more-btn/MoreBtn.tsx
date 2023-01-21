import React, { useState } from "react";
import { Wrapper } from "./style";
import { AiOutlineMore } from "react-icons/ai";
import { MoreBtnModal } from "./MoreBtnModal";
import { Props } from "./types";

export const MoreBtn: React.FC<Props> = ({
  edit,
  setEdit,
  id,
  todoList,
  setTodoList,
}) => {
  const [moreModal, setMoreModal] = useState(false);
  const handleModal = (): void => {
    setMoreModal(!moreModal);
  };

  return (
    <Wrapper>
      <AiOutlineMore className="more-icon" onClick={handleModal} />
      {moreModal ? (
        <MoreBtnModal
          edit={edit}
          setEdit={setEdit}
          id={id}
          todoList={todoList}
          setTodoList={setTodoList}
          setMoreModal={setMoreModal}
          moreModal={moreModal}
        />
      ) : null}
    </Wrapper>
  );
};

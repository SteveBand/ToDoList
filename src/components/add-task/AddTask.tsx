import React from "react";
import { AddTaskWrapper } from "./style";
import { Props } from "./types";

export const AddTask: React.FC<Props> = ({ activeModal, setActiveModal }) => {
  const handleModal = (): void => {
    setActiveModal(true);
  };
  return (
    <AddTaskWrapper>
      <button onClick={handleModal}>Add Task</button>
    </AddTaskWrapper>
  );
};

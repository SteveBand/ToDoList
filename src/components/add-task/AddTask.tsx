import React from "react";
import { AddTaskWrapper } from "./addtaskStyle";
import { Props } from "./addtaskTypes";

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

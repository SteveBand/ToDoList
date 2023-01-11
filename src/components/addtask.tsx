import React from "react";
import { AddTaskWrapper } from "../styles/addtaskStyle";

interface Props {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

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

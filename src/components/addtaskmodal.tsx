import React, { useEffect, useRef } from "react";
import { ModalWrapper } from "../styles/addtaskStyle";
import { BiCalendar, BiUser } from "react-icons/bi";
import { click } from "@testing-library/user-event/dist/click";

interface Props {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddTaskModal: React.FC<Props> = ({
  activeModal,
  setActiveModal,
}) => {
  let modalRef = useRef<React.RefObject<HTMLElement> | any>();

  useEffect(() => {
    let clickModal = (e: any) => {
      if (!modalRef.current.contains(e.target)) {
        setActiveModal(false);
      }
    };

    document.addEventListener("click", clickModal);
  }, [activeModal]);
  return (
    <ModalWrapper ref={modalRef}>
      <article className="inputs">
        <input className="title" placeholder="Task name here..."></input>
        <input className="description" placeholder="Description"></input>
      </article>
      <footer>
        <article className="left">
          <button className="btn">
            <BiCalendar className="btn-icon" />
            Due Date
          </button>
          <button className="btn">
            <BiUser className="btn-icon" />
            Assign To
          </button>
        </article>
        <article className="right">
          <button className="btn">Cancel</button>
          <button className="task-btn">Add Task</button>
        </article>
      </footer>
    </ModalWrapper>
  );
};

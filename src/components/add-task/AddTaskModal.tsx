import React, { useEffect, useRef, useState } from "react";
import { ModalWrapper } from "./addtaskStyle";
import { BiCalendar, BiUser } from "react-icons/bi";
import { List } from "../todo/todocontainer";
import { formmatedDate } from "../../utils/dateformat";
import { nanoid } from "nanoid";

interface Props {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
  todoList: List;
}

export const AddTaskModal: React.FC<Props> = ({
  activeModal,
  setActiveModal,
  setTodoList,
  todoList,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>();
  let modalRef = useRef<React.RefObject<HTMLElement> | any>();

  const handleSubmit = async () => {
    let newTodo = {
      title: title,
      description: description,
      date: formmatedDate(),
      completed: false,
      id: `${title}${nanoid()}`,
    };
    setTodoList((list) => [newTodo, ...list]);
  };

  useEffect(() => {
    let clickModal = (e: any) => {
      if (activeModal && !modalRef.current.contains(e.target)) {
        setActiveModal(false);
      }
    };
    document.addEventListener("mousedown", clickModal);

    return () => document.removeEventListener("mousedown", clickModal);
  }, []);

  useEffect(() => {}, [title, description, date]);

  return (
    <ModalWrapper ref={modalRef}>
      <article className="inputs">
        <input
          className="title"
          placeholder="Task name here..."
          onChange={(e) =>
            setTitle((): string => {
              return e.target.value;
            })
          }></input>
        <input
          className="description"
          placeholder="Description"
          onChange={(e) => {
            setDescription((): string => {
              return e.target.value;
            });
          }}></input>
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
          <button className="task-btn" onClick={handleSubmit}>
            Add Task
          </button>
        </article>
      </footer>
    </ModalWrapper>
  );
};

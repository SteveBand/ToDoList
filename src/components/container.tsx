import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/containerStyle";
import { AddTask } from "./addtask/addtask";
import { AddTaskModal } from "./addtask/addtaskmodal";
import { NavBar } from "./navbar";
import { Todo, List } from "./todo";
export const Container: React.FC = () => {
  const [todoContainer, setTodoContainer] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<List>([]);
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <NavBar setTodoContainer={setTodoContainer} setNotifications={setNotifications} setCompleted={setCompleted} />
      {todoContainer ? (
        <Todo todoList={todoList} setTodoList={setTodoList} />
      ) : null}
      <AddTask activeModal={activeModal} setActiveModal={setActiveModal} />
      {activeModal ? (
        <AddTaskModal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          setTodoList={setTodoList}
          todoList={todoList}
        />
      ) : null}
    </Wrapper>
  );
};

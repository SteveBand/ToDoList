import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/containerStyle";
import { AddTask } from "./addtask";
import { AddTaskModal } from "./addtaskmodal";
import { NavBar } from "./navbar";
import { Todo, List } from "./todo";
export const Container: React.FC = () => {
  const [todoList, setTodoList] = useState<List>([]);
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <NavBar />
      <Todo todoList={todoList} setTodoList={setTodoList} />
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

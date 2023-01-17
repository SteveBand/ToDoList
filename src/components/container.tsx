import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/containerStyle";
import { AddTask } from "./addtask/addtask";
import { AddTaskModal } from "./addtask/addtaskmodal";
import { CompletedContainer } from "./completed/completed";
import { NavBar } from "./navbar";
import { Todo, List } from "./todocontainer";
export const Container: React.FC = () => {
  const [todoContainer, setTodoContainer] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<List>([]);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [completedTasks, setCompletedTasks] = useState<List>([]);

  return (
    <Wrapper>
      <NavBar
        setTodoContainer={setTodoContainer}
        setNotifications={setNotifications}
        setCompleted={setCompleted}
        notifications={notifications}
        completed={completed}
        todoContainer={todoContainer}
      />
      {todoContainer ? (
        <Todo todoList={todoList} setTodoList={setTodoList} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
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
      {completed ? <CompletedContainer completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} /> : null}
    </Wrapper>
  );
};

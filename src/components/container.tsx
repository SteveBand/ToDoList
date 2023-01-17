import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/containerStyle";
import { AddTask } from "./add-task/AddTask";
import { AddTaskModal } from "./add-task/AddTaskModal";
import { CompletedTasks } from "./completed/CompletedTasks";
import { NavBar } from "./Navbar";
import { Todo, List } from "./todo/todocontainer";
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
        todoList={todoList}
      />
      {todoContainer ? (
        <Todo
          todoList={todoList}
          setTodoList={setTodoList}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
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
      {completed ? (
        <CompletedTasks
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      ) : null}
    </Wrapper>
  );
};

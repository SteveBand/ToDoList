import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/containerStyle";
import { AddTask } from "./add-task/AddTask";
import { AddTaskModal } from "./add-task/AddTaskModal";
import { CompletedTasks } from "./completed/CompletedTasks";
import { NavBar } from "./Navbar";
import { Todo } from "./todo/todocontainer";
import { List } from "../globalTypes";
export const Container: React.FC = () => {
  const [todoContainer, setTodoContainer] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<List>([]);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [completedTasks, setCompletedTasks] = useState<List>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {}, [completedTasks]);
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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {todoContainer ? (
        <Todo
          todoList={todoList}
          setTodoList={setTodoList}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ) : null}
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
          currentPage={currentPage}
          todoList={todoList}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
      <AddTask activeModal={activeModal} setActiveModal={setActiveModal} />
    </Wrapper>
  );
};

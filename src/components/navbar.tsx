import React from "react";
import {
  NavConatiner,
  Notifications,
  Todo,
  Completed,
} from "../styles/containerStyle";
import { NavProps } from "../globalTypes";

export const NavBar: React.FC<NavProps> = ({
  setNotifications,
  setCompleted,
  setTodoContainer,
  notifications,
  completed,
  todoContainer,
  todoList,
  currentPage,
  setCurrentPage,
}) => {
  const handleNotifications = (): void => {
    setTodoContainer(false);
    setCompleted(false);
    setNotifications(true);
    setCurrentPage(1);
  };

  const handleTodo = (): void => {
    setNotifications(false);
    setCompleted(false);
    setTodoContainer(true);
    setCurrentPage(1);
  };

  const handleCompleted = (): void => {
    setNotifications(false);
    setTodoContainer(false);
    setCompleted(true);
    setCurrentPage(1);
  };

  return (
    <NavConatiner>
      <article>
        <Notifications active={notifications} onClick={handleNotifications}>
          <p>Notifications</p>
        </Notifications>
        <Todo active={todoContainer} onClick={handleTodo}>
          <div className="content">
            <p>Todo</p>
            {todoList.length > 0 ? (
              <div className="num">{todoList.length}</div>
            ) : null}
          </div>
        </Todo>
        <Completed active={completed} onClick={handleCompleted}>
          <p>Completed Tasks</p>
        </Completed>
      </article>
    </NavConatiner>
  );
};

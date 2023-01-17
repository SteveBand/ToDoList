import React, { useState } from "react";
import {
  NavConatiner,
  Notifications,
  Todo,
  Completed,
} from "../styles/containerStyle";
import { List } from "./todo/todocontainer";

interface Props {
  setNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoContainer: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: boolean;
  completed: boolean;
  todoContainer: boolean;
  todoList: List;
}

export const NavBar: React.FC<Props> = ({
  setNotifications,
  setCompleted,
  setTodoContainer,
  notifications,
  completed,
  todoContainer,
  todoList,
}) => {
  const handleNotifications = (): void => {
    setTodoContainer(false);
    setCompleted(false);
    setNotifications(true);
  };

  const handleTodo = (): void => {
    setNotifications(false);
    setCompleted(false);
    setTodoContainer(true);
  };

  const handleCompleted = (): void => {
    setNotifications(false);
    setTodoContainer(false);
    setCompleted(true);
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

import React, { useState } from "react";
import {
  NavConatiner,
  Notifications,
  Todo,
  Completed,
} from "../styles/containerStyle";

interface Props {
  setNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoContainer: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: boolean;
  completed: boolean;
  todoContainer: boolean;
}

export const NavBar: React.FC<Props> = ({
  setNotifications,
  setCompleted,
  setTodoContainer,
  notifications,
  completed,
  todoContainer,
}) => {
  // const [notificationsActive, setNotificationsActive] = useState<boolean>(true);
  // const [todoActive, setToDoActive] = useState<boolean>(false);
  // const [completedActive, setCompletedActive] = useState<boolean>(false);

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
          <p>Todo</p>
        </Todo>
        <Completed active={completed} onClick={handleCompleted}>
          <p>Completed Tasks</p>
        </Completed>
      </article>
    </NavConatiner>
  );
};

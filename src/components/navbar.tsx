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
}

export const NavBar: React.FC<Props> = ({
  setNotifications,
  setCompleted,
  setTodoContainer,
}) => {
  const [notificationsActive, setNotificationsActive] = useState<boolean>(true);
  const [todoActive, setToDoActive] = useState<boolean>(false);
  const [completedActive, setCompletedActive] = useState<boolean>(false);

  const handleNotifications = (): void => {
    setToDoActive(false);
    setCompletedActive(false);
    setNotificationsActive(true);
  };

  const handleTodo = (): void => {
    setNotificationsActive(false);
    setCompletedActive(false);
    setToDoActive(true);
  };

  const handleCompleted = (): void => {
    setNotificationsActive(false);
    setToDoActive(false);
    setCompletedActive(true);
  };

  return (
    <NavConatiner>
      <article>
        <Notifications
          active={notificationsActive}
          onClick={handleNotifications}>
          <p>Notifications</p>
        </Notifications>
        <Todo active={todoActive} onClick={handleTodo}>
          <p>Todo</p>
        </Todo>
        <Completed active={completedActive} onClick={handleCompleted}>
          <p>Completed Tasks</p>
        </Completed>
      </article>
    </NavConatiner>
  );
};

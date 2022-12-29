import React, { useState } from "react";
import { NavConatiner, Notifications, Todo } from "../styles/containerStyle";

export const NavBar: React.FC = () => {
  const [notificationsActive, setNotificationsActive] = useState<boolean>(true);
  const [todoActive, setToDoActive] = useState<boolean>(false);
    
    const handleNotifications = (): void => {
        setToDoActive((active) => !active);
        setNotificationsActive((active) => !active)
    }

    const handleTodo = (): void => {
        setNotificationsActive((active) => !active)
        setToDoActive((active) => !active);
    }

    
  return (
    <NavConatiner>
      <article>
        <Notifications active={notificationsActive} onClick={handleNotifications}>
          <p>Notifications</p>
        </Notifications>
        <Todo active={todoActive} onClick={handleTodo}>
          <p>Todo</p>
        </Todo>
      </article>
    </NavConatiner>
  );
};

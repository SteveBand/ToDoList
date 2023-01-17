import React, { useEffect, useState } from "react";
import { Container } from "./todoStyle";
import { TodoRow } from "./todo-row/TodoRow";
export type List = {
  title: string;
  description: string | undefined;
  date: string | undefined;
  AssignedTo?: string;
  completed: boolean;
  id: string;
}[];

interface Props {
  todoList: List;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
  setCompletedTasks: React.Dispatch<React.SetStateAction<List>>;
  completedTasks: List;
}

export const Todo: React.FC<Props> = ({
  todoList,
  setTodoList,
  completedTasks,
  setCompletedTasks,
}) => {
  useEffect(() => {}, [todoList]);
  return (
    <Container>
      {todoList.map((item) => {
        return (
          <TodoRow
            todoList={todoList}
            setTodoList={setTodoList}
            item={item}
            key={item.id}
            completedTasks={completedTasks}
            setCompletedTasks={setCompletedTasks}
          />
        );
      })}
    </Container>
  );
};

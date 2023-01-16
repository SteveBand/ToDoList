import React, { useEffect, useState } from "react";
import { Container } from "../styles/todoStyle";
import { TodoRow } from "./todorow/todorow";
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
}

export const Todo: React.FC<Props> = ({ todoList, setTodoList }) => {
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
          />
        );
      })}
    </Container>
  );
};

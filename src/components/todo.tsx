import React, { useState } from "react";
import { Container, TodoRow } from "../styles/todoStyle";

export type List = {
  title: string;
  description: string;
  date: string | number;
  AssignedTo?: string;
  completed: boolean;
}[];

interface Props {
  todoList: List;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
}

export const Todo: React.FC<Props> = ({ todoList, setTodoList }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<number>(Date.now());

  const handleSubmit = (): void => {
    let newTodo = {
      title: title,
      description: description,
      date: date,
      completed: false,
    };

    setTodoList((list) => [newTodo, ...list]);
  };

  return (
    <Container>
      <TodoRow>
        {todoList.map((item) => {
          const { title, description, date, completed } = item;
          return <div></div>;
        })}
      </TodoRow>
    </Container>
  );
};

import React, { useEffect, useState } from "react";
import { Wrapper } from "./checkboxStyle";
import { AiOutlineCheck } from "react-icons/ai";
import { List } from "../todo/todocontainer";
import { SingleObject } from "../todo/todo-row/TodoRow";

type Props = {
  id: string;
  setCompletedTasks: React.Dispatch<React.SetStateAction<List>>;
  completedTasks: List;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
  todoList: List;
  item: SingleObject;
};

export const CheckBox: React.FC<Props> = ({
  id,
  completedTasks,
  setCompletedTasks,
  setTodoList,
  todoList,
  item,
}) => {
  const [onCheck, setOnCheck] = useState<boolean>(false);

  const handleClick = (): void => {
    const index = todoList.findIndex((n) => n === item);
    let newCompletedArray = completedTasks;
    let slicedTask = todoList.slice(index, index + 1);
    newCompletedArray = [...slicedTask, ...completedTasks];
    let newTodoList = todoList;
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    setCompletedTasks(newCompletedArray);
    setOnCheck(!onCheck);
  };

  useEffect(() => {}, [completedTasks]);
  //console.log(completedTasks);
  //console.log(todoList);
  return (
    <Wrapper active={onCheck} onClick={handleClick}>
      <AiOutlineCheck className="check-icon" />
    </Wrapper>
  );
};

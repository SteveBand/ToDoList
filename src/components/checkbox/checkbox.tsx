import React, { useState } from "react";
import { Wrapper } from "./checkboxStyle";
import { AiOutlineCheck } from "react-icons/ai";
import { Props } from "./checkboxTypes";
import { SingleObject } from "../../globalTypes";

export const CheckBox: React.FC<Props> = ({
  completedTasks,
  setCompletedTasks,
  setTodoList,
  item,
  newArr,
  todoList,
}) => {
  const [onCheck, setOnCheck] = useState<boolean>(false);

  const handleClick = (): void => {
    const mainIndex = todoList.findIndex((n: SingleObject) => n === item);
    const pageIndex = newArr.findIndex((n: SingleObject) => n === item);
    let newCompletedArray = completedTasks;
    let slicedTask = todoList.slice(mainIndex, mainIndex + 1);
    newCompletedArray = [...slicedTask, ...completedTasks];
    newArr.splice(pageIndex, 1);
    let newTodoList = todoList;
    newTodoList.splice(mainIndex, 1);
    setTodoList(newTodoList);
    setCompletedTasks(newCompletedArray);
    setOnCheck(!onCheck);
  };

  return (
    <Wrapper active={onCheck} onClick={handleClick}>
      <AiOutlineCheck className="check-icon" />
    </Wrapper>
  );
};

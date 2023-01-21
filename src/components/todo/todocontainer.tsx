import React, { useEffect, useMemo } from "react";
import { Container } from "./style";
import { TodoRow } from "./todo-row/TodoRow";
import { Pages } from "../pages/Pages";
import { List } from "../../globalTypes";
import { Props } from "./types";

export const Todo: React.FC<Props> = ({
  todoList,
  setTodoList,
  completedTasks,
  setCompletedTasks,
  currentPage,
  setCurrentPage,
}) => {
  let newArr: List = useMemo(() => {
    return todoList.slice(currentPage * 3 - 3, currentPage * 3);
  }, [currentPage, todoList, completedTasks]);

  return (
    <Container>
      {newArr.map((item) => {
        return (
          <TodoRow
            todoList={todoList}
            setTodoList={setTodoList}
            item={item}
            key={item.id}
            completedTasks={completedTasks}
            setCompletedTasks={setCompletedTasks}
            newArr={newArr}
          />
        );
      })}
      <Pages
        todoList={todoList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setDiffNum={3}
        list={todoList}
        secondList={completedTasks}
      />
    </Container>
  );
};

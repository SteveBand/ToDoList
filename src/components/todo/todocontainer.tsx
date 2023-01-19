import React, { useMemo } from "react";
import { Container } from "./todoStyle";
import { TodoRow } from "./todo-row/TodoRow";
import { Pages } from "../pages/Pages";
import { List } from "../../globalTypes";
import { Props } from "./todoTypes";

export const Todo: React.FC<Props> = ({
  todoList,
  setTodoList,
  completedTasks,
  setCompletedTasks,
  currentPage,
  setCurrentPage,
}) => {
  const newArr: List = useMemo(() => {
    return todoList.slice(currentPage * 3 - 3, currentPage * 3);
  }, [currentPage, todoList]);

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
      />
    </Container>
  );
};

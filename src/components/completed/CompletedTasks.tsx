import React, { useMemo } from "react";
import { CompleteWrapper } from "./completedStyle";
import { CompletedSingleTask } from "./CompletedSingleTask";
import { Pages } from "../pages/Pages";
import { Props } from "./completedTasksTypes";

export const CompletedTasks: React.FC<Props> = ({
  completedTasks,
  todoList,
  currentPage,
  setCurrentPage,
}) => {
  const newArr = useMemo(() => {
    return completedTasks.slice(currentPage * 6 - 6, currentPage * 6);
  }, [currentPage, completedTasks]);

  return (
    <CompleteWrapper>
      {newArr.map((item) => {
        return <CompletedSingleTask item={item} key={item.id} />;
      })}
      <Pages
        todoList={todoList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setDiffNum={6}
        list={completedTasks}
      />
    </CompleteWrapper>
  );
};

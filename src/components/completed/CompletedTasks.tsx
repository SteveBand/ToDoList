import React, { useState, useEffect } from "react";
import { CompleteWrapper } from "./completedStyle";
import { List } from "../todo/todocontainer";
import { CompletedSingleTask } from "./CompletedSingleTask";
interface Props {
  setCompletedTasks: React.Dispatch<React.SetStateAction<List>>;
  completedTasks: List;
}

export const CompletedTasks: React.FC<Props> = ({
  completedTasks,
  setCompletedTasks,
}) => {
  return (
    <CompleteWrapper>
      {completedTasks.map((item) => {
        return <CompletedSingleTask item={item} />;
      })}
    </CompleteWrapper>
  );
};

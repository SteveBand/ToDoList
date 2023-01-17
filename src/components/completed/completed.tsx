import React, { useState, useEffect } from "react";
import { CompleteWrapper } from "./completedStyle";
import { List } from "../todocontainer";
interface Props {
  setCompletedTasks: React.Dispatch<React.SetStateAction<List>>;
  completedTasks: List;
}

export const CompletedContainer: React.FC<Props> = ({
  completedTasks,
  setCompletedTasks,
}) => {
  return <CompleteWrapper></CompleteWrapper>;
};

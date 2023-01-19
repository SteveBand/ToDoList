import { SingleObject } from "../../globalTypes";
import { List } from "../../globalTypes";
export interface SingleTaskProps {
  item: SingleObject;
}

export interface Props {
  setCompletedTasks: React.Dispatch<React.SetStateAction<List>>;
  completedTasks: List;
  todoList: List;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

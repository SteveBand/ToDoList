import { List } from "../../globalTypes";
import { SingleObject } from "../../globalTypes";

export interface Props {
  todoList: List;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
  setCompletedTasks: React.Dispatch<React.SetStateAction<List>>;
  completedTasks: List;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

export type SingleRowProps = {
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
  todoList: List;
  item: SingleObject;
  setCompletedTasks: React.Dispatch<React.SetStateAction<List>>;
  completedTasks: List;
  newArr: List;
};

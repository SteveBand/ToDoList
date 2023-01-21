import { List } from "../../globalTypes";
import { SingleObject } from "../../globalTypes";

export type Props = {
  id: string;
  setCompletedTasks: React.Dispatch<React.SetStateAction<List>>;
  completedTasks: List;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
  todoList: List;
  item: SingleObject;
  newArr: List;
};

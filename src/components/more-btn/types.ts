import { List } from "../../globalTypes";

export interface Props {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  todoList: List;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
}

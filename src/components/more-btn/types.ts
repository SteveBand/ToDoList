import { List } from "../../globalTypes";

export interface Props {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  todoList: List;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
}

export interface ModalProps {
  moreModal: boolean;
  setMoreModal: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  todoList: List;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
}

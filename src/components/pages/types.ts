import { List } from "../../globalTypes";

export interface Props {
  todoList: List;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setDiffNum: number;
  list: List;
  secondList?: List;
}

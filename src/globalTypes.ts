export type List = {
  title: string;
  description: string | undefined;
  date: string | undefined;
  AssignedTo?: string;
  completed: boolean;
  id: string;
}[];

export interface SingleObject {
  title: string;
  description: string | undefined;
  date: string | undefined;
  AssignedTo?: string;
  completed: boolean;
  id: string;
}

export interface NavProps {
  setNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoContainer: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: boolean;
  completed: boolean;
  todoContainer: boolean;
  todoList: List;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

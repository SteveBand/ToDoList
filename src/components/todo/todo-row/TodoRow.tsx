import React, { useEffect, useState } from "react";
import { CheckBox } from "../../checkbox/Checkbox";
import { MoreBtn } from "../../more-btn/MoreBtn";
import { RowWrapper } from "./todorowStyle";
import { List } from "../todocontainer";
import { BiCalendar, BiUser } from "react-icons/bi";

export interface SingleObject {
  title: string;
  description: string | undefined;
  date: string | undefined;
  AssignedTo?: string;
  completed: boolean;
  id: string;
}

type Props = {
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
  todoList: List;
  item: SingleObject;
  setCompletedTasks: React.Dispatch<React.SetStateAction<List>>;
  completedTasks: List;
};

export const TodoRow: React.FC<Props> = ({
  item,
  todoList,
  setTodoList,
  completedTasks,
  setCompletedTasks,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [write, setWrite] = useState<string>("");

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      let newRow = {
        title: write,
        description: item.description,
        date: item.date,
        AssignedTo: item.AssignedTo,
        completed: item.completed,
        id: item.id,
      };
      let newList = [...todoList];
      let index = todoList.findIndex((n) => n === item);
      newList.splice(index, 1, newRow);
      setTodoList(newList);
      setEdit(false);
    }
  };

  useEffect(() => {}, [write]);
  return (
    <RowWrapper>
      <CheckBox
        id={item.id}
        setCompletedTasks={setCompletedTasks}
        completedTasks={completedTasks}
        setTodoList={setTodoList}
        todoList={todoList}
        item={item}
      />
      <MoreBtn edit={edit} setEdit={setEdit} id={item.id} />
      <section className="content">
        <article>
          {edit ? (
            <input
              type="text"
              className="title-input"
              value={write}
              onChange={(e) => setWrite(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e)}
            />
          ) : (
            <div className="title">{item.title}</div>
          )}
          <div className="description">{item.description}</div>
        </article>
        <footer>
          <div className="date">
            <BiCalendar className="icon" />
            {item.date}
          </div>
          <div className="person-assigned">
            <BiUser className="icon" />
            Denis polupan
          </div>
        </footer>
      </section>
    </RowWrapper>
  );
};

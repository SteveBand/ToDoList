import React, { useState } from "react";
import { CheckBox } from "../../checkbox/Checkbox";
import { MoreBtn } from "../../more-btn/MoreBtn";
import { RowWrapper } from "./style";
import { BiCalendar, BiUser } from "react-icons/bi";
import { SingleRowProps } from "../types";

export const TodoRow: React.FC<SingleRowProps> = ({
  item,
  todoList,
  setTodoList,
  completedTasks,
  setCompletedTasks,
  newArr,
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
      let newList = [...newArr];
      let index = newArr.findIndex((n) => n === item);
      newList.splice(index, 1, newRow);
      setTodoList(newList);
      setEdit(false);
    }
  };
  return (
    <RowWrapper>
      <CheckBox
        id={item.id}
        setCompletedTasks={setCompletedTasks}
        completedTasks={completedTasks}
        setTodoList={setTodoList}
        todoList={todoList}
        item={item}
        newArr={newArr}
      />
      <MoreBtn
        edit={edit}
        setEdit={setEdit}
        id={item.id}
        todoList={todoList}
        setTodoList={setTodoList}
      />
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

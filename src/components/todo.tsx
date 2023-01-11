import React, { useState } from "react";
import { Container, TodoRow } from "../styles/todoStyle";
import { BiCalendar, BiUser } from "react-icons/bi";
import { CheckBox } from "./checkbox/checkbox";
export type List = {
  title: string;
  description: string;
  date: string | undefined;
  AssignedTo?: string;
  completed: boolean;
  id: string;
}[];

interface Props {
  todoList: List;
  setTodoList: React.Dispatch<React.SetStateAction<List>>;
}

export const Todo: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <Container>
      {todoList.map((item) => {
        const { title, description, date, completed, id } = item;
        return (
          <TodoRow key={id}>
            {/*<input type="checkbox" />*/}
            <CheckBox />
            <section className="content">
              <article>
                <div className="title">{title}</div>
                <div className="description">{description}</div>
              </article>
              <footer>
                <div className="date">
                  <BiCalendar className="icon" />
                  {date}
                </div>
                <div className="person-assigned">
                  <BiUser className="icon" />
                  Denis polupan
                </div>
              </footer>
            </section>
          </TodoRow>
        );
      })}
    </Container>
  );
};

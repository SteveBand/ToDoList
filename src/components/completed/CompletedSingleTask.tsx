import React from "react";
import { SingleTaskWrapper } from "./completedStyle";
import { BiUser } from "react-icons/bi";
import { SingleTaskProps } from "./completedTasksTypes";

export const CompletedSingleTask: React.FC<SingleTaskProps> = ({ item }) => {
  return (
    <SingleTaskWrapper key={item.id}>
      <article>
        <h3 className="title">{item.title}</h3>
        <div className="description">
          <p>{item.description}</p>
        </div>
      </article>
      <footer>
        <p className="date">{item.date}</p>
        <p className="person">
          <BiUser className="icon" />
          denis polupan
        </p>
      </footer>
    </SingleTaskWrapper>
  );
};

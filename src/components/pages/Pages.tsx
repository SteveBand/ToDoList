import React, { useEffect, useMemo, useState } from "react";
import { PagesRow } from "./style";
import { Props } from "./types";

export const Pages: React.FC<Props> = ({
  todoList,
  currentPage,
  setCurrentPage,
  setDiffNum,
  list,
  secondList,
}) => {
  const [numOfPages, setNumOfPages] = useState<number>(0);

  const ChangeCurrentPage = (num: number): void => {
    setCurrentPage(num + 1);
  };

  const pagesArr = useMemo(() => {
    list.length <= setDiffNum
      ? setNumOfPages(1)
      : setNumOfPages(Math.ceil(list.length / setDiffNum));
    let btnArray: number[] = [];
    for (let i = 0; i < numOfPages; i++) {
      let num = i;
      btnArray.push(num);
    }
    return btnArray;
  }, [numOfPages, list, secondList]);

  useEffect(() => {}, [currentPage]);

  return (
    <PagesRow>
      {pagesArr.map((item, index) => {
        return (
          <div
            className="btn"
            key={index}
            onClick={() => ChangeCurrentPage(index)}>
            {item <= 5 ? item + 1 : item}
          </div>
        );
      })}
    </PagesRow>
  );
};

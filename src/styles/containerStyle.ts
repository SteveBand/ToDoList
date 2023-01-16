import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  min-width: 500px;
  width: 700px;
  height: 500px;
  background-color: #ffffff;
  box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export const NavConatiner = styled.article`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #f5f5f5;

  article {
    height: inherit;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  div {
    padding: 0 15px 0 15px;
    font-size: 23px;
  }
`;

export const Notifications = styled.div<{ active: boolean }>`
  height: inherit;
  border-bottom: ${(prop) => (prop.active ? "2px solid #6632d1" : null)};
  color: ${(prop) => (prop.active ? "black" : "#8084a5")};
  z-index: 1;
  cursor: pointer;
`;

export const Todo = styled.div<{ active: boolean }>`
  height: inherit;
  border-bottom: ${(prop) => (prop.active ? "2px solid #6632d1" : null)};
  color: ${(prop) => (prop.active ? "black" : "#8084a5")};
  z-index: 1;
  cursor: pointer;
`;

export const Completed = styled.div<{ active: boolean }>`
  height: inherit;
  border-bottom: ${(prop) => (prop.active ? "2px solid #6632d1" : null)};
  color: ${(prop) => (prop.active ? "black" : "#8084a5")};
  z-index: 1;
  cursor: pointer;
`;

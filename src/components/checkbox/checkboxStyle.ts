import styled from "styled-components";

export const Wrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 25px;
  left: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #d8d9e2;
  cursor: pointer;
  background-color: ${(prop) => (prop.active ? "lightskyblue" : null)};
  display: flex;
  justify-content: center;
  align-items: center;

  .check-icon {
    display: ${(prop) => (prop.active ? "block" : "none")};
    font-size: 13px;
  }

  &:hover {
    transition: all 0.6s ease;
    border: 1px solid black;
    scale: 110%;
  }
`;

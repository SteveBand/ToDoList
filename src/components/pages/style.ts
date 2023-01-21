import styled from "styled-components";

export const PagesRow = styled.section`
  position: absolute;
  bottom: 20px;
  left: 63%;
  max-width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    color: white;
    width: 25px;
    height: 25px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #672ee3;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
    &:hover {
      transition: all 0.3s ease;
      scale: 102%;
    }
  }
`;

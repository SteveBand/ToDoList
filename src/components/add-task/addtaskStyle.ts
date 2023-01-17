import styled from "styled-components";

export const AddTaskWrapper = styled.section`
  position: absolute;
  bottom: 0;
  height: 60px;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: #672ee3;
    padding: 10px 20px;
    border: none;
    color: white;
    letter-spacing: 1.5px;
    font-size: 16px;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
      transition: all 0.5s ease;
      box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.41);
      scale: 105%;
    }
  }
`;

export const ModalWrapper = styled.section`
  position: absolute;
  width: 110%;
  height: 200px;
  bottom: -5%;
  left: -5%;
  z-index: 1;
  border-radius: 15px;
  background-color: white;
  box-shadow: inset 0 0 2px gray;

  .inputs {
    display: flex;
    flex-direction: column;
  }

  .title {
    width: 90%;
    border-radius: 15px;
    border: none;
    outline: none;
    height: 40px;
    //color: #C2C4D3;
    color: black;
    opacity: 0.8;
    margin: 10px 0 0 20px;
    font-size: 16px;
    font-weight: 600;
  }

  .description {
    width: 90%;
    border-radius: 10px;
    outline: none;
    border: none;
    padding: 0 0 80px 2px;
    font-size: 14px;
    margin: 0 0 0 20px;
  }

  footer {
    position: relative;
    display: flex;
    flex-direction: row;
  }

  .left {
    display: flex;
    align-items: center;
    position: absolute;
    left: 25px;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 25px;
  }

  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 25px;
    background-color: white;
    outline: none;
    box-shadow: inset 0 0 2px gray;
    border: none;
    border-radius: 15px;
    margin: 0 5px 0 5px;
    color: gray;
    opacity: 0.9;
    font-size: 22px;
    letter-spacing: 1px;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ease;
      scale: 105%;
    }
  }

  .btn-icon {
    font-size: 18px;
    position: relative;
    left: -5px;
  }

  .task-btn {
    padding: 10px 30px;
    background-color: #672ee3;
    outline: none;
    box-shadow: inset 0 0 2px gray;
    border: none;
    border-radius: 15px;
    margin: 0 5px 0 5px;
    color: white;
    opacity: 0.9;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ease;
      scale: 105%;
    }
  }
`;

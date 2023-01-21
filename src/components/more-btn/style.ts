import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  left: 97%;
  font-size: 22px;
  cursor: pointer;

  .more-icon {
    &:hover {
      transition: all 0.6s ease;
      scale: 120%;
    }
  }
`;

export const ModalWrapper = styled.section`
  position: absolute;
  right: -25%;
  min-width: 50px;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.43);
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  background-color: white;
  z-index: 5;
  font-family: "Josefin Sans", sans-serif;
  color: black;
  overflow: hidden;
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30px;
    background-color: white;
    font-size: 14px;
    padding: 0 5px;
    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: rgba(0, 0, 0, 0.06);
      scale: 105%;
      background-color: black;
      color: white;
    }
  }
`;

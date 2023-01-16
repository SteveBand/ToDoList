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
  width: 50px;
  height: 70px;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.43);
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  background-color: white;
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: white;

    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
    }
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  min-height: 60%;
  max-height: 80%;
  margin: auto;
`;

export const TodoRow = styled.section`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px ridge rgba(204, 207, 216, 0.6);

  input{
    position: absolute;
    top: 20px;
    left: 1px;
  }

  .content {
    margin-left: 50px;
  }

  .title {
    margin-bottom: 1px;
    font-size: 18px;
    letter-spacing: 1px;
  }

  .description {
    font-size: 16px;
    opacity: 0.6;
    margin-bottom: 5px;
  }

  footer {
    display: flex;

    .date {
      margin-right: 20px;
      opacity: 0.6;
      display: flex;
      align-items: center;
    }

    .person-assigned {
      opacity: 0.6;
      display: flex;
      align-items: center;
    }

    .icon {
      margin-right: 5px;
    }
  }
`;

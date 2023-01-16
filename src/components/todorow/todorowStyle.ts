import styled from "styled-components";


export const RowWrapper = styled.section`
      width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px ridge rgba(204, 207, 216, 0.6);

  input {
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

  .title-input {
    top: 10px;
    left: 10%;
    outline: none;
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
`
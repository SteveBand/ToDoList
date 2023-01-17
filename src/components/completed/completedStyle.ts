import styled from "styled-components";

export const CompleteWrapper = styled.section`
  width: 100%;
  max-height: 83.6%;
  display: flex;
  flex-wrap: wrap;
`;

export const SingleTaskWrapper = styled.article`
  max-width: 35%;
  min-width: 30%;
  min-height: 60px;
  max-height: 35%;
  box-shadow: inset 0px 0px 8px 2px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin: 9px;
  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 120px;

    h3 {
      margin: 5px 0 15px 0;
      height: 15px;
      letter-spacing: 1px;
    }

    .description {
      width: 90%;
      display: flex;
      justify-content: center;
      overflow-y: scroll;
      height: 80px;
    }
    p {
      margin: 0;
      height: 50px;
      max-width: 200px;
      word-wrap: break-word;
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    height: 20px;
    margin-top: 20px;
    position: relative;
    p {
      margin: 0 0 0 5px;
    }

    .person {
      overflow-wrap: break-word;
      position: absolute;
      right: 5px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.3px;
      display: flex;
      justify-content: center;
    }
    .date {
      position: absolute;
      left: 2px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .icon {
      margin-right: 3px;
    }
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    scale: 110%;
  }
`;

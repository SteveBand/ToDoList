import React from "react";
import "./styles/appStyle.js";
import { AppWrapper } from "./styles/appStyle.js";
import { Container } from "./components/container";

const App: React.FC = () => {
  return (
      <AppWrapper>
        <Container />
      </AppWrapper>
  );
};

export default App;

import React from "react";
import Nav from "./nav";
import Buttons from "./buttons";
import Container from "@material-ui/core/Container";

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Nav />
      <Buttons />
    </Container>
  );
};

export default App;

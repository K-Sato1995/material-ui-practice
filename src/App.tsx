import React from "react";
import Nav from "./nav";
import Buttons from "./buttons";
import CheckBoxes from "./checkBoxes";
import DatePickers from "./datePickers";
import RadioButtons from "./radioButtons";
import Container from "@material-ui/core/Container";

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Nav />
      <Buttons />
      <CheckBoxes />
      <DatePickers />
      <RadioButtons />
    </Container>
  );
};

export default App;

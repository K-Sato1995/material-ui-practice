import React from "react";
import { Button, Typography } from "@material-ui/core";

const index = () => {
  return (
    <div>
      <Typography variant="h4">Buttons</Typography>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
};

export default index;

import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

const index = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Material UI</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default index;

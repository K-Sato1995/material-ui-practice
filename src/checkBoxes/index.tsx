import React from "react";
import { Box, Checkbox, Typography } from "@material-ui/core";

const index = () => {
  return (
    <Box m={2}>
      <Typography variant="h4">Check Boxes</Typography>

      <Checkbox
        defaultChecked
        value="secondary"
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Checkbox
        value="uncontrolled"
        inputProps={{ "aria-label": "uncontrolled-checkbox" }}
      />
      <Checkbox
        disabled
        value="disabled"
        inputProps={{ "aria-label": "disabled checkbox" }}
      />
      <Checkbox
        disabled
        checked
        value="disabled checked"
        inputProps={{ "aria-label": "disabled checked checkbox" }}
      />
      <Checkbox
        defaultChecked
        value="indeterminate"
        indeterminate
        inputProps={{ "aria-label": "indeterminate checkbox" }}
      />
      <Checkbox
        defaultChecked
        color="default"
        value="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
      <Checkbox
        defaultChecked
        size="small"
        value="small"
        inputProps={{ "aria-label": "checkbox with small size" }}
      />
    </Box>
  );
};

export default index;

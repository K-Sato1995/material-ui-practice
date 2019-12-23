import React from "react";
import { Box, Grid, Typography, TextField } from "@material-ui/core";
import styled from "styled-components";

const StyledBox = styled(Box)`
  border: solid 1px ${({ theme }) => theme.borderColor};
  padding: 20px;
`;

const DatePickers: React.FC = () => {
  return (
    <StyledBox m={2}>
      <Typography variant="h4">Date Pickers</Typography>
      <Grid container justify="space-around">
        <form noValidate>
          <TextField
            id="date"
            label="Date Pickers"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
        <form noValidate>
          <TextField
            id="datetime-local"
            label="Date & Time pickers"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
        <form noValidate>
          <TextField
            id="time"
            label="Time Pickers"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
        </form>
      </Grid>
    </StyledBox>
  );
};

export default DatePickers;

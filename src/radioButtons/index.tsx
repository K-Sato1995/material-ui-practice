import React from "react";
import { Box, Radio, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledBox = styled(Box)`
  border: solid 1px ${({ theme }) => theme.borderColor};
  padding: 20px;
`;

const index = () => {
  return (
    <StyledBox m={2}>
      <Typography variant="h4">Radio Buttons</Typography>
      <Radio value="b" inputProps={{ "aria-label": "B" }} />
    </StyledBox>
  );
};

export default index;

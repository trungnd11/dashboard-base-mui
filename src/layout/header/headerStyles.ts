import styled from "styled-components";
import { Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { Color, Height } from "../../components/variable";

export const StyleHeader = styled(Box)`
  background-color: ${lightBlue[900]};
  height: ${Height.h64};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  svg {
    color: ${Color.white};
  }
`;
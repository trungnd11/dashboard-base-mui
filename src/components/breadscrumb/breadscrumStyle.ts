import styled from "styled-components";
import { green } from "@mui/material/colors";
import { Color, Height } from "../variable";
import { Box } from "@mui/material";

export const StyleBreadscrumb: typeof Box = styled(Box)`
  height: ${Height.h40};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: ${Color.subMenu};
  border-bottom: 1px solid ${green[900]};
`;
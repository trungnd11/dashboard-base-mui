import styled from "styled-components";
import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Height } from "../../components/variable";

export const StyleHeader = styled(Box)`
  background-color: ${blueGrey[100]};
  height: ${Height.h64};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
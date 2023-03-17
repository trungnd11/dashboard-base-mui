import { Box } from "@mui/material";
import { lightBlue } from '@mui/material/colors';
import styled from "styled-components";

export const StyleAppContainer = styled(Box)`
  display: grid;
  grid-template-areas: 
  "sider main";
  grid-template-columns: 250px auto;
  min-height: 100vh;

  .app-sider {
    grid-area: sider;
    background-color: ${lightBlue[900]};
  }
  .app-main {
    grid-area: main;
  }
`;
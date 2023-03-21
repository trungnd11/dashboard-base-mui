import { Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import styled from "styled-components";

interface StyleContainerProp {
  toggle?: boolean
}

export const StyleAppContainer = styled(Box) <StyleContainerProp>`
  display: grid;
  grid-template-areas: 
  "sider main";
  grid-template-columns: ${(props) => props.toggle ? "85px auto" : "250px auto"};
  min-height: 100vh;
  transition: all .3s;

  .app-sider {
    grid-area: sider;
    background-color: ${lightBlue[900]};
  }
  .app-main {
    grid-area: main;
  }
`;

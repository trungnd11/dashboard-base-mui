import { Box } from "@mui/material";
import { WidthSiderBar, Height, Color } from "src/components/variable";
import styled from "styled-components";

interface StyleContainerProp {
  toggle?: boolean
}

export const StyleAppContainer = styled(Box) <StyleContainerProp>`
  display: grid;
  grid-template-areas: 
  "sider main";
  grid-template-columns: ${(props) => props.toggle ? `${WidthSiderBar.small} auto` : `${WidthSiderBar.normal} auto`};
  min-height: 100vh;
  transition: all .3s;

  .app-sider {
    grid-area: sider;
    background-color: ${Color.main};
    position: fixed;
    width: ${(props) => props.toggle ? `${WidthSiderBar.small}` : `${WidthSiderBar.normal}`};
    height: 100vh;
    transition: all .3s;
  }
  .app-main {
    grid-area: main;

    .app-header {
      position: fixed;
      width: ${(props) => props.toggle ? `calc(100% - ${WidthSiderBar.small})` : `calc(100% - ${WidthSiderBar.normal})`};
      z-index: 1000;
    }

    .app-content {
      margin-top: calc(${Height.h40} + ${Height.h64});
    }
  }
`;

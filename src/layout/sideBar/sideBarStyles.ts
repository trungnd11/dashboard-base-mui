import styled, { CSSProperties } from "styled-components";
import { Box } from "@mui/material";
import { Height } from "../../components/variable";

export const StyleSideBar = styled(Box)`  
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
     height: ${Height.h64};
  }

  .tree-menu {
    .css-1g86id8-MuiTreeItem-content {
      box-sizing: border-box;

      .MuiTreeItem-label {
        line-height: 2.5;
      }
    }
  }
`;

export const StyleDivider: CSSProperties = {
  margin: "1rem 0"
};

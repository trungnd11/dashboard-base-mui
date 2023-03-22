import styled, { type CSSProperties } from "styled-components";
import { Box } from "@mui/material";
import { TreeView } from "@mui/lab";
import { green, indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Color, Height } from "../../components/variable";

interface StyleSiderBarProps {
  toggle?: boolean
}

export const StyleSideBar = styled(Box) <StyleSiderBarProps>`
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${Height.h64};

    img {
      width: 70%;
    }
  }

  .MuiDivider-root {
    border-color: ${Color.white};
  }

  .tree-menu {
    .MuiTreeItem-content {
      box-sizing: border-box;

      .MuiTreeItem-label {
        color: ${Color.white};
        
        .MuiTypography-root {
          line-height: 2.5;
        }
      }

      svg {
        color: ${Color.white};
      }
    }

    .MuiTreeItem-group {
      margin-left: 0;
    }

    .MuiTreeItem-root[aria-expanded="true"] {
      background-color: ${green[100]};

      .MuiTreeItem-label, svg {
        color: ${Color.black};
      }
    }

    .Mui-selected {
      background-color: ${green[200]} !important;
    }
  }
  .link {
    
  }
`;

export const StyleLink: typeof Link = styled(Link)`
  text-decoration: none;
  color: ${indigo[900]};
`;

export const StyleDivider: CSSProperties = {
  margin: "1rem 0"
};

export const StyleMenuSmall = styled(Box)`
  text-align: center;
  padding: 1rem;

  svg {
    color: ${Color.white};
  }
`;

export const StyleTreeviewSmall = styled(TreeView)`
  .MuiTreeItem-content {
    box-sizing: border-box;

    .MuiTreeItem-label {
      color: ${Color.white};
      
      .MuiTypography-root {
        line-height: 2.5;
      }
    }

    svg {
      color: ${Color.white};
    }
  }

  .MuiTreeItem-group {
      margin-left: 0;
    }

    .Mui-selected {
      background-color: ${green[600]} !important;
    }
`;

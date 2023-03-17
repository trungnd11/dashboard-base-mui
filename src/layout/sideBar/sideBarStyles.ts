import styled, { CSSProperties } from "styled-components";
import { Box } from "@mui/material";
import { indigo } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { Color, Height } from "../../components/variable";

export const StyleSideBar = styled(Box)`  
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${Height.h64};
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


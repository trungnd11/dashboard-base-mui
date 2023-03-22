import styled from "styled-components";
import { Box } from "@mui/material";
import { Color, Height } from "../../components/variable";

export const StyleHeader = styled(Box)`
  background-color: ${Color.main};
  height: ${Height.h64};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  svg {
    color: ${Color.white};
  }
`;

export const PaperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

import { lightBlue } from "@mui/material/colors";
import styled from "styled-components";
import { Color, Height } from "../variable";

export const StyleBreadscrumb = styled.div`
  height: ${Height.h40};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: ${Color.white};
  border-bottom: 1px solid ${lightBlue[900]};
`;
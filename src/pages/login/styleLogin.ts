import styled from "styled-components";
import { lightBlue } from "@mui/material/colors";
import { BorderRadius, Color } from "src/components/variable";

export const StyleLogin = styled.div`
  background-color: ${lightBlue[900]};
  position: relative;
  height: 100vh;

  .form-login {
    position: absolute;
    width: 30%;
    background-color: ${Color.white};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    border-radius: ${BorderRadius.br8};
    display: flex;
    justify-content: center;
    align-items: center;


    .login_title {
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`;

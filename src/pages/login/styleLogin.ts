import styled from "styled-components";
import { BorderRadius, Color } from "src/components/variable";

export const StyleLogin = styled.div`
  background-color: ${Color.main};
  position: relative;
  height: 100vh;

  .form-login {
    position: absolute;
    width: 25%;
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

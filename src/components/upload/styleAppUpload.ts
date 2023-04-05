import styled from "styled-components";

export const StyleAppUpload = styled.div`
  display: flex;
  column-gap: 16px;
  label {
    padding: 2rem;
    border: 1px dashed;
    border-radius: 8px;
  }
  input {
    display: none;
  }

  .MuiBox-root {
    width: 100px;
    border: 1px solid;
    border-radius: 8px;
  }
`;
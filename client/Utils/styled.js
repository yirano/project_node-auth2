import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  div {
    input[type="text"],
    input[type="password"] {
      margin: 20px;
      border: none;
      border-bottom: 1px solid black;
      padding: 4px 14px;
      min-width: 300px;
      font-size: 15px;
      outline: none;
    }
  }
  .login {
    display: flex;
    flex-direction: column;
    max-width: 200px;
  }
`;

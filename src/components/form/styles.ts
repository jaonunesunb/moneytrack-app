import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  margin: 20px auto;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #212529;
  }

  .inputDescription {
    height: 52px;
    width: 100%;
    border-radius: 8px;
    padding: 0 16px;
    border: 1px solid #ccc;
  }

  .divInputValor {
    display: flex;
    gap: 10px;
    width: 100%;

    input,
    select {
      height: 48px;
      width: 100%;
      border-radius: 8px;
      padding: 0 16px;
      border: 1px solid #ccc;
    }
  }

  button {
    padding: 13px 20px;
    width: 100%;
    background: #007bff;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  .error {
    color: red;
    font-size: 14px;
  }

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    width: 90%;
    margin: 20px auto;

    button {
      width: 90%;
    }
  }
`;

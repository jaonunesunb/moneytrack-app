import styled from "styled-components";

export const StyledForm = styled.form`
  width: 363px;
  height: 351px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding-left: 20px;

  div {
    width: 100%;
    display: flex;
    align-content: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    p {
      font-family: "Inter";
      font-weight: 400;
      font-size: 18px;
      color: #212529;
    }
    .inputDescription {
      height: 52px;
      width: 80%;
      border-radius: 8px;
      padding: 0px 16px 0px 16px;
    }
  }
  .divInputValor {
    flex-direction: row;
    width: 90%;
    input {
      height: 48px;
      width: 80%;
      border-radius: 8px;
      padding: 0px 16px 0px 16px;
    }
    select {
      height: 48px;
      width: 100%;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      padding: 0px 16px;
      background: #f8f9fa;
      border: 2px solid #f8f9fa;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  button {
    box-sizing: border-box;
    padding: 13px 20px;
    width: 80%;
    height: 48px;

    background: #007bff;
    border-radius: 8px;
    cursor: pointer;
  }

  /* Media queries */
  @media (max-width: 768px) {
    width: 90%;
    button {
      box-sizing: border-box;
      width: 90%;
      height: 48px;
    }
  }
`;

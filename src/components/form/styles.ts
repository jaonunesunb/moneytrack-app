import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%; /* Agora ocupa 100% da largura disponível */
  max-width: 500px; /* Limita o tamanho máximo */
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 20px;

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
      width: 100%;
      border-radius: 8px;
      padding: 0px 16px;
    }
  }

  .divInputValor {
    display: flex;
    width: 100%;
    gap: 10px;

    input,
    select {
      height: 48px;
      width: 100%; /* Torna os inputs e selects responsivos */
      border-radius: 8px;
      padding: 0px 16px;
    }
  }

  button {
    box-sizing: border-box;
    padding: 13px 20px;
    width: 100%; /* Botão ocupa 100% da largura disponível */
    height: 48px;
    background: #007bff;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
    button {
      width: 90%;
    }
  }
`;

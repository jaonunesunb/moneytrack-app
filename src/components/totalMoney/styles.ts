import styled from "styled-components";

export const StyledMoney = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adicionando sombra para dar mais destaque */
  margin-bottom: 20px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .valorTotal_negative {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: red;
  }

  .valorTotal {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: green;
  }

  .saldoText {
    font-size: 12px;
    color: #6c757d;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding: 15px;
    .saldoText {
      font-size: 10px;
    }
    .valorTotal, .valorTotal_negative {
      font-size: 14px;
    }
  }
`;

export default StyledMoney;
import styled from "styled-components";

export const StyledMoney = styled.div`
  box-sizing: border-box;
  margin-top: 40px;
  width: 363px;
  height: 96px;
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  display: flex;
  padding-left: 20px;

  .valorTotal_negative {
    font-family: "Nunito";
    font-weight: 700;
    font-size: 16px;
    color: red;
  }

  .valorTotal {
    font-family: "Nunito";
    font-weight: 700;
    font-size: 16px;
    color: black;
  }

  /* Media queries */
  @media (max-width: 768px) {
    width: 90%;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .saldoText {
      font-size: small;
    }
  }
`;

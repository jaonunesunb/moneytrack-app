import styled from "styled-components";

export const StyledList = styled.div`
  width: 100%;
  border-radius: 4px;
  padding: 20px;
  margin-top: 20px;
  background-color: #f5f5f5;

  .emptyList {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-family: "Nunito";
    font-weight: 700;
    font-size: 18px;
    color: #212529;
  }

  /* Media queries */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

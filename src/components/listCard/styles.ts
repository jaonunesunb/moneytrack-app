import styled from "styled-components";

export const StyledList = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;

  ul {
    list-style: none; /* Remove marcadores da lista */
    padding-left: 0; /* Remove o padding à esquerda */
    margin: 0; /* Remove margens extras */
  }

  /* Media queries para responsividade */
  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
    flex-direction: column;
    align-items: center;
  }
`;

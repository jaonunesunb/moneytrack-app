import styled from "styled-components";

export const StyledList = styled.div`
  width: 100%;
  max-width: 800px; /* Definindo um limite de largura */
  margin: 0 auto; /* Centraliza o conteúdo */
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombras para destaque */
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* Estilo para lista vazia */
  .emptyList {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #212529;
    text-align: center; /* Alinhamento do texto */
  }

  ul {
    list-style: none; /* Remove marcadores da lista */
    padding-left: 0; /* Remove o padding à esquerda */
  }

  /* Media queries para responsividade */
  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
    flex-direction: column;
    align-items: center;

    /* Ajusta o tamanho da fonte da lista vazia */
    .emptyList {
      font-size: 16px;
    }
  }
`;

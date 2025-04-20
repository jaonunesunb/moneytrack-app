import styled from "styled-components";

export const StyledList = styled.div`
  width: 100%;
  max-width: 800px; /* Limite de largura */
  margin: 0 auto; /* Centraliza o conteúdo */
  border-radius: 12px; /* Bordas arredondadas mais suaves */
  padding: 20px;
  margin-top: 20px;
  background-color: #ffffff; /* Fundo branco para melhor contraste */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombras mais suaves */
  display: flex;
  flex-direction: column;
  gap: 15px;

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
    text-align: center;
    background-color: #f8f9fa; /* Fundo claro para destaque */
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); /* Sombra leve */
  }

  /* Se a lista de transações estiver vazia após o filtro */
  .emptyListFiltered {
    font-size: 16px;
    font-weight: 600;
    color: #495057;
    padding: 20px;
    background-color: #e9ecef;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

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

    /* Ajusta o tamanho da fonte da lista vazia */
    .emptyList, .emptyListFiltered {
      font-size: 16px;
    }
  }
`;

import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  max-width: 320px;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  box-sizing: border-box;
  
  /* Conteúdo do cartão */
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    
    .description {
      font-family: "Nunito", sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: #212529;
    }

    .type {
      font-family: "Nunito", sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: #343a40;
    }
  }

  /* Valor do cartão */
  .value {
    p {
      font-family: "Nunito", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #212529;
    }
  }

  /* Estilos do botão de exclusão */
  .trash-button {
    margin-top: 10px;
    cursor: pointer;
    border: none;
    background: transparent;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 8px;
    
    .description {
      font-size: 16px;
    }

    .type {
      font-size: 12px;
    }

    .value p {
      font-size: 14px;
    }
  }
`;

export const StyledTrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  img {
    height: 16px;
    width: 16px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

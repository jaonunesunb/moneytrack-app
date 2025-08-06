import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: var(--card-bg-color);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
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
      color: var(--text-color);
    }

    .type {
      font-family: "Nunito", sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: var(--text-color);
      opacity: 0.8;
    }
  }

  /* Valor do cartão */
  .value {
    p {
      font-family: "Nunito", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: var(--text-color);
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

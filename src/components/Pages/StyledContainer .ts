import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* Largura máxima do conteúdo */
  margin: 0 auto; /* Centraliza o conteúdo */
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 0;

  /* Estilo do cabeçalho */
  header {
    display: flex;
    justify-content: space-between; /* Alinha logo e botão de relatório */
    align-items: center;
    background-color: #007bff; /* Cor de fundo do header */
    padding: 20px; /* Espaçamento interno do header */
    border-radius: 8px; /* Borda arredondada para o header */
    margin-top: 0; /* Remover qualquer margem no topo */
    width: 100%;
  }

  /* Estilo do divHeader */
  .DivHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; /* Garante que divHeader ocupe 100% do espaço disponível */
    margin: 0; /* Remove qualquer margem extra */
    padding: 0; /* Remove qualquer padding extra */
  }

  /* Estilo da logo */
  .ImgLogo {
    max-width: 250px; /* Definir um tamanho máximo para a logo */
    height: auto;
  }

  /* Estilo do botão */
  .BtnBegin {
    background-color: #ffffff;
    color: #007bff;
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #007bff;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #007bff;
      color: white;
    }
  }

  /* Seção principal do conteúdo */
  section.secBarca {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 20px;

    .DivButtons {
      display: flex; /* Flexbox para botões ficarem em linha */
      gap: 10px; /* Espaço entre os botões */
      flex-direction: row; /* Organiza os botões em linha */
      flex-wrap: wrap; /* Permite que os botões quebrem para a linha seguinte se necessário */
      width: 100%; /* Botões ocupam 100% da largura disponível */
      justify-content: flex-start; /* Alinha os botões à esquerda */
    }

    .divList {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%; /* Lista ocupa 100% da largura disponível */
    }
  }

  .divForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  /* Ajustes responsivos */
  @media (max-width: 768px) {
    section.secBarca {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

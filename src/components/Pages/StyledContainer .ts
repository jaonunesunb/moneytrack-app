import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  max-width: 1200px; /* Ajuste a largura máxima conforme necessário */

  /* Estilo do cabeçalho */
  header {
    display: flex;
    justify-content: space-between; /* Alinha logo e botão de relatório */
    align-items: center;
    background-color: #6a4c9c; /* Tom roxo suave */
    padding: 20px; /* Espaçamento interno do header */
    width: 100%; /* Cabeçalho ocupa toda a largura da tela */
    box-sizing: border-box; /* Certificar que o box-sizing seja aplicado ao header */
  }

  /* Estilo do divHeader */
  .DivHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Estilo da logo */
  .ImgLogo {
    max-width: 200px; /* Ajusta o tamanho máximo da logo */
    height: auto;
    margin-left: 40px;
  }

  /* Estilo do botão */
  .BtnBegin {
    background-color: #ffffff;
    color: #6a4c9c; /* Cor da fonte do botão */
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #6a4c9c; /* Cor da borda do botão */
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #6a4c9c;
      color: white;
    }
  }
    /* Estilo da mensagem "Não há transações" */
  .emptyList {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #212529;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }


  /* Seção principal do conteúdo */
  section.secBarca {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 20px;
    width: 100%; /* Garante que o espaço seja bem distribuído */

    .DivButtons {
      display: flex;
      gap: 10px;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      justify-content: flex-start;
    }

    .divList {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }
  }

  .divForm {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  /* Ajustes responsivos */
  @media (max-width: 768px) {
    section.secBarca {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

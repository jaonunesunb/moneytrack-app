import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f7fa;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }

  header {
    margin: 0; /* Remover margem superior no header */
    padding: 0; /* Garantir que o padding também seja zero */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  h1, h2, h3 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  button {
    font-family: 'Roboto', sans-serif;
    background-color: #0078d4;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #005a99;
  }

  input, select, textarea {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  input:focus, select:focus, textarea:focus {
    border-color: #0078d4;
    box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.3);
  }
`;

export default GlobalStyle;

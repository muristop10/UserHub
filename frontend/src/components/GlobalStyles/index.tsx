
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #6366F1;
    --primary-dark: #4F46E5;

    --success: #22C55E;
    --danger: #EF4444;
    --warning: #F59E0B;

    --background: #EDEFF5;
    --surface: #FFFFFF;

    --text-primary: #0F172A;
    --text-secondary: #64748B;

    --border: #E2E8F0;

    --header-gradient:
      linear-gradient(
        135deg,
        #0F172A,
        #111827,
        #1E1B4B
      );
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background-color: var(--background);

    color: var(--text-primary);

    font-family: "Inter", sans-serif;

    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: var(--text-primary);
  }

  button,
  input,
  textarea,
  select {
    font-family: "Inter", sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Scrollbar */

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #E2E8F0;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
  }

  /* Seleção de texto */

  ::selection {
    background: var(--primary);
    color: white;
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default GlobalStyles;
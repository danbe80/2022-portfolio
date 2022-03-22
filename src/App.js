import React from "react";
import AppRouter from "./Router/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Helmet, HelmetProvider } from "react-helmet-async";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Lato', sans-serif;
  }
`;

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;

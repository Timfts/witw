import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import GlobalStyles from "./styles/base/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/theme";


function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <Router>
        <GlobalStyles />
        <Layout darkmodeToggle={setIsDarkMode} darkmodeState={isDarkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "@emotion/react";
import React from "react";
import Layout from "./components/layouts/layout";
import theme from "./theme";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem", textAlign: "center" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

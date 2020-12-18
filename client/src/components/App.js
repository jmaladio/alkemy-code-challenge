import { createGlobalStyle } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { Home, ABM } from "./pages";

const GlobalStyle = createGlobalStyle`
  header,
  main {
    max-width: 1110px;
    margin: 0 auto;
    padding: 0 32px;
  }
  body {
    font-family: 'Work Sans', sans-serif;
    line-height: 140%;
    font-weight: medium;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/operaciones" component={ABM} />
      </Switch>
    </>
  );
}

export default App;

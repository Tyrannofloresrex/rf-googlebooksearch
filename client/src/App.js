import React from "react"
import Home from "./pages/home"
import Save from "./pages/save"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/save" component={Save} />
        </Switch>
        </StoreProvider>
    </div>
  </Router>
  );
}

export default App;

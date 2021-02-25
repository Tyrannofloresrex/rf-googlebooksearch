import React from "react"
import Home from "./pages/home"
import Save from "./pages/save"
function App() {
  return (
    <Router>
    <div>
      
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/save" component={Save} />
        </Switch>
    
    </div>
  </Router>
  );
}

export default App;

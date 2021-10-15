import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Menu } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

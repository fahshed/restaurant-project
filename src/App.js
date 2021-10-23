import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Pizza, Burger, About, Dessert, Indian } from "./pages";
import { Menu } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/indian">
          <Menu pageBackground="indian-back.jpg" pageContent={<Indian />} />
        </Route>
        <Route exact path="/pizza">
          <Menu pageBackground="pizza-back.jpg" pageContent={<Pizza />} />
        </Route>
        <Route exact path="/burger">
          <Menu pageBackground="burger-back.jpg" pageContent={<Burger />} />
        </Route>
        <Route exact path="/dessert">
          <Menu pageBackground="dessert-back.jpg" pageContent={<Dessert />} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

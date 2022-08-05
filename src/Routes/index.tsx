import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Search from "../pages/search";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search/:query">
        <Search />
      </Route>
    </Switch>
  );
};

export default Routes;

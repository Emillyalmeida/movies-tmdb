import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import PageList from "../pages/lists";
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
      <Route exact path="/lists/:id">
        <PageList />
      </Route>
    </Switch>
  );
};

export default Routes;

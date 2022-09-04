import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import PageList from "../pages/lists";
import Search from "../pages/search";
import Favorites from "../pages/favorites";

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
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </Switch>
  );
};

export default Routes;

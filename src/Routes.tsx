import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/NavBar';
import Catalogo from 'pages/Catalogo';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalogo />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

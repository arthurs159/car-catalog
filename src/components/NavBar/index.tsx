import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { NavLink } from 'react-router-dom';
/*import { Link } from 'react-router-dom'; */

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav" >
      <div className="container-fluid title-container">
          <h4>Carros Top</h4>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscarros-navbar"
          aria-controls="dscarros-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-container1" id="dscarros-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
            <NavLink to="/home" activeClassName="active" exact>Home</NavLink>
            </li>
            <li>
            <NavLink to="/products" activeClassName="active" exact>Catálogo</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
  );
};

export default NavBar;

import React from "react";
import "./Navbar.css";

//components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <nav id="nav">
        <Link to="/">ReactGram</Link>
        <form>
          <BsSearch />
          <input type="text" placeholder="Pesquisar" />
        </form>
        <ul id="nav-links">
          <li>
            <NavLink to="/">
              <BsHouseDoorFill />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <BsFillPersonFill />
              Entrar
            </NavLink>
          </li>
          <li>
            <NavLink to="/register">Cadastrar</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

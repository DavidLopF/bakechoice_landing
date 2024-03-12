import "./Nav.css";
import logo from "../../assets/logo_bakechoice.svg";

const NavSeparator = () => {
  return (
    <svg width="1" height="20" viewBox="0 0 1 20">
      <line x1="0" y1="0" x2="1" y2="20" stroke="#ccc" strokeWidth="1" />
    </svg>
  );
};

const NavLogo = () => {
  return (
    <svg className="svgLogo" xmlns={logo}>
      <image className="imageLogo" href={logo}/>
    </svg>
  );
};

const Nav = () => {
  return (
    <nav className="container-nav">
      <ul className="options">
      <li className="element">
          {" "}
          <NavSeparator />
        </li>
        <li className="element"> Acerca de</li>
        <li className="element">
          {" "}
          <NavSeparator />
        </li>
        <li className="element"> Nuestros productos</li>
        <li className="element">
          {" "}
          <NavSeparator />
        </li>
        <li className="element">¿Quienes somos? </li>
        <li className="element">
          {" "}
          <NavSeparator />
        </li>
      </ul>
      <div className="logo">
        <NavLogo />
      </div>
      <div className="contact">
        <h1>contactenos </h1>
      </div>
    </nav>
  );
};

export default Nav;

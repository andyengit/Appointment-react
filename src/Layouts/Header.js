import "./Header.css";
import { Link } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import SlidebarData from "./SlidebarData";

const Header = () => {
  const auth = useAuth();
  const history = useHistory();

  const [slidebar, setSlidebar] = useState(false);

  const showSidebar = () => {
    setSlidebar(!slidebar);
  }

  const handleLogOut = () => {
    auth.logout();
    history.push("/");

  }

  return (
    <header>
      <div className="navbar">
        <Link to="#" className="menu-btn">
          <box-icon name='menu' color="#2980b9" size="lg" onClick={showSidebar} ></box-icon>
        </Link>
        <Link to={auth.isLogged() ? "/dashboard" : "/"}>
          <div className="Logo">
            <box-icon name='clinic' color="#2980b9" size="md"></box-icon>
            <span>MEDTIME</span>
          </div>
        </Link>
      </div>
      <nav className={slidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <box-icon name='x' color="#2980b9" size="lg" onClick={showSidebar} />
            </Link>
          </li>
          {SlidebarData().map((item, index) => {
            return (
              <li key={index} className="nav-text" onClick={showSidebar}>
                <Link to={item.path} className="menu-bars">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>)
          })

          }
          {auth.isLogged() && (
            <li className="nav-text" onClick={() => {
              handleLogOut();
              showSidebar()
            }}>
              <Link to="#" className="menu-bars">
                <box-icon color="#2980b9" name='log-out'></box-icon>
                <span>LogOut</span>
              </Link>
            </li>)
          }
        </ul>
      </nav>


    </header>
  )






  /* return (
    <header className="header-main">
      <Link to={auth.isLogged() ? "/dashboard" : "/"}>
        <div className="logo">
          <box-icon type='solid' name='registered' color="#2e86c1"></box-icon>
          <h3>MedTime</h3>
        </div>
      </Link>
      {
        !auth.isLogged() ?
          (<div className="access">
            <ButtonLink to="/LogIn" title="LogIn" />
            <ButtonLink to="/SignIn" title="SignIn" />
          </div>)
          : (<div className="access">
            <button onClick={handleLogOut}>SALIR</button>
          </div>)
      }
    </header>
  ) */
}

export default Header

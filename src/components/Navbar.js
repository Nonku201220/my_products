import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import './Products.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const menuItems = [

  /*   {
      title: "Login",
      path: "/login",
      icon: <FaIcons.FaUser />,
      cName: "nav-text",
    }, */

    {
      title: "Home",
      path: "/",
      icon: <FaIcons.FaHome />,
      cName: "nav-text",
    },
    {
      title: "Products",
      path: "/products",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text",
    },



    {
      title: "About",
      path: "/about",
      icon: <AiIcons.AiFillContacts />,
      cName: "nav-text",
    },


  ];
  return (
    <header>
      <div className="Navbar">
        <Link to="#" className="menu-bars" onClick={showSidebar}>
          <FaIcons.FaBars />
        </Link>
      </div>
      <h3 className="Navbar-title" style={{fontSize: '24px', marginLeft: '15rem', fontFamily: 'fantasy', color: 'violet'}}>
        <b>Nonku's Tech & Beauty </b>
      </h3>
      <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {menuItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
  
}
 
export default Navbar;
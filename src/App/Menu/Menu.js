import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Menu.css"


const Menu = ({}) =>
    {
    return (
        <div className="nav">
            <input className="nav__check" type="checkbox" id="showmenu"/>
            <label className="nav__showmenu" htmlFor="showmenu">&#9776;</label>
            <label className="nav__back" htmlFor="showmenu"></label>
            <ul className="menu">
              <Link to="/">
                <li className="nav_button">
                  Home
                </li>
              </Link>
              <Link to="/AboutMenu">
                <li className="nav_button">
                About
              </li>
              </Link>
              <Link to="/TopRated">
                <li className="nav_button">
                  Top rated
              </li>
              </Link>
            </ul>
        </div>

        
    )
    }

 export default Menu
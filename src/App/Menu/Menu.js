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
              <Link to="/AboutMenu">
              <li>
                About
              </li>
              </Link>
              <li><a className="menu__item">
                      <div className="menu__item">Choose category</div>
                        <select
                          // id="category"
                          // name="category"
                          // value={category}
                          // onChange={handleChange}
                          >
                          <option>all</option>
                          <option>Dogs</option>
                          <option>Museums</option>
                          <option>Other</option>
                          <option>Castles</option>

                        </select>
              </a></li>
              <li>
                <Link to="/TopRated">
                  Top rated
                </Link>
              </li>
            </ul>
        </div>

        
    )
    }

 export default Menu
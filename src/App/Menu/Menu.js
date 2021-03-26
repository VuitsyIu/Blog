import React from "react"

import "./Menu.css"

const Menu = ({}) =>
    {
    return (
        <div className="nav">
            <input className="nav__check" type="checkbox" id="showmenu"/>
            <label className="nav__showmenu" htmlFor="showmenu">&#9776;</label>
            <label className="nav__back" htmlFor="showmenu"></label>
            <ul className="menu">
              <li><a className="menu__item" href="#">About</a></li>
              <li><a className="menu__item" href="#">Filter</a>
                <input className="menu__check" type="checkbox" id="menu2"/>
                <label className="menu__showsub" htmlFor="menu2">&#9660;</label>
                <ul className="menu__submenu">
                  <li><a className="menu__item" href="#">Dogs</a></li>
                  <li><a className="menu__item" href="#">Castle</a></li>
                  <li><a className="menu__item" href="#">Other</a></li>
                </ul>
              </li>
              <li><a className="menu__item" href="#">Contacts</a></li>
            </ul>
        </div>
    )
    }

 export default Menu
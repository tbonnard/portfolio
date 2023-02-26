import React from "react";

import formation from "../../files/nav/formation.png"
import techno from "../../files/nav/techno.png"
import portfolio from "../../files/nav/portfolio.png"
import contact from "../../files/nav/contact.png"
import github from "../../files/nav/github.png"
import avatar from "../../files/avatar.svg"

import Weather from "../meteo/Weather";

const Header = () => {

    return (
        <ul>
            <div>
                <li className="avatar"><a href="#home"><img className="navItemIcon" src={avatar} title='avatar' alt='avatar'/></a></li>
            </div>
            <div className="menu">
                <li className="navItemIconContainer"><a href="#techno"><img className="navItemIcon" src={techno} title='Technologies' alt='Technologies'/></a></li>
                <li className="navItemIconContainer"><a href="#formation"><img className="navItemIcon" src={formation} title='Formation' alt='Formation'/></a></li>
                <li className="navItemIconContainer"><a href="#portfolio"><img className="navItemIcon" src={portfolio} title='Portfolio' alt='Portfolio'/></a></li>
                <li className="navItemIconContainer"><a href="#contact"><img className="navItemIcon" src={contact} title='contact' alt='contact'/></a></li>
                {/* <li className="navItemIconContainer"><a href="https://github.com/tbonnard" target="_blank" style={{backgroundColor: "black"}}><img className="navItemIcon" src={github} title='github' alt='github'/></a></li> */}
            </div>
            <div>
                <Weather />
            </div>
        </ul>
      

    )
}

export default Header
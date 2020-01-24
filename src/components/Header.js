import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import RpbProf from "../assets/images/rpb_Profile.jpg";

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img src={RpbProf} className="logo" alt="profile of RPB"/></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header

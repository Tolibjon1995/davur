import React from 'react';
import {  Link } from 'react-router-dom'
const NavHeader = (props) => {
  
    return (
        
            <div className="nav-header">
                <Link to="/" className="brand-logo">
                    <img className="logo-abbr" src="./images/logo.png" alt />
                    <img className="logo-compact" src="/images/logo-text.png" alt />
                    <img className="brand-title" src="/images/logo-text.png" alt />
                </Link>
                <div className="nav-control">
                    <div className={`hamburger ${props.stet === false ? 'is-active' :''}`} onClick={props.och}>
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>

        
    );
};

export default NavHeader;
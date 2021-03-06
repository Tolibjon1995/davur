import React from 'react';
import {  Link } from 'react-router-dom'
const NavHeader = (props) => {
  
    return (
        
            <div className={`nav-header nav-hed-fixsed ${props.stet === false? 'eniga':''}`}>
                <Link to="/" className="brand-logo">
                    <img className={`logo-abbr ${props.stet === false? 'log-new': ''}`} src="./images/logo.png" alt />
                    <img className="logo-compact " src="/images/logo-text.png" alt />
                    <img className={`brand-title  icon-log ${props.stet === false? 'anim': ''}`} src="/images/logo-text.png" alt />
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
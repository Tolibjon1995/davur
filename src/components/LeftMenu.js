import React from 'react';
import Links from './Links';

const LeftMenu = (props) => {
    return (

        <div className={`deznav qot ${props.stet === false ? 'eniga' : ''}`}>
            <Links />
            <Links />
            <Links />
            <Links />
            <Links />
            <Links />
            <Links />
            <Links />
            <div className={`deznav-scroll ${props.stet === false ? 'd-none' : ''}`}>
                <div className="add-menu-sidebar">
                    <img src="images/icon1.png" alt />
                    <p>Organize your menus through button bellow</p>
                    <a href="javascript:void(0);" className="btn btn-primary btn-block light">+ Add Menus</a>
                </div>
                <div className="copyright">
                    <p><strong>Davur - Restaurant Admin Dashboard</strong> © 2020 All Rights Reserved</p>
                    <p>Made with <i className="fa fa-heart" /> by DexignZone</p>
                </div>
            </div>
        </div>

    );
};

export default LeftMenu;
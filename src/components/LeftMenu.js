import React, { useState } from 'react';
import Links from './links/Links';
import App from './links/App';
import Boot from './links/Boot';
import Chart from './links/Chart';
import Formc from './links/Formc';
import Pagec from './links/Pagec';
import Plugn from './links/Plugn';
import Table from './links/Table';
import Widjet from './pages/Widjet';
import { Link } from 'react-router-dom';



const LeftMenu = (props) => {

    const [open, setopen] = useState(false)
    const toggle = () => setopen(!open)



    return (


        <div>

            <div className={`deznav qot left-fixsed ${props.stet === false ? 'eniga ' : ''}`}>
                <Links och={props.stet} className='heh' />
                <App och={props.stet} className='heh' />
                <Chart och={props.stet} className='heh' />
                <Boot och={props.stet} className='heh' />
                <Plugn och={props.stet} className='heh' />
                <Widjet och={props.stet} className='heh' />
                <Formc och={props.stet} className='heh' />
                <Table och={props.stet} className='heh' />
                <Pagec och={props.stet} className='heh' />
                <div className={`deznav-scroll ${props.stet === false ? 'd-none' : ''}`}>
                    <div className="add-menu-sidebar">
                        <img src="images/icon1.png" alt />
                        <p>Organize your menus through button bellow</p>
                        <Link to="/dashboard" className="btn btn-primary btn-block light">+ Add Menus</Link>
                    </div>
                    <div className="copyright">
                        <p><strong>Davur - Restaurant Admin Dashboard</strong> © 2021 All Rights Reserved</p>
                        <p>Made with <i className="fa fa-heart" /> by NamCoders</p>
                    </div>
                    <div className="ps__rail-y">
                        <div className="ps__thumb-y"></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LeftMenu;
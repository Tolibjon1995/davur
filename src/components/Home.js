import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Analitics from './pages/Dashboard/Analitics.js'
import Rewiew from './pages/Dashboard/Rewiew'
import Header from './Header';
import LeftMenu from './LeftMenu';
import NavHeader from './NavHeader';



const Home = () => {


    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



    return (
        <div>
            <Router>
                <Header />
                <NavHeader och={toggle} stet={isOpen} />
                <LeftMenu stet={isOpen} />
                <Switch>
                    <div className="content-body">
                        <div className="container-fluid">
                            <div>                                
                                <Route path='/' exact components={() => { <Dashboard /> }} />
                                <Route path='/analitics' exact components={Analitics} />
                                <Route path='/review' exact components={Rewiew} />
                            </div>
                        </div>
                    </div>
                </Switch>
            </Router>


        </div>
    );
};

export default Home;
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Analitics from './pages/Dashboard/Analitics.js'
import Rewiew from './pages/Dashboard/Rewiew'
import Header from './Header';
import LeftMenu from './LeftMenu';
import NavHeader from './NavHeader';
import Order from './pages/Dashboard/Order'
import OrderList from './pages/Dashboard/OrderList'
import GeneralCustomers from './pages/Dashboard/GeneralCustomers'
import Profile from './pages/Apps/Profile'
import Calendar from './pages/Apps/Calendar'
import Compose from './pages/Apps/email/Compose'
import Inbox from './pages/Apps/email/Inbox'
import Read from './pages/Apps/email/Read'
import ProductDetails from './pages/Apps/shop/ProductDetails'
import ProductList from './pages/Apps/shop/ProductList'
import ProductGrid from './pages/Apps/shop/ProductGrid'
import Orders from './pages/Apps/shop/Orders'
import Customert from './pages/Apps/shop/Customert'
import Invoice from './pages/Apps/shop/Invoice'
import CheskOut from './pages/Apps/shop/CheskOut'
import Chartist from './pages/charts/Chartist'
import ChartJs from './pages/charts/ChartJs'
import Float from './pages/charts/Float'
import Morris from './pages/charts/Morris'
import Peitiy from './pages/charts/Peitiy'
import Sparkline from './pages/charts/Sparkline'
import LeftDrop from './dropdownlar/LeftDrop'


const Home = () => {

    const [ochi, setOch] = useState(false)
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const openDrop = () => setOch(!ochi)


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



    return (
        <div>
            <BrowserRouter>
                
                <LeftDrop och={ochi} fun={openDrop} />
                <Header stet={isOpen} drop={openDrop} />
                <NavHeader och={toggle} stet={isOpen} />
                <LeftMenu stet={isOpen} />

                <Switch>
                    <div className={`content-body con-top ${isOpen === false ? 'con-now' : ''}`}>
                        <div className="container-fluid">
                            <div>
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/analitics' exact component={Analitics} />
                                <Route path='/review' exact component={Rewiew} />
                                <Route path='/order' exact component={Order} />
                                <Route path='/order-list' exact component={OrderList} />
                                <Route path='/general-customers' exact component={GeneralCustomers} />
                                <Route path='/profile' exact component={Profile}/>
                                <Route path='/calendar' exact component={Calendar}/>
                                <Route path='/compose' exact component={Compose} />
                                <Route path='/inbox' exact component={Inbox} />
                                <Route path='/Read' exact component={Read} />
                                <Route path='/produkt-grid' exact component={ProductGrid} />
                                <Route path='/product-list' exact component={ProductList} />
                                <Route path='/product-details' exact component={ProductDetails} />
                                <Route path='/checkout' exact component={CheskOut} />
                                <Route path='/customers' exact component={Customert} />
                                <Route path='/invoice' exact component={Invoice} />
                                <Route path='/order' exact component={Orders} />
                                <Route path='/chartist' exact component={Chartist} />
                                <Route path='/chartjs' exact component={ChartJs} />
                                <Route path='/float' exact component={Float} />
                                <Route path='/morris' exact component={Morris} />
                                <Route path='/peitiy' exact component={Peitiy} />
                                <Route path='/sparkline' exact component={Sparkline} />
                            </div>
                        </div>
                    </div>
                </Switch>
            </BrowserRouter>


        </div>
    );
};

export default Home;
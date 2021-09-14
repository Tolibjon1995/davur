import React, { useState, useEffect } from 'react';
import {Switch, Route, Link}from 'react-router-dom'
const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div>
            <Switch>
            <Route path='/' exact components={} />
            </Switch>
        </div>
    );
};

export default Home;
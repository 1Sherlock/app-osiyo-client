/**
 * Created by Sherlock on 10.06.2021.
 */

import React from 'react';
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Scroll from "../components/Scroll";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Content/>
            <Scroll/>
        </div>
    );
};

export default Home;
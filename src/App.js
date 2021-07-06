import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Scroll from "./components/Scroll";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Five from "./pages/Five";
import Six from "./pages/Six";
import Seven from "./pages/Seven";
import Eight from "./pages/Eight";
import Main from "./pages/Main";
import MediaQuery from 'react-responsive'
import MainMobile from "./pages/MainMobile";
import { useMediaQuery } from 'react-responsive'
import NewMainMobile from "./components/new/mobile/NewMainMobile";
import NewWelcomeMobile from "./components/new/mobile/NewWelcomeMobile";
import NewAboutUsOne from "./components/new/mobile/NewAboutUsOne";

import NewAboutUsTwo from "./components/new/mobile/NewAboutUsTwo";

import NewHistoryMobile from "./components/new/mobile/NewHistoryMobile";
import LocationThreeMobile from "./components/new/mobile/LocationThreeMobile";
import NewAboutUsTwoPairMobile from "./components/new/mobile/NewAboutUsTwoPairMobile";
import NewContactsMobileOne from "./components/new/mobile/NewContactsMobileOne";
import NewContactMobileTwo from "./components/new/mobile/NewContactMobileTwo";


function App() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 576px)'
    })
    return (
        <BrowserRouter>
            <Switch>
                {isDesktopOrLaptop ?
                    <Route path="/" exact component={Main}/> :
                    <>
                        <Route path="/" exact component={NewMainMobile}/>
                        <Route path="/welcome" exact component={NewWelcomeMobile}/>

                        <Route path="/about-us-one" exact component={NewAboutUsOne}/>
                        <Route path="/about-us-two" exact component={NewAboutUsTwo}/>

                        <Route path="/about" exact component={NewAboutUsOne}/>
                        <Route path="/history" exact component={NewHistoryMobile}/>

                        <Route path="/location-three" exact component={LocationThreeMobile}/>
                        <Route path="/about-us-three" exact component={NewAboutUsTwoPairMobile}/>
                        <Route path="/contacts-mobile-one" exact component={NewContactsMobileOne}/>
                        <Route path="/contacts-mobile-two" exact component={NewContactMobileTwo}/>


                    </>
                }

                <Route path="/second" exact component={Second}/>
                <Route path="/third" exact component={Third}/>
                <Route path="/fourth" exact component={Fourth}/>
                <Route path="/five" exact component={Five}/>
                <Route path="/six" exact component={Six}/>
                <Route path="/seven" exact component={Seven}/>
                <Route path="/eight" exact component={Eight}/>
                <Route path="/main" exact component={Main}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

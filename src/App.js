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

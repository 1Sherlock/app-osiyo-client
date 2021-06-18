/**
 * Created by Sherlock on 11.06.2021.
 */

import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import ContentSecond from "../components/ContentSecond";
import ContentThird from "../components/ContentThird";
import ContentFourth from "../components/ContentFourth";
import ContentFive from "../components/ContentFive";
import ContentSix from "../components/ContentSix";
import ContentSeven from "../components/ContentSeven";
import ContentEight from "../components/ContentEight";
import Aos from "aos/dist/aos";
import ContentNine from "../components/ContentNine";
import ContentTen from "../components/ContentTen";
import ContentEleven from "../components/ContentEleven";
import ContentTwelve from "../components/ContentTwelve";
import ContentThirdTeen from "../components/ContentThirdTeen";
import ContentFourTeen from "../components/ContentFourTeen";
import ContentFiveTeen from "../components/ContentFiveTeen";
import ContentSixTeen from "../components/ContentSixTeen";
import ContentSevenTeen from "../components/ContentSevenTeen";
import ContentEightTeen from "../components/ContentEightTeen";
import Scroll from "../components/Scroll";

const Main = () => {
    const [scrollWidth, setScrollWidth] = useState(0);
    const [count, setCount] = useState(false);
    const [state, setState] = useState(false)
    const [scrollText, setScrollText] = useState(<><span className="icon icon-mouse"/> скролл</>);

    useEffect(() => {
        let el = document.getElementById("main");
        Aos.init();
        setCount(el.clientWidth);
    }, [])


    const scroll = (event) => {

        let el = document.getElementById("main");
        setCount(el.clientWidth);
        if (event.deltaY < 0) {
            if (Math.abs(scrollWidth) < 100) {
                setScrollWidth(0);
            } else {
                setScrollWidth(scrollWidth + 100);
            }
            console.log('scrolling up');
        } else if (event.deltaY > 0) {
            if ((el.scrollWidth - el.clientWidth) - (Math.abs(scrollWidth)) < 100) {
                setScrollWidth(0 - (el.scrollWidth - el.clientWidth));
            } else {
                setScrollWidth(scrollWidth - 100)
            }
            console.log('scrolling down');

        }
    };

    const setScroll = (value) => {
        let el = document.getElementById("main")
        setScrollWidth(0 - value * el.clientWidth);
    }

    return (
        <div className="main" onWheel={scroll}>
            <NavBar scroll={scrollWidth} count={count} setScroll={setScroll}/>
            {Math.abs(scrollWidth) > count ?
                <div className="contactBlok">
                    <div className={`contactBlokBody ${state ? "active" : ""}`}>
                        <a href="https://t.me/FUTBOLTV" className="phone_btn" target="_blank">
                            <span className="icon icon-telegram"/>
                        </a>
                        <a href="mailto:bekzodrakhmonov1995@gmail.com" className="phone_btn">
                            <span className="icon icon-message"/>
                        </a>
                        <a href="tel:+998990896095" className="phone_btn">
                            <span className="icon icon-tel"/>
                        </a>
                        <a href="#" className="phone_btn" onClick={() => setState(false)}>
                            <span className="icon icon-arrow"/>
                        </a>
                    </div>
                    <button className={`phone_btn ${state ? "hide" : "active"}`} onClick={() => setState(true)}>
                        <span className="icon icon-tel"/>
                    </button>
                </div> : ""
            }
            <div id="main" className="section" style={{transform: `translateX(${scrollWidth}px)`}}>
                <Content/>
                <ContentSecond/>
                <ContentThird/>
                <ContentFourth/>
                <ContentFive/>
                <ContentSix/>
                <ContentEight/>
                <ContentSeven/>
                <ContentNine/>
                <ContentTen/>
                <ContentTwelve/>
                <ContentEleven/>
                <ContentThirdTeen/>
                <ContentFourTeen/>
                <ContentFiveTeen/>
                <ContentSixTeen/>
                <ContentSevenTeen/>
                {/*<ContentEightTeen/>*/}
            </div>
            <Scroll scroll={scrollWidth} count={count} scrollText={scrollText}/>

        </div>
    );
};

export default Main;
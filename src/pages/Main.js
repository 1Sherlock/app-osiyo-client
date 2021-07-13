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
import ContentN from "../components/ContentN";
import NewContentOne from "../components/new/NewContentOne";
import NewNavbar from "../components/new/NewNavbar";
import NewContentTwo from "../components/new/NewContentTwo";
import NewContentThree from "../components/new/NewContentThree";
import NewContentFive from "../components/new/NewContentFive";
import NewContentEight from "../components/new/NewContentEight";
import NewContentNine from "../components/new/NewContentNine";
import NewContentEleven from "../components/new/NewContentEleven";
import NewContentTwelve from "../components/new/NewContentTwelve";
import NewContentFour from "../components/new/NewContentFour";
import NewContentSix from "../components/new/NewContentSix";
import NewContentSeven from "../components/new/NewContentSeven";
import NewContentThirty from "../components/new/NewContentThirty";
import NewFooter from "../components/NewFooter";

const Main = () => {
    const [scrollWidth, setScrollWidth] = useState(0);
    const [count, setCount] = useState(false);
    const [state, setState] = useState(false)
    const [scrollText, setScrollText] = useState(<><span className="icon icon-mouse"/> скролл</>);
    const [number, setNumber] = useState(0);
    let scrollTimer;
    const [screenX, setScreenX] = useState(0);
    const [screenY, setScreenY] = useState(0);


    useEffect(() => {
        let el = document.getElementById("main");
        Aos.init();
        setCount(el.clientWidth);
        // if (Math.abs(Math.round(Math.abs(scrollWidth) / count) * count - Math.abs(scrollWidth)) < 200){
        //     setScrollWidth(-Math.round(Math.abs(scrollWidth) / count) * count);
        // }
        const scrollElements = document.querySelectorAll(".animate-text");
        const scrollImages = document.querySelectorAll(".img-wrap");
        scrollElements.forEach((el) => {
            if (el.getBoundingClientRect().left <= count) {
                el.classList.add("animate-text-active");
            }
        });
        scrollImages.forEach((el) => {
            if (el.getBoundingClientRect().left <= count - 100) {
                el.classList.add("active")
            }
        })
    }, [scrollWidth])


    const scroll = (event) => {
        // clearInterval(scrollTimer);

        // scrollTimer = setTimeout(() => {
        //     if (number >=5){
        //         setScrollWidth(-Math.round(Math.abs(scrollWidth) / count) * count);
        //         setNumber(0);
        //         const scrollElements = document.querySelectorAll(".animate-text");
        //         const scrollImages = document.querySelectorAll(".img-wrap");
        //         scrollElements.forEach((el) => {
        //             if (el.getBoundingClientRect().left <= count){
        //                 el.classList.add("animate-text-active");
        //             }
        //         });
        //         scrollImages.forEach((el) => {
        //             if (el.getBoundingClientRect().left <= count - 100){
        //                 el.classList.add("active")
        //             }
        //         })
        //     }
        //     clearInterval(scrollTimer)
        // }, 500);
        // setTimeout(() => {
        //     const scrollElements = document.querySelectorAll(".animate-text");
        //     const scrollImages = document.querySelectorAll(".img-wrap");
        //     scrollElements.forEach((el) => {
        //         if (el.getBoundingClientRect().left <= count){
        //             el.classList.add("animate-text-active");
        //         }
        //     });
        //     scrollImages.forEach((el) => {
        //         if (el.getBoundingClientRect().left <= count - 100){
        //             el.classList.add("active")
        //         }
        //     })
        // }, 2000)
        // setNumber(number + 1);

        if (number === 0) {
            let el = document.getElementById("main");
            setCount(el.clientWidth);
            // const value = el.clientWidth / 20;
            // const value = el.clientWidth;
            clearTimeout(scrollTimer);
            const value = 200;
            console.log(scrollTimer)
            setNumber(1);
            if (event.deltaY < 0 || event.deltaX < 0) {
                // if (Math.abs(scrollWidth) < value) {
                //     setScrollWidth(0);
                // } else {
                //     setScrollWidth(scrollWidth + value);
                // }
                if (scrollWidth < 0) {
                    setScrollWidth(scrollWidth + count);
                }

                console.log('scrolling up');
                scrollTimer = setTimeout(() => {
                    setNumber(0);
                }, 1500);


            } else if (event.deltaY > 0 || event.deltaX > 0) {
                // if ((el.scrollWidth - el.clientWidth) - (Math.abs(scrollWidth)) < value) {
                //     setScrollWidth(0 - (el.scrollWidth - el.clientWidth));
                // } else {
                //     setScrollWidth(scrollWidth - value);
                // }

                if (scrollWidth > (-10 * count)) {
                    setScrollWidth(scrollWidth - count);
                }

                scrollTimer = setTimeout(() => {
                    setNumber(0);
                }, 1500)

            }


        }
        const scrollElements = document.querySelectorAll(".animate-text");
        const scrollImages = document.querySelectorAll(".img-wrap");
        scrollElements.forEach((el) => {
            if (el.getBoundingClientRect().left <= count * 1.9) {
                el.classList.add("animate-text-active");
            }
        });
        scrollImages.forEach((el) => {
            if (el.getBoundingClientRect().left <= count - 100) {
                el.classList.add("active")
            }
        })

    };

    const setScroll = (value) => {
        let el = document.getElementById("main")
        setScrollWidth(0 - value * el.clientWidth);
    }

    const touch = (e) => {
        // console.log(e);
    }

    const touchStart = (e) => {
        console.log("start", e);
        setScreenX(e.touches[0].clientX);
        setScreenY(e.touches[0].clientY);
    }

    const touchEnd = (e) => {
        console.log("end", e);
        let tempX = e.changedTouches[0].clientX;
        let tempY = e.changedTouches[0].clientY;
        if (screenX - tempX > 150 || screenY - tempY > 150) {
            if (scrollWidth > (-10 * count)) {
                setScrollWidth(scrollWidth - count);
            }
        }
        if (screenX - tempX < -150 || screenY - tempY < -150) {
            if (scrollWidth < 0) {
                setScrollWidth(scrollWidth + count);
            }
        }
        const scrollElements = document.querySelectorAll(".animate-text");
        const scrollImages = document.querySelectorAll(".img-wrap");
        scrollElements.forEach((el) => {
            if (el.getBoundingClientRect().left <= count * 1.9) {
                el.classList.add("animate-text-active");
            }
        });
        scrollImages.forEach((el) => {
            if (el.getBoundingClientRect().left <= count - 100) {
                el.classList.add("active")
            }
        })
    }

    const touchCancel = (e) => {
        console.log("cancel", e);
    }
    return (
        <div className="main" onWheel={scroll}>
            {/*<NavBar scroll={scrollWidth} count={count} setScroll={setScroll}/>*/}
            {/*{Math.abs(scrollWidth) > count ?*/}
            {/*    <div className="contactBlok">*/}
            {/*        <div className={`contactBlokBody ${state ? "active" : ""}`}>*/}
            {/*            <a href="https://t.me/FUTBOLTV" className="phone_btn" target="_blank">*/}
            {/*                <span className="icon icon-telegram"/>*/}
            {/*            </a>*/}
            {/*            <a href="mailto:bekzodrakhmonov1995@gmail.com" className="phone_btn">*/}
            {/*                <span className="icon icon-message"/>*/}
            {/*            </a>*/}
            {/*            <a href="tel:+998990896095" className="phone_btn">*/}
            {/*                <span className="icon icon-tel"/>*/}
            {/*            </a>*/}
            {/*            <a href="#" className="phone_btn" onClick={() => setState(false)}>*/}
            {/*                <span className="icon icon-arrow"/>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <button className={`phone_btn ${state ? "hide" : "active"}`} onClick={() => setState(true)}>*/}
            {/*            <span className="icon icon-tel"/>*/}
            {/*        </button>*/}
            {/*    </div> : ""*/}
            {/*}*/}
            <NewNavbar scroll={scrollWidth} count={count} setScroll={setScroll}/>
            <div id="main" className="section" style={{transform: `translateX(${scrollWidth}px)`}}
                 onTouchStart={touchStart} onTouchCancel={touchCancel} onTouchEnd={touchEnd} onTouchMove={touch}>
                {/*<Content/>*/}
                {/*<ContentSecond/>*/}
                {/*<ContentThird/>*/}
                {/*<ContentFourth scrollWidth={scrollWidth}/>*/}
                {/*<ContentEleven/>*/}
                {/*<ContentFive/>*/}
                {/*<ContentN scrollWidth={scrollWidth}/>*/}
                {/*<ContentSix/>*/}
                {/*<ContentEight/>*/}
                {/*<ContentSeven/>*/}
                {/*<ContentNine/>*/}
                {/*<ContentTen scrollWidth={scrollWidth}/>*/}
                {/*<ContentTwelve/>*/}
                {/*<ContentThirdTeen/>*/}
                {/*<ContentSixTeen/>*/}
                {/*<ContentFiveTeen/>*/}
                {/*<ContentFourTeen scrollWidth={scrollWidth}/>*/}
                {/*<ContentSevenTeen/>*/}
                {/*<ContentEightTeen/>*/}

                <NewContentOne/>
                <NewContentTwo/>
                <NewContentThree/>
                <NewContentFour/>
                <NewContentFive/>
                <NewContentSix/>
                {/*<NewContentSeven/>*/}
                <NewContentEight/>
                <NewContentNine/>
                <NewContentEleven/>
                <NewContentTwelve/>
                <NewContentThirty/>
            </div>
            {/*<Scroll scroll={scrollWidth} count={count} scrollText={scrollText}/>*/}
            {scrollWidth <= -count * 0.7 ? <NewFooter scroll={scrollWidth} count={count} setScroll={setScroll}/> : ""}

        </div>
    );
};

export default Main;